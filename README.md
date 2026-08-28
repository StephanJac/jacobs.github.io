# stephanjacobs.de

Persönliche Website als Jekyll-Projekt: Business Analytics, Ausdauersport, Metal.
Startseite plus drei Themenseiten.

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

Läuft auf GitHub Pages ohne eigene Plugins.

## Die Idee

Drei Leben auf einer Seite werden schnell zum Zettelkasten. Deshalb hat die Seite
eine These, die alle drei verbindet: **Wiederholung schlägt Talent.** Eine
Datenarchitektur, ein Trainingsplan und ein Probenraum funktionieren nach
derselben Mechanik — Last, Takt, Ehrlichkeit. Das steht einmal am Anfang und wird
danach nicht mehr erklärt.

Die Gestaltung hält sich bewusst zurück: helle Flächen, eine einzige Schrift
(Inter), ein sparsam eingesetzter Akzent in gedämpftem Rot. Struktur entsteht
über Weißraum und Haarlinien, nicht über Effekte. Konkret heißt das:

- **Fotos bleiben unbehandelt.** Kein Farbfilter, kein Duoton, keine
  Hover-Spielerei — die Bilder zeigen sich so, wie sie sind.
- **Keine Scroll-Animationen**, kein Filmkorn, keine wandernde Akzentfarbe.
- **Überschriften in normaler Schreibweise** statt in Versalien, in ruhigen
  Größen.
- **Wenig JavaScript:** Es bleibt bei zwei Funktionen — fehlende Bilder werden zu
  beschrifteten Platzhaltern, und Videos laden erst auf Klick über
  youtube-nocookie.

Der Akzent liegt in `--accent` ganz oben in `assets/css/style.scss` und ist in
einer Zeile getauscht, falls das Rot nicht passt.

## Struktur

```
_config.yml              Konfiguration, Schalter show_placeholders
index.md                 Startseite (leer – Inhalt kommt aus _data)
_data/                   Der gesamte Text der Startseite
  profile.yml            Name, Claim, Portrait, Links
  nav.yml                Kopfnavigation
  manifest.yml           Abschnitt 00 – Das Prinzip
  analytics.yml          Abschnitt 01 – inkl. der sechs Themenkarten
  sport.yml              Abschnitt 02 – Zahlen, Fotos, Texte
  band.yml               Abschnitt 03 – Fotos, Videos, Termine
  kontakt.yml            Abschnitt 04
  legal.yml              Anschrift und Kontakt für Impressum und Datenschutz
_layouts/                base, home, thema
_includes/home/          Ein Include je Abschnitt der Startseite
_includes/thema/         Bausteine der Themenseiten
_themen/                 Die drei Themenseiten (Inhalt im Front Matter)
impressum.md             Impressum
datenschutz.md           Datenschutzerklärung
assets/css/style.scss    Ein Stylesheet für alles
assets/js/site.js        Einblenden, Akzentwechsel, Videos, Bildfehler
assets/img/              Eigene Fotos – siehe README dort
```

**Text ändern heißt YAML ändern.** Kein Include muss angefasst werden, um Inhalte
zu pflegen.

## Was noch fehlt

Alle offenen Stellen sind auf der Seite **sichtbar markiert** — gestrichelter
Rahmen in Akzentfarbe. Nichts davon ist erfunden:

| Wo | Datei | Was rein muss |
|---|---|---|
| Vier Zahlen im Sportteil | `_data/sport.yml` | Lieblingsdistanz, Trainingsumfang, dabei seit, nächstes Vorhaben |
| Rolle in der Band | `_data/band.yml` | Gitarre? Bass? Gesang? Drums? |
| Termine | `_data/band.yml` | Die vier Gigs sind aus 2026 und liegen inzwischen hinter uns. Sie stehen deshalb unter „Zuletzt live“ — kommende Termine ergänzen. |
| Fünf Fotos | `assets/img/` | Siehe `assets/img/README.md` |
| Anschrift und E-Mail | `_data/legal.yml` | Pflichtangaben für Impressum und Datenschutz |

Ein Wert wird gefüllt, indem `value:` gesetzt wird — der Platzhalter verschwindet
dann von selbst. Sind alle gefüllt, `show_placeholders: false` in `_config.yml`
setzen; damit sind auch die Hinweise auf den Themenseiten aus.

## Fotos

Fotos kann ich nicht erzeugen. Eingebunden ist, was es schon gibt: das Portrait
von stephanjacobs.de, Bandfoto und drei Live-Bilder von the-royal-flash.de sowie
die drei YouTube-Videos der Band.

Für den Sportteil fehlen sie. Dort steht in jedem leeren Rahmen, welches Motiv
dorthin gehört — die Seite sieht damit auch ohne Fotos absichtsvoll aus und nicht
kaputt. Das Wichtigste wäre ein neues Portrait: halbnah, harte Lichtkante, ernst.
Es trägt die halbe Startseite.

**Hinweis zu den externen Bildpfaden:** Portrait und Bandfotos werden aktuell
direkt von den beiden anderen Seiten geladen. Für den Dauerbetrieb besser nach
`assets/img/` kopieren und die Pfade in `_data/profile.yml` und `_data/band.yml`
austauschen — sonst hängt diese Seite an den anderen beiden.

## Die Themenseiten

`/themen/data-und-analytics/`, `/themen/sap-business-data-cloud/` und
`/themen/s4hana-embedded-analytics/`. Der Inhalt liegt im Front Matter als Liste
von Abschnitten:

```yaml
- type: cards
  bg: tint            # dunkel (weglassen), tint oder dark
  id: fokusthemen     # optional, erzeugt eine Sprungmarke
  eyebrow: "Fokusthemen"
  title: "Zwei Situationen, zwei Einstiege"
  columns: 2
  items:
    - label: "Fokusthema 08"
      title: "Aufbau des operativen Reportings"
      body: ["Absatz mit **Markdown**."]
```

Verfügbare Typen: `hero`, `cards`, `layers`, `table`, `steps`, `list`, `quote`,
`faq`, `cta`, `richtext`. Alle verstehen zusätzlich `bg`, `id`, `eyebrow`,
`title`, `intro`, `outro`, `buttons` und `note`. Neuen Typ anlegen: Datei in
`_includes/thema/sections/` ablegen, eine Zeile in
`_includes/thema/section.html` ergänzen.

Die sechs Themenkarten auf der Startseite verlinken teils auf Sprungmarken
innerhalb dieser Seiten — so hat jedes deiner Themen ein Ziel, ohne dass sechs
Seiten nötig wären.

## Impressum und Datenschutz

Beide Seiten liegen unter `/impressum/` und `/datenschutz/` und sind aus der
Fußzeile verlinkt. Die persönlichen Angaben stehen **einmal** in
`_data/legal.yml` — beide Texte ziehen daraus.

Es sind Vorlagen, kein Rechtsrat. Drei Punkte, die dabei bewusst so und nicht
anders gelöst sind:

1. **Kein Hinweis auf die OS-Plattform.** Die EU-Plattform zur
   Online-Streitbeilegung wurde zum 20.07.2025 abgeschaltet. Ein Link darauf ist
   heute nicht nur überflüssig, sondern abmahnfähig, weil er ins Leere führt.
   Stattdessen steht der Hinweis nach § 36 VSBG darin, dass keine Teilnahme an
   einem Schlichtungsverfahren erfolgt.
2. **DDG statt TMG.** Das Telemediengesetz ist im Mai 2024 vom
   Digitale-Dienste-Gesetz abgelöst worden. Vorlagen im Netz nennen oft noch die
   alten Paragrafen.
3. **Die Datenschutzerklärung beschreibt genau diese Seite** — Hosting bei
   GitHub, Google Fonts, YouTube mit Klick-Freigabe, externe Bilder, Links statt
   Social-Plugins. Kommt etwas dazu (Analytics, Kontaktformular, Newsletter),
   muss sie ergänzt werden.

**Empfehlung zu den Schriften:** Solange Google Fonts über das CDN geladen wird,
geht bei jedem Seitenaufruf die IP-Adresse der Besucher an Google — deshalb der
eigene Abschnitt in der Datenschutzerklärung. Sauberer ist Selbsthosten: die
Schriftdateien von [gwfh.mranftl.com](https://gwfh.mranftl.com) als woff2 laden,
nach `assets/fonts/` legen, in `assets/css/style.scss` per `@font-face`
einbinden und die beiden `<link>`-Zeilen zu Google in `_includes/head.html`
löschen. Danach kann der Google-Fonts-Abschnitt in der Datenschutzerklärung raus.

Bevor die Seite live geht: Angaben in `_data/legal.yml` vervollständigen und im
Zweifel anwaltlich prüfen lassen — insbesondere die Frage, ob die Seite als rein
privat oder als geschäftsmäßig gilt. Bei beruflicher Positionierung wird meist
von geschäftsmäßig ausgegangen.

## Umstieg vom bisherigen Repository

Dieses Projekt ersetzt die bisherige Seite vollständig; es ist kein Add-on mehr.
Empfohlener Weg: neuen Branch anlegen, den alten Inhalt bis auf `CNAME` und
`assets/img/` entfernen, dieses Projekt hineinlegen, lokal prüfen, dann mergen.

`CNAME` ist hier nicht enthalten — die Datei aus dem bestehenden Repository
unbedingt übernehmen, sonst zeigt die Domain ins Leere.

## Zwei Dinge, über die man streiten kann

**Der Claim „Ich baue Dinge, die lange halten.“** Bewusst kein SAP-Satz. Wenn das
zu weit weg vom Beruflichen ist, wäre die Alternative der eigene Satz von der
bisherigen Seite — „Aus Daten bessere Entscheidungen machen“ — der steht aktuell
als Zitat weiter unten. Beides liegt in `_data/profile.yml` bzw.
`_data/analytics.yml` und ist in einer Minute getauscht.

**Die Reihenfolge.** Analytics steht vorn, weil die meisten Besucher beruflich
kommen. Soll die Seite eher Bühne als Visitenkarte sein, in `_layouts/home.html`
die beiden Include-Zeilen tauschen und in `_data/nav.yml` die Nummern anpassen —
die Farblogik funktioniert in jeder Reihenfolge.
