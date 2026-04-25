// E2E smoke suite: drives the production bundle in a real browser via the
// HA-stub fixture. These four tests are the v0.5 contract - if they ever go
// red, something user-visible is broken on the next reload of an HA
// dashboard.
import { test, expect } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STUB_URL = `file://${path.resolve(__dirname, 'fixtures/ha-stub.html')}`;

// Reach into the nested shadow trees: superpro-shutter-card → superpro-shutter
// (the per-entity widget). Returns the inner shutter element handle.
const getShutterShadow = `
  (() => {
    const card = window.__card;
    if (!card || !card.shadowRoot) throw new Error('card not ready');
    const shutter = card.shadowRoot.querySelector('superpro-shutter');
    if (!shutter) throw new Error('superpro-shutter not found');
    return shutter;
  })()
`;

test.beforeEach(async ({ page }) => {
  page.on('pageerror', (err) => {
    throw new Error(`Page error: ${err.message}`);
  });
  await page.goto(STUB_URL);
  await page.waitForFunction(() => window.__cardReady === true, { timeout: 10_000 });
});

test('card renders without throwing', async ({ page }) => {
  // If the card had thrown during setConfig or first render, __cardReady
  // would never have been set and beforeEach would have timed out. Belt-
  // and-braces: assert the element actually has a shadow root and that
  // the inner per-entity shutter element rendered.
  const result = await page.evaluate(() => {
    const card = window.__card;
    const hasShadow = Boolean(card && card.shadowRoot);
    const shutter = hasShadow ? card.shadowRoot.querySelector('superpro-shutter') : null;
    return { hasShadow, hasShutter: Boolean(shutter) };
  });
  expect(result.hasShadow).toBe(true);
  expect(result.hasShutter).toBe(true);
});

test('clicking up button calls cover.open_cover', async ({ page }) => {
  // The card uses HA's <ha-icon-button> custom element with Lit's
  // @click handler. Even though ha-icon-button isn't defined in our
  // stub (no HA frontend present), it still receives bubbled click
  // events and the Lit listener fires synchronously - so dispatching
  // a click event on the right ha-icon-button is enough.
  await page.evaluate(() => {
    const card = window.__card;
    const shutter = card.shadowRoot.querySelector('superpro-shutter');
    // Buttons render with label="ui.card.cover.open_cover" (HA localize
    // key fallback). Pick by label to avoid coupling to layout order.
    const buttons = Array.from(shutter.shadowRoot.querySelectorAll('ha-icon-button'));
    const openBtn = buttons.find((b) => (b.getAttribute('label') || '').includes('open_cover'));
    if (!openBtn) throw new Error(`open button not found among ${buttons.length} ha-icon-buttons`);
    openBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  const calls = await page.evaluate(() => window.__serviceCalls);
  const openCall = calls.find((c) => c.service === 'open_cover');
  expect(openCall, `expected open_cover in ${JSON.stringify(calls)}`).toBeDefined();
  expect(openCall.domain).toBe('cover');
  expect(openCall.data.entity_id).toBe('cover.test_shutter');
});

test('doOnclick(set_cover_position, 75) calls cover.set_cover_position', async ({ page }) => {
  // Position writes happen via the shutter's drag/pick/release flow
  // (no DOM <input type=range> for the main position - that's the tilt
  // slider). Drive doOnclick directly: same code path the partial-open
  // button and pick-and-drop release both feed into. If this is broken,
  // every position write to HA is broken.
  await page.evaluate(() => {
    const card = window.__card;
    const shutter = card.shadowRoot.querySelector('superpro-shutter');
    shutter.doOnclick('set_cover_position', 75);
  });

  await page.waitForFunction(
    () => window.__serviceCalls.some((c) => c.service === 'set_cover_position'),
    { timeout: 3_000 },
  );

  const calls = await page.evaluate(() => window.__serviceCalls);
  const setPos = calls.find((c) => c.service === 'set_cover_position');
  expect(setPos).toBeDefined();
  expect(setPos.domain).toBe('cover');
  expect(setPos.data.entity_id).toBe('cover.test_shutter');
  expect(setPos.data.position).toBe(75);
});

test('dark-mode filter applies on prefers-color-scheme: dark (v0.2 regression)', async ({ browser }) => {
  // Fresh context with dark colour scheme so the @media query fires. This
  // guards the v0.2 signature feature: the PNG slat assets must get the
  // brightness/contrast/saturate filter applied so they don't glow white
  // on a dark dashboard.
  const ctx = await browser.newContext({ colorScheme: 'dark' });
  const page = await ctx.newPage();
  page.on('pageerror', (err) => {
    throw new Error(`Page error: ${err.message}`);
  });
  await page.goto(STUB_URL);
  await page.waitForFunction(() => window.__cardReady === true, { timeout: 10_000 });

  // The v0.2 dark-mode rule applies a brightness/contrast/saturate filter
  // via @media (prefers-color-scheme: dark). v1.0.7 keeps the filter on the
  // three child classes (slats/edge/picture) - parent .esc-shutter-selector
  // gets a separate background-blend-mode treatment for the frame, not a
  // CSS `filter`. So we read the filter on the children, not the parent.
  const filterValue = await page.evaluate(() => {
    const card = window.__card;
    const shutter = card.shadowRoot.querySelector('superpro-shutter');
    const target = shutter.shadowRoot.querySelector('.esc-shutter-selector-slide-slats')
      || shutter.shadowRoot.querySelector('.esc-shutter-selector-picture')
      || shutter.shadowRoot.querySelector('.esc-shutter-selector-slide-edge');
    return target ? getComputedStyle(target).filter : 'NO_TARGET';
  });

  expect(filterValue, 'expected dark-mode CSS filter target to exist').not.toBe('NO_TARGET');
  expect(filterValue, 'expected non-"none" filter under dark colorScheme').not.toBe('none');
  expect(filterValue).toContain('brightness');
  await ctx.close();
});
