# Prompt-Inbox

Append-only Strom aus Prompt-Vorverarbeitung (via /parse-prompt, auto via UserPromptSubmit-Hook oder manuell). Neueste Eintraege oben. Stefan triaged regelmaessig von Hand in die jeweiligen Ziel-Dokumente.

Format: Ein Block pro /parse-prompt-Invocation, mit Batch-Header (Timestamp + Quelle) und N Eintraegen darunter.

Kategorien: **Req** (Requirement), **Frage**, **Decision**.

---

## 2026-04-24 - user-prompt

4 Eintraege (3 Req, 0 Fragen, 1 Decision).

### Req [roadmap] Plan bedeutungsvoll weiterfuehren (Validiert)

> „ok, mach mal bedeutungsvoll weiter im plan"

**Was zu tun ist:** v0.2 Dark-mode theming aus README-Roadmap angehen. „Bedeutungsvoll" = Signature-Feature-Arbeit, nicht nur kosmetische Aenderungen - konkret: hardcoded CSS-Farben durch HA-Theme-Tokens ersetzen + SVG/filter-Pfad fuer PNG slats.

### Req [ship] Ship den Fortschritt (Validiert)

> „und dann ship"

**Was zu tun ist:** Nach Abschluss der v0.2-Arbeit `/ship` Skill starten - lean pipeline commit → push → PR → merge main → close.

### Req [ws-export] Parallele Conductor-Workspaces ausrollen (Validiert)

> „und /ws-export maximal 4 ws"

**Was zu tun ist:** Nach Ship 4 parallele Workspaces via `/ws-export` anlegen. Kandidaten aus der Roadmap: v0.3 a11y, v0.4 i18n, v0.5 test-harness, v1.0 HACS-default-submit. Cap 4, nicht mehr.

### Decision [ws-export] Cap auf 4 Workspaces

> „maximal 4 ws"

**Konsequenz:** Auch wenn weitere sinnvolle Spuren existieren (z.B. v0.2.1 SVG-Slats als eigener Track), nicht ueber 4 hinausgehen. Prioritaet: klare Roadmap-Schritte v0.3-v1.0.

---
