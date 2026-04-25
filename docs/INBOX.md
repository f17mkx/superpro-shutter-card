# Prompt-Inbox

Append-only Strom aus Prompt-Vorverarbeitung (via /parse-prompt, auto via UserPromptSubmit-Hook oder manuell). Neueste Eintraege oben. Stefan triaged regelmaessig von Hand in die jeweiligen Ziel-Dokumente.

Format: Ein Block pro /parse-prompt-Invocation, mit Batch-Header (Timestamp + Quelle) und N Eintraegen darunter.

Kategorien: **Req** (Requirement), **Frage**, **Decision**.

---

## 2026-04-25 14:00 - user-prompt

6 Eintraege (5 Req, 1 Frage, 0 Decisions).

### Req [release] Tag v1.0.0 pushen + GitHub-Release anlegen (Pending)

> „please create the release now so i can take the screenshots"
> „tag v1.0.0 exists locally but has not been pushed to f17mkx/superpro-shutter-card, please push it before continuing"

**Was zu tun ist:** `git push origin v1.0.0`, dann `gh release create v1.0.0` mit Release-Notes aus CHANGELOG.

### Req [ci] Workflow gruen validieren (Pending)

> „Validate workflow is green"

**Was zu tun ist:** `gh run list --limit 5` nach Tag-Push pollen, sicherstellen dass GH-Actions auf v1.0.0 alle Jobs bestehen.

### Req [yama-ha] Card auf Yamas HA testen (Pending)

> „can we test it on yamas-ha so i can make the screenshots fuer den release?"

**Was zu tun ist:** Card als Lovelace-Resource in Yamas HA-Instanz (192.168.178.200) hinzufuegen, vor Release-Screenshots.

### Req [yama-ha] Beispiel-Karten auf rollos-Dashboard hinzufuegen (Pending)

> „du kannst welche auf http://192.168.178.200:8123/dashboard-yama/rollos hinzufuegen"

**Was zu tun ist:** Mehrere Card-Konfigurationen (verschiedene States/Themes) auf dem `dashboard-yama/rollos` Lovelace-Dashboard anfuegen, damit Stefan reichhaltige Screenshots machen kann.

### Req [yama-ha] Yama-HA-Integration wie besprochen (Pending)

> „add it to yamas ha as discussed"

**Was zu tun ist:** Vorab-besprochenen Yama-Integration-Plan ausfuehren (Card als HACS-Repo bei Yama hinzufuegen oder direkt als JS-Resource).

### Frage [yama-ha] Permission/Confirmation Test auf Yamas HA

> „can we test it on yamas-ha so i can make the screenshots fuer den release?"

**Antwort-Hinweis:** Rhetorisch + Permission-bestaetigend - Stefan triggert mit dem Prompt selbst die Aktion.

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
