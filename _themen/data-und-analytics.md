---
layout: thema
title: "Data & Analytics"
permalink: /themen/data-und-analytics/
seo_title: "Data & Analytics – drei Ebenen, ein Zielbild | Stephan Jacobs"
description: >-
  Wie ich Analytics-Vorhaben einordne: Strategie, Plattform, Prozess.
  Über Zielbilder, Health-Checks und die Frage, wo man sinnvoll anfängt.
keywords:
  - SAP Analytics
  - Datenstrategie
  - Analytics Architektur
  - SAP Data und Analytics

sections:

  - type: hero
    eyebrow: "Mein Ansatz"
    title: "Daten sind kein Projekt. Entscheidungen schon."
    lead: >-
      Die meisten Unternehmen, die ich sehe, haben keinen Datenmangel – sie haben ein
      Zugriffsproblem. Analytics gehört dorthin, wo entschieden wird: in den Prozess.
      Diese Seite beschreibt, wie ich Vorhaben einordne, bevor über Werkzeuge geredet wird.
    buttons:
      - label: "Die drei Ebenen"
        url: "#ebenen"
      - label: "Über den Austausch"
        url: "#austausch"
        style: secondary

  - type: cards
    bg: tint
    eyebrow: "Ausgangslage"
    title: "Was mir immer wieder begegnet"
    columns: 3
    items:
      - label: "Nutzung"
        title: "Analytics steht neben der Landschaft"
        body:
          - >-
            Dashboards existieren, aber niemand nutzt sie im Tagesgeschäft – weil sie
            außerhalb des Prozesses leben.
      - label: "Architektur"
        title: "Das BW läuft aus"
        body:
          - >-
            Der Wartungshorizont ist gesetzt, die Zielarchitektur nicht. Und jede Woche
            Warten macht die Entscheidung teurer.
      - label: "Kalkulation"
        title: "Migration wirkt unkalkulierbar"
        body:
          - >-
            Jede Schätzung hängt an Entscheidungen, die noch keiner getroffen hat.
            Also wird sie verschoben.
      - label: "Geschwindigkeit"
        title: "Zahlen kommen zu spät"
        body:
          - >-
            Bis der Report steht, ist die Entscheidung längst gefallen – meistens aus
            dem Bauch.
      - label: "KI"
        title: "KI bleibt Folie"
        body:
          - >-
            Use Cases werden diskutiert, aber die Datenbasis trägt sie nicht. Der Pilot
            scheitert nicht am Modell.
      - label: "Organisation"
        title: "Der Fachbereich wartet auf die IT"
        body:
          - >-
            Für jede neue Sicht ein Ticket. Das skaliert nicht – und endet in Excel.

  - type: layers
    id: ebenen
    eyebrow: "Einordnung"
    title: "Drei Ebenen, ein Zielbild"
    intro: >-
      Fast jede Analytics-Frage lässt sich einer dieser drei Ebenen zuordnen. Sie bauen
      aufeinander auf, aber man muss nicht oben anfangen: Die meisten Vorhaben starten
      dort, wo der Druck am größten ist. Wichtig ist nur, dass die anderen beiden Ebenen
      dabei nicht verbaut werden.
    items:
      - tier: "Strategie"
        ask: "Wohin?"
        title: "Zielbild und Roadmap"
        claim: "Was soll die Landschaft in drei Jahren können – und was ausdrücklich nicht?"
        chips: ["Zielbild", "Roadmap", "AI Use Cases", "Lizenzfragen"]
      - tier: "Plattform"
        ask: "Woher?"
        title: "SAP Business Data Cloud"
        claim: "Eine Datenbasis für Reporting, Planung und KI."
        chips: ["SAP Analytics Cloud", "Datasphere", "BW (PCE)", "Databricks"]
        url: /themen/sap-business-data-cloud/
      - tier: "Prozess"
        ask: "Wo genau?"
        title: "S/4HANA Embedded Analytics"
        claim: "Insights an der Stelle, an der entschieden wird."
        chips: ["CDS Views", "Fiori Apps", "WRICEF Typ R", "Analysis for Office"]
        url: /themen/s4hana-embedded-analytics/

  - type: cards
    bg: dark
    id: health-check
    eyebrow: "Standortbestimmung"
    title: "Wie ich eine Analytics-Landschaft bewerte"
    intro: >-
      Bevor über Zielarchitekturen gesprochen wird, hilft ein nüchterner Blick auf das,
      was heute läuft. Sechs Felder, die ich mir dabei ansehe – die Reihenfolge ist
      Absicht, denn die späteren Fragen ergeben ohne die früheren wenig Sinn.
    columns: 3
    items:
      - label: "Feld 1"
        title: "Landschaft & Architektur"
        body: ["Welche Systeme sind im Einsatz, wie hängen sie zusammen, wo liegen Redundanzen?"]
      - label: "Feld 2"
        title: "Reporting-Bestand"
        body: ["Was existiert, was wird tatsächlich genutzt, was ließe sich ersatzlos abschalten?"]
      - label: "Feld 3"
        title: "Datenqualität & Semantik"
        body: ["Gibt es eine gemeinsame Definition der Kennzahlen – oder drei?"]
      - label: "Feld 4"
        title: "Betrieb & Kosten"
        body: ["Was kostet die heutige Landschaft an Lizenz, Betrieb und Pflege wirklich?"]
      - label: "Feld 5"
        title: "AI-Readiness"
        body: ["Trägt die Datenbasis die Use Cases, über die gerade gesprochen wird?"]
      - label: "Feld 6"
        title: "Organisation & Skills"
        body: ["Wer kann heute selbst auswerten – und wer wartet auf ein Ticket?"]

  - type: quote
    bg: tint
    quote: "Analytics ist für mich nicht die Frage, wie wir noch einen Bericht bauen – sondern wie wir aus Daten bessere Entscheidungen machen."
    body:
      - >-
        Deshalb steht am Anfang eines Vorhabens für mich nie die Werkzeugfrage. Sondern
        die, welche Entscheidung heute schlechter getroffen wird, als sie müsste – und
        was ihr dafür fehlt.

  - type: steps
    eyebrow: "Vorgehen"
    title: "Wie ich Vorhaben aufsetze"
    items:
      - title: "Orientierung"
        text: >-
          Bestandsaufnahme statt Produktvergleich. Erst wenn klar ist, was heute läuft,
          lohnt sich die Diskussion über das Ziel.
      - title: "Bewertung"
        text: >-
          Optionen im Vergleich, mit Prototyp statt Foliensatz. Auch wenn ein Nicht-SAP-Weg
          der bessere wäre.
      - title: "Entscheidung"
        text: "Zielbild, Roadmap, Aufwandsrahmen. Ab hier ist klar, was wann Geld kostet."
      - title: "Umsetzung"
        text: "In Inkrementen, jedes mit einem Ergebnis, das der Fachbereich tatsächlich nutzt."
      - title: "Weiterentwicklung"
        text: >-
          Enablement statt Abhängigkeit. Der Erfolg zeigt sich daran, wie viel ohne mich
          weitergeht.
    note_label: "Warum keine Aufwandsangaben"
    note: >-
      Belastbare Schätzungen entstehen erst, wenn die Komponenten feststehen. Alles davor
      ist eine Hausnummer – und Hausnummern sind der Grund, warum Analytics-Budgets
      regelmäßig reißen.

  - type: list
    eyebrow: "Haltung"
    title: "Woran ich Entscheidungen festmache"
    items:
      - title: "Prozess vor Werkzeug."
        text: >-
          Kennzahlen entstehen entlang von Prozessen, nicht daneben. Das ist der Unterschied
          zwischen einem Dashboard und einer Steuerung.
      - title: "Bestand ehrlich bewerten."
        text: >-
          Ein gewachsenes BW ist kein Fehler, den man korrigiert – aber auch keine
          Architektur, die man ungeprüft fortschreibt.
      - title: "Weniger migrieren als man denkt."
        text: >-
          In fast jeder Bestandsaufnahme ist der größte Hebel das, was ersatzlos entfallen
          kann.
      - title: "Fachbereiche befähigen."
        text: >-
          Jede Anforderung, für die ein Ticket nötig ist, ist eine Anforderung, die nicht
          gestellt wird.
      - title: "Über Grenzen hinweg denken."
        text: >-
          Operatives und strategisches Reporting sind zwei Ebenen desselben Zielbilds –
          wer nur eine baut, merkt es beim ersten Konzernbericht.

  - type: cards
    eyebrow: "Weiterlesen"
    title: "Die beiden anderen Ebenen im Detail"
    columns: 2
    items:
      - label: "Plattform"
        title: "SAP Business Data Cloud"
        body:
          - >-
            Architektur, Datenprodukte und die beiden häufigsten Wege dorthin: aus dem BW
            und aus BusinessObjects. Dazu Planung und die Frage, was die Umbenennung von
            BTP zur Business AI Platform bedeutet.
        button:
          label: "Zur Business Data Cloud →"
          url: /themen/sap-business-data-cloud/
      - label: "Prozess"
        title: "S/4HANA Embedded Analytics"
        body:
          - >-
            Operatives Reporting im Prozess – im laufenden S/4HANA-Projekt und danach,
            wenn sich zeigt, dass die Berichte aus dem ECC doch nicht gepasst haben.
        button:
          label: "Zu Embedded Analytics →"
          url: /themen/s4hana-embedded-analytics/
---
