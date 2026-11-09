/**
 * STAGE A1 DATA PACK 1 (Levels 1.01 to 1.16 - Chapters K1 to K4)
 * Hand-crafted curriculum dataset directly from Linie 1 (A1).
 * Zero placeholder cloning: every sentence is unique.
 */

(function () {
  // Helper for concise question construction
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levels = [
    // -------------------------------------------------------------
    // KAPITEL 1: ERSTE KONTAKTE
    // -------------------------------------------------------------
    {
      id: "LVL 1.01",
      chapter: "Linie 1 K1",
      title: "Verben und Personalpronomen (Präsens)",
      ruleSummary: "Singularformen im Präsens: ich -e, du -(s)t, er/sie/es -t, Sie -en. Unregelmäßig: sein (ich bin, du bist, er ist).",
      example: "ich heiße, du kommst, er ist, Sie arbeiten",
      questions: [
        q("Guten Tag, ich _____ Bhavani.", "heiße", ["heiße", "heißt", "heißen", "heiß"], "1. Person Singular: ich heiße (-e)", "conj_ich"),
        q("Woher _____ du, Marco?", "kommst", ["kommst", "kommen", "kommt", "komme"], "2. Person Singular: du kommst (-st)", "conj_du"),
        q("Herr Tim _____ der neue Projektleiter.", "ist", ["ist", "bin", "bist", "sind"], "3. Person Singular von 'sein': er ist", "conj_er"),
        q("Wie _____ Sie mit Nachnamen?", "heißen", ["heißen", "heißt", "heiße", "heiß"], "Höflichkeitsform: Sie heißen (-en)", "conj_sie_formal"),
        q("Ich _____ als Softwarearchitekt in Darmstadt.", "arbeite", ["arbeite", "arbeitest", "arbeitet", "arbeiten"], "ich-Form: -e Endung", "conj_ich"),
        q("_____ du neu im Team von DXC?", "Bist", ["Bist", "Bin", "Ist", "Sind"], "du-Form von sein: du bist", "conj_du"),
        q("Frau Müller _____ heute aus Berlin.", "kommt", ["kommt", "komme", "kommst", "kommen"], "3. Person Singular (sie): -t", "conj_sie"),
        q("Wer _____ der Ansprechpartner für dieses Ticket?", "ist", ["ist", "sind", "bist", "bin"], "3. Person Singular: wer ist", "conj_er"),
        q("Ich _____ heute im Homeoffice in Weiterstadt.", "bin", ["bin", "bist", "ist", "sind"], "ich-Form von sein: ich bin", "conj_ich"),
        q("Wo _____ du aktuell?", "wohnst", ["wohnst", "wohne", "wohnt", "wohnen"], "du-Form: du wohnst (-st)", "conj_du"),
        q("Herr Schmidt _____ heute nicht im Büro.", "ist", ["ist", "bin", "bist", "sind"], "er-Form: ist", "conj_er"),
        q("_____ Sie Herr Wagner vom Support?", "Sind", ["Sind", "Ist", "Bist", "Bin"], "Sie-Form von sein: Sind Sie", "conj_sie_formal"),
        q("Ich _____ den Bericht bis morgen fertig.", "mache", ["mache", "machst", "macht", "machen"], "ich-Form: -e Endung", "conj_ich"),
        q("Er _____ Thomas und leitet das Cloud-Projekt.", "heißt", ["heißt", "heiße", "heißen", "heiß"], "er-Form: heißt (-t)", "conj_er"),
        q("Woher _____ Sie, Frau Weber?", "kommen", ["kommen", "kommst", "kommt", "komme"], "Sie-Form: kommen Sie (-en)", "conj_sie_formal"),
        q("Du _____ heute sehr konzentriert.", "wirkst", ["wirkst", "wirkt", "wirken", "wirke"], "du-Form: du wirkst (-st)", "conj_du"),
        q("Mein Kollege _____ aus Spanien.", "kommt", ["kommt", "komme", "kommst", "kommen"], "3. Person Singular: kommt (-t)", "conj_er"),
        q("Guten Morgen, wie _____ es Ihnen?", "geht", ["geht", "gehe", "gehst", "gehen"], "Feste Wendung: wie geht es", "conj_er")
      ]
    },
    {
      id: "LVL 1.02",
      chapter: "Linie 1 K1",
      title: "W-Fragen und Antworten",
      ruleSummary: "Fragewort auf Position 1, konjugiertes Verb auf Position 2. Wie (Art/Name), Wo (Ort), Woher (Herkunft), Wer (Person), Was (Sache).",
      example: "Wie heißen Sie? Wo wohnen Sie? Woher kommen Sie?",
      questions: [
        q("_____ heißen Sie? - Ich heiße Bhavani.", "Wie", ["Wie", "Wo", "Woher", "Was"], "Frage nach dem Namen: Wie heißen Sie?", "w_wie"),
        q("_____ wohnen Sie? - In Weiterstadt bei Darmstadt.", "Wo", ["Wo", "Woher", "Wohin", "Wie"], "Frage nach festem Ort: Wo", "w_wo"),
        q("_____ kommen die neuen Kollegen? - Aus Indien.", "Woher", ["Woher", "Wo", "Wohin", "Was"], "Frage nach Herkunft: Woher", "w_woher"),
        q("_____ ist das auf dem Tisch? - Mein Dienstausweis.", "Was", ["Was", "Wer", "Wo", "Wie"], "Frage nach Gegenständen: Was", "w_was"),
        q("_____ leitet das Architektur-Meeting? - Herr Keller.", "Wer", ["Wer", "Wie", "Was", "Wo"], "Frage nach Personen: Wer", "w_wer"),
        q("_____ ist der Besprechungsraum 3? - Im 2. Stock.", "Wo", ["Wo", "Woher", "Wohin", "Was"], "Frage nach Raum/Position: Wo", "w_wo"),
        q("_____ ist Ihre geschäftliche E-Mail-Adresse?", "Wie", ["Wie", "Was", "Wo", "Wer"], "Frage nach Daten/Adresse: Wie ist...", "w_wie"),
        q("_____ geht es dir heute im neuen Projekt?", "Wie", ["Wie", "Wo", "Was", "Woher"], "Befindlichkeit: Wie geht es dir?", "w_wie"),
        q("_____ fährt der Bus 675 ab? - Am Hauptbahnhof.", "Wo", ["Wo", "Woher", "Was", "Wie"], "Haltestelle/Ort: Wo", "w_wo"),
        q("_____ macht Herr Becker beruflich? - IT-Berater.", "Was", ["Was", "Wie", "Wer", "Wo"], "Frage nach Tätigkeit/Beruf: Was", "w_was"),
        q("_____ hat dieses Ticket freigegeben?", "Wer", ["Wer", "Wie", "Was", "Wo"], "Frage nach Subjekt/Person: Wer", "w_wer"),
        q("_____ ist Ihre Durchwahl im Büro?", "Wie", ["Wie", "Was", "Wo", "Wer"], "Frage nach Nummern: Wie ist...", "w_wie"),
        q("_____ arbeiten Sie? - Bei DXC Technology.", "Wo", ["Wo", "Woher", "Wohin", "Wie"], "Arbeitsort: Wo arbeiten Sie?", "w_wo"),
        q("_____ kommt der Zug nach Frankfurt? - Aus Mannheim.", "Woher", ["Woher", "Wo", "Wohin", "Was"], "Zug-Herkunft: Woher", "w_woher"),
        q("_____ ist das Problem mit dem Server?", "Was", ["Was", "Wer", "Wo", "Wie"], "Frage nach Sachverhalt: Was", "w_was"),
        q("_____ trinkt morgens keinen Kaffee? - Frau Weber.", "Wer", ["Wer", "Was", "Wie", "Wo"], "Personenfrage: Wer", "w_wer"),
        q("_____ alt ist das Notebook?", "Wie", ["Wie", "Was", "Wo", "Wer"], "Altersfrage: Wie alt", "w_wie")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 2: MENSCHEN UND BERUFE
    // -------------------------------------------------------------
    {
      id: "LVL 1.03",
      chapter: "Linie 1 K2",
      title: "Personalpronomen und Konjugation (Plural)",
      ruleSummary: "Pluralformen: wir -en, ihr -t, sie/Sie -en. Verben haben (wir haben, ihr habt, sie haben) und sein (wir sind, ihr seid, sie sind).",
      example: "wir lernen, ihr sprecht, sie haben, wir sind",
      questions: [
        q("Wir _____ heute an der neuen Schnittstelle.", "arbeiten", ["arbeiten", "arbeitet", "arbeitest", "arbeite"], "wir-Form: -en Endung", "pl_wir"),
        q("Ihr _____ wirklich sehr schnell Deutsch!", "lernt", ["lernt", "lernen", "lernst", "lerne"], "ihr-Form: -t Endung", "pl_ihr"),
        q("Die Kollegen aus München _____ heute keine Zeit.", "haben", ["haben", "hat", "habt", "hast"], "sie (Plural): haben", "pl_sie"),
        q("Wir _____ um 14 Uhr eine wichtige Besprechung.", "haben", ["haben", "habt", "hat", "hast"], "wir haben", "pl_wir"),
        q("Kollegen, _____ ihr schon bereit für das Release?", "seid", ["seid", "sind", "bist", "waren"], "ihr-Form von sein: seid", "pl_ihr"),
        q("Herr und Frau Weber, woher _____ Sie?", "kommen", ["kommen", "kommt", "kommst", "komme"], "Höfliche Anrede: kommen Sie", "pl_sie_formal"),
        q("Wir _____ die Dokumente sofort weiter.", "leiten", ["leiten", "leitet", "leitest", "leite"], "wir leiten (-en)", "pl_wir"),
        q("_____ ihr morgen im Büro in Weiterstadt?", "Seid", ["Seid", "Sind", "Bist", "Habt"], "ihr-Form von sein: Seid ihr", "pl_ihr"),
        q("Die Entwickler _____ fließend Englisch.", "sprechen", ["sprechen", "sprecht", "spricht", "spreche"], "sie (Plural): sprechen (-en)", "pl_sie"),
        q("Wir _____ noch zwei Lizenzen für die Cloud.", "brauchen", ["brauchen", "braucht", "brauchst", "brauche"], "wir brauchen (-en)", "pl_wir"),
        q("Was _____ ihr am Wochenende geplant?", "habt", ["habt", "haben", "hat", "hast"], "ihr habt", "pl_ihr"),
        q("Unsere Consultants _____ sehr hilfsbereit.", "sind", ["sind", "seid", "ist", "bin"], "sie (Plural) von sein: sind", "pl_sie"),
        q("Wir _____ das Problem im Serverraum analysieren.", "wollen", ["wollen", "wollt", "will", "willst"], "wir wollen", "pl_wir"),
        q("Ihr _____ heute die Aufgaben im Jira-Board.", "prüft", ["prüft", "prüfen", "prüfst", "prüfe"], "ihr prüft (-t)", "pl_ihr"),
        q("Die neuen Mitarbeiter _____ aus Stuttgart.", "kommen", ["kommen", "kommt", "kommst", "komme"], "sie (Plural): kommen", "pl_sie"),
        q("Wir _____ jeden Morgen ein Standup-Meeting.", "machen", ["machen", "macht", "machst", "mache"], "wir machen", "pl_wir"),
        q("Wo _____ ihr eure Mittagspause?", "macht", ["macht", "machen", "machst", "mache"], "ihr macht (-t)", "pl_ihr")
      ]
    },
    {
      id: "LVL 1.04",
      chapter: "Linie 1 K2",
      title: "Ja/Nein-Frage (Satzfrage)",
      ruleSummary: "Entscheidungsfragen beginnen IMMER mit dem konjugierten Verb auf Position 1. Die Antwort lautet Ja oder Nein.",
      example: "Hat Dana Skype? Arbeitest du hier? Sind Sie Herr Klein?",
      questions: [
        q("_____ Dana einen Account auf Teams?", "Hat", ["Hat", "Haben", "Hatte", "Hattest"], "Position 1: Verb für 3. Person (er/sie hat)", "jn_hat"),
        q("_____ du heute im Büro in Weiterstadt?", "Bist", ["Bist", "Ist", "Sind", "Bin"], "Position 1: du bist -> Bist du", "jn_bist"),
        q("_____ Sie die Freigabe für das Ticket erhalten?", "Haben", ["Haben", "Hat", "Habt", "Hattest"], "Position 1: Haben Sie...", "jn_haben"),
        q("_____ der Cloud-Server wieder online?", "Ist", ["Ist", "Sind", "Bist", "Hat"], "Position 1: Ist der Server...", "jn_ist"),
        q("_____ ihr morgen Zeit für ein kurzes Review?", "Habt", ["Habt", "Haben", "Hat", "Bist"], "Position 1: Habt ihr...", "jn_habt"),
        q("_____ Herr Schmidt heute krankgemeldet?", "Ist", ["Ist", "Sind", "Hat", "War"], "Position 1: Ist Herr Schmidt...", "jn_ist"),
        q("_____ du morgens lieber schwarzen Tee?", "Trinkst", ["Trinkst", "Trinkt", "Trinken", "Trinke"], "Position 1: Trinkst du...", "jn_verb"),
        q("_____ Sie Deutsch in einer Abendschule?", "Lernen", ["Lernen", "Lernt", "Lernst", "Lerne"], "Position 1: Lernen Sie...", "jn_verb"),
        q("_____ das WLAN hier im Besprechungsraum stabil?", "Ist", ["Ist", "Sind", "Hat", "Bist"], "Position 1: Ist das WLAN...", "jn_ist"),
        q("_____ du mir bei dieser Fehlermeldung helfen?", "Kannst", ["Kannst", "Kann", "Könnt", "Können"], "Position 1: Kannst du...", "jn_modal"),
        q("_____ der Bus 675 direkt zum Luisenplatz?", "Fährt", ["Fährt", "Fahrt", "Fahren", "Fahre"], "Position 1: Fährt der Bus...", "jn_verb"),
        q("_____ Sie schon mit dem Kunden gesprochen?", "Haben", ["Haben", "Sind", "Hat", "Habt"], "Position 1: Haben Sie...", "jn_haben"),
        q("_____ das dein neuer Firmenlaptop?", "Ist", ["Ist", "Bist", "Sind", "Hat"], "Position 1: Ist das...", "jn_ist"),
        q("_____ ihr heute schon Feierabend?", "Habt", ["Habt", "Haben", "Seid", "Hat"], "Position 1: Habt ihr...", "jn_habt"),
        q("_____ wir heute noch eine Abstimmung?", "Brauchen", ["Brauchen", "Braucht", "Brauchst", "Brauche"], "Position 1: Brauchen wir...", "jn_verb"),
        q("_____ der Drucker im 1. Stock wieder Papier?", "Hat", ["Hat", "Haben", "Ist", "Sind"], "Position 1: Hat der Drucker...", "jn_hat")
      ]
    },
    {
      id: "LVL 1.05",
      chapter: "Linie 1 K2",
      title: "Endung -in bei Berufsbezeichnungen",
      ruleSummary: "Weibliche Berufsbezeichnungen erhalten die Endung -in (und im Plural -innen). Männlich: der Verkäufer -> Weiblich: die Verkäuferin.",
      example: "der Verkäufer, die Verkäuferin; der Architekt, die Architektin",
      questions: [
        q("Herr Weber ist Berater, Frau Klein ist _____ .", "Beraterin", ["Beraterin", "Berater", "Beraterinnen", "Beratung"], "Weibliche Berufsform: Beraterin", "fem_beruf"),
        q("Sie leitet das Team als erfahrene _____ .", "Architektin", ["Architektin", "Architekt", "Architektur", "Architekten"], "Weibliche Form: Architektin", "fem_beruf"),
        q("Mein Kollege ist Entwickler, seine Frau ist _____ .", "Entwicklerin", ["Entwicklerin", "Entwickler", "Entwicklung", "Entwicklers"], "Weibliche Form: Entwicklerin", "fem_beruf"),
        q("Frau Sommer arbeitet im Krankenhaus als _____ .", "Ärztin", ["Ärztin", "Arzt", "Ärzte", "Doktor"], "Umlaut + -in: Ärztin", "fem_beruf"),
        q("Die Kollegin im Empfang ist gelernte _____ .", "Kauffrau", ["Kauffrau", "Kaufmann", "Kaufmänner", "Käufer"], "Gegenstück zu Kaufmann: Kauffrau", "fem_beruf"),
        q("Herr Becker ist Verkäufer, Frau Lang ist _____ .", "Verkäuferin", ["Verkäuferin", "Verkäufer", "Verkauf", "Verkäuferinnen"], "Weibliche Form: Verkäuferin", "fem_beruf"),
        q("Unsere neue IT-Spezialistin ist eine fähige _____ .", "Ingenieurin", ["Ingenieurin", "Ingenieur", "Ingenieure", "Ingenieuren"], "Weibliche Form: Ingenieurin", "fem_beruf"),
        q("Die Schulleiterin ist eine engagierte _____ .", "Lehrerin", ["Lehrerin", "Lehrer", "Lehrkraft", "Lehrenden"], "Weibliche Form: Lehrerin", "fem_beruf"),
        q("Sie leitet die Niederlassung als _____ .", "Managerin", ["Managerin", "Manager", "Management", "Managern"], "Weibliche Form: Managerin", "fem_beruf"),
        q("Frau Krause arbeitet in der Praxis als _____ .", "Assistentin", ["Assistentin", "Assistent", "Assistenz", "Assistenten"], "Weibliche Form: Assistentin", "fem_beruf"),
        q("Sie repariert Maschinen; sie ist _____ .", "Technikerin", ["Technikerin", "Techniker", "Technik", "Technikern"], "Weibliche Form: Technikerin", "fem_beruf"),
        q("Die Chefin der Abteilung heißt Frau Meier; sie ist unsere _____ .", "Direktorin", ["Direktorin", "Direktor", "Direktion", "Direktoren"], "Weibliche Form: Direktorin", "fem_beruf")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 3: ARBEITSPLATZ UND OBJEKTE
    // -------------------------------------------------------------
    {
      id: "LVL 1.06",
      chapter: "Linie 1 K3",
      title: "Bestimmter und unbestimmter Artikel (Nominativ)",
      ruleSummary: "Nominativ (Subjekt): maskulin: der / ein; neutral: das / ein; feminin: die / eine; Plural: die / - .",
      example: "der Schreibtisch / ein Schreibtisch; das Büro; die Lampe",
      questions: [
        q("Hier im Büro steht _____ neuer Schreibtisch (m).", "ein", ["ein", "eine", "einen", "einem"], "Nominativ maskulin unbestimmt: ein Schreibtisch", "nom_art_m"),
        q("Dort drüben liegt _____ Dienst-Handy (n).", "das", ["das", "der", "die", "den"], "Nominativ neutral bestimmt: das Handy", "nom_art_n"),
        q("Das ist _____ Kaffeemaschine (f) für unser Team.", "eine", ["eine", "ein", "einen", "einer"], "Nominativ feminin unbestimmt: eine Kaffeemaschine", "nom_art_f"),
        q("_____ neue Bildschirm (m) hat eine 4K-Auflösung.", "Der", ["Der", "Den", "Dem", "Das"], "Nominativ maskulin bestimmt: Der Bildschirm", "nom_art_m"),
        q("Im Flur steht _____ Drucker (m) für alle Kollegen.", "ein", ["ein", "eine", "einen", "einem"], "Nominativ maskulin unbestimmt: ein Drucker", "nom_art_m"),
        q("_____ Maus (f) reagiert leider nicht mehr.", "Die", ["Die", "Der", "Das", "Den"], "Nominativ feminin bestimmt: Die Maus", "nom_art_f"),
        q("Ist das _____ Laptop (m) von Herrn Keller?", "der", ["der", "den", "dem", "das"], "Nominativ maskulin bestimmt: der Laptop", "nom_art_m"),
        q("Draußen wartet _____ Taxi (n) auf den Vorstand.", "ein", ["ein", "eine", "einen", "einem"], "Nominativ neutral unbestimmt: ein Taxi", "nom_art_n"),
        q("_____ Tür (f) zum Konferenzraum ist verschlossen.", "Die", ["Die", "Der", "Das", "Den"], "Nominativ feminin bestimmt: Die Tür", "nom_art_f"),
        q("Hier liegt _____ Kugelschreiber (m) für die Unterschrift.", "ein", ["ein", "eine", "einen", "einem"], "Nominativ maskulin unbestimmt: ein Kuli", "nom_art_m"),
        q("_____ Meeting (n) beginnt pünktlich um 10 Uhr.", "Das", ["Das", "Der", "Die", "Dem"], "Nominativ neutral bestimmt: Das Meeting", "nom_art_n"),
        q("Im Schrank liegt _____ USB-Kabel (n).", "ein", ["ein", "eine", "einen", "einem"], "Nominativ neutral unbestimmt: ein Kabel", "nom_art_n"),
        q("_____ Stuhl (m) am Fenster ist noch frei.", "Der", ["Der", "Den", "Dem", "Das"], "Nominativ maskulin: Der Stuhl", "nom_art_m"),
        q("Das ist _____ wichtige Frage (f).", "eine", ["eine", "ein", "einen", "einer"], "Nominativ feminin: eine Frage", "nom_art_f"),
        q("Dort hängt _____ Whiteboard (n) an der Wand.", "ein", ["ein", "eine", "einen", "einem"], "Nominativ neutral: ein Whiteboard", "nom_art_n")
      ]
    },
    {
      id: "LVL 1.07",
      chapter: "Linie 1 K3",
      title: "kein / keine im Nominativ (Verneinung)",
      ruleSummary: "Verneinung von Nomen mit unbestimmtem/ohne Artikel: maskulin: kein; neutral: kein; feminin: keine; Plural: keine.",
      example: "Das ist kein Kuli. Das ist kein Problem. Das ist keine Lampe.",
      questions: [
        q("Das ist _____ Kugelschreiber (m), das ist ein Bleistift.", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin verneint: kein", "kein_m"),
        q("Das ist _____ Problem (n), wir lösen das sofort.", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ neutral verneint: kein Problem", "kein_n"),
        q("Hier ist _____ Kaffeemaschine (f) im Raum.", "keine", ["keine", "kein", "keinen", "keiner"], "Nominativ feminin verneint: keine", "kein_f"),
        q("Das ist _____ Fehler (m) im Code, das ist ein Feature.", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin: kein Fehler", "kein_m"),
        q("Heute ist _____ guter Tag (m) für das Release.", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin: kein Tag", "kein_m"),
        q("Das ist _____ leichte Aufgabe (f) für unser Team.", "keine", ["keine", "kein", "keinen", "keiner"], "Nominativ feminin: keine Aufgabe", "kein_f"),
        q("Das ist _____ Dienstwagen (m), sondern ein privates Auto.", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin: kein Wagen", "kein_m"),
        q("Hier sind _____ Unterlagen (Pl.) mehr im Drucker.", "keine", ["keine", "kein", "keinen", "keinem"], "Nominativ Plural verneint: keine", "kein_pl"),
        q("Das ist _____ echtes Dokument (n).", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ neutral: kein Dokument", "kein_n"),
        q("Frau Meyer hat heute _____ Zeit (f) für ein Meeting.", "keine", ["keine", "kein", "keinen", "keiner"], "Feminin verneint: keine Zeit", "kein_f"),
        q("Dort drüben steht _____ Drucker (m).", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin: kein Drucker", "kein_m"),
        q("Das ist _____ offizieller Beschluss (m).", "kein", ["kein", "keine", "keinen", "keinem"], "Nominativ maskulin: kein Beschluss", "kein_m")
      ]
    },
    {
      id: "LVL 1.08",
      chapter: "Linie 1 K3",
      title: "Possessivartikel mein, dein im Nominativ",
      ruleSummary: "Besitzanzeige im Nominativ: maskulin/neutral: mein, dein; feminin/Plural: meine, deine.",
      example: "mein Kuli (m), mein Buch (n), meine Tasche (f), meine Kollegen (Pl.)",
      questions: [
        q("Ist das _____ Laptop (m), Marco?", "dein", ["dein", "deine", "deinen", "deinem"], "Nominativ maskulin: dein Laptop", "poss_nom_m"),
        q("Das ist _____ neuer Arbeitsplatz (m) bei DXC.", "mein", ["mein", "meine", "meinen", "meinem"], "Nominativ maskulin: mein Arbeitsplatz", "poss_nom_m"),
        q("Wo ist _____ Zugangskarte (f) für das Gebäude?", "meine", ["meine", "mein", "meinen", "meiner"], "Nominativ feminin: meine Karte", "poss_nom_f"),
        q("Ist das _____ Dienst-Handy (n) dort auf dem Tisch?", "dein", ["dein", "deine", "deinen", "deinem"], "Nominativ neutral: dein Handy", "poss_nom_n"),
        q("_____ Chef (m) heißt Herr Schmidt.", "Mein", ["Mein", "Meine", "Meinen", "Meinem"], "Nominativ maskulin: Mein Chef", "poss_nom_m"),
        q("Ist das _____ Kollegin (f) aus Frankfurt?", "deine", ["deine", "dein", "deinen", "deiner"], "Nominativ feminin: deine Kollegin", "poss_nom_f"),
        q("_____ Notizbuch (n) liegt noch im Besprechungsraum.", "Mein", ["Mein", "Meine", "Meinen", "Meinem"], "Nominativ neutral: Mein Notizbuch", "poss_nom_n"),
        q("Wo sind _____ Schlüssel (Pl.) für das Büro?", "meine", ["meine", "mein", "meinen", "meiner"], "Nominativ Plural: meine Schlüssel", "poss_nom_pl"),
        q("Ist das _____ Schreibtisch (m) hier am Fenster?", "dein", ["dein", "deine", "deinen", "deinem"], "Nominativ maskulin: dein Schreibtisch", "poss_nom_m"),
        q("_____ Kollege (m) kommt gleich zum Standup.", "Mein", ["Mein", "Meine", "Meinen", "Meinem"], "Nominativ maskulin: Mein Kollege", "poss_nom_m"),
        q("Wo liegt _____ Brille (f)?", "meine", ["meine", "mein", "meinen", "meiner"], "Nominativ feminin: meine Brille", "poss_nom_f"),
        q("Ist das _____ Headset (n) für die Telefonkonferenz?", "dein", ["dein", "deine", "deinen", "deinem"], "Nominativ neutral: dein Headset", "poss_nom_n")
      ]
    },
    {
      id: "LVL 1.09",
      chapter: "Linie 1 K3",
      title: "Artikel und Personalpronomen (der/er, das/es, die/sie)",
      ruleSummary: "Nomen werden im Subjekt durch Personalpronomen ersetzt: der Tisch -> er; das Buch -> es; die Lampe -> sie; die Kollegen (Pl.) -> sie.",
      example: "Wo ist der Kuli? - Er liegt hier. Wo ist das Ticket? - Es ist da.",
      questions: [
        q("Wo ist der Schlüssel (m)? - _____ liegt auf dem Schreibtisch.", "Er", ["Er", "Es", "Sie", "Ihn"], "der Schlüssel -> er", "pron_er"),
        q("Wo ist das Notebook (n)? - _____ lädt gerade im Büro.", "Es", ["Es", "Er", "Sie", "Ihm"], "das Notebook -> es", "pron_es"),
        q("Kennst du die Kollegin (f)? - Ja, _____ arbeitet im IT-Support.", "sie", ["sie", "er", "es", "ihr"], "die Kollegin -> sie", "pron_sie"),
        q("Hier steht der Drucker (m). _____ ist leider defekt.", "Er", ["Er", "Es", "Sie", "Ihn"], "der Drucker -> er", "pron_er"),
        q("Das Meeting (n) ist wichtig. _____ dauert 45 Minuten.", "Es", ["Es", "Er", "Sie", "Ihm"], "das Meeting -> es", "pron_es"),
        q("Die Kaffeemaschine (f) ist neu. _____ funktioniert super.", "Sie", ["Sie", "Er", "Es", "Ihnen"], "die Kaffeemaschine -> sie", "pron_sie"),
        q("Wo ist der neue Kollege (m)? - _____ kommt um 9 Uhr.", "Er", ["Er", "Es", "Sie", "Ihn"], "der Kollege -> er", "pron_er"),
        q("Das Ticket (n) ist geschlossen. _____ war schnell erledigt.", "Es", ["Es", "Er", "Sie", "Ihm"], "das Ticket -> es", "pron_es"),
        q("Die Präsentation (f) ist fertig. _____ liegt im Ordner.", "Sie", ["Sie", "Er", "Es", "Ihnen"], "die Präsentation -> sie", "pron_sie"),
        q("Wo sind die Berichte (Pl.)? - _____ liegen am Empfang.", "Sie", ["Sie", "Er", "Es", "Ihnen"], "die Berichte (Pl.) -> sie", "pron_sie_pl"),
        q("Der Vertrag (m) ist unterschrieben. _____ geht heute per Post raus.", "Er", ["Er", "Es", "Sie", "Ihn"], "der Vertrag -> er", "pron_er"),
        q("Das Büro (n) ist groß. _____ hat Platz für zehn Personen.", "Es", ["Es", "Er", "Sie", "Ihm"], "das Büro -> es", "pron_es")
      ]
    },
    {
      id: "LVL 1.10",
      chapter: "Linie 1 K3",
      title: "Imperativ der Höflichkeitsform (Sie)",
      ruleSummary: "Höflicher Befehl / Aufforderung: Infinitiv + Sie + bitte! (Ausnahme: sein -> Seien Sie!).",
      example: "Kommen Sie, bitte! Warten Sie kurz! Seien Sie pünktlich!",
      questions: [
        q("Frau Müller, _____ Sie bitte kurz in mein Büro!", "kommen", ["kommen", "kommt", "kommst", "komme"], "Imperativ Sie: Infinitiv + Sie", "imp_sie"),
        q("Herr Schmidt, _____ Sie bitte das Dokument!", "unterschreiben", ["unterschreiben", "unterschreibt", "unterschrieb", "unterschreibe"], "Infinitiv: unterschreiben Sie", "imp_sie"),
        q("Bitte _____ Sie nicht im gesamten Gebäude!", "rauchen", ["rauchen", "raucht", "rauchst", "rauche"], "Infinitiv: rauchen Sie", "imp_sie"),
        q("_____ Sie bitte kurz am Empfang, der Kollege kommt gleich.", "Warten", ["Warten", "Wartet", "Wartest", "Warte"], "Infinitiv: Warten Sie", "imp_sie"),
        q("Herr Becker, _____ Sie bitte die Tür!", "schließen", ["schließen", "schließt", "schloss", "schließe"], "Infinitiv: schließen Sie", "imp_sie"),
        q("_____ Sie bitte pünktlich um 9 Uhr im Konferenzraum!", "Seien", ["Seien", "Sind", "Seid", "War"], "Unregelmäßiger Imperativ von sein: Seien Sie!", "imp_sie_sein"),
        q("Bitte _____ Sie mir die Datei per E-Mail.", "senden", ["senden", "sendet", "sendest", "sende"], "Infinitiv: senden Sie", "imp_sie"),
        q("_____ Sie bitte etwas lauter, die Verbindung ist schlecht.", "Sprechen", ["Sprechen", "Sprecht", "Spricht", "Spreche"], "Infinitiv: Sprechen Sie", "imp_sie"),
        q("_____ Sie bitte das Ticket im Support-Portal!", "öffnen", ["öffnen", "öffnet", "öffnest", "öffne"], "Infinitiv: öffnen Sie", "imp_sie"),
        q("Bitte _____ Sie Ihren Namen in die Besucherliste ein.", "tragen", ["tragen", "trägt", "tragt", "trage"], "Infinitiv: tragen Sie ein", "imp_sie"),
        q("_____ Sie bitte keine vertraulichen Daten über den Chat!", "teilen", ["teilen", "teilt", "teilst", "teile"], "Infinitiv: teilen Sie", "imp_sie"),
        q("Herr Keller, _____ Sie mich bitte um 14 Uhr zurück.", "rufen", ["rufen", "ruft", "rufst", "rufe"], "Infinitiv: rufen Sie zurück", "imp_sie")
      ]
    },
    {
      id: "LVL 1.11",
      chapter: "Linie 1 K3",
      title: "Das Verb arbeiten (Verben mit Stamm auf -t / -d)",
      ruleSummary: "Endet der Verbstamm auf -t oder -d, wird bei du, er/sie/es und ihr ein -e- vor der Personalendung eingefügt.",
      example: "du arbeitest, er arbeitet, ihr arbeitet (auch: warten, antworten)",
      questions: [
        q("Wo _____ du aktuell, Bhavani?", "arbeitest", ["arbeitest", "arbeitet", "arbeite", "arbeiten"], "du-Form: Stamm arbeit- + -est", "verb_arb"),
        q("Mein Kollege Tim _____ seit fünf Jahren bei DXC.", "arbeitet", ["arbeitet", "arbeitest", "arbeite", "arbeiten"], "er-Form: Stamm arbeit- + -et", "verb_arb"),
        q("_____ ihr heute auch bis 18 Uhr?", "Arbeitet", ["Arbeitet", "Arbeitest", "Arbeiten", "Arbeite"], "ihr-Form: Stamm arbeit- + -et", "verb_arb"),
        q("Herr Wagner, _____ Sie heute im Homeoffice?", "arbeiten", ["arbeiten", "arbeitet", "arbeitest", "arbeite"], "Sie-Form: arbeiten", "verb_arb"),
        q("Ich _____ gerne im IT-Architektur-Team.", "arbeite", ["arbeite", "arbeitest", "arbeitet", "arbeiten"], "ich-Form: arbeite (-e)", "verb_arb"),
        q("Auf wen _____ du hier am Bahnhof Weiterstadt?", "wartest", ["wartest", "wartet", "warte", "warten"], "du wart- + -est", "verb_arb"),
        q("Der Support _____ leider nicht sofort auf Tickets.", "antwortet", ["antwortet", "antwortest", "antworte", "antworten"], "er antwort- + -et", "verb_arb"),
        q("Mein Kollege _____ jeden Tag acht Stunden konzentriert.", "arbeitet", ["arbeitet", "arbeitest", "arbeite", "arbeiten"], "er arbeitet", "verb_arb"),
        q("Seit wann _____ du in Deutschland?", "arbeitest", ["arbeitest", "arbeitet", "arbeite", "arbeiten"], "du arbeitest", "verb_arb"),
        q("Wir _____ gemeinsam an der Cloud-Migration.", "arbeiten", ["arbeiten", "arbeitet", "arbeitest", "arbeite"], "wir arbeiten", "verb_arb"),
        q("Warum _____ das System heute so langsam?", "arbeitet", ["arbeitet", "arbeitest", "arbeite", "arbeiten"], "es arbeitet", "verb_arb"),
        q("Ihr _____ sehr strukturiert und sauber.", "arbeitet", ["arbeitet", "arbeitest", "arbeiten", "arbeite"], "ihr arbeitet", "verb_arb")
      ]
    },
    {
      id: "LVL 1.12",
      chapter: "Linie 1 K3",
      title: "Das Verb möchten (Höfliche Bitte / Wunsch)",
      ruleSummary: "Formen von möchten: ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, Sie möchten.",
      example: "Ich möchte einen Kaffee. Was möchtest du trinken?",
      questions: [
        q("Guten Tag, ich _____ gerne Herrn Schmidt sprechen.", "möchte", ["möchte", "möchtest", "möchtet", "möchten"], "1. Person Singular: ich möchte", "verb_moecht"),
        q("Was _____ du heute zu Mittag essen, Marco?", "möchtest", ["möchtest", "möchte", "möchtet", "möchten"], "2. Person Singular: du möchtest", "verb_moecht"),
        q("Frau Weber _____ einen Termin für morgen vereinbaren.", "möchte", ["möchte", "möchtest", "möchtet", "möchten"], "3. Person Singular: sie möchte", "verb_moecht"),
        q("Wir _____ gerne zwei Lizenzen nachbestellen.", "möchten", ["möchten", "möchte", "möchtet", "möchtest"], "1. Person Plural: wir möchten", "verb_moecht"),
        q("Was _____ ihr trinken? Kaffee oder Wasser?", "möchtet", ["möchtet", "möchten", "möchtest", "möchte"], "2. Person Plural: ihr möchtet", "verb_moecht"),
        q("Herr Wagner, _____ Sie noch eine Tasse Kaffee?", "möchten", ["möchten", "möchte", "möchtet", "möchtest"], "Höflichkeitsform: möchten Sie", "verb_moecht"),
        q("Ich _____ das Ticket jetzt schließen.", "möchte", ["möchte", "möchtest", "möchtet", "möchten"], "ich möchte", "verb_moecht"),
        q("_____ du die Präsentation vorher noch einmal ansehen?", "Möchtest", ["Möchtest", "Möchte", "Möchtet", "Möchten"], "du möchtest", "verb_moecht"),
        q("Der Kunde _____ heute keine Änderungen mehr vornehmen.", "möchte", ["möchte", "möchtest", "möchtet", "möchten"], "er möchte", "verb_moecht"),
        q("Wir _____ uns ganz herzlich bei Ihnen bedanken.", "möchten", ["möchten", "möchte", "möchtet", "möchtest"], "wir möchten", "verb_moecht"),
        q("Wohin _____ Sie im Urlaub reisen?", "möchten", ["möchten", "möchte", "möchtet", "möchtest"], "Sie möchten", "verb_moecht"),
        q("Ich _____ heute etwas früher Feierabend machen.", "möchte", ["möchte", "möchtest", "möchtet", "möchten"], "ich möchte", "verb_moecht")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 4: EINKAUFEN UND ESSEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.13",
      chapter: "Linie 1 K4",
      title: "ein / kein im Nominativ und Akkusativ",
      ruleSummary: "Im Akkusativ ändert sich NUR der maskuline Artikel: ein -> einen; kein -> keinen. Neutral (ein/kein) und Feminin (eine/keine) bleiben unverändert.",
      example: "Das ist ein Kuli (Nom). Ich brauche einen Kuli (Akk).",
      questions: [
        q("Das ist ein Bildschirm (m). Ich kaufe _____ neuen Bildschirm.", "einen", ["einen", "ein", "eine", "einem"], "Akkusativ maskulin unbestimmt: einen", "akk_ein_m"),
        q("Das ist ein Brot (n). Wir möchten _____ Brot kaufen.", "ein", ["ein", "einen", "eine", "einem"], "Akkusativ neutral bleibt ein", "akk_ein_n"),
        q("Das ist eine Banane (f). Er isst heute _____ Banane.", "eine", ["eine", "einen", "ein", "einer"], "Akkusativ feminin bleibt eine", "akk_ein_f"),
        q("Ich habe leider _____ Laptop (m) dabei.", "keinen", ["keinen", "kein", "keine", "keinem"], "Akkusativ maskulin verneint: keinen", "akk_kein_m"),
        q("Wir brauchen heute _____ Besprechungsraum (m).", "keinen", ["keinen", "kein", "keine", "keinem"], "Akkusativ maskulin: keinen Raum", "akk_kein_m"),
        q("Sie trinkt morgens _____ Kaffee (m), sondern Tee.", "keinen", ["keinen", "kein", "keine", "keinem"], "Akkusativ maskulin verneint: keinen Kaffee", "akk_kein_m"),
        q("Haben Sie _____ freien Termin (m) im Kalender?", "einen", ["einen", "ein", "eine", "einem"], "Akkusativ maskulin: einen Termin", "akk_ein_m"),
        q("Ich sehe hier _____ Fehler (m) im Protokoll.", "keinen", ["keinen", "kein", "keine", "keinem"], "Akkusativ maskulin: keinen Fehler", "akk_kein_m"),
        q("Er bestellt _____ Käsebrötchen (n) in der Pause.", "ein", ["ein", "einen", "eine", "einem"], "Akkusativ neutral: ein Brötchen", "akk_ein_n"),
        q("Wir haben heute leider _____ Zeit (f) für die Schulung.", "keine", ["keine", "kein", "keinen", "keiner"], "Akkusativ feminin verneint: keine Zeit", "akk_kein_f"),
        q("Suchen Sie _____ bestimmten Kollegen (m)?", "einen", ["einen", "ein", "eine", "einem"], "Akkusativ maskulin: einen Kollegen", "akk_ein_m"),
        q("Ich nehme _____ Apfel (m) mit ins Büro.", "einen", ["einen", "ein", "eine", "einem"], "Akkusativ maskulin: einen Apfel", "akk_ein_m")
      ]
    },
    {
      id: "LVL 1.14",
      chapter: "Linie 1 K4",
      title: "Singular und Plural: Artikel (Nom/Akk)",
      ruleSummary: "Im Plural gibt es keinen unbestimmten Artikel (ein). Der bestimmte Artikel ist 'die', die Verneinung ist 'keine', Possessiv ist 'meine'.",
      example: "die Brote, meine Kollegen, keine Termine",
      questions: [
        q("Hier liegen _____ Dokumente (Pl.) für das Meeting.", "die", ["die", "der", "das", "den"], "Bestimmter Artikel Plural: die", "pl_art_die"),
        q("Wir haben heute _____ offenen Tickets (Pl.) mehr.", "keine", ["keine", "kein", "keinen", "keiner"], "Plural verneint: keine Tickets", "pl_art_keine"),
        q("Dort drüben sitzen _____ Kollegen (Pl.) aus dem Support.", "meine", ["meine", "mein", "meinen", "meiner"], "Possessivartikel Plural: meine", "pl_art_meine"),
        q("_____ Äpfel (Pl.) im Kaufland sind heute im Angebot.", "Die", ["Die", "Der", "Das", "Den"], "Plural bestimmt: Die Äpfel", "pl_art_die"),
        q("Ich habe leider _____ freien Stunden (Pl.) heute.", "keine", ["keine", "kein", "keinen", "keiner"], "Plural verneint: keine Stunden", "pl_art_keine"),
        q("Wo sind _____ neuen Laptops (Pl.) gelagert?", "die", ["die", "der", "das", "den"], "Plural bestimmt: die Laptops", "pl_art_die"),
        q("Herr Keller prüft _____ Rechnungen (Pl.) der Firma.", "die", ["die", "der", "das", "den"], "Akkusativ Plural bestimmt: die", "pl_art_die"),
        q("Wir brauchen heute _____ gedruckten Berichte (Pl.).", "keine", ["keine", "kein", "keinen", "keiner"], "Akkusativ Plural verneint: keine", "pl_art_keine"),
        q("Sind das _____ Schlüssel (Pl.) für das Büro?", "deine", ["deine", "dein", "deinen", "deiner"], "Plural Possessiv: deine", "pl_art_meine"),
        q("_____ Mitarbeiter (Pl.) arbeiten heute im Homeoffice.", "Die", ["Die", "Der", "Das", "Den"], "Plural Nominativ: Die Mitarbeiter", "pl_art_die"),
        q("Im Raum stehen _____ freien Stühle (Pl.) mehr.", "keine", ["keine", "kein", "keinen", "keiner"], "Plural verneint: keine Stühle", "pl_art_keine"),
        q("Kennen Sie schon _____ neuen Teammitglieder (Pl.)?", "unsere", ["unsere", "unser", "unseren", "unserem"], "Plural: unsere", "pl_art_meine")
      ]
    },
    {
      id: "LVL 1.15",
      chapter: "Linie 1 K4",
      title: "Singular und Plural: Endungen",
      ruleSummary: "Typische Pluralendungen im Deutschen: -e (Tische), -en/-n (Karten, Lampen), -er (Bilder), -s (Laptops) und oft mit Umlaut (Äpfel).",
      example: "Brote, Bananen, Stühle, Äpfel, Büros",
      questions: [
        q("Ein Kollege, viele _____ .", "Kollegen", ["Kollegen", "Kollege", "Kolleges", "Kollegin"], "Plural auf -n: Kollegen", "pl_form"),
        q("Ein Schreibtisch, zwei _____ .", "Schreibtische", ["Schreibtische", "Schreibtischen", "Schreibtischs", "Schreibtisch"], "Plural auf -e: Schreibtische", "pl_form"),
        q("Ein Ticket, mehrere _____ .", "Tickets", ["Tickets", "Ticketen", "Tickete", "Ticket"], "Plural auf -s: Tickets", "pl_form"),
        q("Ein Apfel, drei _____ .", "Äpfel", ["Äpfel", "Apfeln", "Apfels", "Apfele"], "Plural mit Umlaut ohne Endung: Äpfel", "pl_form"),
        q("Ein Dokument, vier _____ .", "Dokumente", ["Dokumente", "Dokumenten", "Dokuments", "Dokumenter"], "Plural auf -e: Dokumente", "pl_form"),
        q("Eine Frage, viele _____ .", "Fragen", ["Fragen", "Frage", "Frages", "Frager"], "Plural auf -n: Fragen", "pl_form"),
        q("Ein Bild, viele _____ .", "Bilder", ["Bilder", "Bilde", "Bildern", "Bilds"], "Plural auf -er: Bilder", "pl_form"),
        q("Ein Laptop, zwei _____ .", "Laptops", ["Laptops", "Laptope", "Laptop", "Laptopes"], "Plural auf -s: Laptops", "pl_form"),
        q("Ein Stuhl, vier _____ .", "Stühle", ["Stühle", "Stuhlen", "Stuhls", "Stuhle"], "Plural mit Umlaut + -e: Stühle", "pl_form"),
        q("Eine Rechnung, offene _____ .", "Rechnungen", ["Rechnungen", "Rechnunge", "Rechnungs", "Rechnunger"], "Plural auf -en: Rechnungen", "pl_form"),
        q("Ein Brot, zwei _____ .", "Brote", ["Brote", "Broten", "Brots", "Bröter"], "Plural auf -e: Brote", "pl_form"),
        q("Ein Buch, viele _____ .", "Bücher", ["Bücher", "Büche", "Buchs", "Buchen"], "Plural mit Umlaut + -er: Bücher", "pl_form")
      ]
    },
    {
      id: "LVL 1.16",
      chapter: "Linie 1 K4",
      title: "Komposita (Zusammengesetzte Nomen)",
      ruleSummary: "Bei zusammengesetzten Nomen bestimmt IMMER das LETZTE Nomen den Artikel und das Geschlecht des gesamten Wortes.",
      example: "der Käse + das Brötchen = das Käsebrötchen; das Büro + der Schlüssel = der Büroschlüssel",
      questions: [
        q("der Käse + das Brötchen = _____ Käsebrötchen", "das", ["das", "der", "die", "den"], "Letztes Wort 'das Brötchen' bestimmt: das Käsebrötchen", "komp_n"),
        q("das Büro + der Schlüssel = _____ Büroschlüssel", "der", ["der", "das", "die", "den"], "Letztes Wort 'der Schlüssel' bestimmt: der Büroschlüssel", "komp_m"),
        q("die Arbeit + der Platz = _____ Arbeitsplatz", "der", ["der", "das", "die", "den"], "Letztes Wort 'der Platz' bestimmt: der Arbeitsplatz", "komp_m"),
        q("die Kaffeemaschine + die Bohne = _____ Kaffeebohne", "die", ["die", "der", "das", "den"], "Letztes Wort 'die Bohne' bestimmt: die Kaffeebohne", "komp_f"),
        q("das Ticket + das System = _____ Ticketsystem", "das", ["das", "der", "die", "den"], "Letztes Wort 'das System' bestimmt: das Ticketsystem", "komp_n"),
        q("die Bahn + die Karte = _____ Bahnkarte", "die", ["die", "der", "das", "den"], "Letztes Wort 'die Karte' bestimmt: die Bahnkarte", "komp_f"),
        q("der Schreibtisch + die Lampe = _____ Schreibtischlampe", "die", ["die", "der", "das", "den"], "Letztes Wort 'die Lampe' bestimmt: die Schreibtischlampe", "komp_f"),
        q("die Besprechung + der Raum = _____ Besprechungsraum", "der", ["der", "das", "die", "den"], "Letztes Wort 'der Raum' bestimmt: der Besprechungsraum", "komp_m"),
        q("der Computer + das Problem = _____ Computerproblem", "das", ["das", "der", "die", "den"], "Letztes Wort 'das Problem' bestimmt: das Computerproblem", "komp_n"),
        q("die Sicherheit + die Karte = _____ Sicherheitskarte", "die", ["die", "der", "das", "den"], "Letztes Wort 'die Karte' bestimmt: die Sicherheitskarte", "komp_f"),
        q("das Telefon + die Nummer = _____ Telefonnummer", "die", ["die", "der", "das", "den"], "Letztes Wort 'die Nummer' bestimmt: die Telefonnummer", "komp_f"),
        q("das Projekt + der Leiter = _____ Projektleiter", "der", ["der", "das", "die", "den"], "Letztes Wort 'der Leiter' bestimmt: der Projektleiter", "komp_m")
      ]
    }
  ];

  window.STAGE_A1_DATA = {
    stage: "A1",
    totalLevels: levels.length,
    levels: levels
  };
})();
