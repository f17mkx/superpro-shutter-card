# HACS default-store PR draft

PR target: https://github.com/hacs/default
File to edit: `plugin` (the alphabetised list of plugin repositories)

## Steps

1. Fork `hacs/default` to `f17mkx/default`
2. Edit the `plugin` file, add `f17mkx/superpro-shutter-card` in alphabetical order (look for the `s` block, insert between the closest neighbours)
3. Commit + push to fork on a fresh branch (e.g. `add-superpro-shutter-card`)
4. Open PR against `hacs/default:main`

## PR title

```
Add superpro-shutter-card
```

## PR body

```markdown
**Repository**: https://github.com/f17mkx/superpro-shutter-card
**Category**: plugin (Lovelace card)

A branded fork of marcelhoogantink/enhanced-shutter-card that adds dark-mode-native theming, full ARIA accessibility, DE/EN/FR/ES localisation, and a Vitest+Playwright test harness. Drop-in replacement for users currently on `enhanced-shutter-card` - same YAML, only the `type:` prefix changes.

### HACS checklist

- [x] Repository is public
- [x] LICENSE present (GPL-3.0-or-later, inherited from upstream)
- [x] README has clear title + screenshot
- [x] `hacs.json` valid (`name`, `filename`, `homeassistant: 2024.10.0`, `content_in_root: false`)
- [x] `info.md` at repo root for the HACS store page
- [x] Repo topics include `lovelace-card`, `home-assistant`, `hacs`, `hacs-default`
- [x] Release workflow attaches a versioned `superpro-shutter-card.zip` to every GitHub Release
- [x] `validate.yaml` runs the `hacs/action@main` plugin validator on every push + nightly cron
- [x] CI test pipeline (Vitest unit + Playwright smoke + dist-drift byte-compare) green on main

### Upstream credit

Lineage: `Deejayfool/hass-shutter-card` → `marcelhoogantink/enhanced-shutter-card` → `f17mkx/superpro-shutter-card`. GPL-3.0 throughout. The fork adds the four signature features above without diverging from upstream's YAML config surface.
```

## Expected timeline

- HACS reviewer bot: minutes-to-hours, runs the same `hacs/action` checks as our `validate.yaml`
- Human review: 1-4 weeks per HACS docs
- After merge: card auto-appears in default store, no additional action needed

## Pre-flight verification (do these before opening the PR)

- [ ] `gh release create v1.0.0` has been run and succeeded
- [ ] Release page on GitHub shows `superpro-shutter-card.zip` attached
- [ ] `https://github.com/f17mkx/superpro-shutter-card/blob/main/info.md` renders correctly
- [ ] HACS validate workflow last run is green
- [ ] No open issues that look like blockers
