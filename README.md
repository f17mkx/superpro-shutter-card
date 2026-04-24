# superpro-shutter-card

> Branded Home Assistant Lovelace card for animated shutter/cover control. First-class dark-mode theming, accessibility, and internationalisation.

**Status**: planning phase, scaffold only. v0.1 rebrand work in progress.
**Upstream base**: [marcelhoogantink/enhanced-shutter-card](https://github.com/marcelhoogantink/enhanced-shutter-card)
**Author**: Stefan Volk ([@f17mkx](https://github.com/f17mkx))

## Why this fork

`enhanced-shutter-card` is the active fork of the classic `Deejayfool/hass-shutter-card` and already covers the functional baseline. `superpro-shutter-card` adds signature features that would be scope-creep upstream:

1. **True dark-mode theming** - SVG slats + CSS-vars from HA theme, not hardcoded hex PNGs
2. **Accessibility** - ARIA labels on all buttons, position announcements, keyboard focus
3. **Clean console** - fixes the known „Could not find div.card" / „Could not find grid container" noise
4. **Performance budget** - bundle < 100KB gzipped, render memoisation per entity
5. **Test harness** - Vitest unit tests + Playwright smoke tests against an HA-stub
6. **i18n** - DE + EN + FR + ES translations via HA's localize API

## Roadmap

- **v0.1** - Rebranded fork of enhanced-shutter-card v1.5.2, no behavior change
- **v0.2** - Dark-mode theming (signature feature)
- **v0.3** - Accessibility + clean console
- **v0.4** - i18n + performance
- **v0.5** - Test harness
- **v1.0** - Submit to HACS default store + Reddit announcement

## Install (once v0.1 ships)

Not available yet. After v0.1:

```
HACS → Custom Repositories → https://github.com/f17mkx/superpro-shutter-card → Dashboard
```

## Development

TBD - build tooling (vite/bun + lit-based custom element) lands in v0.1.

## Credits

Upstream lineage:

- `Deejayfool/hass-shutter-card` - original card (2022, MIT)
- `marcelhoogantink/enhanced-shutter-card` - active fork with Tilt + presets (2024-2026, MIT)
- `f17mkx/superpro-shutter-card` - this branded fork adding signature features (2026-, MIT)

## License

MIT - see [LICENSE](LICENSE).
