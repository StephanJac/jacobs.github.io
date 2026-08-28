---
title: "S/4HANA Embedded Analytics"
layout: thema
permalink: /themen/s4hana-embedded-analytics/
seo_title: "SAP S/4HANA Embedded Analytics – CDS Views, Fiori Apps, Reporting | Stephan Jacobs"
description: >-
  Reporting direkt im S/4HANA-Prozess statt daneben: bestehende Reports gegen den
  SAP-Standard bewerten, CDS Views und analytische Fiori Apps entwickeln – im Projekt
  und nach dem Go-live.
keywords:
  - SAP Embedded Analytics
  - CDS Views
  - analytische Fiori Apps
  - S/4HANA Reporting
  - WRICEF Typ R

sections:

  - type: hero
    eyebrow: "Prozessebene"
    title: "S/4HANA Embedded Analytics"
    lead: >-
      **Insights an der Stelle, an der entschieden wird.** Die Kennzahl gehört dorthin, wo
      gehandelt wird – in die Anwendung, nicht in ein Dashboard, das man erst öffnen muss.
      Embedded Analytics wertet Live-Daten direkt aus S/4HANA aus, ohne Umweg über ein
      Data Warehouse.
    buttons:
      - label: "Die beiden Ausgangslagen"
        url: "#fokusthemen"
      - label: "Embedded oder Business Data Cloud?"
        url: "#abgrenzung"
        style: secondary

  - type: quote
    bg: dark
    quote: "Jedes S/4HANA-Projekt braucht einen eigenen Reporting-Stream. Und zwar jedes."
    body:
      - >-
        Reporting ist der Bereich, der in Migrationsprojekten am zuverlässigsten unterschätzt
        wird. Prozesse werden sauber neu gedacht – und die Berichte sollen „irgendwie
        mitkommen“. Das Ergebnis sind Custom-Reports, die man in S/4HANA nie hätte bauen
        müssen, und ein Fachbereich, der nach Go-live nichts wiederfindet.

  - type: cards
    eyebrow: "Herausforderungen"
    title: "Woran es im Projekt regelmäßig scheitert"
    columns: 2
    items:
      - label: "Transparenz"
        title: "Niemand weiß, welche Reports gebraucht werden"
        body:
          - "Die Liste aus dem ECC hat 600 Einträge. Die Nutzungsstatistik erzählt eine völlig andere Geschichte."
      - label: "Technische Schuld"
        title: "Custom Code wird ungeprüft fortgeschrieben"
        body:
          - "Vieles davon deckt der SAP-Standard heute mit einer Fiori App ab – nur schaut niemand nach."
      - label: "Organisation"
        title: "Der Fachbereich wartet auf die IT"
        body:
          - "Für jede neue Sicht ein Ticket. Bei 40 Fachbereichen skaliert das nicht."
      - label: "Realität"
        title: "Excel bleibt das eigentliche Reportingtool"
        body:
          - >-
            Weil der Weg dahin kürzer ist als der zum offiziellen Bericht. Das ist kein
            Disziplinproblem, sondern ein Designproblem.

  - type: cards
    id: fokusthemen
    bg: tint
    eyebrow: "Fokusthemen"
    title: "Zwei Situationen, zwei Einstiege"
    intro: >-
      Die Trennung lohnt sich: Die zweite Gruppe ist größer, hat bereits ein Budget – und
      wird selten adressiert.
    columns: 2
    items:
      - label: "Fokusthema 08 · im Projekt"
        title: "Aufbau des operativen Reportings im S/4HANA-Projekt"
        body:
          - >-
            Der Reporting-Stream im laufenden Transformationsprojekt: von der Report-Inventur
            über den Standard-Fit bis zur Realisierung – parallel zu den Prozess-Streams,
            damit Kennzahlen und Prozesse zusammen entstehen und nicht nacheinander.
          - "**Wer Reporting ans Ende schiebt, baut zweimal.**"
        meta: "Typischer Auslöser: Konzeptionsphase, WRICEF-Aufnahme, Cutover-Planung."
      - label: "Fokusthema 09 · nach Go-live"
        title: "Optimierung des Reportings nach dem Go-live"
        body:
          - >-
            Sie sind live – und das Reporting ist der Teil, mit dem niemand zufrieden ist.
            Nutzer finden ihre Zahlen nicht, Custom-Reports wurden 1:1 aus dem ECC mitgenommen,
            die Performance ist schlecht, Excel hat wieder übernommen.
          - >-
            Ist-Zustand aufnehmen, die tatsächliche Nutzung messen und entlang der Prozesse
            aufräumen: Standard nutzen, wo er inzwischen trägt, CDS Views konsolidieren,
            Custom Code reduzieren, Key User befähigen.
        meta: "Typischer Auslöser: erster Jahresabschluss nach Go-live, Performance-Beschwerden, anstehendes Upgrade."

  - type: cards
    eyebrow: "Leistungen"
    title: "Was wir konkret machen"
    columns: 2
    items:
      - label: "Analyse"
        title: "WRICEF-Analyse (Typ R) gegen den Standard"
        body:
          - >-
            Bestehende Reports aufnehmen und den Standard-Fiori-Apps sowie dem virtuellen
            Datenmodell gegenüberstellen. Für jeden Report eine Entscheidung: Standard nutzen,
            anpassen, neu bauen – oder streichen.
          - >-
            Das Ergebnis ist eine belastbare Grundlage für die Schätzung in Konzeption und
            Realisierung.
      - label: "Entwicklung"
        title: "Virtual Data Model / CDS Views"
        body:
          - >-
            Wo der Standard nicht reicht, entstehen CDS Views entlang des SAP-Datenmodells –
            clean-core-konform, upgrade-sicher und wiederverwendbar statt als Einzelanfertigung.
      - label: "Oberfläche"
        title: "Analytische Fiori Apps"
        body:
          - >-
            Overview Pages, Analytical List Pages und KPI-Kacheln direkt im Arbeitsplatz des
            Nutzers. Vom auffälligen Wert per Klick in die auslösende Belegposition – ohne
            Systemwechsel.
      - label: "Excel"
        title: "Analysis for Office Workbooks"
        body:
          - >-
            Weil der Controller Excel nicht aufgeben wird – und auch nicht muss. AfO auf
            denselben CDS Views: gleiche Zahl, gleiche Definition, vertraute Oberfläche.
      - label: "Anbindung"
        title: "Live-Verbindung zur SAP Analytics Cloud"
        body:
          - >-
            Dort, wo operatives Reporting an strategische Auswertungen andocken soll.
            Ein Datenmodell, zwei Nutzungsarten.
      - label: "Voraussetzung"
        title: "Was Sie mitbringen müssen"
        body:
          - >-
            Ein S/4HANA-System – public, private oder on premise – und einen Fiori-Ansatz.
            Mehr nicht. Deshalb kommt Embedded Analytics in praktisch jedem S/4HANA-Vorhaben
            zum Tragen.

  - type: table
    id: abgrenzung
    variant: compare
    eyebrow: "Die meistgestellte Frage"
    title: "Embedded Analytics oder Business Data Cloud?"
    intro: "Die Antwort lautet meistens: beides – für Unterschiedliches."
    head: ["", "Embedded Analytics", "Business Data Cloud"]
    rows:
      - cells: ["Frage", "Was passiert gerade?", "Wie entwickelt sich das Geschäft?"]
      - cells: ["Datenbasis", "Live aus S/4HANA", "Konsolidiert über alle Quellen"]
      - cells: ["Zeithorizont", "Echtzeit, operativ", "Historie, Trend, Planung"]
      - cells: ["Nutzer", "Sachbearbeitung, operative Führung", "Controlling, Management, Fachbereichsanalyse"]
      - cells: ["Typische Frage", "„Welche Aufträge hängen heute?“", "„Wie war die Marge über drei Jahre je Region?“"]
      - cells: ["Nicht-SAP-Daten", "Nein", "Ja"]
      - cells: ["Planung", "Nein", "Ja, über SAC Planning"]
    outro: >-
      Wer nur Embedded Analytics baut, stößt beim ersten Konzernbericht an die Grenze. Wer nur
      die Business Data Cloud baut, lässt die operative Steuerung ungenutzt. Beide Ebenen
      gehören zusammen entworfen – darum geht es auf der Ebene darüber.
    buttons:
      - label: "Zur Business Data Cloud"
        url: /themen/sap-business-data-cloud/
        style: secondary
      - label: "Zur Strategieebene"
        url: /themen/data-und-analytics/
        style: secondary

  - type: steps
    bg: tint
    eyebrow: "Vorgehen"
    title: "Von der Inventur zur eigenständigen Nutzung"
    items:
      - title: "Report-Inventur"
        text: "Was existiert, was wird genutzt, was kostet Pflege? Zahlen statt Bauchgefühl."
      - title: "Standard-Fit"
        text: "Gegenüberstellung mit Standard-Fioris und dem virtuellen Datenmodell."
      - title: "Zielbild & Schätzung"
        text: "Entscheidung je Objekt – daraus entsteht die Aufwandsschätzung für Typ R."
      - title: "Realisierung"
        text: "CDS Views, Fiori Apps und AfO-Workbooks im Projekttakt."
      - title: "Enablement"
        text: "Key User befähigen, eigene Sichten zu bauen – statt Tickets zu schreiben."

  - type: faq
    eyebrow: "Häufige Fragen"
    title: "Kurz beantwortet"
    items:
      - q: "Ersetzt Embedded Analytics unser Data Warehouse?"
        a: >-
          Für operative Auswertungen auf S/4HANA-Daten ja. Für Konzernkonsolidierung, Historie
          über Systemgrenzen hinweg und Planung nicht.
      - q: "Funktioniert das auch in der Public Cloud?"
        a: >-
          Ja. Dort arbeiten Sie mit Standard-CDS-Views und Erweiterungen im Rahmen des
          Clean-Core-Ansatzes – das ist eine Einschränkung des Wie, nicht des Ob.
      - q: "Was passiert mit unseren ABAP-Reports?"
        a: >-
          Sie werden bewertet. Ein erheblicher Teil hat im Standard bereits ein Gegenstück,
          ein weiterer Teil wird schlicht nicht mehr genutzt.
      - q: "Brauchen wir dafür SAP Analytics Cloud?"
        a: >-
          Nein. Embedded Analytics läuft eigenständig. SAC kommt dazu, wenn Visualisierung,
          Planung oder Quellenübergreifendes gefragt sind.

  - type: cta
    bg: dark
    title: "Wie viele der bestehenden Reports braucht S/4HANA wirklich?"
    text: >-
      Meine Erfahrung: deutlich weniger, als die Liste aus dem Altsystem vermuten lässt.
      Über Reporting-Streams in Migrationsprojekten tausche ich mich gerne aus.
    buttons:
      - label: "Auf LinkedIn schreiben"
        url: "https://www.linkedin.com/in/stephan-jacobs-656700149/"
      - label: "Zur Business Data Cloud"
        url: /themen/sap-business-data-cloud/
        style: secondary
---
