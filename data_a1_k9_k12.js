/**
 * STAGE A1 DATA PACK 3 (Levels 1.35 to 1.48 - Chapters K9 to K12)
 * Hand-crafted curriculum dataset directly from Linie 1 (A1).
 * Zero placeholder cloning: every sentence is unique.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsK9toK12 = [
    // -------------------------------------------------------------
    // KAPITEL 9: VERGANGENHEIT, ZEIT & AKKUSATIV-PRONOMEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.35",
      chapter: "Linie 1 K9",
      title: "Adverbien der Zeit (gestern, heute, morgens, abends)",
      ruleSummary: "Temporale Adverbien geben den Zeitpunkt oder die Regelmäßigkeit an (gestern, vorgestern, morgens, abends, oft, nie). Stehen sie auf Position 1, folgt Inversion.",
      example: "Gestern hatte ich Besuch. Abends lerne ich Deutsch.",
      questions: [
        q("_____ war der Cloud-Server für zwei Stunden nicht erreichbar.", "Gestern", ["Gestern", "Morgen", "Übermorgen", "Nächste"], "Vergangenheit: Gestern war der Server...", "adv_zeit"),
        q("Marco trinkt _____ nach dem Aufstehen eine Tasse Tee.", "morgens", ["morgens", "gestern", "vorgestern", "damals"], "Regelmäßige Tageszeit: morgens", "adv_zeit"),
        q("Wir haben die neue Release-Dokumentation _____ fertiggestellt.", "vorgestern", ["vorgestern", "morgen", "übermorgen", "nächste"], "Vergangenheit vor 2 Tagen: vorgestern", "adv_zeit"),
        q("_____ arbeite ich den ganzen Tag konzentriert im Homeoffice.", "Heute", ["Heute", "Gestern", "Damals", "Früher"], "Gegenwart: Heute arbeite ich...", "adv_zeit"),
        q("Der Support prüft die offenen Jira-Tickets _____ um 17 Uhr.", "abends", ["abends", "gestern", "vorgestern", "damals"], "Regelmäßige Abendroutine: abends", "adv_zeit"),
        q("_____ hatte das gesamte Entwicklerteam ein wichtiges Meeting.", "Gestern", ["Gestern", "Morgen", "Bald", "Kommende"], "Vergangenheit: Gestern hatte das Team...", "adv_zeit"),
        q("Frau Weber fährt _____ mit dem Bus 675 nach Darmstadt.", "täglich", ["täglich", "gestern", "vorgestern", "einmal"], "Regelmäßige Gewohnheit: täglich", "adv_zeit"),
        q("Ich habe _____ Abend noch kurz meine dienstlichen E-Mails gelesen.", "gestern", ["gestern", "morgen", "übermorgen", "nächsten"], "Vergangener Abend: gestern Abend", "adv_zeit"),
        q("_____ müssen wir das Problem unbedingt mit dem Kunden klären.", "Heute", ["Heute", "Gestern", "Vorgestern", "Früher"], "Präsens-Dringlichkeit: Heute müssen wir...", "adv_zeit"),
        q("Er geht _____ nach der Arbeit noch eine Stunde spazieren.", "oft", ["oft", "gestern", "vorgestern", "gestern abend"], "Häufigkeit: oft", "adv_zeit"),
        q("_____ war das Wetter in Weiterstadt außergewöhnlich schön.", "Gestern", ["Gestern", "Morgen", "Bald", "Zukünftig"], "Vergangenheit (war): Gestern", "adv_zeit"),
        q("Wir besprechen die Details _____ im morgendlichen Standup.", "immer", ["immer", "gestern", "vorgestern", "früher"], "Feste Regelmäßigkeit: immer", "adv_zeit")
      ]
    },
    {
      id: "LVL 1.36",
      chapter: "Linie 1 K9",
      title: "Personalpronomen im Akkusativ",
      ruleSummary: "Akkusativ-Pronomen (Objekt): mich, dich, ihn (m), sie (f), es (n), uns, euch, sie/Sie.",
      example: "Er ruft mich an. Ich kenne ihn. Wir fragen Sie.",
      questions: [
        q("Kennst du den neuen Kollegen (m)? - Ja, ich kenne _____ gut.", "ihn", ["ihn", "ihm", "er", "es"], "Akkusativ maskulin (der Kollege): ihn", "pron_akk"),
        q("Herr Tim hat eine Frage an Sie. Bitte rufen Sie _____ kurz an.", "ihn", ["ihn", "ihm", "er", "sein"], "Akkusativ maskulin: rufen Sie ihn an", "pron_akk"),
        q("Wo ist die Zugangskarte (f)? - Ich finde _____ nicht mehr.", "sie", ["sie", "ihr", "es", "ihn"], "Akkusativ feminin (die Karte): sie", "pron_akk"),
        q("Hörst du _____ , Marco? Die Tonverbindung ist sehr leise.", "mich", ["mich", "mir", "ich", "mein"], "Akkusativ 1. Person: hörst du mich?", "pron_akk"),
        q("Der Projektleiter sucht _____ (wir) für das nächste Review.", "uns", ["uns", "unser", "wir", "euch"], "Akkusativ 1. Person Plural: sucht uns", "pron_akk"),
        q("Das Dienst-Handy (n) ist neu. Ich lade _____ gerade auf.", "es", ["es", "ihn", "sie", "ihm"], "Akkusativ neutral (das Handy): es", "pron_akk"),
        q("Ich habe _____ (du) gestern gar nicht im Büro gesehen.", "dich", ["dich", "dir", "du", "dein"], "Akkusativ 2. Person: habe dich gesehen", "pron_akk"),
        q("Frau Sommer ist krank. Der Chef vertritt _____ heute.", "sie", ["sie", "ihr", "ihn", "es"], "Akkusativ feminin: vertritt sie", "pron_akk"),
        q("Kollegen, ich brauche _____ (ihr) kurz im Besprechungsraum.", "euch", ["euch", "uns", "ihr", "euer"], "Akkusativ 2. Person Plural: brauche euch", "pron_akk"),
        q("Kennen Sie Herrn Becker? - Nein, ich kenne _____ leider nicht.", "ihn", ["ihn", "ihm", "er", "es"], "Akkusativ maskulin: kenne ihn", "pron_akk"),
        q("Die Unterlagen (Pl.) sind wichtig. Bitte prüfen Sie _____ sofort.", "sie", ["sie", "ihnen", "es", "ihr"], "Akkusativ Plural: prüfen Sie sie", "pron_akk"),
        q("Der Kollege versteht die Erklärung nicht. Kannst du _____ unterstützen?", "ihn", ["ihn", "ihm", "er", "sein"], "Akkusativ maskulin: unterstützen + Akk -> ihn", "pron_akk")
      ]
    },
    {
      id: "LVL 1.37",
      chapter: "Linie 1 K9",
      title: "Possessivartikel im Akkusativ",
      ruleSummary: "Nur der maskuline Possessivartikel ändert sich im Akkusativ zu -en: meinen, deinen, seinen, ihren, unseren, euren, Ihren.",
      example: "Ich frage meinen Chef. Er sucht seinen Schlüssel.",
      questions: [
        q("Bhavani ruft heute Nachmittag _____ Teamleiter (m) an.", "seinen", ["seinen", "sein", "seinem", "seiner"], "Akkusativ maskulin: seinen Teamleiter", "poss_akk_m"),
        q("Hast du _____ Haustürschlüssel (m) dabei, Marco?", "deinen", ["deinen", "dein", "deinem", "deine"], "Akkusativ maskulin: deinen Schlüssel", "poss_akk_m"),
        q("Ich suche schon den ganzen Tag _____ Dienstausweis (m).", "meinen", ["meinen", "mein", "meinem", "meine"], "Akkusativ maskulin: meinen Ausweis", "poss_akk_m"),
        q("Frau Weber informiert _____ Abteilungsleiter (m) über den Fehler.", "ihren", ["ihren", "ihr", "ihrem", "ihre"], "Akkusativ maskulin (Besitzerin sie): ihren", "poss_akk_m"),
        q("Wir haben _____ wöchentlichen Bericht (m) pünktlich abgegeben.", "unseren", ["unseren", "unser", "unserem", "unsere"], "Akkusativ maskulin (wir): unseren", "poss_akk_m"),
        q("Habt ihr _____ neuen Firmenwagen (m) schon gesehen?", "euren", ["euren", "euer", "eurem", "eure"], "Akkusativ maskulin (ihr): euren Wagen", "poss_akk_m"),
        q("Herr Schmidt, haben Sie _____ Kalender (m) für morgen geprüft?", "Ihren", ["Ihren", "Ihr", "Ihrem", "Ihre"], "Akkusativ maskulin formal: Ihren Kalender", "poss_akk_m"),
        q("Der Techniker repariert heute _____ alten Rechner (m).", "meinen", ["meinen", "mein", "meinem", "meine"], "Akkusativ maskulin: meinen Rechner", "poss_akk_m"),
        q("Thomas hat _____ Kaffeebecher (m) in der Küche stehen lassen.", "seinen", ["seinen", "sein", "seinem", "seine"], "Akkusativ maskulin: seinen Becher", "poss_akk_m"),
        q("Ich brauche für die Besprechung _____ Laptop (m).", "meinen", ["meinen", "mein", "meinem", "meine"], "Akkusativ maskulin: meinen Laptop", "poss_akk_m"),
        q("Die Mitarbeiter schätzen _____ direkten Vorgesetzten (m) sehr.", "ihren", ["ihren", "ihr", "ihrem", "ihre"], "Akkusativ maskulin (Plural-Besitzer): ihren", "poss_akk_m"),
        q("Vergiss bitte _____ Mantel (m) an der Garderobe nicht!", "deinen", ["deinen", "dein", "deinem", "deine"], "Akkusativ maskulin: deinen Mantel", "poss_akk_m")
      ]
    },
    {
      id: "LVL 1.38",
      chapter: "Linie 1 K10",
      title: "Präteritum von sein und haben (Wiederholung)",
      ruleSummary: "Festigung der narrativen Vergangenheit: war / hatte (ich/er/sie/es war/hatte; wir waren/hatten).",
      example: "Ich hatte Besuch. Die Fahrradtour war schön. Wir waren im Büro.",
      questions: [
        q("Die Schulung zur Cloud-Architektur _____ extrem hilfreich.", "war", ["war", "hatte", "waren", "hatten"], "die Schulung (sie) war", "praet_rep"),
        q("Wir _____ gestern alle viel zu viele offene Aufgaben.", "hatten", ["hatten", "waren", "hattet", "hatte"], "wir hatten", "praet_rep"),
        q("Herr Keller _____ gestern den ganzen Vormittag außer Haus.", "war", ["war", "hatte", "waren", "ist"], "er war außer Haus", "praet_rep"),
        q("Ich _____ leider keine Gelegenheit, mit ihm zu sprechen.", "hatte", ["hatte", "war", "hattest", "hatten"], "ich hatte keine Gelegenheit", "praet_rep"),
        q("_____ Sie gestern auch im Konferenzraum, Frau Weber?", "Waren", ["Waren", "Hatten", "Wart", "War"], "Waren Sie...", "praet_rep"),
        q("Das Feedback des Kunden am Freitag _____ überaus positiv.", "war", ["war", "hatte", "waren", "wäre"], "das Feedback (es) war", "praet_rep"),
        q("Kollegen, _____ ihr gestern Abend noch lange im Büro?", "wart", ["wart", "hattet", "waren", "warst"], "wart ihr...", "praet_rep"),
        q("Mein Kollege Marco _____ letzte Woche ein technisches Problem.", "hatte", ["hatte", "war", "hatten", "hattest"], "er hatte ein Problem", "praet_rep"),
        q("Die Verbindung im Teams-Call _____ leider sehr instabil.", "war", ["war", "hatte", "waren", "gewesen"], "die Verbindung (sie) war", "praet_rep"),
        q("Wir _____ vor zwei Monaten noch ein kleineres Team.", "waren", ["waren", "hatten", "wart", "war"], "wir waren", "praet_rep"),
        q("_____ du gestern Zeit für das Ticket?", "Hattest", ["Hattest", "Warst", "Hatte", "Wart"], "Hattest du Zeit?", "praet_rep"),
        q("Der gestrige Tag _____ für alle Beteiligten sehr lang.", "war", ["war", "hatte", "waren", "gewesen"], "der Tag (er) war lang", "praet_rep")
      ]
    },
    {
      id: "LVL 1.39",
      chapter: "Linie 1 K9",
      title: "Perfekt mit haben",
      ruleSummary: "Die Mehrheit der Verben bildet das Perfekt mit haben + Partizip II am Satzende (ge-...-t oder ge-...-en).",
      example: "Ich habe gestern gearbeitet und getanzt. Er hat Kaffee getrunken.",
      questions: [
        q("Bhavani hat die Schnittstelle gestern erfolgreich _____ .", "getestet", ["getestet", "testen", "getesten", "testete"], "haben + Partizip II: getestet", "perf_haben"),
        q("Wir haben heute Morgen sehr produktiv im Team _____ .", "gearbeitet", ["gearbeitet", "arbeiten", "gearbeiten", "arbeiteten"], "haben + gearbeitet", "perf_haben"),
        q("Herr Tim hat die E-Mail bereits an den Vorstand _____ .", "geschickt", ["geschickt", "schicken", "gesenden", "schickte"], "haben + geschickt", "perf_haben"),
        q("Hast du den Bericht für das Release schon _____ ?", "gelesen", ["gelesen", "gelest", "lesen", "las"], "haben + gelesen (unregelmäßig)", "perf_haben"),
        q("Die Entwickler haben den Fehler im Code schnell _____ .", "gefunden", ["gefunden", "gefindet", "finden", "fand"], "haben + gefunden", "perf_haben"),
        q("Ich habe heute noch keinen Kaffee _____ .", "getrunken", ["getrunken", "getrinkt", "trinken", "trank"], "haben + getrunken", "perf_haben"),
        q("Habt ihr mit dem Kunden über das Budget _____ ?", "gesprochen", ["gesprochen", "gesprecht", "sprechen", "sprach"], "haben + gesprochen", "perf_haben"),
        q("Frau Meyer hat das Meeting für Donnerstag _____ .", "geplant", ["geplant", "planen", "geplanen", "plante"], "haben + geplant", "perf_haben"),
        q("Wir haben gestern im Supermarkt frische Lebensmittel _____ .", "gekauft", ["gekauft", "kaufen", "gekauftet", "kaufte"], "haben + gekauft", "perf_haben"),
        q("Der Techniker hat den neuen Drucker im 2. Stock _____ .", "installiert", ["installiert", "geinstalliert", "installieren", "installierte"], "Verben auf -ieren bilden Partizip OHNE ge-", "perf_haben"),
        q("Ich habe gestern Abend meine Grammatikübungen _____ .", "gemacht", ["gemacht", "machen", "gemachen", "machte"], "haben + gemacht", "perf_haben"),
        q("Wer hat das Ticket im Support-System _____ ?", "geschlossen", ["geschlossen", "geschließt", "schließen", "schloss"], "haben + geschlossen", "perf_haben")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 10: REISEN, BEWEGUNG & PERFEKT-VARIANTEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.40",
      chapter: "Linie 1 K10",
      title: "Perfekt mit sein (Bewegung & Zustandswechsel)",
      ruleSummary: "Verben der Ortsveränderung (fahren, gehen, fliegen, kommen) oder Zustandsänderung (aufstehen, passieren) und 'sein/bleiben' bilden das Perfekt mit SEIN.",
      example: "Er ist nach Hause geflogen. Wir sind nach Frankfurt gefahren.",
      questions: [
        q("Herr Becker ist heute früh mit dem ICE nach München _____ .", "gefahren", ["gefahren", "gefahrt", "fahren", "fuhr"], "Bewegung: ist gefahren", "perf_sein"),
        q("Bhavani ist pünktlich um 9 Uhr im Büro _____ .", "angekommen", ["angekommen", "ankommen", "geankommen", "kam an"], "Ortswechsel: ist angekommen", "perf_sein"),
        q("Die Kollegen sind gestern gemeinsam in die Kantine _____ .", "gegangen", ["gegangen", "gegeht", "gehen", "gingen"], "Bewegung: sind gegangen", "perf_sein"),
        q("Wann bist du heute Morgen aus dem Bett _____ ?", "aufgestanden", ["aufgestanden", "aufgesteht", "aufstehen", "stand auf"], "Zustandswechsel: bist aufgestanden", "perf_sein"),
        q("Der Vorstand ist gestern direkt nach New York _____ .", "geflogen", ["geflogen", "gefliegt", "fliegen", "flog"], "Bewegung: ist geflogen", "perf_sein"),
        q("Frau Weber ist wegen des Verkehrs zu spät _____ .", "gekommen", ["gekommen", "gekommt", "kommen", "kam"], "Bewegung: ist gekommen", "perf_sein"),
        q("Was ist gestern im Serverraum genau _____ ?", "passiert", ["passiert", "gepassiert", "passieren", "passierte"], "Zustandsänderung: ist passiert", "perf_sein"),
        q("Wir sind am Wochenende zwei Stunden durch Weiterstadt _____ .", "spaziert", ["spaziert", "gespaziert", "spazieren", "spazierte"], "Verben auf -ieren: ist spaziert", "perf_sein"),
        q("Der Kollege ist gestern den ganzen Tag zu Hause _____ .", "geblieben", ["geblieben", "gebleibt", "bleiben", "blieb"], "Ausnahme: bleiben bildet Perfekt mit sein!", "perf_sein"),
        q("Bist du gestern mit der Buslinie 675 _____ ?", "gefahren", ["gefahren", "gefahrt", "fahren", "fuhr"], "Bewegung: bist gefahren", "perf_sein"),
        q("Das Release-Team ist bis spät in die Nacht im Büro _____ .", "gewesen", ["gewesen", "gesein", "war", "geweset"], "Ausnahme: sein bildet Perfekt mit sein (ist gewesen)", "perf_sein"),
        q("Die neuen Mitarbeiter sind aus verschiedenen Städten _____ .", "angereist", ["angereist", "anreisen", "geangereist", "reisten an"], "Bewegung: sind angereist", "perf_sein")
      ]
    },
    {
      id: "LVL 1.41",
      chapter: "Linie 1 K10",
      title: "Perfekt untrennbarer Verben (be-, ver-, er-, zer-)",
      ruleSummary: "Untrennbare Verben mit den Präfixen be-, ent-, er-, ge-, ver-, zer- bilden das Partizip II OHNE die Vorsilbe ge-!",
      example: "Sie hat Eis verkauft und Autos repariert. Er hat das Problem verstanden.",
      questions: [
        q("Der Consultant hat das Problem der Kunden sofort _____ .", "verstanden", ["verstanden", "geverstanden", "versteht", "verstand"], "untrennbar ver-: verstanden (ohne ge-)", "perf_untrenn"),
        q("Die IT-Abteilung hat alle Anforderungen genau _____ .", "überprüft", ["überprüft", "geüberprüft", "überprüfen", "überprüfte"], "untrennbar über-: überprüft", "perf_untrenn"),
        q("Frau Meyer hat gestern das gesamte Team über das Release _____ .", "informiert", ["informiert", "geinformiert", "informieren", "informierte"], "-ieren Verb: informiert", "perf_untrenn"),
        q("Der Techniker hat den defekten Serverraum erfolgreich _____ .", "repariert", ["repariert", "gerepariert", "reparieren", "reparierte"], "-ieren Verb: repariert", "perf_untrenn"),
        q("Herr Becker hat den neuen Vertrag bereits gestern _____ .", "unterschrieben", ["unterschrieben", "geunterschrieben", "unterschreibt", "unterschrieb"], "untrennbar unter-: unterschrieben", "perf_untrenn"),
        q("Wir haben die Architektur mit dem Chef ausführlich _____ .", "besprochen", ["besprochen", "gebesprochen", "besprechen", "besprach"], "untrennbar be-: besprochen", "perf_untrenn"),
        q("Der Support hat mein Ticket heute Vormittag _____ .", "bearbeitet", ["bearbeitet", "gebearbeitet", "bearbeiten", "bearbeitete"], "untrennbar be-: bearbeitet", "perf_untrenn"),
        q("Haben Sie den wöchentlichen Newsletter schon _____ ?", "erhalten", ["erhalten", "geerhalten", "erhaltet", "erhielt"], "untrennbar er-: erhalten", "perf_untrenn"),
        q("Ich habe leider mein Passwort für den Login _____ .", "vergessen", ["vergessen", "gevergessen", "vergesst", "vergaß"], "untrennbar ver-: vergessen", "perf_untrenn"),
        q("Der Projektleiter hat das Meeting kurzfristig _____ .", "verschoben", ["verschoben", "geverschoben", "verschiebt", "verschob"], "untrennbar ver-: verschoben", "perf_untrenn"),
        q("Die Firma hat letztes Jahr neue Büros in Darmstadt _____ .", "bezogen", ["bezogen", "gebezogen", "beziehen", "bezog"], "untrennbar be-: bezogen", "perf_untrenn"),
        q("Er hat mir die komplizierte System-Architektur ruhig _____ .", "erklärt", ["erklärt", "geerklärt", "erklären", "erklärte"], "untrennbar er-: erklärt", "perf_untrenn")
      ]
    },
    {
      id: "LVL 1.42",
      chapter: "Linie 1 K10",
      title: "Perfekt trennbarer Verben (Präfix + ge + Stamm)",
      ruleSummary: "Bei trennbaren Verben wird das Element '-ge-' ZWISCHEN das abtrennbare Präfix und den Verbstamm gesetzt.",
      example: "eingekauft, angerufen, aufgestanden, vorbereitet, mitgebracht",
      questions: [
        q("Bhavani hat seinen Teamleiter heute früh telefonisch _____ .", "angerufen", ["angerufen", "geanruft", "anrufen", "anrief"], "an-ge-rufen: angerufen", "perf_trenn"),
        q("Wir haben für die Firmenfeier viele Snacks und Getränke _____ .", "eingekauft", ["eingekauft", "geeinkauft", "einkaufen", "kaufte ein"], "ein-ge-kauft: eingekauft", "perf_trenn"),
        q("Herr Tim hat die Präsentation für den Vorstand perfekt _____ .", "vorbereitet", ["vorbereitet", "gevorbereitet", "vorbereiten", "bereitete vor"], "vor-ge-bereitet: vorbereitet", "perf_trenn"),
        q("Wann seid ihr gestern Abend zu Hause _____ ?", "angekommen", ["angekommen", "geankommen", "ankommen", "kamen an"], "an-ge-kommen: angekommen", "perf_trenn"),
        q("Ich habe gestern Abend zwei Stunden vor dem Fernseher _____ .", "fernaufgesehen", ["fernaufgesehen", "ferngesehen", "geefernseht", "fernsehte"], "fern-ge-sehen: ferngesehen", "perf_trenn"),
        q("Frau Weber hat alle Kollegen herzlich zur Feier _____ .", "eingeladen", ["eingeladen", "geeinladet", "einladen", "lud ein"], "ein-ge-laden: eingeladen", "perf_trenn"),
        q("Der neue Mitarbeiter hat sich dem Team freundlich _____ .", "vorgestellt", ["vorgestellt", "gevorstellt", "vorstellen", "stellte vor"], "vor-ge-stellt: vorgestellt", "perf_trenn"),
        q("Wer hat das Formular für die Reisekostenabrechnung _____ ?", "ausgefüllt", ["ausgefüllt", "geausfüllt", "ausfüllen", "füllte aus"], "aus-ge-füllt: ausgefüllt", "perf_trenn"),
        q("Hast du den Rechner vor dem Wochenende auch _____ ?", "ausgeschaltet", ["ausgeschaltet", "geausschaltet", "ausschalten", "schaltete aus"], "aus-ge-schaltet: ausgeschaltet", "perf_trenn"),
        q("Der Kollege hat frischen indischen Tee ins Büro _____ .", "mitgebracht", ["mitgebracht", "gemitbringt", "mitbringen", "brachte mit"], "mit-ge-bracht: mitgebracht", "perf_trenn"),
        q("Wir haben die Konferenz heute um Punkt 10 Uhr _____ .", "angefangen", ["angefangen", "geangefangen", "anfangen", "fingen an"], "an-ge-fangen: angefangen", "perf_trenn"),
        q("Sie hat das Ticket nach der Prüfung direkt _____ .", "abgeschlossen", ["abgeschlossen", "geabgeschlossen", "abschließen", "schloss ab"], "ab-ge-schlossen: abgeschlossen", "perf_trenn")
      ]
    },
    {
      id: "LVL 1.43",
      chapter: "Linie 1 K10",
      title: "Jahreszahlen im Deutschen",
      ruleSummary: "Jahreszahlen stehen im Deutschen OHNE Präposition ('in' ist falsch!) oder mit der Fügung 'im Jahr'. Bis 1999: neunzehnhundert... Ab 2000: zweitausend...",
      example: "Was ist 1992 passiert? Er ist 2026 nach Deutschland gezogen.",
      questions: [
        q("Bhavani hat seine Stelle als Technical Architect _____ angetreten.", "2026", ["2026", "in 2026", "am 2026", "im 2026"], "Jahreszahlen stehen allein: 2026", "jahreszahl"),
        q("Die Firma DXC wurde im Jahr _____ gegründet.", "2017", ["2017", "im 2017", "am 2017", "in 2017"], "Entweder allein oder 'im Jahr 2017'", "jahreszahl"),
        q("Mein Kollege Marco ist _____ in Frankfurt geboren.", "1994", ["1994", "in 1994", "am 1994", "im 1994"], "Reine Jahreszahl ohne Präposition: 1994", "jahreszahl"),
        q("Das Unternehmen hat _____ ein großes Cloud-Projekt gestartet.", "2024", ["2024", "in 2024", "auf 2024", "bei 2024"], "Ohne 'in': 2024", "jahreszahl"),
        q("Wann haben Sie Ihr Studium abgeschlossen? - _____ .", "2018", ["2018", "In 2018", "Am 2018", "Im 2018"], "Reine Jahreszahl: 2018", "jahreszahl"),
        q("Deutschland wurde _____ zum vierten Mal Fußball-Weltmeister.", "2014", ["2014", "in 2014", "am 2014", "im 2014"], "Alleinstehende Jahreszahl: 2014", "jahreszahl"),
        q("Das neue Bürogebäude in Darmstadt wurde _____ eröffnet.", "im Jahr 2022", ["im Jahr 2022", "in 2022", "am Jahr 2022", "beim 2022"], "Korrekt: 'im Jahr 2022'", "jahreszahl"),
        q("Herr Tim arbeitet bereits seit _____ für den Konzern.", "2015", ["2015", "dem 2015", "in 2015", "im Jahr von 2015"], "seit + Jahreszahl direkt: seit 2015", "jahreszahl"),
        q("Die europäische Währung wurde _____ offiziell eingeführt.", "2002", ["2002", "in 2002", "am 2002", "im 2002"], "Jahreszahl: 2002", "jahreszahl"),
        q("Er ist _____ nach Weiterstadt umgezogen.", "2025", ["2025", "in 2025", "am 2025", "beim 2025"], "Jahreszahl allein: 2025", "jahreszahl"),
        q("Was ist _____ weltpolitisch passiert?", "1989", ["1989", "in 1989", "im 1989", "am 1989"], "Jahreszahl: 1989", "jahreszahl"),
        q("Die Universität wurde _____ gegründet.", "im Jahr 1971", ["im Jahr 1971", "in 1971", "bei 1971", "am 1971"], "Gefüge: im Jahr 1971", "jahreszahl")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 11: TERMINE, ZEITPUNKTE & DATIV-PRONOMEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.44",
      chapter: "Linie 1 K11",
      title: "Zeitangaben mit Präpositionen (am, im, um)",
      ruleSummary: "am + Wochentage/Tageszeiten/Daten (am Montag, am Abend, am 1. Mai). im + Monate/Jahreszeiten (im Januar, im Sommer). um + Uhrzeit (um 14 Uhr).",
      example: "am ersten Mai, im Januar, um 20 Uhr, am Dienstag",
      questions: [
        q("Die Architektur-Besprechung beginnt pünktlich _____ 10:00 Uhr.", "um", ["um", "am", "im", "an"], "Uhrzeiten verlangen 'um': um 10 Uhr", "zeit_praep"),
        q("Wir haben das nächste Planungsmeeting _____ kommenden Dienstag.", "am", ["am", "im", "um", "in"], "Wochentage verlangen 'am': am Dienstag", "zeit_praep"),
        q("Der neue Arbeitsvertrag gilt offiziell ab _____ ersten November.", "dem", ["dem", "am", "im", "den"], "Datum mit ab: ab dem ersten...", "zeit_praep"),
        q("_____ Januar starten wir mit der weltweiten Cloud-Migration.", "Im", ["Im", "Am", "Um", "An"], "Monate verlangen 'im': Im Januar", "zeit_praep"),
        q("Bhavani arbeitet _____ Vormittag meistens an kniffligen Tickets.", "am", ["am", "im", "um", "an"], "Tageszeiten verlangen 'am': am Vormittag", "zeit_praep"),
        q("Unser Geschäftsführer hat Geburtstag _____ 15. August.", "am", ["am", "im", "um", "in"], "Kalenderdatum verlangt 'am': am 15. August", "zeit_praep"),
        q("Der Zug nach Mannheim fährt genau _____ 17:18 Uhr ab.", "um", ["um", "am", "im", "bis"], "Uhrzeit: um 17:18 Uhr", "zeit_praep"),
        q("_____ Sommer nehmen viele Kollegen ihren Jahresurlaub.", "Im", ["Im", "Am", "Um", "Auf"], "Jahreszeiten verlangen 'im': Im Sommer", "zeit_praep"),
        q("Die Mitarbeiter treffen sich jeden Tag _____ 12:30 Uhr zum Essen.", "um", ["um", "am", "im", "an"], "Uhrzeit: um 12:30 Uhr", "zeit_praep"),
        q("_____ Freitagmittag machen viele Entwickler etwas früher Feierabend.", "Am", ["Am", "Im", "Um", "In"], "Wochentag + Tageszeit: Am Freitagmittag", "zeit_praep"),
        q("Die Schulung findet _____ kommenden Monat in Frankfurt statt.", "im", ["im", "am", "um", "an"], "Monat allgemein: im kommenden Monat", "zeit_praep"),
        q("Ich habe meinen Arzttermin _____ Donnerstag um 8 Uhr morgens.", "am", ["am", "im", "um", "in"], "Wochentag: am Donnerstag", "zeit_praep")
      ]
    },
    {
      id: "LVL 1.45",
      chapter: "Linie 1 K11",
      title: "Personalpronomen im Dativ",
      ruleSummary: "Dativ-Pronomen (indirektes Objekt / Wem?): mir, dir, ihm (m/n), ihr (f), uns, euch, ihnen/Ihnen.",
      example: "Wie geht es dir? - Es geht mir gut. Der Chef dankt ihm.",
      questions: [
        q("Guten Morgen, Herr Schmidt! Wie geht es _____ heute?", "Ihnen", ["Ihnen", "Sie", "dir", "ihm"], "Dativ Höflichkeitsform: Wie geht es Ihnen?", "pron_dat"),
        q("Danke der Nachfrage, es geht _____ wirklich ausgezeichnet.", "mir", ["mir", "mich", "ich", "dir"], "Dativ 1. Person: es geht mir gut", "pron_dat"),
        q("Der Projektleiter hilft _____ (er) bei der Fehlersuche im Log.", "ihm", ["ihm", "ihn", "er", "seinem"], "helfen + Dativ maskulin: hilft ihm", "pron_dat"),
        q("Die neue Architektur gefällt _____ (wir) außerordentlich gut.", "uns", ["uns", "unser", "wir", "euch"], "gefallen + Dativ: gefällt uns", "pron_dat"),
        q("Kannst du _____ (ich) bitte kurz die Dokumentation schicken?", "mir", ["mir", "mich", "ich", "dir"], "schicken + Dativ: schickst du mir", "pron_dat"),
        q("Marco, ich gratuliere _____ ganz herzlich zur Zertifizierung!", "dir", ["dir", "dich", "du", "dein"], "gratulieren + Dativ: gratuliere dir", "pron_dat"),
        q("Frau Weber hat Geburtstag. Wir schenken _____ einen Blumenstrauß.", "ihr", ["ihr", "sie", "ihm", "ihnen"], "schenken + Dativ feminin (sie): schenken ihr", "pron_dat"),
        q("Der Support-Mitarbeiter antwortet _____ (sie Plural) innerhalb von Minuten.", "ihnen", ["ihnen", "sie", "ihr", "euch"], "antworten + Dativ Plural: antwortet ihnen", "pron_dat"),
        q("Kollegen, wie schmeckt _____ das Essen in der neuen Kantine?", "euch", ["euch", "uns", "ihr", "ihnen"], "schmecken + Dativ 2. Person Plural: schmeckt euch", "pron_dat"),
        q("Das Notebook gehört _____ (ich), es ist kein Leihgerät.", "mir", ["mir", "mich", "mein", "ich"], "gehören + Dativ: gehört mir", "pron_dat"),
        q("Der Teamleiter dankt _____ (wir) für den unermüdlichen Einsatz.", "uns", ["uns", "wir", "unser", "euch"], "danken + Dativ: dankt uns", "pron_dat"),
        q("Passt _____ (du) der Terminvorschlag am Mittwoch um 14 Uhr?", "dir", ["dir", "dich", "du", "dein"], "passen + Dativ: passt dir", "pron_dat")
      ]
    },
    {
      id: "LVL 1.46",
      chapter: "Linie 1 K11",
      title: "Präpositionen (Zeit): ab, an, bis, in, um, von",
      ruleSummary: "ab (Startpunkt Gegenwart/Zukunft), bis (Endpunkt), in + Dativ (in einem Monat = Zukunft), von ... bis (Zeitspanne).",
      example: "ab morgen, bis 17 Uhr, in zwei Wochen, von 9 bis 17 Uhr",
      questions: [
        q("Unsere IT-Abteilung arbeitet täglich _____ 8:00 bis 17:00 Uhr.", "von", ["von", "ab", "seit", "in"], "Zeitspanne: von ... bis", "praep_zeit_spanne"),
        q("Der Kundenservice ist heute nur _____ 16 Uhr besetzt.", "bis", ["bis", "ab", "seit", "in"], "Endpunkt: bis 16 Uhr", "praep_zeit_spanne"),
        q("_____ nächster Woche gelten die neuen Sicherheitsrichtlinien.", "Ab", ["Ab", "Bis", "In", "Von"], "Startpunkt in der Zukunft: Ab nächster Woche", "praep_zeit_spanne"),
        q("Die Migration in die Cloud beginnt _____ zwei Wochen.", "in", ["in", "an", "ab", "bis"], "Zeitspanne bis zum Start: in zwei Wochen", "praep_zeit_spanne"),
        q("Wir haben die Besprechung _____ 14:00 bis 15:30 Uhr angesetzt.", "von", ["von", "ab", "an", "in"], "von 14 bis 15:30 Uhr", "praep_zeit_spanne"),
        q("Können Sie den Entwurf bitte _____ morgen Mittag fertigstellen?", "bis", ["bis", "ab", "in", "von"], "Frist/Endzeitpunkt: bis morgen", "praep_zeit_spanne"),
        q("Herr Tim ist _____ einem Monat wieder aus der Elternzeit zurück.", "in", ["in", "an", "ab", "bis"], "in + Dativ maskulin: in einem Monat", "praep_zeit_spanne"),
        q("Der neue Busfahrplan gilt verbindlich _____ 1. Dezember.", "ab", ["ab", "bis", "an", "in"], "Gültigkeitsbeginn: ab 1. Dezember", "praep_zeit_spanne"),
        q("Ich bin heute leider nur _____ 15 Uhr im Büro erreichbar.", "bis", ["bis", "ab", "von", "in"], "bis 15 Uhr", "praep_zeit_spanne"),
        q("Die Konferenz dauert _____ Montag bis einschließlich Mittwoch.", "von", ["von", "ab", "an", "in"], "von Montag bis Mittwoch", "praep_zeit_spanne"),
        q("_____ wenigen Minuten startet das weltweite Firmen-Webinar.", "In", ["In", "An", "Ab", "Bis"], "in wenigen Minuten", "praep_zeit_spanne"),
        q("Er hat Urlaub _____ 10. bis zum 24. August eingereicht.", "vom", ["vom", "beim", "am", "im"], "vom (von dem) ... bis zum", "praep_zeit_spanne")
      ]
    },
    {
      id: "LVL 1.47",
      chapter: "Linie 1 K11",
      title: "Präposition bei + Dativ",
      ruleSummary: "Die Präposition 'bei' fordert IMMER den Dativ! Verschmelzung: bei + dem = beim. Bedeutet: Aufenthalt/Ort bei Personen, Firmen oder Ärzten.",
      example: "bei uns, beim Arzt (bei dem), bei der Firma Siemens, bei Herrn Tim",
      questions: [
        q("Bhavani arbeitet als Technical Architect _____ DXC Technology.", "bei", ["bei", "nach", "zu", "in"], "Arbeitgeberangabe erfordert 'bei': bei DXC", "praep_bei"),
        q("Ich habe heute um 15 Uhr einen Termin _____ Arzt (m).", "beim", ["beim", "beinder", "bei", "bei den"], "bei + dem = beim Arzt", "praep_bei"),
        q("Er wohnt während des Projekts _____ einem guten Kollegen (m).", "bei", ["bei", "zu", "nach", "aus"], "Aufenthalt bei Personen: bei einem Kollegen", "praep_bei"),
        q("Wir haben gestern direkt _____ Kunden (m) in Frankfurt verhandelt.", "beim", ["beim", "beinder", "bei", "bei den"], "bei + dem = beim Kunden", "praep_bei"),
        q("Frau Weber erkundigt sich _____ Bank (f) nach einem Kredit.", "bei der", ["bei der", "beim", "bei die", "bei dem"], "bei + Dativ feminin: bei der Bank", "praep_bei"),
        q("_____ schönem Wetter essen die Mitarbeiter gerne im Innenhof.", "Bei", ["Bei", "Nach", "Zu", "Aus"], "Bedingung/Zustand: Bei schönem Wetter", "praep_bei"),
        q("Ich melde mich sofort _____ dir, sobald das Ticket gelöst ist.", "bei", ["bei", "zu", "nach", "mit"], "bei + Dativ-Pronomen: bei dir", "praep_bei"),
        q("Herr Becker ist heute den gesamten Vormittag _____ Vorstand (m).", "beim", ["beim", "beinder", "bei", "bei dem"], "beim Vorstand", "praep_bei"),
        q("Gibt es _____ euch im Team noch offene Entwicklerstellen?", "bei", ["bei", "zu", "nach", "an"], "bei + euch (Dativ)", "praep_bei"),
        q("Die Kollegen treffen sich nach Feierabend _____ Marco zu Hause.", "bei", ["bei", "zu", "nach", "in"], "bei Marco", "praep_bei"),
        q("Die Dokumente liegen noch _____ Sachbearbeiterin (f) auf dem Tisch.", "bei der", ["bei der", "beim", "bei die", "bei dem"], "bei der Sachbearbeiterin", "praep_bei"),
        q("Wir sind morgen zur System-Abnahme direkt _____ Lieferanten (Pl.).", "bei den", ["bei den", "beim", "bei der", "bei die"], "bei + Dativ Plural: bei den Lieferanten", "praep_bei")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 12: WEG, ORT & DATIV-PRÄPOSITIONEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.48",
      chapter: "Linie 1 K12",
      title: "Präpositionen mit Dativ (Ort & Richtung)",
      ruleSummary: "Die lokalen Präpositionen 'aus, bei, mit, nach, von, zu' fordern IMMER den Dativ! Verschmelzung: zu + dem = zum, zu + der = zur, von + dem = vom.",
      example: "zum Bahnhof, von der Schule, nach Bremen, zu Fuß, mit dem Zug",
      questions: [
        q("Er fährt jeden Werktag mit _____ Regionalzug (m) zur Arbeit.", "dem", ["dem", "den", "der", "das"], "mit + Dativ maskulin: mit dem Zug", "dat_praep_ort"),
        q("Wie komme ich am schnellsten _____ Hauptbahnhof (m) in Darmstadt?", "zum", ["zum", "zur", "nach", "in den"], "zu + dem = zum Bahnhof", "dat_praep_ort"),
        q("Frau Sommer geht nach dem Mittagessen kurz _____ Post (f).", "zur", ["zur", "zum", "nach", "in die"], "zu + der = zur Post", "dat_praep_ort"),
        q("Der Consultant kommt gerade aus _____ Konferenzraum (m).", "dem", ["dem", "den", "der", "das"], "aus + Dativ maskulin: aus dem Konferenzraum", "dat_praep_ort"),
        q("Bhavani reist am Donnerstag geschäftlich _____ München.", "nach", ["nach", "zu", "in", "bei"], "Städte und Länder ohne Artikel: nach München", "dat_praep_ort"),
        q("Wir gehen heute Mittag nicht mit der Bahn, sondern _____ Fuß.", "zu", ["zu", "nach", "mit", "bei"], "Feste Wendung: zu Fuß gehen", "dat_praep_ort"),
        q("Ich komme gerade direkt _____ Chef (m) aus dem Büro.", "vom", ["vom", "zum", "beim", "nach dem"], "von + dem = vom Chef", "dat_praep_ort"),
        q("Fahren Sie mit _____ Straßenbahn (f) bis zum Luisenplatz.", "der", ["der", "die", "den", "dem"], "mit + Dativ feminin: mit der Straßenbahn", "dat_praep_ort"),
        q("Der Kollege kommt ursprünglich aus _____ Schweiz (f).", "der", ["der", "die", "dem", "den"], "aus + Land mit femininem Artikel: aus der Schweiz", "dat_praep_ort"),
        q("Vom Büro bis _____ Bushaltestelle (f) sind es nur zwei Minuten.", "zur", ["zur", "zum", "nach", "in die"], "zu + der = zur Bushaltestelle", "dat_praep_ort"),
        q("Nach der Besprechung fahren wir gemeinsam _____ Hause.", "nach", ["nach", "zu", "in", "bei"], "Feste Richtungsangabe: nach Hause", "dat_praep_ort"),
        q("Das Ticket gilt für die Fahrt von Weiterstadt _____ Frankfurt.", "nach", ["nach", "zu", "in", "bei"], "von ... nach (Städte)", "dat_praep_ort")
      ]
    }
  ];

  if (!window.STAGE_A1_DATA) {
    window.STAGE_A1_DATA = { stage: "A1", levels: [] };
  }

  levelsK9toK12.forEach(newLvl => {
    const existingIdx = window.STAGE_A1_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A1_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A1_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A1_DATA.totalLevels = window.STAGE_A1_DATA.levels.length;
})();
