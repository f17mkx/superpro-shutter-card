# Changelog

All notable changes to `superpro-shutter-card` are logged here. Newest at top.

## 2026-04-24

- `✨ feat: v0.1 rebrand - enhanced-shutter-card → superpro-shutter-card` - rebranded fork of enhanced-shutter-card v1.5.2. Drop-in replacement - YAML config carries over, only `type:` prefix changes from `custom:enhanced-shutter-card` to `custom:superpro-shutter-card`. No behavior change. Renamed custom element (`HA_CARD_NAME`), internal classes (`EnhancedShutterCardNew` → `SuperproShutterCardNew`, `EnhancedShutter` → `SuperproShutter`), variables (`enhancedShutter` → `superproShutter`), console banner, display name, documentationURL, HACS manifest, release workflow, version bumped 1.5.2 → 0.1.0.
- `♻️ chore: merge upstream enhanced-shutter-card v1.5.2 (allow-unrelated-histories)` - imported upstream's dist/, images, info docs, .github workflow, and Lit runtime bundle. Our scaffold's LICENSE (GPL-3), README (our branding), .gitignore (our superset), and hacs.json (content_in_root: false) kept. `dist/` tracked: upstream ships source-in-dist (readable Lit, no build step).
- `⚖️ chore: relicense to GPL-3.0 (inherit from upstream enhanced-shutter-card)` - scaffold LICENSE claimed MIT, but our direct upstream (marcelhoogantink/enhanced-shutter-card) has been GPL-3.0 since its 2024-10 initial commit. MIT → GPL-3 is compatible (GPL can absorb MIT); GPL-3 → MIT is not (copyleft downgrade). Fork now GPL-3.0-or-later with triple-copyright header (Stefan + Marcel + Deejayfool).
- `✨ feat: Initial scaffold - README, LICENSE, .gitignore, hacs.json` - planning-phase repo for superpro-shutter-card, a branded fork of marcelhoogantink/enhanced-shutter-card focused on dark-mode theming, accessibility, and i18n signature features.
