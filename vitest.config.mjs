import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // happy-dom gives us document/window for the LitElement class evaluation
    // path without spinning up a full browser. Smoke tests run in Playwright.
    environment: 'happy-dom',
    include: ['tests/unit/**/*.test.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      // Don't gate CI on coverage at v0.5 - the goal is a green bar with real
      // tests in place. Coverage threshold tightens in v0.6.
      reporter: ['text', 'json-summary'],
    },
  },
});
