/**
 * STAGE A2 DATA PACK 4 (Levels 2.34 to 2.43 - Chapters K13 to K16)
 * Completes Stage A2 of Linie 1.
 * Focus: Infinitiv mit zu, Relativsätze im Nominativ & Akkusativ, n-Deklination, Partizip I & II als Adjektiv.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsA2_K13toK16 = [
    // -------------------------------------------------------------
    // KAPITEL 13: ZUKUNFT, PLÄNE & INFINITIV MIT ZU
    // -------------------------------------------------------------
    {
      id: "LVL 2.34",
      chapter: "Linie 1 A2 K13",
      title: "Infinitivkonstruktionen mit zu (Grundstruktur)",
      ruleSummary: "Nach bestimmten Verben (versuchen, planen, hoffen, vergessen, vorhaben) und Ausdrücken mit Es ist wichtig/leicht/schwer steht die Infinitivgruppe mit 'zu' am Satzende.",
      example: "Ich habe vor, die Prüfung zu bestehen. Es ist wichtig, den Code zu testen.",
      questions: [
        q("Bhavani plant, dieses Jahr die fortgeschrittene Architektur-Zertifizierung zu _____ .", "machen", ["machen", "macht", "gemacht", "machte"], "Infinitiv mit zu: zu machen", "inf_mit_zu"),
        q("Es ist für das gesamte Team essenziell, die Sicherheitsrichtlinien strikt zu _____ .", "beachten", ["beachten", "beachtet", "beachteten", "beachtet zu haben"], "zu + Infinitiv: zu beachten", "inf_mit_zu"),
        q("Herr Tim versucht, den Kunden von der Cloud-Lösung zu _____ .", "überzeugen", ["überzeugen", "überzeugt", "überzeugte", "überzeugend"], "zu überzeugen", "inf_mit_zu"),
        q("Marco hat leider vergessen, die Dokumentation vor Feierabend zu _____ .", "speichern", ["speichern", "speichert", "gespeichert", "speicherte"], "zu speichern", "inf_mit_zu"),
        q("Wir beabsichtigen, das Deployment noch vor dem Wochenende erfolgreich zu _____ .", "beenden", ["beenden", "beendet", "beendeten", "gebeendet"], "zu beenden", "inf_mit_zu"),
        q("Es ist nicht immer leicht, komplexe architektonische Zusammenhänge einfach zu _____ .", "erklären", ["erklären", "erklärt", "erklärte", "erklärend"], "zu erklären", "inf_mit_zu"),
        q("Frau Weber hofft, bald eine feste Stelle in Darmstadt zu _____ .", "finden", ["finden", "findet", "fand", "gefunden"], "zu finden", "inf_mit_zu"),
        q("Der Entwickler hat versprochen, den Bug bis heute Mittag zu _____ .", "beheben", ["beheben", "behebt", "behob", "behoben"], "zu beheben", "inf_mit_zu"),
        q("Haben Sie heute Zeit, das Ticket gemeinsam mit mir zu _____ ?", "analysieren", ["analysieren", "analysiert", "analysierten", "analysierend"], "zu analysieren", "inf_mit_zu"),
        q("Es macht mir großen Spaß, neue Sprachen wie Deutsch aktiv zu _____ .", "lernen", ["lernen", "lernt", "lernte", "gelernt"], "zu lernen", "inf_mit_zu"),
        q("Wir haben vor, die gesamte Serverlandschaft schrittweise zu _____ .", "modernisieren", ["modernisieren", "modernisiert", "modernisierte", "modernisierend"], "zu modernisieren", "inf_mit_zu"),
        q("Er hat aufgehört, sich über unklare Fehlermeldungen unnötig zu _____ .", "ärgern", ["ärgern", "ärgert", "ärgerte", "geärgert"], "zu ärgern", "inf_mit_zu")
      ]
    },
    {
      id: "LVL 2.35",
      chapter: "Linie 1 A2 K13",
      title: "Infinitiv mit zu bei trennbaren Verben (ein-zu-kaufen)",
      ruleSummary: "Bei trennbaren Verben wird das Element '-zu-' ZWISCHEN das Präfix und den Verbstamm eingefügt: ein-zu-kaufen, vor-zu-bereiten, an-zu-rufen, ab-zu-schließen.",
      example: "Ich habe vor, ihn anzurufen. Wir planen, die Tests vorzubereiten.",
      questions: [
        q("Bhavani hat vor, seinen Vorgesetzten gleich nach dem Standup _____ .", "anzurufen", ["anzurufen", "anrufen zu", "zu anrufen", "angerufen"], "anrufen: an-zu-rufen", "inf_trennbar_zu"),
        q("Vergiss bitte nicht, deinen Rechner vor dem Verlassen des Büros _____ !", "auszuschalten", ["auszuschalten", "ausschalten zu", "zu ausschalten", "ausgeschaltet"], "ausschalten: aus-zu-schalten", "inf_trennbar_zu"),
        q("Herr Tim bittet das Team, die Quartalspräsentation gewissenhaft _____ .", "vorzubereiten", ["vorzubereiten", "vorbereiten zu", "zu vorbereiten", "vorbereitet"], "vorbereiten: vor-zu-bereiten", "inf_trennbar_zu"),
        q("Es ist strengstens untersagt, fremde USB-Sticks an die Firmenrechner _____ .", "anzuschließen", ["anzuschließen", "anschließen zu", "zu anschließen", "angeschlossen"], "anschließen: an-zu-schließen", "inf_trennbar_zu"),
        q("Wir planen, die neuen Features schrittweise in das Hauptsystem _____ .", "einzubinden", ["einzubinden", "einbinden zu", "zu einbinden", "eingebunden"], "einbinden: ein-zu-binden", "inf_trennbar_zu"),
        q("Marco versucht, rechtzeitig am Bahnhof Weiterstadt _____ .", "anzukommen", ["anzukommen", "ankommen zu", "zu ankommen", "angekommen"], "ankommen: an-zu-kommen", "inf_trennbar_zu"),
        q("Haben Sie vor, Ihre Kollegen zur Geburtstagsfeier _____ ?", "einzuladen", ["einzuladen", "einladen zu", "zu einladen", "eingeladen"], "einladen: ein-zu-laden", "inf_trennbar_zu"),
        q("Es ist ratsam, die offenen Aufgaben vor dem Monatsende komplett _____ .", "abzuschließen", ["abzuschließen", "abschließen zu", "zu abschließen", "abgeschlossen"], "abschließen: ab-zu-schließen", "inf_trennbar_zu"),
        q("Der Techniker hat vergessen, die externe Festplatte sicher _____ .", "auszuwerfen", ["auszuwerfen", "auswerfen zu", "zu auswerfen", "ausgeworfen"], "auswerfen: aus-zu-werfen", "inf_trennbar_zu"),
        q("Wir hoffen, die Besprechung pünktlich um 11:30 Uhr _____ .", "zu beenden", ["zu beenden", "beizubeenden", "beenden zu", "gebeendet"], "untrennbar beenden: zu beenden", "inf_trennbar_zu"),
        q("Er plant, nach Feierabend noch kurz im Supermarkt _____ .", "einzukaufen", ["einzukaufen", "einkaufen zu", "zu einkaufen", "eingekauft"], "einkaufen: ein-zu-kaufen", "inf_trennbar_zu"),
        q("Es ist sinnvoll, den Cache des Browsers regelmäßig _____ .", "aufzuräumen", ["aufzuräumen", "aufräumen zu", "zu aufräumen", "aufgeräumt"], "aufräumen: auf-zu-räumen", "inf_trennbar_zu")
      ]
    },
    {
      id: "LVL 2.36",
      chapter: "Linie 1 A2 K13",
      title: "Futur I: Absichten und Pläne mit werden + Infinitiv",
      ruleSummary: "Futur I: Konjugierte Form von 'werden' (Pos 2) + reiner Infinitiv am Satzende (ohne zu!). Drückt feste Pläne, Versprechen und Zukunftsprognosen aus.",
      example: "Ich werde morgen nach Frankfurt fahren. Das Team wird das Release abschließen.",
      questions: [
        q("Bhavani _____ im kommenden Monat das neue Service-Portal für Kunden einrichten.", "wird", ["wird", "werde", "werden", "werdet"], "3. Person Singular Futur I: er wird einrichten", "futur_1"),
        q("Ich _____ dir morgen früh die überarbeiteten Architektur-Diagramme zusenden.", "werde", ["werde", "wird", "werden", "werdet"], "1. Person Singular: ich werde zusenden", "futur_1"),
        q("Wir _____ die Cloud-Migration voraussichtlich im zweiten Quartal abschließen.", "werden", ["werden", "wird", "werdet", "werde"], "1. Person Plural: wir werden abschließen", "futur_1"),
        q("Herr Tim und Marco _____ nächste Woche an einer Fachkonferenz in Berlin teilnehmen.", "werden", ["werden", "wird", "werdet", "werde"], "3. Person Plural: sie werden teilnehmen", "futur_1"),
        q("Wann _____ du deine Prüfung für die nächste Zertifizierungsstufe ablegen?", "wirst", ["wirst", "wird", "werdest", "werden"], "2. Person Singular: du wirst ablegen", "futur_1"),
        q("Das IT-Management _____ in Kürze neue Sicherheitsrichtlinien bekanntgeben.", "wird", ["wird", "werde", "werden", "wirst"], "das Management (es): wird bekanntgeben", "futur_1"),
        q("Die Kolleginnen aus dem DevOps-Team _____ die Pipelines heute optimieren.", "werden", ["werden", "wird", "werdet", "werde"], "Plural: werden optimieren", "futur_1"),
        q("Kollegen, _____ ihr heute noch vor 18 Uhr mit den Tests fertig werden?", "werdet", ["werdet", "werden", "wirst", "wird"], "2. Person Plural: werdet ihr", "futur_1"),
        q("Der Support _____ die offenen Kundenanfragen bis morgen Vormittag beantworten.", "wird", ["wird", "werden", "werde", "wirst"], "der Support (er): wird beantworten", "futur_1"),
        q("Ich verspreche Ihnen, ich _____ mich persönlich um diesen Vorfall kümmern.", "werde", ["werde", "wird", "werden", "wirst"], "ich werde mich kümmern", "futur_1"),
        q("Die Umstellung der Systeme _____ voraussichtlich zwei Tage dauern.", "wird", ["wird", "werden", "werde", "wirst"], "die Umstellung (sie): wird dauern", "futur_1"),
        q("Wir _____ in den kommenden Jahren verstärkt auf automatisierte Prozesse setzen.", "werden", ["werden", "wird", "werdet", "werde"], "wir werden setzen", "futur_1")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 14: TECHNIK, GESCHICHTE & RELATIVSÄTZE IM NOMINATIV
    // -------------------------------------------------------------
    {
      id: "LVL 2.37",
      chapter: "Linie 1 A2 K14",
      title: "Relativsätze im Nominativ (der, die, das, die)",
      ruleSummary: "Relativpronomen im Nominativ entsprechen den bestimmten Artikeln: der (m), das (n), die (f), die (Pl). Das Relativpronomen ist Subjekt des Nebensatzes; das Verb steht am SATZENDE.",
      example: "Das ist der Kollege, der das Projekt leitet. Das ist das Büro, das neu ist.",
      questions: [
        q("Das ist der Technical Architect (m), _____ die CMDB-Architektur entworfen hat.", "der", ["der", "den", "dem", "dessen"], "Relativsatz Nominativ maskulin Subjekt: der", "relativ_nom"),
        q("Hier steht das neue Firmen-Notebook (n), _____ extrem schnell arbeitet.", "das", ["das", "der", "die", "welches"], "Relativsatz Nominativ neutral: das", "relativ_nom"),
        q("Kennen Sie die Kollegin (f), _____ heute das morgendliche Standup leitet?", "die", ["die", "der", "den", "welche"], "Relativsatz Nominativ feminin: die", "relativ_nom"),
        q("Das sind die Entwickler (Pl.), _____ den Fehler im Skript behoben haben.", "die", ["die", "den", "der", "denen"], "Relativsatz Nominativ Plural: die", "relativ_nom"),
        q("Dort drüben sitzt Herr Tim (m), _____ die Abteilung für Cloud-Services führt.", "der", ["der", "den", "dem", "dessen"], "der ... führt", "relativ_nom"),
        q("Wir nutzen ein modernes Tool (n), _____ die Prozessanalyse stark vereinfacht.", "das", ["das", "der", "die", "dem"], "das ... vereinfacht", "relativ_nom"),
        q("Ich suche die Dokumentation (f), _____ alle Schnittstellen-Details beschreibt.", "die", ["die", "der", "das", "den"], "die ... beschreibt", "relativ_nom"),
        q("Das ist der Besprechungsraum (m), _____ Platz für zwanzig Personen bietet.", "der", ["der", "den", "dem", "das"], "der ... bietet", "relativ_nom"),
        q("Wo sind die neuen Mitarbeiter (Pl.), _____ heute ihren ersten Arbeitstag haben?", "die", ["die", "den", "der", "denen"], "die ... haben", "relativ_nom"),
        q("Der Rechner (m), _____ im 2. Stock steht, benötigt ein Sicherheitsupdate.", "der", ["der", "den", "dem", "das"], "der ... steht", "relativ_nom"),
        q("Das ist die Fehlermeldung (f), _____ seit gestern immer wieder im Log auftaucht.", "die", ["die", "der", "das", "den"], "die ... auftaucht", "relativ_nom"),
        q("Wir haben ein Ticketsystem (n), _____ rund um die Uhr erreichbar ist.", "das", ["das", "der", "die", "dem"], "das ... ist", "relativ_nom")
      ]
    },
    {
      id: "LVL 2.38",
      chapter: "Linie 1 A2 K14",
      title: "Relativsätze im Akkusativ (den, die, das, die)",
      ruleSummary: "Ist das Bezugswort im Relativsatz ein Akkusativ-Objekt, ändert sich nur Maskulin zu 'den'. Neutral (das), Feminin (die) und Plural (die) bleiben unverändert. Verb am SATZENDE.",
      example: "Der Kollege, den ich gestern angerufen habe. Das Ticket, das wir gelöst haben.",
      questions: [
        q("Der Vertrag (m), _____ Bhavani gestern unterschrieben hat, liegt im Archiv.", "den", ["den", "der", "dem", "dessen"], "Relativsatz Akkusativ maskulin: den ... unterschrieben hat", "relativ_akk"),
        q("Das Ticket (n), _____ wir im Support bearbeiten, hat höchste Priorität.", "das", ["das", "der", "die", "den"], "Relativsatz Akkusativ neutral: das ... bearbeiten", "relativ_akk"),
        q("Die Präsentation (f), _____ Frau Weber vorbereitet hat, war sehr informativ.", "die", ["die", "der", "das", "den"], "Relativsatz Akkusativ feminin: die ... vorbereitet hat", "relativ_akk"),
        q("Die neuen Monitore (Pl.), _____ die Firma bestellt hat, wurden heute geliefert.", "die", ["die", "den", "der", "denen"], "Relativsatz Akkusativ Plural: die ... bestellt hat", "relativ_akk"),
        q("Das ist der Kunde (m), _____ Herr Tim heute Nachmittag anrufen muss.", "den", ["den", "der", "dem", "dessen"], "anrufen + Akkusativ: den er anrufen muss", "relativ_akk"),
        q("Das IT-System (n), _____ wir täglich nutzen, läuft äußerst stabil.", "das", ["das", "der", "die", "den"], "nutzen + Akkusativ neutral: das wir nutzen", "relativ_akk"),
        q("Die Richtlinie (f), _____ die Geschäftsführung beschlossen hat, gilt ab sofort.", "die", ["die", "der", "das", "den"], "die ... beschlossen hat", "relativ_akk"),
        q("Der Fehler (m), _____ Marco im Code entdeckt hat, wurde sofort korrigiert.", "den", ["den", "der", "dem", "dessen"], "entdecken + Akkusativ maskulin: den er entdeckt hat", "relativ_akk"),
        q("Die Kollegen (Pl.), _____ wir zur Konferenz eingeladen haben, kommen morgen.", "die", ["die", "den", "der", "denen"], "einladen + Akkusativ: die wir eingeladen haben", "relativ_akk"),
        q("Das Dokument (n), _____ Sie mir per E-Mail gesendet haben, konnte ich öffnen.", "das", ["das", "der", "die", "den"], "senden + Akkusativ: das Sie gesendet haben", "relativ_akk"),
        q("Der Laptop (m), _____ ich für meine tägliche Arbeit brauche, lädt gerade auf.", "den", ["den", "der", "dem", "das"], "brauchen + Akkusativ maskulin: den ich brauche", "relativ_akk"),
        q("Die Schulung (f), _____ wir gebucht haben, findet online statt.", "die", ["die", "der", "das", "den"], "buchen + Akkusativ feminin: die wir gebucht haben", "relativ_akk")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 15: GESELLSCHAFT, RECHT & N-DEKLINATION
    // -------------------------------------------------------------
    {
      id: "LVL 2.39",
      chapter: "Linie 1 A2 K15",
      title: "N-Deklination (Schwache Maskulina)",
      ruleSummary: "Bestimmte maskuline Nomen (oft auf -e, -ent, -ant, -ist: der Kollege, der Kunde, der Assistent, der Nachbar) erhalten in allen Fällen AUSSER dem Nominativ Singular die Endung -(e)n.",
      example: "der Kollege -> den Kollegen (Akk), dem Kollegen (Dat), des Kollegen (Gen).",
      questions: [
        q("Bhavani bespricht die Architekturdetails heute direkt mit dem _____ (m).", "Kunden", ["Kunden", "Kunde", "Kundem", "Kundens"], "Dativ maskulin n-Deklination: dem Kunden", "n_deklination"),
        q("Ich habe gestern den neuen _____ (m) aus der Entwicklungsabteilung kennengelernt.", "Kollegen", ["Kollegen", "Kollege", "Kollegem", "Kollegens"], "Akkusativ maskulin n-Deklination: den Kollegen", "n_deklination"),
        q("Der Abteilungsleiter dankt dem fleißigen _____ (m) für die Unterstützung.", "Assistenten", ["Assistenten", "Assistent", "Assistentem", "Assistentens"], "Dativ maskulin: dem Assistenten", "n_deklination"),
        q("Wir haben einen erfahrenen _____ (m) zur Lösung des Incidents hinzugezogen.", "Experten", ["Experten", "Experte", "Expertem", "Expertens"], "Akkusativ maskulin: einen Experten", "n_deklination"),
        q("Herr Tim telefoniert schon den ganzen Vormittag mit dem _____ (m).", "Lieferanten", ["Lieferanten", "Lieferant", "Lieferantem", "Lieferanten"], "Dativ maskulin: mit dem Lieferanten", "n_deklination"),
        q("Die E-Mail ist an den zuständigen _____ (m) adressiert.", "Mitarbeiter", ["Mitarbeiter", "Mitarbeitern", "Mitarbeitere", "Mitarbeiteres"], "Achtung: Mitarbeiter ist regulär (keine n-Deklination!)", "n_deklination"),
        q("Frau Weber erkundigt sich bei dem freundlichen _____ (m) nach dem Weg.", "Polizisten", ["Polizisten", "Polizist", "Polizistem", "Polizistens"], "Dativ maskulin: dem Polizisten", "n_deklination"),
        q("Bhavani wohnt Tür an Tür mit einem netten _____ (m) in Weiterstadt.", "Nachbarn", ["Nachbarn", "Nachbar", "Nachbarem", "Nachbars"], "Dativ maskulin: einem Nachbarn", "n_deklination"),
        q("Kennen Sie schon den neuen _____ (m) im IT-Architektur-Team?", "Spezialisten", ["Spezialisten", "Spezialist", "Spezialistem", "Spezialistens"], "Akkusativ maskulin: den Spezialisten", "n_deklination"),
        q("Wir haben dem unzufriedenen _____ (m) eine schnelle Lösung angeboten.", "Kunden", ["Kunden", "Kunde", "Kundem", "Kundens"], "Dativ: dem Kunden", "n_deklination"),
        q("Der Projektleiter berät sich mit einem externen _____ (m).", "Berater", ["Berater", "Beratern", "Berateren", "Beraters"], "Achtung: Berater ist regulär (keine n-Deklination!)", "n_deklination"),
        q("Haben Sie Herrn Schmidt, unseren neuen _____ (m), schon gesehen?", "Praktikanten", ["Praktikanten", "Praktikant", "Praktikantem", "Praktikantens"], "Akkusativ maskulin: unseren Praktikanten", "n_deklination")
      ]
    },
    {
      id: "LVL 2.40",
      chapter: "Linie 1 A2 K15",
      title: "Reflexivpronomen im Dativ (mir, dir, sich, uns, euch)",
      ruleSummary: "Gibt es bereits ein konkretes Akkusativobjekt im Satz, steht das Reflexivpronomen im DATIV: ich wasche mich (Akk) vs. ich wasche MIR die Hände (Dat). Ich merke MIR das.",
      example: "Ich sehe mir den Bericht an. Kannst du dir das vorstellen? Er merkt sich den Code.",
      questions: [
        q("Bhavani sieht _____ heute Nachmittag die Logs der Schnittstelle genau an.", "sich", ["sich", "ihm", "ihn", "mir"], "3. Person Singular Dativ reflexiv: sieht sich (etwas) an", "refl_dat"),
        q("Ich sehe _____ den neuen Vertrag vor der Unterschrift gründlich an.", "mir", ["mir", "mich", "sich", "mein"], "1. Person Singular Dativ reflexiv: sehe mir (etwas) an", "refl_dat"),
        q("Marco, kannst du _____ vorstellen, wie aufwendig diese Migration war?", "dir", ["dir", "dich", "sich", "du"], "2. Person Singular Dativ: kannst du dir vorstellen", "refl_dat"),
        q("Ich muss _____ diesen schwierigen Befehl unbedingt für morgen merken.", "mir", ["mir", "mich", "sich", "mein"], "merken + Dativ: merke mir das", "refl_dat"),
        q("Herr Tim kauft _____ ein neues Dienst-Notebook mit 32 GB RAM.", "sich", ["sich", "ihm", "ihn", "mir"], "3. Person Singular Dativ: kauft sich ein Notebook", "refl_dat"),
        q("Wir schauen _____ die Präsentationsfolien vor dem Kundentermin noch einmal an.", "uns", ["uns", "euch", "sich", "wir"], "1. Person Plural Dativ: schauen uns das an", "refl_dat"),
        q("Kollegen, habt ihr _____ die neuen Sicherheitsregeln bereits durchgelesen?", "euch", ["euch", "uns", "sich", "ihr"], "2. Person Plural Dativ: habt ihr euch durchgelesen", "refl_dat"),
        q("Kannst du _____ bitte ein Glas Wasser mitbringen, wenn du in die Küche gehst?", "mir", ["mir", "mich", "dir", "sich"], "mitbringen + Dativ: bringst du mir mit", "refl_dat"),
        q("Der Entwickler überlegt _____ eine elegante Strategie für den Datenbank-Export.", "sich", ["sich", "ihm", "ihn", "mir"], "überlegen + Dativ: überlegt sich eine Strategie", "refl_dat"),
        q("Ich habe _____ vorgenommen, jeden Tag dreißig Minuten Deutsch zu lernen.", "mir", ["mir", "mich", "sich", "mein"], "vornehmen + Dativ: habe mir vorgenommen", "refl_dat"),
        q("Hast du _____ den Zugangscode für das Terminal notiert?", "dir", ["dir", "dich", "sich", "du"], "notieren + Dativ: hast du dir notiert", "refl_dat"),
        q("Sie wünschen _____ ein stabiles Release ohne nächtliche Notfalleinsätze.", "sich", ["sich", "ihnen", "uns", "euch"], "wünschen + Dativ: wünschen sich ein Release", "refl_dat")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 16: FINALE, GRAMMATIK-SYNTHESE & MEILENSTEINE
    // -------------------------------------------------------------
    {
      id: "LVL 2.41",
      chapter: "Linie 1 A2 K16",
      title: "Partizip I und Partizip II als Adjektive (Deklination)",
      ruleSummary: "Partizip I (aktiv/gleichzeitig): Infinitiv + -d (laufend, dringend, passend). Partizip II (passiv/vollendet): ge-...-t/-en (geprüft, geschlossen, repariert). Beide werden wie Adjektive dekliniert!",
      example: "ein dringendes Ticket (P1), die reparierte Maschine (P2), das abgeschlossene Projekt (P2).",
      questions: [
        q("Wir müssen das _____ Ticket (n) im Support-System sofort priorisieren.", "dringende", ["dringende", "dringendes", "dringenden", "dringendem"], "Partizip I als Adjektiv nach 'das': das dringende Ticket", "partizip_adj"),
        q("Bhavani hat den _____ Code (m) noch vor Feierabend korrigiert.", "fehlerhaften", ["fehlerhaften", "fehlerhafte", "fehlerhafter", "fehlerhaftem"], "Adjektiv Akkusativ maskulin: den fehlerhaften Code", "partizip_adj"),
        q("Das _____ Projekt (n) wurde vom Management als voller Erfolg gewertet.", "abgeschlossene", ["abgeschlossene", "abgeschlossenen", "abgeschlossenes", "abgeschlossenem"], "Partizip II als Adjektiv nach 'das': das abgeschlossene Projekt", "partizip_adj"),
        q("Der Techniker überprüft die _____ Server (Pl.) im klimatisierten Raum.", "laufenden", ["laufenden", "laufende", "laufender", "laufendes"], "Partizip I Plural nach 'die': die laufenden Server", "partizip_adj"),
        q("Herr Tim sendet das _____ Protokoll (n) an alle Besprechungsteilnehmer.", "unterschriebene", ["unterschriebene", "unterschriebenen", "unterschriebenes", "unterschriebenem"], "Partizip II Akkusativ neutral: das unterschriebene Protokoll", "partizip_adj"),
        q("Für den Testlauf benötigen wir eine _____ Internetverbindung (f).", "funktionierende", ["funktionierende", "funktionierenden", "funktionierender", "funktionierendes"], "Partizip I Akkusativ feminin: eine funktionierende Verbindung", "partizip_adj"),
        q("Die _____ Daten (Pl.) werden verschlüsselt in die Cloud übertragen.", "gespeicherten", ["gespeicherten", "gespeicherte", "gespeicherter", "gespeichertes"], "Partizip II Plural nach 'die': die gespeicherten Daten", "partizip_adj"),
        q("Marco sucht nach einer _____ Lösung (f) für das Authentifizierungsproblem.", "passenden", ["passenden", "passende", "passender", "passendes"], "Partizip I Dativ feminin: nach einer passenden Lösung", "partizip_adj"),
        q("Der Support ersetzt das _____ Kabel (n) durch eine neue Glasfaserleitung.", "beschädigte", ["beschädigte", "beschädigten", "beschädigtes", "beschädigtem"], "Partizip II Akkusativ neutral: das beschädigte Kabel", "partizip_adj"),
        q("Die _____ Mitarbeiter (Pl.) freuen sich über das Lob der Geschäftsführung.", "beteiligten", ["beteiligten", "beteiligte", "beteiligter", "beteiligtes"], "Partizip II Plural: die beteiligten Mitarbeiter", "partizip_adj"),
        q("Wir haben heute ein äußerst _____ Feedback (n) vom Kunden erhalten.", "ermutigendes", ["ermutigendes", "ermutigende", "ermutigenden", "ermutigender"], "Partizip I Akkusativ neutral unbestimmt: ein ermutigendes Feedback", "partizip_adj"),
        q("Die _____ Konferenz (f) fand im großen Festsaal in Frankfurt statt.", "dreitägige", ["dreitägige", "dreitägigen", "dreitägiger", "dreitägiges"], "Adjektiv feminin: die dreitägige Konferenz", "partizip_adj")
      ]
    },
    {
      id: "LVL 2.42",
      chapter: "Linie 1 A2 K16",
      title: "Nebensätze im Überblick (weil, dass, wenn, als, ob, Relativsätze)",
      ruleSummary: "Synthese aller Nebensatztypen: Alle subordinierenden Konjunktionen kicken das konjugierte Verb an das ABSOLUTE SATZENDE!",
      example: "weil er kommt / dass er Zeit hat / wenn es regnet / als ich ankam / ob er da ist.",
      questions: [
        q("Ich freue mich, dass die Migration so reibungslos geklappt _____ .", "hat", ["hat", "hatte", "haben", "hätte"], "dass-Nebensatz: Hilfsverb am Satzende", "ns_synthese"),
        q("Bhavani arbeitet heute konzentriert, weil er den Meilenstein heute erreichen _____ .", "will", ["will", "willst", "wollen", "wollte"], "weil-Nebensatz: Modalverb am Satzende", "ns_synthese"),
        q("Wenn die Schnittstelle stabil läuft, _____ wir die Kunden benachrichtigen.", "können", ["können", "wir können", "konnten", "gekonnt"], "Hauptsatz nach Nebensatz: Verb auf Pos 1 (können wir)", "ns_synthese"),
        q("Als der Incident gestern gemeldet wurde, _____ das Notfallteam sofort.", "reagierte", ["reagierte", "das Team reagierte", "reagieren", "gereagiert"], "Hauptsatz nach als-Satz: reagierte das Team", "ns_synthese"),
        q("Wissen Sie zufällig, ob Herr Tim heute noch ins Büro _____ ?", "kommt", ["kommt", "er kommt", "kommen", "gekommen"], "ob-Satz: Verb am Ende", "ns_synthese"),
        q("Das ist der Kollege, der die automatisierten Test-Pipelines aufgebaut _____ .", "hat", ["hat", "haben", "hatte", "hätte"], "Relativsatz: Hilfsverb am Ende", "ns_synthese"),
        q("Marco kann nicht am Call teilnehmen, weil er einen dringenden Arzttermin _____ .", "hat", ["hat", "haben", "hatte", "hätte"], "weil ... Termin hat", "ns_synthese"),
        q("Es ist allen klar, dass wir die Sicherheitsstandards einhalten _____ .", "müssen", ["müssen", "müsst", "muss", "mussten"], "dass ... einhalten müssen", "ns_synthese"),
        q("Wenn du die Konfiguration abgeschlossen hast, _____ mir bitte kurz Bescheid!", "gib", ["gib", "du gibst", "geben", "gebe"], "Imperativ nach wenn-Satz: gib mir Bescheid", "ns_synthese"),
        q("Als Bhavani seine CTA-Prüfung bestand, _____ das gesamte Team begeistert.", "war", ["war", "das Team war", "waren", "gewesen"], "Hauptsatz: war das gesamte Team", "ns_synthese"),
        q("Der Projektleiter fragt nach, ob alle Risiken ausreichend dokumentiert _____ .", "sind", ["sind", "waren", "sein", "seid"], "ob ... dokumentiert sind", "ns_synthese"),
        q("Wir unterstützen den Kunden, der vor einer komplexen Umstellung _____ .", "steht", ["steht", "er steht", "stehen", "gestanden"], "Relativsatz: Verb am Ende (steht)", "ns_synthese")
      ]
    },
    {
      id: "LVL 2.43",
      chapter: "Linie 1 A2 K16",
      title: "Abschlusstest Stage A2: Große Grammatik-Synthese",
      ruleSummary: "Der finale Härtetest für Stage A2: Alle 43 Grammatikthemen (Fälle, Wechselpräpositionen, Verben, Konjunktiv II, Passiv, Nebensätze) im realistischen Workplace-Mix.",
      example: "Könnten Sie mir helfen? Der Tisch steht im Büro. Weil der Server gewartet werden muss.",
      questions: [
        q("_____ Sie mir bitte kurz bestätigen, dass das Ticket erfolgreich geschlossen wurde?", "Könnten", ["Könnten", "Können", "Konnten", "Würdet"], "Konjunktiv II Höflichkeit: Könnten Sie", "a2_final_mastery"),
        q("Bhavani legt das unterzeichnete Dokument auf _____ Schreibtisch (m) von Herrn Tim.", "den", ["den", "dem", "der", "das"], "Wohin? + Akkusativ maskulin: auf den Schreibtisch", "a2_final_mastery"),
        q("Das System muss vor dem nächsten Release unbedingt neu konfiguriert _____ .", "werden", ["werden", "wird", "worden", "geworden"], "Passiv mit Modalverb: konfiguriert werden", "a2_final_mastery"),
        q("Wir haben den wichtigen Vertrag mit dem Kunden _____ zwei Wochen abgeschlossen.", "vor", ["vor", "seit", "ab", "in"], "Vergangenheit abgeschlossen: vor zwei Wochen", "a2_final_mastery"),
        q("Ich weiß genau, dass Marco seit einem Monat intensiv für die Zertifizierung _____ .", "lernt", ["lernt", "lernen", "lernte", "gelernt"], "dass-Nebensatz: lernt am Ende", "a2_final_mastery"),
        q("Der neue Rechner läuft wesentlich _____ als das alte Gerät aus dem Vorjahr.", "schneller", ["schneller", "schnell", "am schnellsten", "schnellste"], "Komparativ mit als: schneller als", "a2_final_mastery"),
        q("Wegen _____ unerwarteten Serverausfalls (m) war die Anwendung kurzzeitig offline.", "des", ["des", "dem", "den", "der"], "wegen + Genitiv maskulin: des Ausfalls", "a2_final_mastery"),
        q("Er freut _____ schon riesig auf die Zusammenarbeit im neuen IT-Architektur-Projekt.", "sich", ["sich", "ihn", "ihm", "mich"], "reflexiv 3. Person: freut sich", "a2_final_mastery"),
        q("Wenn du Zeit hast, _____ wir die neuen Richtlinien gemeinsam durchgehen.", "können", ["können", "wir können", "konnten", "gekonnt"], "Hauptsatz nach wenn: können wir", "a2_final_mastery"),
        q("Die Kollegin, _____ das Problem im Code gefunden hat, arbeitet im DevOps-Team.", "die", ["die", "der", "das", "den"], "Relativsatz Nominativ feminin: die", "a2_final_mastery"),
        q("Bhavani hat vor, die Zertifizierungsprüfung im ersten Versuch zu _____ .", "bestehen", ["bestehen", "besteht", "bestand", "bestanden"], "Infinitiv mit zu: zu bestehen", "a2_final_mastery"),
        q("Trotz _____ hohen Arbeitsbelastung (f) blieb das Team durchweg motiviert.", "der", ["der", "die", "des", "den"], "trotz + Genitiv feminin: der Belastung", "a2_final_mastery")
      ]
    }
  ];

  if (!window.STAGE_A2_DATA) {
    window.STAGE_A2_DATA = { stage: "A2", levels: [] };
  }

  levelsA2_K13toK16.forEach(newLvl => {
    const existingIdx = window.STAGE_A2_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A2_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A2_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A2_DATA.totalLevels = window.STAGE_A2_DATA.levels.length;
})();
