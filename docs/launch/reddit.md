# Reddit launch post draft

**Sub:** r/homeassistant
**Flair:** Release
**Do not post until:** HACS default-store PR is merged (so the install instruction is just "search HACS" and not "add custom repo first").

---

## Title

```
[Release] superpro-shutter-card - a dark-mode-native fork of enhanced-shutter-card with a11y, i18n, and tests
```

## Body

```markdown
Quick context: I was using enhanced-shutter-card daily and kept bumping into the same three papercuts - tilt widget glows white on dark themes, zero ARIA labels, noisy console warnings on panel-view dashboards. Instead of opening five upstream PRs I forked, then kept going.

Screenshots (light + dark): [imgur album]

**What's new vs enhanced-shutter-card v1.5.2:**

- **True dark-mode theming** - all colors route through HA theme tokens (`--secondary-background-color`, `--divider-color`, `--error-color`); PNG slat assets get a `brightness(0.82) contrast(1.08) saturate(0.92)` filter under `prefers-color-scheme: dark` so they stop looking like lightboxes on dark dashboards. Per-card opt-out via `data-force-light="1"`.
- **Full a11y pass** - ARIA labels on every up/stop/down/tilt/partial/position-grid button, polite live-region position announcements debounced to 500ms, visible `:focus-visible` ring honouring `--focus-ring-color`, lock indicator with `role="img"`. Tested manually with macOS VoiceOver.
- **Localised** - DE / EN / FR / ES via `hass.locale.language`, reactive (no reload). Locale-correct percent formatting (`55 %` non-breaking space for de/fr, `55%` compact for en/es).
- **Test harness** - 59 Vitest unit tests on pure logic + 4 Playwright smoke tests against an HA-stub HTML page. CI green-bar on every PR + dist-drift byte-compare against the committed bundle.
- **Drop-in replacement** - same YAML config; only the `type:` prefix changes from `custom:enhanced-shutter-card` to `custom:superpro-shutter-card`.

**Install:** HACS → search "Superpro Shutter Card" → Download → reload.

Source: https://github.com/f17mkx/superpro-shutter-card

Upstream credit: huge thanks to [marcelhoogantink](https://github.com/marcelhoogantink) for `enhanced-shutter-card` and [Deejayfool](https://github.com/Deejayfool) for the original `hass-shutter-card`. GPL-3.0 throughout.

Happy to take feedback on missing locales, edge cases, or features I should pick up next - bundle-size budget and `it/nl/pt` translations are already on the v1.x list.
```

## Tone notes

- Reddit smells self-promotion instantly. Lead with the problem, not the product.
- Skip emoji-as-bullet, no marketing speak ("revolutionary", "leverage", "best-in-class")
- Crediting upstream by name is non-negotiable. GPL-3 is fine but the *etiquette* is what matters in this sub
- If first-comment is asking what the actual visible difference is, reply with the dark-theme screenshot and "this glow vs. that glow"
- Never reply defensively to "why fork instead of upstream PR" - the honest answer (scope+pace) is in the body, refer to it

## Pre-flight

- [ ] HACS default PR merged
- [ ] Imgur album with light + dark screenshots
- [ ] (Optional) GIFs for a11y + i18n hosted somewhere
- [ ] Account in good standing in r/homeassistant (no recent removed posts)
- [ ] Crosspost-window cooldown if posted to community forum recently
