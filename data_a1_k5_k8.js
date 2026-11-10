/**
 * STAGE A1 DATA PACK 2 (Levels 1.17 to 1.34 - Chapters K5 to K8)
 * Sourced directly from Linie 1 (A1) Grammatikthemen.
 * Hand-crafted sentences with zero generic template cloning.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsK5toK8 = [
    // -------------------------------------------------------------
    // KAPITEL 5: TAGESABLAUF, ZEIT & TRENNBARE VERBEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.17",
      chapter: "Linie 1 K5",
      title: "Verben mit Vokalwechsel (schlafen, waschen, fahren)",
      ruleSummary: "Vokalwechsel von 'a' zu 'ä' nur in der 2. (du) und 3. Person Singular (er/sie/es): du schläfst, er wäscht, sie fährt.",
      example: "du schläfst, er wäscht, sie fährt, du fährst",
      questions: [
        q("Am Wochenende _____ Marco meistens bis 10 Uhr.", "schläft", ["schläft", "schlaft", "schläfst", "schlafen"], "3. Person Singular (er): schlafen -> er schläft", "vokal_schlafen"),
        q("Wie lange _____ du normalerweise unter der Woche?", "schläfst", ["schläfst", "schlaft", "schläft", "schlafen"], "2. Person Singular: du schläfst (a -> ä)", "vokal_schlafen"),
        q("Er _____ seine Arbeitskleidung jeden Samstag.", "wäscht", ["wäscht", "wascht", "wäschst", "waschen"], "3. Person Singular: waschen -> er wäscht", "vokal_waschen"),
        q("_____ du dein Auto in der Waschstraße oder zu Hause?", "Wäschst", ["Wäschst", "Waschst", "Wäscht", "Waschen"], "2. Person Singular: du wäschst", "vokal_waschen"),
        q("Frau Weber _____ jeden Morgen mit dem Bus 675 zur Arbeit.", "fährt", ["fährt", "fahrt", "fährst", "fahren"], "3. Person Singular: fahren -> sie fährt", "vokal_fahren"),
        q("Wohin _____ du am kommenden Wochenende?", "fährst", ["fährst", "fahrt", "fährt", "fahren"], "2. Person Singular: du fährst", "vokal_fahren"),
        q("Das Kind _____ schon seit einer Stunde tief und fest.", "schläft", ["schläft", "schlaft", "schlafen", "schläfst"], "3. Person Singular (es): schläft", "vokal_schlafen"),
        q("_____ du die Bettwäsche bei 60 Grad?", "Wäschst", ["Wäschst", "Wascht", "Wäscht", "Waschen"], "du wäschst mit Umlaut", "vokal_waschen"),
        q("Der Zug nach Frankfurt _____ von Gleis 3 ab.", "fährt", ["fährt", "fahrt", "fährst", "fahren"], "der Zug (er) fährt ab", "vokal_fahren"),
        q("Warum _____ du heute so unruhig?", "schläfst", ["schläfst", "schlaft", "schläft", "schlafen"], "du schläfst", "vokal_schlafen"),
        q("Meine Kollegin _____ montags immer mit dem Fahrrad.", "fährt", ["fährt", "fahrt", "fährst", "fahren"], "sie fährt mit dem Rad", "vokal_fahren"),
        q("Er _____ sein Hemd vor dem Kundentermin.", "wäscht", ["wäscht", "wascht", "wäschst", "waschen"], "er wäscht", "vokal_waschen")
      ]
    },
    {
      id: "LVL 1.18",
      chapter: "Linie 1 K5",
      title: "Trennbare Verben (Bedeutung & Präfixe)",
      ruleSummary: "Trennbare Präfixe (ab-, an-, auf-, aus-, ein-, fern-, mit-) tragen den Hauptakzent und trennen sich im Präsens-Hauptsatz ab.",
      example: "einladen, fernsehen, ausschlafen, einkaufen, aufstehen",
      questions: [
        q("Ich möchte heute nach der Schicht lange _____ .", "ausschlafen", ["ausschlafen", "einschlafen", "aufschlafen", "abschlafen"], "Lange im Bett bleiben: ausschlafen", "trenn_lex"),
        q("Wir müssen für das Wochenende im Supermarkt _____ .", "einkaufen", ["einkaufen", "aufkaufen", "abkaufen", "mitkaufen"], "Lebensmittel besorgen: einkaufen", "trenn_lex"),
        q("Möchtest du deine Kollegen zur Geburtstagsfeier _____ ?", "einladen", ["einladen", "ausladen", "anladen", "aufladen"], "Gäste bitten zu kommen: einladen", "trenn_lex"),
        q("Herr Tim muss morgen sehr früh zum Flughafen _____ .", "aufstehen", ["aufstehen", "einstehen", "ausstehen", "anstehen"], "Das Bett verlassen: aufstehen", "trenn_lex"),
        q("Am Abend möchte ich einfach auf dem Sofa sitzen und _____ .", "fernsehen", ["fernsehen", "mitsehen", "einsehen", "aufsehen"], "TV schauen: fernsehen", "trenn_lex"),
        q("Kannst du bitte deinen Teamleiter kurz _____ ?", "anrufen", ["anrufen", "aufrufen", "ausrufen", "einrufen"], "Telefonieren mit: anrufen", "trenn_lex"),
        q("Wann fängt die Besprechung heute _____ ?", "an", ["an", "auf", "aus", "ab"], "anfangen: fängt ... an", "trenn_lex"),
        q("Der Zug nach Mannheim fährt um 17:15 Uhr _____ .", "ab", ["ab", "aus", "auf", "an"], "abfahren: fährt ... ab", "trenn_lex"),
        q("Möchtest du heute zum Mittagessen _____ ?", "mitkommen", ["mitkommen", "ankommen", "aufkommen", "einkommen"], "Zusammen gehen: mitkommen", "trenn_lex"),
        q("Bitte drucken Sie das Formular aus und füllen Sie es _____ .", "aus", ["aus", "ein", "ab", "auf"], "ausfüllen: füllen Sie ... aus", "trenn_lex"),
        q("Der Bus kommt pünktlich an der Haltestelle _____ .", "an", ["an", "ab", "auf", "ein"], "ankommen: kommt ... an", "trenn_lex"),
        q("Ich räume heute Abend die Küche gründlich _____ .", "auf", ["auf", "aus", "ein", "ab"], "aufräumen: räume ... auf", "trenn_lex")
      ]
    },
    {
      id: "LVL 1.19",
      chapter: "Linie 1 K5",
      title: "Satzklammer bei trennbaren Verben",
      ruleSummary: "Das konjugierte Basisverb steht auf Position 2, das trennbare Präfix wandert an die letzte Stelle des Satzes (Satzklammer).",
      example: "Er lädt Freunde ein. Ich stehe um 6 Uhr auf. Sie kauft im Kaufland ein.",
      questions: [
        q("Bhavani lädt das gesamte Entwicklungsteam zum Essen _____ .", "ein", ["ein", "aus", "auf", "an"], "einladen: lädt ... ein", "klammer_trenn"),
        q("Der Projektleiter ruft die Kollegen aus München _____ .", "an", ["an", "auf", "ab", "mit"], "anrufen: ruft ... an", "klammer_trenn"),
        q("Mein Wecker klingelt um 6 Uhr und ich stehe sofort _____ .", "auf", ["auf", "an", "ein", "aus"], "aufstehen: stehe ... auf", "klammer_trenn"),
        q("Frau Keller kauft heute nach der Arbeit im Supermarkt _____ .", "ein", ["ein", "auf", "aus", "ab"], "einkaufen: kauft ... ein", "klammer_trenn"),
        q("Am Freitagabend sieht die ganze Familie zusammen _____ .", "fern", ["fern", "mit", "an", "auf"], "fernsehen: sieht ... fern", "klammer_trenn"),
        q("Der Regionalzug nach Frankfurt fährt in zwei Minuten _____ .", "ab", ["ab", "an", "aus", "auf"], "abfahren: fährt ... ab", "klammer_trenn"),
        q("Herr Becker bereitet die Präsentation für das Kundengespräch _____ .", "vor", ["vor", "an", "ein", "auf"], "vorbereiten: bereitet ... vor", "klammer_trenn"),
        q("Kommst du heute zur Kaffeepause in die Cafeteria _____ ?", "mit", ["mit", "bei", "zu", "nach"], "mitkommen: kommst du ... mit?", "klammer_trenn"),
        q("Der Berater schaltet den Projektor im Besprechungsraum _____ .", "ein", ["ein", "auf", "an", "ab"], "einschalten: schaltet ... ein", "klammer_trenn"),
        q("Wann fängt deine Schicht am Montag morgen _____ ?", "an", ["an", "auf", "aus", "ein"], "anfangen: fängt ... an?", "klammer_trenn"),
        q("Sie räumt ihren Schreibtisch vor dem Wochenende komplett _____ .", "auf", ["auf", "aus", "ein", "ab"], "aufräumen: räumt ... auf", "klammer_trenn"),
        q("Der neue Kollege stellt sich heute dem gesamten Team _____ .", "vor", ["vor", "dar", "an", "ein"], "sich vorstellen: stellt sich ... vor", "klammer_trenn")
      ]
    },
    {
      id: "LVL 1.20",
      chapter: "Linie 1 K5",
      title: "Zeitangaben an Position 1 & Inversion",
      ruleSummary: "Steht eine Zeitangabe auf Position 1 im Hauptsatz, bleibt das konjugierte Verb zwingend auf Position 2. Das Subjekt rückt auf Position 3.",
      example: "Am Dienstag geht er zum Friseur. Um 9 Uhr beginnt das Meeting.",
      questions: [
        q("Am Dienstag _____ Herr Tim zum Kundentermin nach Frankfurt.", "fährt", ["fährt", "er fährt", "fahren", "gefahren"], "Inversion: Zeitangabe (Pos 1) + Verb (Pos 2) + Subjekt", "inv_verb"),
        q("Um 9 Uhr _____ die tägliche Besprechung im Konferenzraum.", "beginnt", ["beginnt", "sie beginnt", "beginnen", "begann"], "Zeit (Pos 1) + Verb (Pos 2): beginnt die Besprechung", "inv_verb"),
        q("Morgen _____ ich von zu Hause aus im Homeoffice.", "arbeite", ["arbeite", "ich arbeite", "arbeiten", "arbeitest"], "Pos 1: Morgen -> Pos 2: arbeite -> Pos 3: ich", "inv_verb"),
        q("Am Wochenende _____ meine Familie oft nach Darmstadt.", "fährt", ["fährt", "fahren", "sie fährt", "gefahren"], "Pos 1: Am Wochenende -> Pos 2: fährt meine Familie", "inv_verb"),
        q("Jeden Morgen _____ der Bus 675 pünktlich an der Haltestelle.", "hält", ["hält", "halten", "er hält", "hielt"], "Zeit (Pos 1) -> Verb (Pos 2): hält der Bus", "inv_verb"),
        q("Heute Abend _____ wir zusammen für die Zertifizierung.", "lernen", ["lernen", "wir lernen", "lernt", "gelernt"], "Pos 1: Heute Abend -> Pos 2: lernen wir", "inv_verb"),
        q("Um 12:30 Uhr _____ die Kollegen gemeinsam in die Kantine.", "gehen", ["gehen", "sie gehen", "geht", "gegangen"], "Pos 1: Um 12:30 Uhr -> Pos 2: gehen die Kollegen", "inv_verb"),
        q("Freitags _____ der Support das wöchentliche Systemupdate durch.", "führt", ["führt", "führen", "er führt", "geführt"], "Pos 1: Freitags -> Pos 2: führt der Support durch", "inv_verb"),
        q("Um 14 Uhr _____ Frau Weber ein wichtiges Vorstellungsgespräch.", "hat", ["hat", "sie hat", "haben", "hatte"], "Pos 1: Um 14 Uhr -> Pos 2: hat Frau Weber", "inv_verb"),
        q("Gestern _____ der Server für zwei Stunden komplett ausgefallen.", "war", ["war", "er war", "ist", "wäre"], "Pos 1: Gestern -> Pos 2: war der Server", "inv_verb"),
        q("Nach der Arbeit _____ ich noch kurz im Kaufland einkaufen.", "gehe", ["gehe", "ich gehe", "geht", "ging"], "Pos 1: Zeit/Sequenz -> Pos 2: gehe ich", "inv_verb"),
        q("Montags _____ der Berater immer sehr früh auf.", "steht", ["steht", "er steht", "stehen", "stand"], "Pos 1: Montags -> Pos 2: steht der Berater auf", "inv_verb")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 6: WAREN, EINKAUF & AKKUSATIV
    // -------------------------------------------------------------
    {
      id: "LVL 1.21",
      chapter: "Linie 1 K6",
      title: "Verben mit Akkusativ (Transitive Verben)",
      ruleSummary: "Transitive Verben fordern eine Akkusativ-Ergänzung: brauchen, haben, kaufen, suchen, nehmen, möchten, bestellen, anrufen.",
      example: "Ich brauche den Kuli. Er hat einen Vertrag. Wir kaufen das Ticket.",
      questions: [
        q("Ich brauche dringend _____ neuen Zugangscode (m).", "den", ["den", "der", "dem", "das"], "brauchen + Akkusativ maskulin: den Zugangscode", "trans_akk"),
        q("Herr Keller sucht _____ Besprechungsraum (m) im 3. Stock.", "den", ["den", "der", "dem", "des"], "suchen + Akkusativ maskulin: den Raum", "trans_akk"),
        q("Haben Sie heute schon _____ Kunden (m) angerufen?", "den", ["den", "der", "dem", "das"], "anrufen + Akkusativ maskulin: den Kunden", "trans_akk"),
        q("Wir kaufen für das Büro _____ neue Kaffeemaschine (f).", "eine", ["eine", "ein", "einen", "einer"], "kaufen + Akkusativ feminin: eine Maschine", "trans_akk"),
        q("Er nimmt morgens immer _____ schnellen Zug (m).", "den", ["den", "der", "dem", "das"], "nehmen + Akkusativ maskulin: den Zug", "trans_akk"),
        q("Der Abteilungsleiter bestellt _____ neuen Laptop (m).", "einen", ["einen", "ein", "eine", "einem"], "bestellen + Akkusativ maskulin: einen Laptop", "trans_akk"),
        q("Ich habe heute leider _____ freien Termin (m) mehr.", "keinen", ["keinen", "kein", "keine", "keinem"], "haben + Akkusativ maskulin verneint: keinen Termin", "trans_akk"),
        q("Siehst du dort drüben _____ Drucker (m)?", "den", ["den", "der", "dem", "das"], "sehen + Akkusativ maskulin: den Drucker", "trans_akk"),
        q("Wir buchen heute _____ Flugticket (n) nach Berlin.", "das", ["das", "der", "die", "den"], "buchen + Akkusativ neutral: das Ticket", "trans_akk"),
        q("Trinkst du vor der Besprechung noch _____ Kaffee (m)?", "einen", ["einen", "ein", "eine", "einem"], "trinken + Akkusativ maskulin: einen Kaffee", "trans_akk"),
        q("Der Entwickler findet _____ Fehler (m) im Quellcode nicht.", "den", ["den", "der", "dem", "des"], "finden + Akkusativ maskulin: den Fehler", "trans_akk"),
        q("Bitte drucken Sie _____ aktuellen Bericht (m) aus.", "den", ["den", "der", "dem", "das"], "ausdrucken + Akkusativ maskulin: den Bericht", "trans_akk")
      ]
    },
    {
      id: "LVL 1.22",
      chapter: "Linie 1 K6",
      title: "Akkusativ: bestimmter Artikel (den, das, die)",
      ruleSummary: "Nur der maskuline Artikel verändert sich im Akkusativ: der -> den. Neutral (das), feminin (die) und Plural (die) bleiben unverändert.",
      example: "Ich kenne den Architekten (m), das Büro (n) und die Firma (f).",
      questions: [
        q("Haben Sie _____ neuen Arbeitsvertrag (m) schon unterschrieben?", "den", ["den", "der", "dem", "des"], "Akkusativ maskulin: den Vertrag", "akk_art_bestimmt"),
        q("Der Techniker repariert heute _____ Server (m) im Erdgeschoss.", "den", ["den", "der", "dem", "das"], "Akkusativ maskulin: den Server", "akk_art_bestimmt"),
        q("Wir reservieren _____ Besprechungszimmer (n) für 14 Uhr.", "das", ["das", "der", "die", "den"], "Akkusativ neutral bleibt: das Zimmer", "akk_art_bestimmt"),
        q("Frau Meyer schließt _____ Bürotür (f) am Abend ab.", "die", ["die", "der", "das", "den"], "Akkusativ feminin bleibt: die Tür", "akk_art_bestimmt"),
        q("Wer leitet _____ Konferenz (f) am Freitagnachmittag?", "die", ["die", "der", "das", "den"], "Akkusativ feminin: die Konferenz", "akk_art_bestimmt"),
        q("Der Berater öffnet _____ Anhang (m) in der E-Mail.", "den", ["den", "der", "dem", "das"], "Akkusativ maskulin: den Anhang", "akk_art_bestimmt"),
        q("Bitte übergeben Sie _____ Schlüssel (m) an den Empfang.", "den", ["den", "der", "dem", "das"], "Akkusativ maskulin: den Schlüssel", "akk_art_bestimmt"),
        q("Ich kenne _____ neuen Kollegen (m) aus der IT noch nicht.", "den", ["den", "der", "dem", "des"], "Akkusativ maskulin: den Kollegen", "akk_art_bestimmt"),
        q("Die Mitarbeiter lesen _____ wöchentlichen Newsletter (m).", "den", ["den", "der", "dem", "das"], "Akkusativ maskulin: den Newsletter", "akk_art_bestimmt"),
        q("Er holt _____ Firmenauto (n) aus der Tiefgarage.", "das", ["das", "der", "die", "den"], "Akkusativ neutral: das Auto", "akk_art_bestimmt"),
        q("Können Sie _____ Bildschirme (Pl.) bitte ausschalten?", "die", ["die", "der", "das", "den"], "Akkusativ Plural: die Bildschirme", "akk_art_bestimmt"),
        q("Ich habe _____ Termin (m) im Outlook-Kalender verschoben.", "den", ["den", "der", "dem", "das"], "Akkusativ maskulin: den Termin", "akk_art_bestimmt")
      ]
    },
    {
      id: "LVL 1.23",
      chapter: "Linie 1 K6",
      title: "Verben mit Vokalwechsel: nehmen",
      ruleSummary: "Das unregelmäßige Verb nehmen ändert im Präsens den Stammvokal: ich nehme, du NIMMST, er/sie/es NIMMT, wir nehmen, ihr nehmt, sie nehmen.",
      example: "du nimmst, er nimmt einen Kaffee, was nehmt ihr?",
      questions: [
        q("Was _____ du zum Mittagessen in der Kantine?", "nimmst", ["nimmst", "nehmt", "nimmt", "nehmen"], "2. Person Singular: du nimmst (e -> i / mm)", "vokal_nehmen"),
        q("Herr Becker _____ heute den ICE nach München.", "nimmt", ["nimmt", "nehmt", "nimmst", "nehmen"], "3. Person Singular: er nimmt", "vokal_nehmen"),
        q("Ich _____ gerne ein Glas Mineralwasser.", "nehme", ["nehme", "nimmst", "nimmt", "nehmen"], "1. Person Singular: ich nehme (-e)", "vokal_nehmen"),
        q("Kollegen, was _____ ihr zu trinken?", "nehmt", ["nehmt", "nimmst", "nimmt", "nehmen"], "2. Person Plural: ihr nehmt (kein Wechsel!)", "vokal_nehmen"),
        q("Frau Lang _____ an der wichtigen Konferenz teil.", "nimmt", ["nimmt", "nehmt", "nimmst", "nehmen"], "teilnehmen: sie nimmt teil", "vokal_nehmen"),
        q("_____ du die Unterlagen bitte mit ins Meeting?", "Nimmst", ["Nimmst", "Nehmt", "Nimmt", "Nehmen"], "2. Person Singular: Nimmst du mit", "vokal_nehmen"),
        q("Wir _____ das Feedback des Kunden sehr ernst.", "nehmen", ["nehmen", "nehmt", "nimmt", "nimmst"], "1. Person Plural: wir nehmen", "vokal_nehmen"),
        q("Der Architekt _____ sich heute Zeit für das Ticket.", "nimmt", ["nimmt", "nehmt", "nimmst", "nehmen"], "er nimmt sich Zeit", "vokal_nehmen"),
        q("Welchen Bus _____ du vom Hauptbahnhof nach Weiterstadt?", "nimmst", ["nimmst", "nehmt", "nimmt", "nehmen"], "du nimmst den Bus", "vokal_nehmen"),
        q("Sie (formal) _____ bitte hier im Wartebereich Platz.", "nehmen", ["nehmen", "nehmt", "nimmt", "nimmst"], "Höflichkeitsform: nehmen Sie Platz", "vokal_nehmen"),
        q("Wer _____ das Paket am Empfang entgegen?", "nimmt", ["nimmt", "nehmt", "nimmst", "nehmen"], "Wer (er/sie) nimmt entgegen", "vokal_nehmen"),
        q("_____ ihr das Protokoll der Sitzung mit?", "Nehmt", ["Nehmt", "Nimmt", "Nimmst", "Nehmen"], "ihr nehmt mit", "vokal_nehmen")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 7: WOHNEN, VORLIEBEN & MODALVERBEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.24",
      chapter: "Linie 1 K7",
      title: "Das Verb mögen (Präsens)",
      ruleSummary: "Konjugation: ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen. Achtung: 1. und 3. Person Singular haben keine Endung!",
      example: "Ich mag Tee. Er mag keinen Kaffee. Was mögt ihr?",
      questions: [
        q("Ich _____ die Arbeitsatmosphäre in unserem Team sehr.", "mag", ["mag", "magst", "mögt", "mögen"], "1. Person Singular: ich mag (keine Endung)", "verb_moegen"),
        q("_____ du lieber Espresso oder Cappuccino?", "Magst", ["Magst", "Mag", "Mögt", "Mögen"], "2. Person Singular: du magst", "verb_moegen"),
        q("Mein Kollege Marco _____ keinen Lärm im Großraumbüro.", "mag", ["mag", "magst", "mögt", "mögen"], "3. Person Singular: er mag (keine Endung)", "verb_moegen"),
        q("Wir _____ flexible Arbeitszeiten im Homeoffice.", "mögen", ["mögen", "mögt", "mag", "magst"], "1. Person Plural: wir mögen", "verb_moegen"),
        q("Was _____ ihr an eurem neuen Wohnort in Weiterstadt?", "mögt", ["mögt", "mögen", "magst", "mag"], "2. Person Plural: ihr mögt", "verb_moegen"),
        q("Frau Keller _____ keine Verspätungen bei Meetings.", "mag", ["mag", "magst", "mögt", "mögen"], "3. Person Singular: sie mag", "verb_moegen"),
        q("Ich _____ indisches Essen, besonders am Wochenende.", "mag", ["mag", "magst", "mögt", "mögen"], "ich mag", "verb_moegen"),
        q("_____ Sie ruhige Musik beim Programmieren, Herr Weber?", "Mögen", ["Mögen", "Mögt", "Mag", "Magst"], "Höflichkeitsform: Mögen Sie", "verb_moegen"),
        q("Die Entwickler _____ strukturierte und klare Anforderungen.", "mögen", ["mögen", "mögt", "mag", "magst"], "sie (Plural): mögen", "verb_moegen"),
        q("Du _____ moderne Benutzeroberflächen, oder?", "magst", ["magst", "mag", "mögt", "mögen"], "du magst", "verb_moegen"),
        q("Niemand im Büro _____ unklare Fehlermeldungen.", "mag", ["mag", "magst", "mögt", "mögen"], "Niemand (3. Person): mag", "verb_moegen"),
        q("Wir _____ den neuen Besprechungsraum im 2. Stock.", "mögen", ["mögen", "mögt", "mag", "magst"], "wir mögen", "verb_moegen")
      ]
    },
    {
      id: "LVL 1.25",
      chapter: "Linie 1 K7",
      title: "Possessivartikel sein / ihr (3. Person)",
      ruleSummary: "Besitzer männlich/neutral (er/es) -> sein/seine. Besitzer weiblich (sie) -> ihr/ihre.",
      example: "Herr Keller und sein Beruf; Frau Weber und ihre Wohnung",
      questions: [
        q("Herr Becker zeigt dem Team _____ neuen Entwurf (m).", "seinen", ["seinen", "ihren", "sein", "ihr"], "Besitzer er (Herr Becker) + Akkusativ maskulin: seinen", "poss_sein_ihr"),
        q("Frau Schmidt liebt _____ neue Wohnung (f) in Weiterstadt.", "ihre", ["ihre", "seine", "ihr", "sein"], "Besitzerin sie (Frau Schmidt) + feminin: ihre", "poss_sein_ihr"),
        q("Marco sucht _____ Schlüsselbund (m) im Konferenzraum.", "seinen", ["seinen", "ihren", "sein", "ihrem"], "Besitzer er + Akkusativ maskulin: seinen", "poss_sein_ihr"),
        q("Die Kollegin packt _____ Dienst-Notebook (n) in die Tasche.", "ihr", ["ihr", "sein", "ihre", "seine"], "Besitzerin sie + neutral: ihr Notebook", "poss_sein_ihr"),
        q("Thomas hat _____ Projektleiter über den Vorfall informiert.", "seinen", ["seinen", "ihren", "sein", "seinem"], "Besitzer er + Akkusativ maskulin: seinen", "poss_sein_ihr"),
        q("Frau Meier stellt _____ neuen Kollegen (m) vor.", "ihren", ["ihren", "seinen", "ihr", "sein"], "Besitzerin sie + Akkusativ maskulin: ihren", "poss_sein_ihr"),
        q("Das Kind hat _____ Spielzeug (n) im Bus vergessen.", "sein", ["sein", "ihr", "seine", "ihre"], "Besitzer neutral (das Kind) -> sein", "poss_sein_ihr"),
        q("Herr Tim leitet die Abteilung, _____ Büro (n) ist im 4. Stock.", "sein", ["sein", "ihr", "seine", "ihre"], "Besitzer er + neutral: sein Büro", "poss_sein_ihr"),
        q("Frau Weber fährt jeden Tag mit _____ Auto (n) zur Arbeit.", "ihrem", ["ihrem", "seinem", "ihren", "seiner"], "Besitzerin sie + Dativ neutral (mit): ihrem", "poss_sein_ihr"),
        q("Der Berater checkt morgens immer zuerst _____ E-Mails (Pl.).", "seine", ["seine", "ihre", "sein", "ihren"], "Besitzer er + Plural: seine E-Mails", "poss_sein_ihr"),
        q("Die Chefin lobt das Team für _____ Einsatz (m).", "seinen", ["seinen", "ihren", "sein", "ihr"], "Einsatz des Teams (das Team / n) -> seinen", "poss_sein_ihr"),
        q("Frau Sommer hat _____ Smartphone (n) auf dem Tisch liegen lassen.", "ihr", ["ihr", "sein", "ihre", "seine"], "Besitzerin sie + neutral: ihr Smartphone", "poss_sein_ihr")
      ]
    },
    {
      id: "LVL 1.26",
      chapter: "Linie 1 K7",
      title: "Modalverben können und müssen (Präsens)",
      ruleSummary: "können (Fähigkeit/Möglichkeit: ich kann, du kannst, er kann). müssen (Pflicht/Notwendigkeit: ich muss, du musst, er muss).",
      example: "Ich kann programmieren. Er muss heute länger arbeiten.",
      questions: [
        q("Ich _____ das Ticket erst morgen bearbeiten, heute fehlt die Zeit.", "kann", ["kann", "kannst", "können", "muss"], "Möglichkeit (ich): kann", "modal_koennen"),
        q("Der Entwickler _____ den Code vor dem Release noch testen.", "muss", ["muss", "musst", "müssen", "kann"], "Pflicht (er): muss", "modal_muessen"),
        q("_____ du mir bitte kurz bei dieser Fehlermeldung helfen?", "Kannst", ["Kannst", "Kann", "Könnt", "Musst"], "Fähigkeit/Bitte (du): Kannst du", "modal_koennen"),
        q("Wir _____ heute alle pünktlich um 10 Uhr im Meeting sein.", "müssen", ["müssen", "müsst", "muss", "können"], "Pflicht (wir): müssen", "modal_muessen"),
        q("Ihr _____ die Dokumente bis morgen früh einreichen.", "müsst", ["müsst", "müssen", "musst", "könnt"], "Pflicht (ihr): müsst", "modal_muessen"),
        q("Frau Weber _____ sehr gut Deutsch und fließend Englisch sprechen.", "kann", ["kann", "kannst", "können", "muss"], "Fähigkeit (sie): kann", "modal_koennen"),
        q("Kollegen, _____ ihr am Freitag zur Firmenfeier kommen?", "könnt", ["könnt", "können", "kannst", "müsst"], "Möglichkeit (ihr): könnt ihr", "modal_koennen"),
        q("Ich _____ heute zum Arzt, deshalb gehe ich früher.", "muss", ["muss", "musst", "müssen", "kann"], "Notwendigkeit (ich): muss", "modal_muessen"),
        q("_____ Sie mir sagen, wo das Büro von Herrn Keller ist?", "Können", ["Können", "Könnt", "Kannst", "Müssen"], "Höfliche Bitte: Können Sie", "modal_koennen"),
        q("Du _____ das Passwort sofort ändern, es ist unsicher.", "musst", ["musst", "muss", "müsst", "kannst"], "Pflicht (du): musst", "modal_muessen"),
        q("Herr Tim _____ heute nicht kommen, er hat einen Kundentermin.", "kann", ["kann", "kannst", "können", "muss"], "Möglichkeit negiert: kann nicht", "modal_koennen"),
        q("Wir _____ die Cloud-Schnittstelle neu konfigurieren.", "müssen", ["müssen", "müsst", "muss", "können"], "Notwendigkeit (wir): müssen", "modal_muessen")
      ]
    },
    {
      id: "LVL 1.27",
      chapter: "Linie 1 K7",
      title: "Präteritum von sein und haben",
      ruleSummary: "Präteritum: sein (ich war, du warst, er war, wir waren, ihr wart, sie waren). haben (ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten).",
      example: "Gestern war ich im Büro. Er hatte keine Zeit.",
      questions: [
        q("Gestern _____ ich den ganzen Tag in Frankfurt.", "war", ["war", "hatte", "warst", "waren"], "ich-Form von sein: ich war", "praet_sein"),
        q("Wir _____ gestern ein sehr erfolgreiches Architektur-Meeting.", "hatten", ["hatten", "waren", "hattet", "hatte"], "wir-Form von haben: hatten", "praet_haben"),
        q("Wo _____ du gestern Nachmittag, Marco?", "warst", ["warst", "wart", "hattest", "war"], "du-Form von sein: du warst", "praet_sein"),
        q("Herr Becker _____ letzte Woche leider keinen Urlaub.", "hatte", ["hatte", "war", "hatten", "hattest"], "er-Form von haben: er hatte", "praet_haben"),
        q("Die Präsentation am Montag _____ wirklich sehr informativ.", "war", ["war", "hatte", "waren", "ist"], "die Präsentation (sie) war", "praet_sein"),
        q("_____ ihr gestern viele Tickets im Support?", "Hattet", ["Hattet", "Wart", "Hatten", "Hatte"], "ihr-Form von haben: Hattet ihr", "praet_haben"),
        q("Kollegen, _____ ihr gestern auch bei der Schulung?", "wart", ["wart", "waren", "hattet", "warst"], "ihr-Form von sein: wart ihr", "praet_sein"),
        q("Frau Sommer _____ gestern starke Kopfschmerzen.", "hatte", ["hatte", "war", "hatten", "hattest"], "sie hatte Kopfschmerzen", "praet_haben"),
        q("Letztes Jahr _____ wir noch bei einem anderen Arbeitgeber angestellt.", "waren", ["waren", "hatten", "wart", "war"], "wir waren angestellt", "praet_sein"),
        q("Ich _____ gestern leider keine Zeit für die Dokumentation.", "hatte", ["hatte", "war", "hattest", "hatten"], "ich hatte keine Zeit", "praet_haben"),
        q("Der Konferenzraum _____ gestern bis 18 Uhr belegt.", "war", ["war", "hatte", "waren", "wäre"], "der Raum (er) war belegt", "praet_sein"),
        q("_____ Sie gestern im Homeoffice, Frau Weber?", "Waren", ["Waren", "Hatten", "Wart", "War"], "Höflichkeitsform: Waren Sie", "praet_sein")
      ]
    },
    {
      id: "LVL 1.28",
      chapter: "Linie 1 K7",
      title: "es gibt + Akkusativ",
      ruleSummary: "Die unpersönliche Wendung 'es gibt' steht IMMER mit dem Akkusativ (nur maskulin ändert sich: einen / keinen / den).",
      example: "Es gibt einen neuen Termin. Es gibt kein Problem. Es gibt eine Kantine.",
      questions: [
        q("Im Erdgeschoss gibt es _____ neuen Besprechungsraum (m).", "einen", ["einen", "ein", "einem", "einer"], "es gibt + Akkusativ maskulin: einen Raum", "es_gibt_akk"),
        q("Gibt es heute im Büro _____ frischen Kaffee (m)?", "einen", ["einen", "ein", "einem", "kein"], "es gibt + Akkusativ maskulin: einen Kaffee", "es_gibt_akk"),
        q("Hier gibt es glücklicherweise _____ technisches Problem (n).", "kein", ["kein", "keinen", "keinem", "keine"], "es gibt + Akkusativ neutral: kein Problem", "es_gibt_akk"),
        q("In der Nähe vom Bahnhof Weiterstadt gibt es _____ Bushaltestelle (f).", "eine", ["eine", "einen", "ein", "einer"], "es gibt + Akkusativ feminin: eine Haltestelle", "es_gibt_akk"),
        q("Gibt es in diesem Gebäude _____ funktionierenden Aufzug (m)?", "einen", ["einen", "ein", "einem", "einer"], "es gibt + Akkusativ maskulin: einen Aufzug", "es_gibt_akk"),
        q("Im Kühlschrank gibt es leider _____ Milch (f) mehr.", "keine", ["keine", "kein", "keinen", "keinem"], "es gibt + Akkusativ feminin: keine Milch", "es_gibt_akk"),
        q("Heute gibt es _____ wichtiges Update (n) für das Betriebssystem.", "ein", ["ein", "einen", "eine", "einem"], "es gibt + Akkusativ neutral: ein Update", "es_gibt_akk"),
        q("In unserer Abteilung gibt es _____ neuen Kollegen (m).", "einen", ["einen", "ein", "einem", "einer"], "es gibt + Akkusativ maskulin: einen Kollegen", "es_gibt_akk"),
        q("Gibt es noch _____ Fragen (Pl.) zum Architektur-Design?", "offene", ["offene", "offenen", "offener", "offenem"], "es gibt + Akkusativ Plural: offene Fragen", "es_gibt_akk"),
        q("Es gibt heute _____ freien Parkplatz (m) vor dem Gebäude.", "keinen", ["keinen", "kein", "keine", "keinem"], "es gibt + Akkusativ maskulin verneint: keinen", "es_gibt_akk"),
        q("Gibt es im Konferenzraum _____ Beamer (m)?", "einen", ["einen", "ein", "einem", "einer"], "Akkusativ maskulin: einen Beamer", "es_gibt_akk"),
        q("In Frankfurt gibt es _____ viele internationale Unternehmen (Pl.).", "sehr", ["sehr", "viel", "einen", "groß"], "es gibt sehr viele", "es_gibt_akk")
      ]
    },
    {
      id: "LVL 1.29",
      chapter: "Linie 1 K7",
      title: "Satzklammer bei Modalverben",
      ruleSummary: "Das Modalverb steht konjugiert auf Position 2. Das Vollverb wandert als INFINITIV an das absolute Satzende (Satzklammer).",
      example: "Er muss nicht so viel Miete zahlen. Ich kann Deutsch sprechen.",
      questions: [
        q("Bhavani muss heute die Schnittstelle für das System _____ .", "konfigurieren", ["konfigurieren", "konfiguriert", "konfigurierte", "konfigurierst"], "Modalverb 'muss' fordert Infinitiv am Satzende", "modal_klammer"),
        q("Wir können das Meeting gerne auf Donnerstag _____ .", "verschieben", ["verschieben", "verschiebt", "verschoben", "verschiebe"], "Modalverb 'können' -> Infinitiv am Satzende", "modal_klammer"),
        q("Der Techniker muss den defekten Server heute noch _____ .", "austauschen", ["austauschen", "tauscht aus", "ausgetauscht", "austauschte"], "Infinitiv mit abtrennbarem Verb: austauschen", "modal_klammer"),
        q("Können Sie mir die Zugangsdaten bitte per E-Mail _____ ?", "senden", ["senden", "sendet", "gesendet", "sende"], "Können Sie ... senden?", "modal_klammer"),
        q("Sie dürfen hier im gesamten Gebäude nicht _____ .", "rauchen", ["rauchen", "raucht", "geraucht", "rauchte"], "dürfen -> Infinitiv am Satzende: rauchen", "modal_klammer"),
        q("Ich möchte heute etwas früher Feierabend _____ .", "machen", ["machen", "macht", "gemacht", "mache"], "möchte -> Infinitiv am Satzende: machen", "modal_klammer"),
        q("Er will am Wochenende mit Freunden nach Darmstadt _____ .", "fahren", ["fahren", "fährt", "gefahren", "fuhr"], "wollen -> Infinitiv: fahren", "modal_klammer"),
        q("Ihr müsst die Aufgaben bis 17 Uhr im Ticketsystem _____ .", "abschließen", ["abschließen", "schließt ab", "abgeschlossen", "abschließt"], "Infinitiv: abschließen", "modal_klammer"),
        q("Der Berater kann das Problem sehr schnell _____ .", "analysieren", ["analysieren", "analysiert", "analysierte", "analysiere"], "Infinitiv: analysieren", "modal_klammer"),
        q("Wir müssen für den Kunden eine neue Architektur _____ .", "entwerfen", ["entwerfen", "entwirft", "entworfen", "entwerfe"], "Infinitiv: entwerfen", "modal_klammer"),
        q("Kannst du mich nach der Besprechung kurz _____ ?", "anrufen", ["anrufen", "rufst an", "angerufen", "anrief"], "Infinitiv: anrufen", "modal_klammer"),
        q("Sie müssen das Dokument vor dem Absenden noch einmal _____ .", "prüfen", ["prüfen", "prüft", "geprüft", "prüfte"], "Infinitiv: prüfen", "modal_klammer")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 8: WOHNUNG, REGELN & MODALVERBEN II
    // -------------------------------------------------------------
    {
      id: "LVL 1.30",
      chapter: "Linie 1 K8",
      title: "Adjektive in prädikativer Verwendung",
      ruleSummary: "Prädikative Adjektive stehen nach Verben wie sein, bleiben, werden und erhalten KEINE Deklinationsendung!",
      example: "Das Haus ist groß. Die Küche ist hell. Die Zimmer sind modern.",
      questions: [
        q("Der neue Besprechungsraum im 3. Stock ist sehr _____ .", "hell", ["hell", "helle", "heller", "helles"], "Prädikativ nach 'sein': keine Endung (hell)", "adj_praed"),
        q("Die Aufgaben in diesem Projekt sind wirklich _____ .", "komplex", ["komplex", "komplexe", "komplexen", "komplexes"], "Prädikativ: keine Endung (komplex)", "adj_praed"),
        q("Unser Büro in Weiterstadt ist extrem _____ .", "modern", ["modern", "moderne", "modernes", "moderner"], "Prädikativ: keine Endung (modern)", "adj_praed"),
        q("Die Internetverbindung im Besprechungsraum ist heute sehr _____ .", "langsam", ["langsam", "langsame", "langsamer", "langsames"], "Prädikativ: langsam", "adj_praed"),
        q("Der neue Laptop von DXC ist außergewöhnlich _____ .", "schnell", ["schnell", "schnelle", "schneller", "schnelles"], "Prädikativ: schnell", "adj_praed"),
        q("Die Kollegen im IT-Support sind immer außerordentlich _____ .", "hilfsbereit", ["hilfsbereit", "hilfsbereite", "hilfsbereiten", "hilfsbereiter"], "Prädikativ: hilfsbereit", "adj_praed"),
        q("Der Kaffee aus der neuen Kaffeemaschine ist wirklich _____ .", "gut", ["gut", "guter", "gute", "gutes"], "Prädikativ: gut", "adj_praed"),
        q("Die Wohnung in Darmstadt ist zwar schön, aber ziemlich _____ .", "teuer", ["teuer", "teure", "teures", "teurer"], "Prädikativ: teuer", "adj_praed"),
        q("Die Dokumentation der Schnittstelle ist leider sehr _____ .", "kurz", ["kurz", "kurze", "kurzer", "kurzes"], "Prädikativ: kurz", "adj_praed"),
        q("Die Monitore im Labor sind alle sehr _____ .", "groß", ["groß", "große", "großen", "großer"], "Prädikativ: groß", "adj_praed"),
        q("Der Zeitplan für dieses Release ist extrem _____ .", "eng", ["eng", "enge", "enger", "enges"], "Prädikativ: eng", "adj_praed"),
        q("Die Zusammenarbeit mit dem Kunden bleibt weiterhin sehr _____ .", "produktiv", ["produktiv", "produktive", "produktiver", "produktives"], "Prädikativ nach 'bleiben': produktiv", "adj_praed")
      ]
    },
    {
      id: "LVL 1.31",
      chapter: "Linie 1 K8",
      title: "Graduierung: sehr / zu mit Adjektiv",
      ruleSummary: "'sehr' verstärkt eine Eigenschaft positiv oder neutral (sehr groß). 'zu' drückt ein negatives Zuviel / Problem aus (zu klein = passt nicht!).",
      example: "Die Küche ist sehr modern. Das Zimmer ist zu laut (Problem!).",
      questions: [
        q("Der Konferenzraum ist für zwanzig Personen leider _____ klein.", "zu", ["zu", "sehr", "viel", "gern"], "Problem/Negatives Zuviel: zu klein", "grad_sehr_zu"),
        q("Ich finde die neue Softwarearchitektur _____ übersichtlich und logisch.", "sehr", ["sehr", "zu", "viel", "mehr"], "Positive Verstärkung: sehr übersichtlich", "grad_sehr_zu"),
        q("Die Miete für diese Wohnung ist für uns leider _____ teuer.", "zu", ["zu", "sehr", "viel", "gern"], "Problem: zu teuer (können wir nicht zahlen)", "grad_sehr_zu"),
        q("Herr Tim erklärt die technischen Zusammenhänge _____ verständlich.", "sehr", ["sehr", "zu", "mehr", "viel"], "Lob/Positive Verstärkung: sehr verständlich", "grad_sehr_zu"),
        q("Der Zug hatte 40 Minuten Verspätung, das war _____ spät für das Meeting.", "zu", ["zu", "sehr", "viel", "mehr"], "Problem (Meeting verpasst): zu spät", "grad_sehr_zu"),
        q("Das neue Dienst-Handy ist _____ handlich und leicht.", "sehr", ["sehr", "zu", "viel", "mehr"], "Positiv: sehr handlich", "grad_sehr_zu"),
        q("Bitte leiser sprechen, die Musik im Flur ist _____ laut zum Arbeiten.", "zu", ["zu", "sehr", "viel", "mehr"], "Problem/Störung: zu laut", "grad_sehr_zu"),
        q("Bhavani arbeitet _____ gewissenhaft und gründlich.", "sehr", ["sehr", "zu", "viel", "mehr"], "Positives Attribut: sehr gewissenhaft", "grad_sehr_zu"),
        q("Wir haben heute _____ viele offene Tickets, wir schaffen das nicht.", "zu", ["zu", "sehr", "mehr", "viel"], "Überlastung/Problem: zu viele", "grad_sehr_zu"),
        q("Die Kaffeepause war kurz, aber _____ erholsam.", "sehr", ["sehr", "zu", "viel", "mehr"], "Positiv: sehr erholsam", "grad_sehr_zu"),
        q("Der Pullover ist mir leider _____ eng, ich brauche eine Nummer größer.", "zu", ["zu", "sehr", "viel", "mehr"], "Passt nicht (Problem): zu eng", "grad_sehr_zu"),
        q("Das Support-Team antwortet normalerweise _____ schnell.", "sehr", ["sehr", "zu", "viel", "mehr"], "Lob: sehr schnell", "grad_sehr_zu")
      ]
    },
    {
      id: "LVL 1.32",
      chapter: "Linie 1 K8",
      title: "Modalverb wollen (Präsens)",
      ruleSummary: "Drückt Absicht / Plan aus: ich will, du willst, er/sie/es will, wir wollen, ihr wollt, sie/Sie wollen.",
      example: "Er will schlafen. Wir wollen Deutsch lernen.",
      questions: [
        q("Ich _____ dieses Jahr die Zertifizierung als CTA abschließen.", "will", ["will", "willst", "wollen", "wollt"], "1. Person Singular: ich will", "modal_wollen"),
        q("Was _____ du heute nach Feierabend machen, Marco?", "willst", ["willst", "will", "wollt", "wollen"], "2. Person Singular: du willst", "modal_wollen"),
        q("Herr Becker _____ den Kundenvertrag noch heute prüfen.", "will", ["will", "willst", "wollt", "wollen"], "3. Person Singular: er will", "modal_wollen"),
        q("Wir _____ am Wochenende einen Ausflug nach Heidelberg machen.", "wollen", ["wollen", "wollt", "will", "willst"], "1. Person Plural: wir wollen", "modal_wollen"),
        q("Kollegen, _____ ihr heute in der Kantine oder draußen essen?", "wollt", ["wollt", "wollen", "willst", "will"], "2. Person Plural: ihr wollt", "modal_wollen"),
        q("Frau Meyer _____ die Präsentation bis morgen vorbereiten.", "will", ["will", "willst", "wollt", "wollen"], "3. Person Singular: sie will", "modal_wollen"),
        q("Wohin _____ Sie im Sommer in den Urlaub reisen, Herr Tim?", "wollen", ["wollen", "wollt", "will", "willst"], "Höflichkeitsform: wollen Sie", "modal_wollen"),
        q("Der Kunde _____ keine weiteren Verzögerungen im Projekt akzeptieren.", "will", ["will", "willst", "wollt", "wollen"], "er will", "modal_wollen"),
        q("Ich _____ mir heute Abend noch die Grammatikregeln ansehen.", "will", ["will", "willst", "wollen", "wollt"], "ich will", "modal_wollen"),
        q("_____ du wirklich mit dem Zug nach München fahren?", "Willst", ["Willst", "Will", "Wollt", "Wollen"], "Willst du", "modal_wollen"),
        q("Die Entwickler _____ das Release vor dem Wochenende veröffentlichen.", "wollen", ["wollen", "wollt", "will", "willst"], "sie (Plural): wollen", "modal_wollen"),
        q("Wer _____ heute das Protokoll der Besprechung schreiben?", "will", ["will", "willst", "wollt", "wollen"], "Wer (er/sie): will", "modal_wollen")
      ]
    },
    {
      id: "LVL 1.33",
      chapter: "Linie 1 K8",
      title: "Modalverb dürfen: Erlaubnis und Verbot",
      ruleSummary: "dürfen (ich darf, du darfst, er darf). Verneint mit 'nicht' drückt es ein striktes VERBOT aus!",
      example: "Hier darf man nicht rauchen (Verbot). Er darf Kaffee trinken (Erlaubnis).",
      questions: [
        q("Im gesamten Bürogebäude _____ man absolut nicht rauchen.", "darf", ["darf", "darfst", "dürfen", "muss"], "Verbot (man): darf nicht", "modal_duerfen"),
        q("_____ ich Sie kurz bei der Arbeit stören, Herr Schmidt?", "Darf", ["Darf", "Darfst", "Dürfen", "Kann"], "Höfliche Bitte um Erlaubnis: Darf ich", "modal_duerfen"),
        q("Auf diesem Parkplatz _____ nur Mitarbeiter von DXC parken.", "dürfen", ["dürfen", "darf", "darfst", "dürft"], "Erlaubnis Plural: dürfen", "modal_duerfen"),
        q("Du _____ vertrauliche Passwörter niemals per Chat weitergeben.", "darfst", ["darfst", "darf", "dürft", "dürfen"], "Striktes Verbot: darfst nicht", "modal_duerfen"),
        q("Hier im Serverraum _____ man keine Getränke mitnehmen.", "darf", ["darf", "darfst", "dürfen", "dürft"], "Verbot: darf man nicht", "modal_duerfen"),
        q("Kollegen, ihr _____ heute ab 16 Uhr nach Hause gehen.", "dürft", ["dürft", "dürfen", "darfst", "darf"], "Erlaubnis (ihr): dürft", "modal_duerfen"),
        q("_____ wir den Konferenzraum bis 18 Uhr nutzen?", "Dürfen", ["Dürfen", "Dürft", "Darf", "Darfst"], "Erlaubnis (wir): Dürfen wir", "modal_duerfen"),
        q("Man _____ während der Autofahrt das Smartphone nicht benutzen.", "darf", ["darf", "darfst", "dürfen", "dürft"], "Gesetzliches Verbot: darf nicht", "modal_duerfen"),
        q("Frau Sommer _____ ab nächster Woche zwei Tage im Homeoffice arbeiten.", "darf", ["darf", "darfst", "dürfen", "dürft"], "Erlaubnis (sie): darf", "modal_duerfen"),
        q("_____ ich hier mein Dienst-Notebook aufladen?", "Darf", ["Darf", "Darfst", "Dürfen", "Kann"], "Darf ich", "modal_duerfen"),
        q("Kinder unter 12 Jahren _____ hier nicht ohne Begleitung eintreten.", "dürfen", ["dürfen", "darf", "dürft", "darfst"], "Verbot Plural: dürfen nicht", "modal_duerfen"),
        q("Du _____ nach der bestandenen Prüfung stolz auf dich sein!", "darfst", ["darfst", "darf", "dürft", "dürfen"], "Erlaubnis/Berechtigung: darfst", "modal_duerfen")
      ]
    },
    {
      id: "LVL 1.34",
      chapter: "Linie 1 K8",
      title: "Possessivartikel im Plural (unser, euer, ihr)",
      ruleSummary: "Besitz im Plural: wir -> unser; ihr -> euer / eure; sie/Sie -> ihr / Ihre.",
      example: "unser Team (n), eure Wohnung (f), ihr Chef (m), Ihre Dokumente (Pl.)",
      questions: [
        q("Wir schätzen _____ Arbeitsklima (n) im Team sehr.", "unser", ["unser", "unseres", "unsere", "unserem"], "wir -> unser Arbeitsklima", "poss_plur"),
        q("Kollegen, ist das _____ Besprechungsraum (m) dort drüben?", "euer", ["euer", "eure", "euren", "euerem"], "ihr -> euer Raum (maskulin)", "poss_plur"),
        q("Die Mitarbeiterinnen freuen sich über _____ neuen Laptops (Pl.).", "ihre", ["ihre", "ihr", "ihren", "ihrer"], "sie (Plural) -> ihre Laptops", "poss_plur"),
        q("Herr und Frau Weber, wo steht _____ Auto (n)?", "Ihr", ["Ihr", "Ihre", "Ihrem", "Ihren"], "Höfliche Anrede Plural: Ihr Auto", "poss_plur"),
        q("Wir haben gestern _____ Quartalsziele (Pl.) erfolgreich erreicht.", "unsere", ["unsere", "unser", "unseren", "unserer"], "wir + Plural: unsere Ziele", "poss_plur"),
        q("Kollegen, wie läuft _____ Projekt (n) mit dem Kunden?", "euer", ["euer", "eure", "euren", "eurem"], "ihr + neutral: euer Projekt", "poss_plur"),
        q("Das ist die Familie Schmidt und das ist _____ Haus (n) in Weiterstadt.", "ihr", ["ihr", "ihre", "sein", "seine"], "sie (Plural) -> ihr Haus", "poss_plur"),
        q("Habt ihr _____ Zugangskarten (Pl.) heute alle dabei?", "eure", ["eure", "euer", "euren", "eures"], "ihr + Plural: eure Karten", "poss_plur"),
        q("Wir renovieren gerade _____ Küche (f) in der Wohnung.", "unsere", ["unsere", "unser", "unseren", "unserer"], "wir + feminin: unsere Küche", "poss_plur"),
        q("Die Entwickler testen _____ Programm (n) vor der Übergabe.", "ihr", ["ihr", "ihre", "sein", "seine"], "sie (Plural) -> ihr Programm", "poss_plur"),
        q("Liebe Kollegen, wie war _____ Wochenende (n)?", "euer", ["euer", "eure", "euren", "eurem"], "ihr + neutral: euer Wochenende", "poss_plur"),
        q("Wir präsentieren heute _____ neue Architektur-Strategie (f).", "unsere", ["unsere", "unser", "unseren", "unserer"], "wir + feminin: unsere Strategie", "poss_plur")
      ]
    }
  ];

  // Append to the global dataset
  if (!window.STAGE_A1_DATA) {
    window.STAGE_A1_DATA = { stage: "A1", levels: [] };
  }

  // Merge cleanly without duplicates
  levelsK5toK8.forEach(newLvl => {
    const existingIdx = window.STAGE_A1_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A1_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A1_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A1_DATA.totalLevels = window.STAGE_A1_DATA.levels.length;
})();
