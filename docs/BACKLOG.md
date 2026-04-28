# Backlog

Append-only Liste offener Tasks. Neueste oben.

INBOX.md (Legacy-Archiv) wird seit 2026-04-28 nicht mehr beschrieben - parse-prompt routet jetzt direkt hier rein.

---

## 2026-04-28 - Frame-Color-Theming-Option

> „since we had issues coloring the frame, we could give an option to color the frame according to ones theme."

**Was zu tun ist:** Config-Option `frame_color` (oder CSS-Variable `--esc-frame-tint`) einführen, mit der der User die Window-Frame-PNG farblich an sein HA-Theme anpassen kann. Technische Optionen:
- (a) CSS `mix-blend-mode: multiply` mit konfigurierbarer Tint-Farbe auf das Frame-`<img>` (analog zur v1.0.7-Logik, aber per User steuerbar statt nur dark/light).
- (b) `filter: hue-rotate()` + `saturate()` Mix für tönende Effekte ohne grain-Verlust.
- (c) SVG-basierte Frames mit `currentColor`/CSS-vars für echtes Tinting (aber kompletter Asset-Rebuild nötig).

**Status:** Offen. Nicht für v1.0.8 (bewusst ausgeschlossen, siehe CHANGELOG).
**Quelle:** user-prompt 2026-04-28 21:13 (Turn 1, "this guy has some nice window variants...").

---

## 2026-04-28 - Multiple Window-Variants als Asset-Library

> „I like the idea of different window representations."

**Was zu tun ist:** Asset-Library mit mehreren Frame-Stilen ausbauen (modern/klassisch/industriell/round/arch/etc.) statt nur den einen `sp-window.png` Default. Inspiration aus zwei Repos:
- https://github.com/samoswall/pic-shutter-card (`dist/frame_win1.png`, `dist/frame_win2.png` - andere Frame-Designs)
- https://github.com/francordi85/roller-shutter-card (allgemeine Inspiration für Frame-Behandlung)

Konkret: pro Frame-Variant Light- und Dark-Version baken (Recipe wie für v1.0.8: Lightness -83% + multiply-overlay), in `ESC_BUILTIN_WINDOW_IMAGES` registrieren und in der README dokumentieren. Optional: Preset-Selector im YAML-Editor.

**Status:** Offen. Nicht für v1.0.8.
**Quelle:** user-prompt 2026-04-28 21:13.
