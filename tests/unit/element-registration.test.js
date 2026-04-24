// Smoke-level: importing the bundle in a happy-dom environment must not
// throw, and must register both custom elements. This catches the most
// embarrassing class of regressions (typo in the class definition,
// import path break) without needing Playwright.
import { describe, it, expect, beforeAll } from 'vitest';

beforeAll(async () => {
  // happy-dom provides customElements + customCards container. Importing
  // the source for its side effects.
  await import('../../src/superpro-shutter-card.js');
});

describe('custom element registration', () => {
  it('registers superpro-shutter-card', () => {
    expect(customElements.get('superpro-shutter-card')).toBeDefined();
  });

  it('registers superpro-shutter', () => {
    expect(customElements.get('superpro-shutter')).toBeDefined();
  });

  it('pushes itself onto window.customCards', () => {
    expect(window.customCards).toBeDefined();
    const entry = window.customCards.find((c) => c.type === 'superpro-shutter-card');
    expect(entry).toBeDefined();
    expect(entry.name).toBe('Superpro Shutter Card');
    expect(entry.preview).toBe(true);
  });
});
