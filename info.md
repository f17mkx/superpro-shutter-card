# Everyday Shutter Card

Animated Lovelace shutter / cover card for Home Assistant. HA-theme-aware dark mode, full ARIA accessibility, DE / EN / FR / ES locale support, tilt + position grid + presets. Drop-in for `enhanced-shutter-card`.

![Everyday Shutter Card preview](assets/example.png)

## What you get

- **HA-theme-aware dark mode** — detects `hass.themes.darkMode` AND `prefers-color-scheme: dark`, applies a per-asset filter so the slat PNGs stop glowing on dark dashboards.
- **Tilt visualisation** — slat angle rendered in real time, drag-to-set, separate from position.
- **Position grid** — six preset positions (0 / 20 / 40 / 60 / 80 / 100 %) for one-tap recall.
- **Cover presets** — `roller-shutter`, `curtain`, `awning`, `blind`, `shade`, each with its own PNG assets.
- **Full ARIA** — every button labelled, live-region position announcements, focus ring, lock indicator.
- **Localised** — DE / EN / FR / ES, reactive on language switch, locale-correct percent formatting.
- **Drop-in for enhanced-shutter-card** — same YAML config, only the `type:` prefix changes.

## Quick start

```yaml
type: custom:everyday-shutter-card
entities:
  - entity: cover.bedroom_shutter
```

Multiple shutters:

```yaml
type: custom:everyday-shutter-card
entities:
  - entity: cover.bedroom_shutter
  - entity: cover.living_room_shutter
```

Awning preset:

```yaml
type: custom:everyday-shutter-card
entities:
  - entity: cover.terrace_awning
    preset: awning
```

## Theme override tokens

| Property | Default | Purpose |
|---|---|---|
| `--esc-tilt-container-bg` | `var(--secondary-background-color, #f9f9f9)` | Tilt widget background |
| `--esc-tilt-container-border` | `var(--divider-color, grey)` | Tilt widget border |
| `--esc-tilt-line-color` | `var(--error-color, red)` | Tilt-angle indicator line |
| `--esc-movement-overlay-bg` | `rgba(0,0,0,0.3)` | "Shutter moving" overlay tint |
| `--esc-dark-asset-filter` | `brightness(0.82) contrast(1.08) saturate(0.92)` | CSS filter on legacy PNG slats under dark mode |
| `--esc-dark-frame-overlay` | `rgb(115, 115, 115)` | Window-frame dark-mode multiply overlay |

Per-card overrides: `data-force-light="1"` (disable dark filter) or `data-force-dark="1"` (force it on).

## Migration from enhanced-shutter-card

```yaml
# Before
type: custom:enhanced-shutter-card

# After
type: custom:everyday-shutter-card
```

That's the entire migration. All other YAML keys carry over identically.

## Links

- [Source + issues](https://github.com/f17mkx/everyday-shutter-card)
- [Releases](https://github.com/f17mkx/everyday-shutter-card/releases)
- [Buy Me a Coffee](https://www.buymeacoffee.com/f17mkx) — support the next card in the everyday-* family

## Credits

- [`Deejayfool/hass-shutter-card`](https://github.com/Deejayfool/hass-shutter-card) — original card
- [`marcelhoogantink/enhanced-shutter-card`](https://github.com/marcelhoogantink/enhanced-shutter-card) — active fork with Tilt + presets
- [`f17mkx/everyday-shutter-card`](https://github.com/f17mkx/everyday-shutter-card) — this branded fork

GPL-3.0-or-later throughout.
