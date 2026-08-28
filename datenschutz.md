---
layout: legal
title: "Datenschutzerklärung"
eyebrow: "Rechtliches"
description: "Wie diese Website mit personenbezogenen Daten umgeht."
hinweis: >-
  Diese Erklärung ist eine Vorlage, kein Rechtsrat. Sie beschreibt genau die
  Technik, die in diesem Projekt tatsächlich eingesetzt wird — wenn du etwas
  hinzufügst (Analytics, Kontaktformular, Newsletter, weitere Einbettungen), muss
  sie ergänzt werden. Besonders relevant: Solange die Schriften über Google Fonts
  geladen werden, ist der entsprechende Abschnitt Pflicht. Selbst hosten ist der
  sauberere Weg, siehe README.
sitemap: false
---

{% assign l = site.data.legal %}

## Verantwortlicher

{{ l.name }}<br>
{% include legal-field.html value=l.strasse label="Straße und Hausnummer" %}<br>
{% include legal-field.html value=l.plz_ort label="PLZ und Ort" %}<br>
E-Mail: {% include legal-field.html value=l.email label="E-Mail-Adresse" %}

## Kurzfassung

Diese Website ist eine statische Seite. Es gibt kein Kontaktformular, keine
Registrierung, keine Cookies, kein Tracking und keine Reichweitenmessung. Es
werden keine Nutzerprofile erstellt. Personenbezogene Daten fallen an drei
Stellen an: beim Aufruf der Seite durch den Hoster, beim Laden der Schriftarten
und — nur wenn du es aktiv anstößt — beim Abspielen eines Videos.

## Hosting und Server-Logfiles

Die Seite wird gehostet bei {{ l.hoster_name }}, {{ l.hoster_adresse }}. Beim
Aufruf der Seite verarbeitet der Hoster technisch notwendige Daten, darunter die
IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Datei sowie
Browser- und Betriebssysteminformationen. Diese Verarbeitung ist zum Betrieb
einer Website technisch erforderlich.

Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — das berechtigte Interesse an
einer technisch fehlerfreien Darstellung und Sicherheit der Seite. Da der Hoster
seinen Sitz in den USA hat, kann eine Übermittlung in ein Drittland stattfinden.

Datenschutzhinweise des Hosters: [{{ l.hoster_datenschutz }}]({{ l.hoster_datenschutz }})

## Schriftarten (Google Fonts)

Diese Seite bindet Schriftarten über Google Fonts ein. Dabei stellt dein Browser
eine Verbindung zu Servern von Google her, wobei deine IP-Adresse an Google
übermittelt wird. Anbieter ist Google Ireland Limited, Gordon House, Barrow
Street, Dublin 4, Irland.

Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — das berechtigte Interesse an
einer einheitlichen Darstellung der Seite.

Weitere Informationen: [policies.google.com/privacy](https://policies.google.com/privacy)

## Videos von YouTube

Auf der Startseite sind Videos der Band The Royal Flash eingebunden. Die Videos
werden **nicht automatisch geladen**. Sichtbar ist zunächst nur ein Vorschaubild.
Erst wenn du auf ein Video klickst, wird eine Verbindung zu YouTube aufgebaut und
das Video geladen. Ohne diesen Klick werden keine Daten an YouTube übertragen.

Die Einbindung erfolgt über den erweiterten Datenschutzmodus
(`youtube-nocookie.com`). Anbieter ist Google Ireland Limited, Gordon House,
Barrow Street, Dublin 4, Irland. Nach dem Klick verarbeitet YouTube unter anderem
deine IP-Adresse; bist du in deinem YouTube-Konto eingeloggt, kann der Aufruf
deinem Konto zugeordnet werden.

Rechtsgrundlage für das Laden nach deinem Klick ist Art. 6 Abs. 1 lit. a DSGVO —
deine Einwilligung, die du durch den Klick erteilst.

Weitere Informationen: [policies.google.com/privacy](https://policies.google.com/privacy)

## Bilder von externen Servern

Einzelne Bilder werden von
[the-royal-flash.de]({{ site.data.profile.band_url }}) und
[stephanjacobs.de](https://www.stephanjacobs.de) geladen. Dabei wird deine
IP-Adresse an den jeweiligen Server übermittelt. Rechtsgrundlage ist Art. 6 Abs.
1 lit. f DSGVO.

## Links zu sozialen Netzwerken

Die Seite verlinkt auf LinkedIn, Instagram, YouTube und Facebook. Es handelt sich
um **einfache Links, keine Plugins**. Es werden keine Daten an diese Dienste
übertragen, solange du den Link nicht anklickst. Erst danach gelten die
Datenschutzbestimmungen des jeweiligen Anbieters.

## Kontaktaufnahme per E-Mail

Wenn du mich per E-Mail kontaktierst, werden deine Angaben zur Bearbeitung der
Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
vertragsbezogenen Anfragen, sonst Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden
gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine
gesetzlichen Aufbewahrungspflichten entgegenstehen.

## Deine Rechte

Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und
Datenübertragbarkeit (Art. 20 DSGVO).

**Widerspruchsrecht:** Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO
beruht, kannst du der Verarbeitung jederzeit widersprechen (Art. 21 DSGVO). Eine
erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.

Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu
(Art. 77 DSGVO). Zuständig ist in der Regel die Behörde deines Bundeslandes oder
die des Verantwortlichen.

## Verschlüsselung

Diese Seite wird über HTTPS ausgeliefert. Die Übertragung zwischen deinem Browser
und dem Server ist damit verschlüsselt.
