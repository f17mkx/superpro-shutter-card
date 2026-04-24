# Superpro Shutter Card

A branded Home Assistant Lovelace card for animated shutter and cover control. Fork of [enhanced-shutter-card](https://github.com/marcelhoogantink/enhanced-shutter-card) with first-class dark-mode theming, accessibility, internationalisation, and a real test harness.

## What you get

- **Dark-mode native** - all colors route through HA theme tokens, PNG slat assets get a brightness/contrast filter under `prefers-color-scheme: dark` so they stop glowing like lightboxes on dark dashboards.
- **Accessible** - ARIA labels on every button, polite live-region position announcements, visible keyboard focus ring, clean console output in panel-view dashboards.
- **Localised** - DE / EN / FR / ES out of the box, follows `hass.locale.language` reactively (no reload needed).
- **Tested** - 60+ Vitest unit tests on pure logic, Playwright smoke against an HA-stub HTML page, byte-compare drift guard against the committed `dist/`.
- **Drop-in replacement for `enhanced-shutter-card`** - same YAML config, only the `type:` prefix changes from `custom:enhanced-shutter-card` to `custom:superpro-shutter-card`.

## Install

After installing via HACS, add the resource and use the card in your Lovelace dashboard:

```yaml
type: custom:superpro-shutter-card
entities:
  - entity: cover.your_shutter
```

For full configuration options (tilt, presets, multi-shutter rows, position grid, partial-open buttons), see the [README](https://github.com/f17mkx/superpro-shutter-card#readme) and the upstream [enhanced-shutter-card configuration docs](https://github.com/marcelhoogantink/enhanced-shutter-card#configuration) - all YAML keys are forward-compatible.

## Theme overrides

The card honours these CSS custom properties; set them in your HA theme YAML to override defaults:

| Property | Default | Purpose |
|---|---|---|
| `--esc-tilt-container-bg` | `var(--secondary-background-color, #f9f9f9)` | Tilt widget background |
| `--esc-tilt-container-border` | `var(--divider-color, grey)` | Tilt widget border |
| `--esc-tilt-line-color` | `var(--error-color, red)` | Tilt-angle indicator line |
| `--esc-movement-overlay-bg` | `rgba(0,0,0,0.3)` | "Shutter moving" overlay tint |
| `--esc-dark-asset-filter` | `brightness(0.82) contrast(1.08) saturate(0.92)` | CSS filter applied to legacy PNG assets in dark mode |

Opt out per-card with `data-force-light="1"`, force on with `data-force-dark="1"`.

## Migration from enhanced-shutter-card

```yaml
# Before
type: custom:enhanced-shutter-card

# After
type: custom:superpro-shutter-card
```

That's the entire migration. All other YAML keys carry over identically.

## Credits

- [Deejayfool/hass-shutter-card](https://github.com/Deejayfool/hass-shutter-card) - original card
- [marcelhoogantink/enhanced-shutter-card](https://github.com/marcelhoogantink/enhanced-shutter-card) - active fork with Tilt + presets
- [f17mkx/superpro-shutter-card](https://github.com/f17mkx/superpro-shutter-card) - this branded fork

GPL-3.0-or-later throughout.

## Links

- [Source + issues](https://github.com/f17mkx/superpro-shutter-card)
- [Changelog](https://github.com/f17mkx/superpro-shutter-card/blob/main/docs/CHANGELOG.md)
- [Releases](https://github.com/f17mkx/superpro-shutter-card/releases)
