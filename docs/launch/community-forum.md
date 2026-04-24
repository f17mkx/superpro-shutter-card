# HA community forum launch thread draft

**Forum:** https://community.home-assistant.io/
**Category:** Share your Projects
**Tags:** `frontend`, `lovelace`, `cover`, `shutter`, `hacs`
**Do not post until:** HACS default-store PR is merged

---

## Title

```
Superpro Shutter Card - dark-mode-native fork of enhanced-shutter-card (a11y, i18n, tests)
```

## Body (Markdown, the forum supports it)

```markdown
Hi all,

I've been daily-driving `enhanced-shutter-card` and hit three recurring papercuts - the tilt widget background glowed white on dark themes, the buttons had zero ARIA labels, and console got spammed with "could not find div.card" warnings on every panel-view dashboard. I forked, fixed all three, and kept going. The result is **superpro-shutter-card**, drop-in replacement, same YAML, only the `type:` prefix changes.

It's now live in the HACS default store - search "Superpro Shutter Card" and you're done.

### What's different

| Area | enhanced-shutter-card v1.5.2 | superpro-shutter-card v1.0 |
|---|---|---|
| Dark mode | hardcoded `#f9f9f9`, `grey`, `red` in CSS, PNG slats glow on dark themes | all colors route through `var(--esc-*, var(--theme-token, fallback))`, PNG assets get a brightness/contrast/saturate filter under `prefers-color-scheme: dark` |
| ARIA | none on action buttons | every up/stop/down/tilt/partial/position-grid button has `aria-label` mirroring the localised tooltip; lock indicator `role="img"`; shutter container `role="group"` with friendly name |
| Live region | none | visually-hidden `role="status" aria-live="polite"` element announces "{name}: {position text}" on settled state, debounced 500ms |
| Keyboard focus | inherits HA default (often invisible on the icon-buttons) | explicit `:focus-visible` ring honouring `--focus-ring-color`, mouse clicks stay clean |
| Console | "could not find div.card" / "could not find grid container" warnings on panel-view layouts | gated behind `SILENCE` flag, set to `false` at top of file to bring back for debugging |
| Localisation | English-only | DE / EN / FR / ES via `hass.locale.language`, reactive, locale-correct percent formatting |
| Tests | none | 59 Vitest unit tests (pure logic + element registration) + 4 Playwright smoke tests against HA-stub fixture; dist-drift byte-compare guards the committed bundle |

### Theme overrides

The card honours these CSS custom properties - drop them in your theme YAML to override:

```yaml
my_theme:
  esc-tilt-container-bg: var(--secondary-background-color)
  esc-tilt-container-border: var(--divider-color)
  esc-tilt-line-color: var(--accent-color)
  esc-movement-overlay-bg: rgba(0, 0, 0, 0.4)
  esc-dark-asset-filter: brightness(0.85) contrast(1.05)
```

Per-card opt-out from the dark-asset filter: `data-force-light: "1"` on the card element. Force on regardless of OS pref: `data-force-dark: "1"`.

### Migration from enhanced-shutter-card

```yaml
# before
type: custom:enhanced-shutter-card

# after
type: custom:superpro-shutter-card
```

That's the entire migration. All other YAML keys (entities, presets, tilt config, position-grid labels, partial-open buttons) carry over identically.

### Roadmap

v1.0 is the launch release. v1.x is bundle-size budget (target <100KB gzipped, currently ~165KB unminified IIFE) plus more locales (it / nl / pt) and a JSON translation-file split.

### Source + credit

- GitHub: https://github.com/f17mkx/superpro-shutter-card
- License: GPL-3.0-or-later (inherited from upstream)
- Lineage: Deejayfool/hass-shutter-card → marcelhoogantink/enhanced-shutter-card → f17mkx/superpro-shutter-card. Massive thanks to both upstream maintainers - this fork only exists because their work was solid enough to build on.

Feedback welcome, especially on missing locales, edge cases I haven't hit, and any HA frontend conventions I'm not following yet.
```

## Engagement plan

- Subscribe to the thread, check daily for first 7 days
- Reply within 24h to every substantive comment, especially translation contributions
- If someone asks "why a fork", point at the comparison table - don't get defensive
- Translation PRs go straight in - one screenshot per state in the PR body, nothing else

## Pre-flight

- [ ] HACS default PR merged (otherwise the "search HACS" instruction is wrong)
- [ ] Reddit post live for at least 24h (gives forum a more grounded reception)
- [ ] Community forum account email verified, trust level >= 1
