# Assets

Visual assets for README, HACS info page, GitHub Release, and the Reddit/community-forum launch posts.

## Required for v1.0 launch

These need to be captured manually against a live HA instance before posting. The repo will work without them - HACS submission only requires *one* image and we already have `example.png` at root.

- [ ] `light-theme.png` - card on default HA theme, 2-3 shutters in a row, mix of states (open/partial/closed)
- [ ] `dark-theme.png` - identical layout, HA dark theme on, showcasing the v0.2 brightness/contrast filter on PNG slats
- [ ] `a11y-keyboard.gif` - tab traversal across the button cluster with the v0.3 focus ring visible (record at 1.5x speed, ~5 sec)
- [ ] `i18n-demo.gif` - locale switcher in HA Profile flipping EN → DE → FR → ES with the card relabelling live (record ~6 sec, one full cycle)

## Conventions

- PNG for stills (lossless, < 200KB each), JPEG only if PNG breaks the budget
- GIF for motion - keep < 1MB, use Gifski or similar; if any clip exceeds budget switch to a hosted MP4 and embed via `<video>` in README
- All filenames lowercase-kebab
- Reference from README via relative path: `![alt](assets/light-theme.png)`

## Upstream legacy

The pre-existing root-level `Curtain.gif`, `EnhancedShutterCardNew.gif`, `FullTiltOptions.gif`, `FullTiltOptions2.gif` are upstream marketing assets from `enhanced-shutter-card`. Keep them at root for backward image-link compatibility from any old discussion threads, do NOT cite them in the new README.
