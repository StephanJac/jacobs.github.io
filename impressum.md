---
layout: legal
title: "Impressum"
eyebrow: "Rechtliches"
description: "Impressum von stephanjacobs.de nach § 5 DDG."
hinweis: >-
  Dieses Impressum ist eine Vorlage, kein Rechtsrat. Bitte die Angaben
  vervollständigen und im Zweifel anwaltlich prüfen lassen — insbesondere die
  Frage, ob die Seite als rein privat oder als geschäftsmäßig einzuordnen ist.
  Bei geschäftsmäßigen Angeboten gelten strengere Anforderungen.
sitemap: false
---

{% assign l = site.data.legal %}

## Angaben gemäß § 5 DDG

{{ l.name }}<br>
{% include legal-field.html value=l.strasse label="Straße und Hausnummer" %}<br>
{% include legal-field.html value=l.plz_ort label="PLZ und Ort" %}<br>
{{ l.land }}

## Kontakt

**E-Mail:** {% include legal-field.html value=l.email label="E-Mail-Adresse" %}
{% if l.telefon and l.telefon != "" %}
**Telefon:** {{ l.telefon }}
{% endif %}

## Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV

{{ l.verantwortlich }}<br>
{% include legal-field.html value=l.strasse label="Straße und Hausnummer" %}<br>
{% include legal-field.html value=l.plz_ort label="PLZ und Ort" %}

{% if l.ust_id and l.ust_id != "" %}
## Umsatzsteuer-Identifikationsnummer

Gemäß § 27 a Umsatzsteuergesetz: {{ l.ust_id }}
{% endif %}

## Verbraucherstreitbeilegung

Ich bin nicht verpflichtet, an Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle teilzunehmen, und dazu auch nicht bereit.

## Haftung für Inhalte

Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin
ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
den allgemeinen Gesetzen bleiben davon unberührt. Eine diesbezügliche Haftung ist
jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entferne ich diese
Inhalte umgehend.

## Haftung für Links

Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine
Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
Anbieter oder Betreiber der Seiten verantwortlich.

Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht
erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
von Rechtsverletzungen entferne ich derartige Links umgehend.

## Urheberrecht

Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
Gebrauch gestattet.

Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden
von Rechtsverletzungen entferne ich derartige Inhalte umgehend.

{% if l.bildnachweise and l.bildnachweise != "" %}
## Bildnachweise

{{ l.bildnachweise }}
{% endif %}

## Fotos und Inhalte Dritter

Aufnahmen der Band **The Royal Flash** stammen von
[the-royal-flash.de]({{ site.data.profile.band_url }}). Videos werden über
YouTube eingebunden und erst nach ausdrücklichem Klick geladen — Details dazu in
der [Datenschutzerklärung]({{ '/datenschutz/' | relative_url }}).
