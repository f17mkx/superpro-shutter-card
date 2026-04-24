# superpro-shutter-card

> Branded Home Assistant Lovelace card for animated shutter/cover control. First-class dark-mode theming, accessibility, and internationalisation.

![Superpro Shutter Card](example.png)

**Status**: v0.3 - accessibility pass + clean console (ARIA, focus, live-region, silenced expected-DOM warnings)
**Upstream base**: [marcelhoogantink/enhanced-shutter-card](https://github.com/marcelhoogantink/enhanced-shutter-card) @ v1.5.2
**Author**: Stefan Volk ([@f17mkx](https://github.com/f17mkx))

## Install

Add this repo as a HACS Custom Repository:

```
HACS → Custom Repositories → https://github.com/f17mkx/superpro-shutter-card → Dashboard
```

Then in your Lovelace YAML:

```yaml
type: custom:superpro-shutter-card
entities:
  - entity: cover.your_shutter
```

For full configuration options see the upstream [enhanced-shutter-card docs](https://github.com/marcelhoogantink/enhanced-shutter-card#configuration) - all YAML options are forward-compatible; only the `type:` prefix changes from `custom:enhanced-shutter-card` to `custom:superpro-shutter-card`.

## Why this fork

`enhanced-shutter-card` is the active fork of the classic `Deejayfool/hass-shutter-card` and already covers the functional baseline. `superpro-shutter-card` adds signature features that would be scope-creep upstream:

1. **True dark-mode theming** - SVG slats + CSS-vars from HA theme, not hardcoded hex PNGs
2. **Accessibility** - ARIA labels on all buttons, position announcements, keyboard focus
3. **Clean console** - fixes the known „Could not find div.card" / „Could not find grid container" noise
4. **Performance budget** - bundle < 100KB gzipped, render memoisation per entity
5. **Test harness** - Vitest unit tests + Playwright smoke tests against an HA-stub
6. **i18n** - DE + EN + FR + ES translations via HA's localize API

## Roadmap

- **v0.1** - Rebranded fork of enhanced-shutter-card v1.5.2, no behavior change ✅
- **v0.2** - Dark-mode theming (CSS theme tokens + PNG dark-filter) ✅
- **v0.3** - Accessibility + clean console ✅
- **v0.4** - i18n + performance
- **v0.5** - Test harness
- **v1.0** - Submit to HACS default store + Reddit announcement

### v0.2 theming knobs

The card now honours these CSS custom properties. Set them in your HA theme YAML to override:

| Property | Default | Purpose |
|---|---|---|
| `--esc-tilt-container-bg` | `var(--secondary-background-color, #f9f9f9)` | Tilt widget background |
| `--esc-tilt-container-border` | `var(--divider-color, grey)` | Tilt widget border |
| `--esc-tilt-line-color` | `var(--error-color, red)` | Tilt-angle indicator line |
| `--esc-movement-overlay-bg` | `rgba(0,0,0,0.3)` | "Shutter moving" overlay tint |
| `--esc-dark-asset-filter` | `brightness(0.82) contrast(1.08) saturate(0.92)` | CSS filter applied to legacy PNG assets under `prefers-color-scheme: dark` |

Opt out of the dark filter for a single card: set `data-force-light="1"` on the card element. Force the filter on regardless of OS pref: `data-force-dark="1"`.

### v0.3 a11y knobs

The card is now navigable by keyboard, announces position changes politely to screen readers, and stops emitting harmless console warnings in panel-view dashboards.

| Aspect | Behaviour |
|---|---|
| Keyboard focus ring | `outline: 2px solid var(--focus-ring-color, currentColor)` on `:focus-visible` only (mouse clicks stay clean) |
| ARIA labels | Up / Stop / Down / Tilt / Partial / position-grid buttons each carry `aria-label` mirroring the localised tooltip; decorative icons are `aria-hidden="true"` |
| Live region | A visually-hidden `role="status" aria-live="polite"` element announces "{Friendly name}: {position text}" on settled-state changes, debounced 500ms so dragging or rapid streams don't spam |
| Lock indicator | `passive_mode: true` renders the lock icon with `role="img" aria-label="locked"` |
| Console hygiene | The two upstream warnings „Could not find div.card" and „Could not find grid container" are now silently no-op'd in panel layouts where they're expected. Set `SILENCE = false` at the top of `dist/superpro-shutter-card.js` to bring them back for debugging |
| Group label | Each shutter is wrapped in `role="group" aria-label="{Friendly name}"` so screen readers can navigate by entity |

Tested manually with macOS VoiceOver against an HA dashboard. v0.5's Playwright harness will codify this as automated regression coverage.

## Development

v0.1 inherits upstream's source-in-dist layout: the shipped `dist/superpro-shutter-card.js` is readable Lit source, not a minified build. No `npm install` / `rollup` step exists yet. A proper build pipeline lands alongside v0.5 (test harness).

To try a local change: edit `dist/superpro-shutter-card.js`, then `scp` to `/config/www/` on your HA instance and reload.

## Credits

Upstream lineage:

- `Deejayfool/hass-shutter-card` - original card (2022-)
- `marcelhoogantink/enhanced-shutter-card` - active fork with Tilt + presets (2024-, GPL-3.0)
- `f17mkx/superpro-shutter-card` - this branded fork adding signature features (2026-, GPL-3.0)

## License

GPL-3.0-or-later - see [LICENSE](LICENSE). Our direct upstream `enhanced-shutter-card` is GPL-3.0 as of its 2024-10 initial commit; this fork inherits that license.
