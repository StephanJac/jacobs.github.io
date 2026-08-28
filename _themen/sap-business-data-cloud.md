---
title: "SAP Business Data Cloud"
layout: thema
permalink: /themen/sap-business-data-cloud/
seo_title: "SAP Business Data Cloud – Architektur, Migration, Datenprodukte | Stephan Jacobs"
description: >-
  SAP Analytics Cloud, Datasphere, BW und Databricks in einer verwalteten Datenbasis.
  Wie ich Ausgangslagen bewerte, Zielarchitekturen entwerfe und Migrationen aus BW
  und BusinessObjects aufsetze – bis zum KI-fähigen Datenprodukt.
keywords:
  - SAP Business Data Cloud
  - BDC Migration
  - SAP BW Nachfolger
  - SAP Datasphere Beratung

sections:

  - type: hero
    eyebrow: "Plattformebene"
    title: "SAP Business Data Cloud"
    lead: >-
      **Eine Datenbasis für Reporting, Planung und KI.** Die Business Data Cloud bündelt
      SAP Analytics Cloud, SAP Datasphere, SAP BW und SAP Databricks zu einer von SAP
      verwalteten Datenbasis. Der schwierige Teil ist aus meiner Erfahrung nie die Technik –
      sondern die Entscheidung, was aus der heutigen Landschaft mitkommt, was ersetzt wird
      und was endlich wegfällt.
    buttons:
      - label: "Die Bausteine"
        url: "#bausteine"
      - label: "Unterschied zu Embedded Analytics"
        url: /themen/s4hana-embedded-analytics/#abgrenzung
        style: secondary

  - type: cards
    bg: tint
    eyebrow: "Für wen diese Seite ist"
    title: "Drei Ausgangslagen"
    intro: "In den Gesprächen, die ich führe, ist es fast immer genau eine dieser drei."
    columns: 3
    items:
      - label: "Bestand"
        title: "„Unser SAP BW läuft noch.“"
        body:
          - >-
            Es wurde investiert, es funktioniert – aber der Weg nach vorn ist unklar. Zu
            bewerten ist, was als BW (Private Cloud Edition) weiterlebt, was nach Datasphere
            wandert und was besser gar nicht erst migriert wird.
      - label: "Transformation"
        title: "„Wir gehen nach S/4HANA.“"
        body:
          - >-
            Konzernkonsolidierung, Planung, Historie, Nicht-SAP-Quellen: alles, was Embedded
            Analytics bewusst nicht abdeckt – und was im Projekt trotzdem gebraucht wird.
      - label: "Fragmentierung"
        title: "„Unsere Daten liegen überall.“"
        body:
          - >-
            SAP, Non-SAP, Excel-Inseln, drei Wahrheiten pro Kennzahl. Es fehlt die
            semantische Schicht, die daraus eine gemeinsame Sprache macht.

  - type: cards
    id: bausteine
    eyebrow: "Bausteine"
    title: "Was in der Business Data Cloud steckt"
    columns: 2
    items:
      - label: "Analyse & Planung"
        title: "SAP Analytics Cloud (inkl. Planning)"
        body:
          - >-
            Dashboards, Ad-hoc-Analysen und integrierte Planung auf einer Oberfläche. Planung
            und Reporting greifen auf dasselbe Modell zu – die Forecast-Abweichung erklärt
            sich in derselben Sicht, in der sie auffällt.
          - >-
            Dazu kollaborative Planungsprozesse, Simulationen und Automatisierung
            wiederkehrender Planungsschritte.
      - label: "Modellierung"
        title: "SAP Datasphere"
        body:
          - >-
            Der Business Data Fabric der Landschaft: Modellierung, Föderation und
            Harmonisierung über SAP- und Nicht-SAP-Quellen, ohne alles physisch zu kopieren.
          - "Ihre Definition von „Umsatz“ wird hier einmal festgelegt – und überall genutzt."
      - label: "Bestand"
        title: "SAP BW (Private Cloud Edition)"
        body:
          - >-
            Ihr bestehendes BW ist kein Auslaufmodell, sondern ein Baustein. Bewährte Modelle
            laufen weiter und werden schrittweise eingebunden, statt in einem Big Bang ersetzt
            zu werden.
      - label: "Data Science"
        title: "SAP Databricks"
        body:
          - >-
            Für alles jenseits von klassischem Reporting: große Datenmengen, Data Science,
            Machine Learning – auf denselben Geschäftsdaten, ohne Export in eine Parallelwelt.

  - type: cards
    id: fokus-aufbau
    bg: tint
    eyebrow: "Fokusthemen · Aufbau und Nutzung"
    title: "Woran ich in BDC-Projekten arbeite"
    columns: 2
    items:
      - label: "Fokusthema 01"
        title: "Aufbau der Analytics-Landschaft"
        body:
          - >-
            Die Business Data Cloud ist kein Produkt, das man installiert – sie ist eine
            Architekturentscheidung. Welche Daten liegen wo, wo wird die Semantik definiert,
            wie greifen Berechtigungen, welche Spaces und Datenflüsse gibt es, wie spielt das
            mit S/4HANA zusammen?
          - >-
            Vor dem ersten Dashboard steht ein Zielbild, das den zweiten und dritten
            Ausbauschritt schon kennt.
        meta: "Ergebnis: Zielarchitektur, Space- und Berechtigungskonzept, Ausbaureihenfolge."
      - label: "Fokusthema 02"
        title: "Datenprodukte & Intelligente Applikationen – was das BDC Cockpit hergibt"
        body:
          - >-
            Ich gehe das Cockpit modulweise durch, sichte den verfügbaren Bestand und
            bewerte pro Anforderung: Standard-Datenprodukt nutzen, erweitern oder selbst
            modellieren.
          - >-
            Der Reiz liegt in der Geschwindigkeit. Das Risiko darin, den Bestand nicht zu
            kennen und parallel nachzubauen.
        meta: "Ergebnis: Abgleich Ihrer Anforderungen gegen den Standard, Empfehlung je Anforderung."
      - label: "Fokusthema 03"
        title: "AI-Funktionalitäten in der BDC evaluieren"
        body:
          - >-
            Zwischen „KI ist eingebaut“ und „KI liefert hier einen Nutzen“ liegt eine
            Bewertung, die einem niemand abnimmt. Ich prüfe die AI-Funktionen gegen konkrete
            Fragestellungen: Was ist heute produktiv nutzbar, was ist Roadmap, was scheitert
            an der Datenqualität und nicht am Modell.
        meta: "Ergebnis: bewertete Use-Case-Liste mit Reifegrad und Voraussetzungen."
      - label: "Fokusthema 04"
        title: "BTP wird zur SAP Business AI Platform"
        body:
          - >-
            Auf der Sapphire 2026 hat SAP die Zusammenführung von SAP Business Technology
            Platform, SAP Business Data Cloud und AI Foundation zur **SAP Business AI Platform
            (BAIP)** angekündigt. Für laufende Investitionen ändert sich zunächst nichts – für
            Architekturentscheidungen, die Sie heute treffen, sehr wohl.
          - "Ich ordne den Stand ein und leite ab, was er für eine konkrete Landschaft heißt."
        meta: "Ergebnis: Einordnung, Auswirkungsanalyse auf Ihre Roadmap."

  - type: cards
    id: fokus-transformation
    eyebrow: "Fokusthemen · Transformation und Planung"
    title: "Die drei häufigsten Wege in die BDC"
    columns: 3
    items:
      - label: "Fokusthema 05"
        title: "SAP BW → BDC, mit SAP Datasphere"
        body:
          - >-
            Ich bewerte die BW-Modelle nach Nutzung, Pflegeaufwand und fachlicher Relevanz
            und ordne jedes einem Weg zu: weiterbetreiben als Private Cloud Edition, nach
            Datasphere überführen, neu modellieren oder abschalten.
          - >-
            Migration ist dabei die Ausnahme, nicht die Regel – die meisten Modelle sind
            gewachsen, nicht entworfen.
      - label: "Fokusthema 06"
        title: "SAP BusinessObjects → BDC, mit SAP Analytics Cloud"
        body:
          - >-
            Eine eigene Zielgruppe mit eigener Ausgangslage – und meist der größeren Zahl an
            Berichten. Bestandsaufnahme, Nutzungsmessung, Entscheidung je Bericht: in SAC neu
            denken, in ein Datenprodukt überführen oder streichen.
          - "Nachbauen wäre der teuerste denkbare Weg."
      - label: "Fokusthema 07"
        title: "SAC Planung über mehrere Streams"
        body:
          - >-
            Planung scheitert selten am Werkzeug, meistens an den Schnittstellen: Vertrieb,
            Personal, Investitionen und Finanzen planen getrennt und führen am Ende manuell
            zusammen.
          - >-
            Der Hebel liegt in der integrierten Planung über die Streams hinweg – und darin,
            den Planungsprozess vorher zu entwerfen, statt den bestehenden nur zu
            digitalisieren.

  - type: table
    bg: tint
    eyebrow: "Vorgehen"
    title: "Von der Bestandsaufnahme zum Betrieb"
    head: ["Phase", "Inhalt", "Ergebnis"]
    rows:
      - cells:
          - "1 · Discovery"
          - "Landschaft, Reporting und Nutzung aufnehmen. Welche Reports werden tatsächlich gelesen?"
          - "Bestands- und Nutzungsbild"
      - cells:
          - "2 · Zielbild"
          - "Architektur, Datenflüsse, Semantikschicht, Rollen und Berechtigungen"
          - "Zielarchitektur, Entscheidungsvorlage"
      - cells:
          - "3 · Roadmap"
          - "Schnittfolge, Abhängigkeiten zum S/4HANA-Fahrplan, Lizenz- und Kapazitätsbedarf"
          - "Priorisierte Roadmap mit Aufwandsrahmen"
      - cells:
          - "4 · Implementierung"
          - "Umsetzung in Inkrementen – jedes mit einem sichtbaren Ergebnis für den Fachbereich"
          - "Produktive Datenprodukte und Dashboards"
      - cells:
          - "5 · Betrieb & Ausbau"
          - "Application Management, Enablement, Weiterentwicklung"
          - "Stabiler Betrieb, eigenständige Fachbereiche"
    outro: >-
      Eine belastbare Schätzung entsteht erst nach Phase 2 – SAC, Datasphere und Databricks
      werden einzeln bewertet. Wer vorher eine Zahl nennt, nennt eine Hausnummer.

  - type: list
    eyebrow: "Ehrliche Eingrenzung"
    title: "Passt das zu Ihnen?"
    items:
      - title: "Cloudfähigkeit ist vorhanden."
        text: "Es gibt eine Cloud-Strategie oder zumindest die ernsthafte Bereitschaft dazu."
      - title: "Die Landschaft ist SAP-orientiert."
        text: "Der Mehrwert ist am größten, wenn SAP der Kern Ihrer Geschäftsprozesse ist."
      - title: "Sie sind bereit, Reporting aufzuräumen."
        text: >-
          Wer 800 Berichte 1:1 mitnimmt, hat danach 800 Berichte in der Cloud – und dasselbe
          Problem zu höheren Betriebskosten.
    outro: >-
      Trifft das nicht zu, sage ich das auch – und schaue mir Nicht-SAP-Alternativen offen an.

  - type: faq
    bg: tint
    eyebrow: "Häufige Fragen"
    title: "Was Kunden vorher wissen wollen"
    intro: "Als FAQPage ausgezeichnet – die Fragen entsprechen realen Suchanfragen."
    items:
      - q: "Ist die SAP Business Data Cloud der Nachfolger von SAP BW?"
        a: >-
          Nicht im Sinne einer Ablösung. BW kann als Private Cloud Edition Teil der Business
          Data Cloud bleiben. Ob das der richtige Weg ist, hängt von Modellreife,
          Wartungsaufwand und Zielarchitektur ab – genau die Frage, die eine
          Bestandsaufnahme beantwortet.
      - q: "Brauche ich SAP Datasphere, wenn ich schon SAP Analytics Cloud nutze?"
        a: >-
          Nur wenn Sie Daten aus mehreren Quellen harmonisieren oder eine gemeinsame
          Semantikschicht brauchen. Für reines Reporting auf einer Quelle reicht SAC.
      - q: "Wie lange dauert eine Einführung?"
        a: >-
          Ein erstes produktives Datenprodukt in Wochen, eine vollständige Zielarchitektur je
          nach Landschaft in Quartalen. Sinnvoll geschnitten ist so, dass nach jedem
          Inkrement etwas nutzbar ist.
      - q: "Was passiert mit unseren SAP BusinessObjects-Berichten?"
        a: >-
          Sie werden bewertet, nicht automatisch migriert. Erfahrungsgemäß entfällt ein
          erheblicher Teil ersatzlos, der Rest wird in SAC neu gedacht statt nachgebaut.
      - q: "Und wenn Microsoft Power BI im Einsatz ist?"
        a: >-
          Kein Widerspruch. Datasphere kann Daten bereitstellen, die anderswo visualisiert
          werden. Das lässt sich offen bewerten – auch gegen SAP.

  - type: cta
    bg: dark
    title: "Erst das Zielbild, dann das Budget."
    text: >-
      Über Architekturfragen zur Business Data Cloud diskutiere ich gerne – auch dann,
      wenn am Ende ein anderer Weg der richtige ist.
    buttons:
      - label: "Auf LinkedIn schreiben"
        url: "https://www.linkedin.com/in/stephan-jacobs-656700149/"
      - label: "Zu Embedded Analytics"
        url: /themen/s4hana-embedded-analytics/
        style: secondary
---
