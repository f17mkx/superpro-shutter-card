import { defineConfig, devices } from '@playwright/test';

// E2E smoke tests load tests/e2e/fixtures/ha-stub.html via file:// protocol -
// no dev server needed. The HTML page injects a fake `hass` object and mounts
// <superpro-shutter-card> directly. Goal: catch regressions where the card
// either (a) throws on render, (b) wires the wrong service, or (c) breaks the
// v0.2 dark-mode filter.
export default defineConfig({
  testDir: './tests/e2e',
  // 30s per spec is generous; current suite finishes in <5s locally.
  timeout: 30_000,
  fullyParallel: true,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    headless: true,
    // Each test navigates to a file:// URL so no baseURL is needed.
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
