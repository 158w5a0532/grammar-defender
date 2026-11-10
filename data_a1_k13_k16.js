/**
 * STAGE A1 DATA PACK 4 (Levels 1.49 to 1.59 - Chapters K12 to K16)
 * Completes Stage A1 of Linie 1.
 * Hand-crafted workplace, daily life, transit, and IT contexts.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsK13toK16 = [
    // -------------------------------------------------------------
    // KAPITEL 12 & 13: BEFEHLE, WEG & MODALVERB SOLLEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.49",
      chapter: "Linie 1 K12",
      title: "Imperativ der du-Form",
      ruleSummary: "Imperativ Singular (du): Verbstamm ohne Endung und OHNE Personalpronomen 'du'. Vokalwechsel e -> i bleibt (Lies!), Umlaut ä entfällt (Fahr!). Verben auf -t/-d behalten das -e (Warte!).",
      example: "Komm pünktlich! Ruf mich an! Fahr vorsichtig! Lies das Ticket!",
      questions: [
        q("Marco, _____ bitte sofort das Ticket im Jira-Board!", "prüf", ["prüf", "prüfst", "prüfe du", "geprüft"], "Imperativ du: Verbstamm ohne du/st: prüf(e)!", "imp_du"),
        q("Bhavani, _____ mich bitte nach deiner Besprechung kurz an!", "ruf", ["ruf", "rufst", "rufen", "rufe du"], "anrufen -> ruf ... an!", "imp_du"),
        q("_____ bitte nicht so schnell auf der Autobahn nach Frankfurt!", "Fahr", ["Fahr", "Fährst", "Fahre du", "Gefahren"], "fahren verliert im Imperativ den Umlaut ä: Fahr!", "imp_du"),
        q("_____ kurz hier am Empfang, ich hole meinen Besucherausweis.", "Warte", ["Warte", "Wartest", "Wart", "Warten"], "Stamm auf -t behält -e: Warte!", "imp_du"),
        q("_____ bitte die Fehlermeldung genau durch, bevor du klickst!", "Lies", ["Lies", "Liesst", "Lese", "Lesen"], "lesen behält Vokalwechsel (e -> ie): Lies!", "imp_du"),
        q("_____ heute Abend nicht zu spät ins Bett, morgen ist Release!", "Geh", ["Geh", "Gehst", "Gehe du", "Ging"], "gehen -> Geh!", "imp_du"),
        q("_____ bitte die Bürotür leise zu, die Kollegen telefonieren.", "Mach", ["Mach", "Machst", "Mache du", "Gemacht"], "zumachen -> Mach ... zu!", "imp_du"),
        q("_____ dir bitte einen Kaffee, die Besprechung dauert noch.", "Nimm", ["Nimm", "Nehm", "Nimmst", "Nehmen"], "nehmen behält Vokalwechsel (e -> i): Nimm!", "imp_du"),
        q("_____ dem Kunden bitte heute noch eine kurze Bestätigung!", "Schick", ["Schick", "Schickst", "Schicken", "Schicke du"], "schicken -> Schick!", "imp_du"),
        q("_____ bitte ruhig und konzentriert bei der Präsentation!", "Sei", ["Sei", "Bist", "Seid", "Wäre"], "Unregelmäßiger Imperativ von sein (du): Sei!", "imp_du"),
        q("_____ deine Arbeitsschritte in der Dokumentation fest!", "Halte", ["Halte", "Hältst", "Halt", "Halten"], "festhalten (Stamm auf -t): Halte ... fest!", "imp_du"),
        q("_____ bitte das Fenster auf, hier drinnen ist schlechte Luft.", "Mach", ["Mach", "Machst", "Mache du", "Macht"], "aufmachen -> Mach ... auf!", "imp_du")
      ]
    },
    {
      id: "LVL 1.50",
      chapter: "Linie 1 K12",
      title: "Wechselpräpositionen: in und an (Ort & Richtung)",
      ruleSummary: "Wo? (Ort/Position) fordert den DATIV: im (in dem), am (an dem). Wohin? (Richtung/Ziel) fordert den AKKUSATIV: in den, ins (in das), in die, an den, ans (an das).",
      example: "Wo? am Bahnhof, im Büro. Wohin? an den Schreibtisch, in das Büro.",
      questions: [
        q("Wo liegt der Vertrag? - Er liegt drüben _____ Schreibtisch (m).", "auf dem", ["auf dem", "auf den", "an den", "in den"], "Wo? + Dativ maskulin: auf dem Schreibtisch", "wechsel_ort"),
        q("Wohin soll ich die Unterlagen legen? - Bitte leg sie _____ Tisch (m)!", "auf den", ["auf den", "auf dem", "an dem", "im"], "Wohin? + Akkusativ maskulin: auf den Tisch", "wechsel_richtung"),
        q("Wo arbeitet Herr Tim heute? - Er sitzt den ganzen Tag _____ Büro (n).", "im", ["im", "ins", "in den", "an dem"], "Wo? + Dativ neutral: im (in dem) Büro", "wechsel_ort"),
        q("Wohin gehst du in der Pause? - Ich gehe kurz _____ Cafeteria (f).", "in die", ["in die", "in der", "im", "an die"], "Wohin? + Akkusativ feminin: in die Cafeteria", "wechsel_richtung"),
        q("Wo steht der neue Drucker? - Er steht direkt _____ Wand (f).", "an der", ["an der", "an die", "in die", "im"], "Wo? + Dativ feminin: an der Wand", "wechsel_ort"),
        q("Wohin hängen wir das neue Whiteboard? - Bitte _____ Wand (f)!", "an die", ["an die", "an der", "in der", "im"], "Wohin? + Akkusativ feminin: an die Wand", "wechsel_richtung"),
        q("Der Regionalzug steht bereits abfahrbereit _____ Gleis 4 (n).", "am", ["am", "ans", "an das", "im"], "Wo? + Dativ neutral: am (an dem) Gleis", "wechsel_ort"),
        q("Gehen wir nach der Besprechung kurz _____ Konferenzraum 2 (m)?", "in den", ["in den", "im", "in dem", "in die"], "Wohin? + Akkusativ maskulin: in den Raum", "wechsel_richtung"),
        q("Das Auto steht sicher unten _____ Tiefgarage (f).", "in der", ["in der", "in die", "im", "an der"], "Wo? + Dativ feminin: in der Tiefgarage", "wechsel_ort"),
        q("Fahren Sie bitte direkt _____ Parkplatz (m) vor dem Gebäude!", "auf den", ["auf den", "auf dem", "im", "an dem"], "Wohin? + Akkusativ maskulin: auf den Parkplatz", "wechsel_richtung"),
        q("Bhavani wartet an der Bushaltestelle _____ Otto-Wels-Straße.", "in der", ["in der", "in die", "an die", "im"], "Wo? + Dativ: in der Straße", "wechsel_ort"),
        q("Komm bitte schnell _____ Besprechungszimmer (n)!", "ins", ["ins", "im", "in dem", "an das"], "Wohin? + Akkusativ neutral: ins (in das) Zimmer", "wechsel_richtung")
      ]
    },
    {
      id: "LVL 1.51",
      chapter: "Linie 1 K13",
      title: "Modalverb sollen: Auftrag & Weitergabe von Anweisungen",
      ruleSummary: "sollen (ich soll, du sollst, er/sie/es soll, wir sollen, ihr sollt, sie sollen). Drückt Aufforderungen, Aufträge dritter Personen oder Ratschläge aus.",
      example: "Der Chef sagt, du sollst ihn anrufen. Wir sollen pünktlich sein.",
      questions: [
        q("Der Abteilungsleiter hat gesagt, ich _____ den Bericht bis 14 Uhr abgeben.", "soll", ["soll", "sollst", "sollt", "sollen"], "1. Person Singular Auftrag: ich soll", "modal_sollen"),
        q("Marco, der Projektleiter möchte, dass du _____ sofort im Labor melden.", "sollst dich", ["sollst dich", "soll dich", "sollt", "sollen"], "2. Person Singular Auftrag: du sollst", "modal_sollen"),
        q("Was _____ wir tun, wenn der Server wieder unerwartet abstürzt?", "sollen", ["sollen", "sollt", "soll", "sollst"], "1. Person Plural: sollen wir", "modal_sollen"),
        q("Frau Weber sagt, Herr Tim _____ sie bitte zurückrufen.", "soll", ["soll", "sollst", "sollt", "sollen"], "3. Person Singular (er): soll", "modal_sollen"),
        q("Kollegen, ihr _____ heute unbedingt noch eure Zeiterfassung ausfüllen.", "sollt", ["sollt", "sollen", "sollst", "soll"], "2. Person Plural: ihr sollt", "modal_sollen"),
        q("Der Arzt empfiehlt mir, ich _____ mehr Pausen am Bildschirm machen.", "soll", ["soll", "sollst", "sollt", "sollen"], "Ratschlag 1. Person: ich soll", "modal_sollen"),
        q("Wer _____ heute das Protokoll im Standup-Meeting schreiben?", "soll", ["soll", "sollst", "sollt", "sollen"], "3. Person Singular: wer soll", "modal_sollen"),
        q("Die Geschäftsführung ordnet an: Alle Mitarbeiter _____ Passwörter ändern.", "sollen", ["sollen", "sollt", "soll", "sollst"], "Plural Auftrag: sie sollen", "modal_sollen"),
        q("_____ ich dir bei der Konfiguration der Schnittstelle helfen?", "Soll", ["Soll", "Sollst", "Sollt", "Sollen"], "Angebot 1. Person: Soll ich", "modal_sollen"),
        q("Du _____ nicht so viel Kaffee trinken, trinke lieber Wasser!", "sollst", ["sollst", "soll", "sollt", "sollen"], "Empfehlung an du: sollst", "modal_sollen"),
        q("Wir _____ den Kunden vor dem nächsten Release schriftlich informieren.", "sollen", ["sollen", "sollt", "soll", "sollst"], "wir sollen", "modal_sollen"),
        q("Frau Meyer _____ die Präsentationsfolien noch einmal prüfen.", "soll", ["soll", "sollst", "sollt", "sollen"], "sie soll", "modal_sollen")
      ]
    },
    {
      id: "LVL 1.52",
      chapter: "Linie 1 K13",
      title: "Konnektoren auf Position 0 (und, oder, aber)",
      ruleSummary: "Die koordinierenden Konjunktionen 'und, oder, aber' verbinden Hauptsätze. Sie belegen Position 0! Die Satzstellung im Folgesatz bleibt: Pos 1 Subjekt + Pos 2 Verb.",
      example: "Ich habe Zeit, aber ich habe keine Lust. Er lernt Deutsch und er arbeitet viel.",
      questions: [
        q("Ich möchte heute ins Büro kommen, _____ die Bahn hat Verspätung.", "aber", ["aber", "denn", "oder", "und"], "Gegensatz: aber die Bahn hat Verspätung", "konn_pos0"),
        q("Bhavani arbeitet tagsüber bei DXC _____ abends lernt er intensiv Deutsch.", "und", ["und", "aber", "oder", "denn"], "Reihung/Ergänzung: und abends lernt er", "konn_pos0"),
        q("Möchten Sie den Vertrag heute unterschreiben _____ brauchen Sie noch Bedenkzeit?", "oder", ["oder", "aber", "und", "denn"], "Alternative: oder brauchen Sie", "konn_pos0"),
        q("Der Server ist wieder online, _____ die Schnittstelle reagiert noch träge.", "aber", ["aber", "oder", "und", "denn"], "Einschränkung/Gegensatz: aber", "konn_pos0"),
        q("Wir können das Review online machen _____ wir treffen uns im Büro.", "oder", ["oder", "aber", "und", "denn"], "Alternative: oder", "konn_pos0"),
        q("Herr Becker spricht Deutsch _____ er versteht auch technisches Englisch.", "und", ["und", "aber", "oder", "denn"], "Ergänzung: und", "konn_pos0"),
        q("Das Notebook ist sehr leicht, _____ die Akkuleistung ist leider gering.", "aber", ["aber", "und", "oder", "denn"], "Gegensatz: aber", "konn_pos0"),
        q("Schick mir das Dokument per E-Mail _____ lade es direkt in die Cloud hoch!", "oder", ["oder", "aber", "und", "denn"], "Handlungsalternative: oder", "konn_pos0"),
        q("Wir haben den Code fertiggestellt _____ das Testing war erfolgreich.", "und", ["und", "aber", "oder", "denn"], "Zwei erfolgreiche Handlungen: und", "konn_pos0"),
        q("Frau Weber wollte anrufen, _____ sie hatte leider keine Zeit dafür.", "aber", ["aber", "oder", "und", "denn"], "Gegensatz: aber", "konn_pos0"),
        q("Kommen Sie mit dem Auto _____ fahren Sie mit der Straßenbahn?", "oder", ["oder", "aber", "und", "denn"], "Alternative: oder", "konn_pos0"),
        q("Er hat die E-Mail gelesen _____ er hat sie direkt weitergeleitet.", "und", ["und", "aber", "oder", "denn"], "Reihung: und", "konn_pos0")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 14: GRÜNDE, ZEITSPANNEN & DATIV
    // -------------------------------------------------------------
    {
      id: "LVL 1.53",
      chapter: "Linie 1 K14",
      title: "Kausalität mit denn (Position 0)",
      ruleSummary: "'denn' begründet eine Aussage (Warum?). Es steht auf Position 0! Die normale Hauptsatz-Wortstellung bleibt erhalten: Pos 1 Subjekt + Pos 2 Verb.",
      example: "Ich lerne Deutsch, denn ich arbeite hier. Er kommt nicht, denn er ist krank.",
      questions: [
        q("Ich trinke heute Nachmittag Tee, _____ ich vertrage keinen Kaffee.", "denn", ["denn", "weil", "aber", "und"], "Begründung Hauptsatz (Pos 0 + Subjekt + Verb): denn", "konn_denn"),
        q("Herr Tim kommt heute später, _____ sein Zug hatte erhebliche Verspätung.", "denn", ["denn", "weil", "oder", "aber"], "Begründung auf Pos 0: denn sein Zug hatte...", "konn_denn"),
        q("Wir müssen das Release verschieben, _____ die Cloud-Tests fehlen noch.", "denn", ["denn", "weil", "aber", "oder"], "Begründung Hauptsatz: denn", "konn_denn"),
        q("Frau Weber arbeitet heute im Homeoffice, _____ ihr Kind ist krank.", "denn", ["denn", "weil", "aber", "und"], "denn + Subjekt (ihr Kind) + Verb (ist)", "konn_denn"),
        q("Bhavani lernt jeden Tag Vokabeln, _____ er möchte die A2-Prüfung bestehen.", "denn", ["denn", "weil", "aber", "oder"], "Begründung: denn er möchte", "konn_denn"),
        q("Der Techniker kann den Rechner nicht reparieren, _____ das Ersatzteil fehlt.", "denn", ["denn", "weil", "aber", "und"], "denn + das Ersatzteil + fehlt", "konn_denn"),
        q("Wir gehen heute nicht in die Kantine, _____ wir haben Essen mitgebracht.", "denn", ["denn", "weil", "aber", "oder"], "denn + wir haben", "konn_denn"),
        q("Marco ist sehr müde, _____ er hat letzte Nacht nur vier Stunden geschlafen.", "denn", ["denn", "weil", "oder", "aber"], "denn + er hat geschlafen", "konn_denn"),
        q("Ich kann Sie gerade schlecht verstehen, _____ die Audioverbindung hakt.", "denn", ["denn", "weil", "aber", "und"], "denn + die Audioverbindung + hakt", "konn_denn"),
        q("Das Meeting muss pünktlich enden, _____ der Raum ist ab 15 Uhr reserviert.", "denn", ["denn", "weil", "aber", "oder"], "denn + der Raum ist", "konn_denn"),
        q("Sie kauft ein Deutschland-Ticket, _____ sie pendelt täglich nach Frankfurt.", "denn", ["denn", "weil", "aber", "oder"], "denn + sie pendelt", "konn_denn"),
        q("Wir freuen uns über das Lob, _____ das Projekt war wirklich anspruchsvoll.", "denn", ["denn", "weil", "aber", "und"], "denn + das Projekt war", "konn_denn")
      ]
    },
    {
      id: "LVL 1.54",
      chapter: "Linie 1 K14",
      title: "Präpositionen vor und seit mit Dativ (Zeit)",
      ruleSummary: "vor + Dativ = Aktion in Vergangenheit abgeschlossen (Wann?). seit + Dativ = Aktion begann in Vergangenheit und DAUERT NOCH AN (Seit wann?).",
      example: "vor einem Monat (vorbei); seit drei Jahren (dauert noch an)",
      questions: [
        q("Bhavani wohnt _____ sechs Monaten in Weiterstadt und arbeitet dort.", "seit", ["seit", "vor", "nach", "ab"], "Dauert in der Gegenwart noch an: seit", "praep_vor_seit"),
        q("Wir haben den Architektur-Vertrag _____ zwei Wochen unterschrieben.", "vor", ["vor", "seit", "ab", "in"], "Abgeschlossene Handlung in der Vergangenheit: vor", "praep_vor_seit"),
        q("Herr Tim arbeitet schon _____ einem Jahr im ServiceNow COE Team.", "seit", ["seit", "vor", "ab", "nach"], "Dauer bis heute: seit einem Jahr", "praep_vor_seit"),
        q("Das IT-System ist _____ zehn Minuten unerwartet ausgefallen.", "vor", ["vor", "seit", "ab", "in"], "Zeitpunkt in Vergangenheit: vor zehn Minuten", "praep_vor_seit"),
        q("Ich kenne meinen Kollegen Marco bereits _____ über fünf Jahren.", "seit", ["seit", "vor", "ab", "in"], "Besteht weiterhin: seit über fünf Jahren", "praep_vor_seit"),
        q("Der Zug nach Mannheim ist _____ fünf Minuten von Gleis 3 abgefahren.", "vor", ["vor", "seit", "ab", "in"], "Vergangenheit/abgefahren: vor fünf Minuten", "praep_vor_seit"),
        q("Wir sind _____ einem halben Jahr in das neue Bürogebäude umgezogen.", "vor", ["vor", "seit", "ab", "in"], "Umzug war in Vergangenheit: vor", "praep_vor_seit"),
        q("Frau Weber wartet nun schon _____ zwanzig Minuten auf ihren Bus.", "seit", ["seit", "vor", "nach", "in"], "Warten dauert noch an: seit zwanzig Minuten", "praep_vor_seit"),
        q("Der Techniker hat den defekten Server _____ drei Tagen repariert.", "vor", ["vor", "seit", "ab", "in"], "Reparatur abgeschlossen: vor drei Tagen", "praep_vor_seit"),
        q("Er lernt _____ einem Monat intensiv Deutsch an einer Sprachschule.", "seit", ["seit", "vor", "nach", "in"], "Aktivität dauert noch an: seit einem Monat", "praep_vor_seit"),
        q("Die Besprechung hat _____ einer halben Stunde pünktlich begonnen.", "vor", ["vor", "seit", "ab", "in"], "Beginn in Vergangenheit: vor einer halben Stunde", "praep_vor_seit"),
        q("DXC betreut diesen Großkunden bereits _____ vielen Jahren erfolgreich.", "seit", ["seit", "vor", "nach", "ab"], "Dauert an + Dativ Plural: seit vielen Jahren", "praep_vor_seit")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 15: DIALOGE, IMPERATIV IHR & REAKTIONEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.55",
      chapter: "Linie 1 K15",
      title: "Antworten mit ja, nein und doch",
      ruleSummary: "Positive Frage: Ja (Bestätigung) oder Nein (Ablehnung). Negative Frage (mit nicht/kein): DOCH (Widerspruch/Korrektur) oder Nein (Zustimmung zur Negation).",
      example: "Kommst du nicht mit? - Doch, natürlich! / Hast du Zeit? - Ja.",
      questions: [
        q("Kommst du heute nicht mit in die Kantine? - _____ , ich komme gerne mit!", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Widerspruch gegen verneinte Frage: Doch!", "ja_nein_doch"),
        q("Haben Sie heute Zeit für ein kurzes Review? - _____ , sehr gerne um 14 Uhr.", "Ja", ["Ja", "Doch", "Nein", "Kein"], "Zustimmung auf positive Frage: Ja", "ja_nein_doch"),
        q("Arbeitet Herr Tim nicht mehr bei DXC? - _____ , er ist immer noch Teamleiter.", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Widerspruch gegen verneinte Frage: Doch!", "ja_nein_doch"),
        q("Hast du deinen Laptop nicht dabei? - _____ , ich habe ihn zu Hause vergessen.", "Nein", ["Nein", "Doch", "Ja", "Nicht"], "Bestätigung der Negation: Nein, vergessen", "ja_nein_doch"),
        q("Verstehst du die Fehlermeldung im Log? - _____ , sie ist völlig unverständlich.", "Nein", ["Nein", "Doch", "Ja", "Kein"], "Verneinung auf positive Frage: Nein", "ja_nein_doch"),
        q("Gibt es heute keine Besprechung mehr? - _____ , um 16 Uhr mit dem Kunden!", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Korrektur der negativen Annahme: Doch!", "ja_nein_doch"),
        q("Ist das der neue Kollege aus München? - _____ , genau, das ist Herr Becker.", "Ja", ["Ja", "Doch", "Nein", "Nicht"], "Bestätigung: Ja", "ja_nein_doch"),
        q("Fährt der Bus 675 sonntags nicht? - _____ , er fährt jede Stunde einmal.", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Widerspruch auf verneinte Frage: Doch!", "ja_nein_doch"),
        q("Trinken Sie keinen Kaffee, Frau Meyer? - _____ , ich trinke ausschließlich Tee.", "Nein", ["Nein", "Doch", "Ja", "Nicht"], "Zustimmung zum Nicht-Kaffeetrinken: Nein", "ja_nein_doch"),
        q("Kennen Sie Weiterstadt noch gar nicht? - _____ , ich wohne schon ein Jahr hier!", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Korrektur mit Gegenbeispiel: Doch!", "ja_nein_doch"),
        q("War das Meeting erfolgreich? - _____ , alle Punkte wurden geklärt.", "Ja", ["Ja", "Doch", "Nein", "Nicht"], "Positiv: Ja", "ja_nein_doch"),
        q("Hast du den Entwurf noch nicht verschickt? - _____ , vor zehn Minuten per Mail!", "Doch", ["Doch", "Ja", "Nein", "Nicht"], "Widerspruch: Doch, vor zehn Minuten!", "ja_nein_doch")
      ]
    },
    {
      id: "LVL 1.56",
      chapter: "Linie 1 K15",
      title: "Imperativ der ihr-Form (Gruppe ansprechen)",
      ruleSummary: "Imperativ Plural (ihr): Entspricht der regulären Präsens-ihr-Form, aber OHNE das Personalpronomen 'ihr'!",
      example: "Kommt pünktlich! Wartet hier! Sprecht bitte leiser!",
      questions: [
        q("Kollegen, _____ bitte alle pünktlich um 10 Uhr im Konferenzraum!", "seid", ["seid", "sind", "seid ihr", "sein"], "Imperativ ihr von sein: seid!", "imp_ihr"),
        q("Team, _____ bitte die Jira-Tickets bis Feierabend gewissenhaft!", "prüft", ["prüft", "prüfen", "prüft ihr", "geprüft"], "Imperativ ihr: Stamm + t (ohne ihr): prüft!", "imp_ihr"),
        q("_____ bitte etwas leiser, im Nachbarraum findet ein Kundencall statt!", "Sprecht", ["Sprecht", "Sprechen", "Spricht", "Sprecht ihr"], "sprechen -> ihr sprecht -> Sprecht!", "imp_ihr"),
        q("_____ kurz auf mich in der Lobby, ich hole nur schnell meinen Ausweis!", "Wartet", ["Wartet", "Warten", "Wartest", "Wartet ihr"], "warten -> Wartet!", "imp_ihr"),
        q("_____ bitte eure Laptops mit in die Architektur-Schulung!", "Bringt", ["Bringt", "Bringen", "Bringt ihr", "Gebracht"], "bringen -> Bringt!", "imp_ihr"),
        q("_____ den Server vor dem Wochenende auf keinen Fall unerwartet herunter!", "Fahrt", ["Fahrt", "Fahren", "Fahrt ihr", "Fährt"], "herunterfahren -> Fahrt ... herunter!", "imp_ihr"),
        q("_____ eure Zeiterfassung vor dem Monatsende nicht!", "Vergesst", ["Vergesst", "Vergessen", "Vergisst", "Vergesst ihr"], "vergessen -> Vergesst!", "imp_ihr"),
        q("_____ nach der Besprechung bitte alle Fenster im Büro!", "Schließt", ["Schließt", "Schließen", "Schließt ihr", "Geschlossen"], "schließen -> Schließt!", "imp_ihr"),
        q("_____ euch bitte die neuen Sicherheitsrichtlinien gründlich durch!", "Lest", ["Lest", "Lesen", "Lest ihr", "Liest"], "lesen -> ihr lest -> Lest!", "imp_ihr"),
        q("_____ bitte eure Kaffeetassen zurück in die Teeküche!", "Stellt", ["Stellt", "Stellen", "Stellt ihr", "Gestellt"], "stellen -> Stellt!", "imp_ihr"),
        q("_____ die Dokumente im gemeinsamen Netzlaufwerk ab!", "Speichert", ["Speichert", "Speichern", "Speichert ihr", "Gespeichert"], "speichern -> Speichert!", "imp_ihr"),
        q("_____ dem neuen Mitarbeiter bitte bei seinen ersten Aufgaben!", "Helft", ["Helft", "Helfen", "Helft ihr", "Hilft"], "helfen -> ihr helft -> Helft!", "imp_ihr")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 16: ABSTIMMUNG, DEMONSTRATIV & DATIV-VERBEN
    // -------------------------------------------------------------
    {
      id: "LVL 1.57",
      chapter: "Linie 1 K16",
      title: "Fragewort welch- und Demonstrativpronomen dies-",
      ruleSummary: "welcher/dieser (maskulin), welches/dieses (neutral), welche/diese (feminin & Plural). Sie übernehmen die Endungen des bestimmten Artikels.",
      example: "Welcher Kuli? - Dieser. Welches Büro? - Dieses. Welche Kollegin? - Diese.",
      questions: [
        q("_____ Laptop (m) gehört dem neuen Architekten? - Dieser hier am Fenster.", "Welcher", ["Welcher", "Welches", "Welche", "Welchem"], "Nominativ maskulin: Welcher Laptop? - Dieser", "welch_dies"),
        q("_____ Besprechungsraum (m) haben Sie gebucht? - _____ Raum dort drüben.", "Welchen", ["Welchen / Diesen", "Welcher / Dieser", "Welches / Dieses", "Welchem / Diesem"], "Akkusativ maskulin: Welchen Raum? - Diesen", "welch_dies"),
        q("_____ Ticket (n) hat heute die höchste Priorität? - _____ hier im Backlog.", "Welches", ["Welches / Dieses", "Welcher / Dieser", "Welche / Diese", "Welchen / Diesen"], "Nominativ neutral: Welches Ticket? - Dieses", "welch_dies"),
        q("Mit _____ Buslinie (f) fahren Sie nach Weiterstadt? - Mit _____ hier, der 675.", "welcher", ["welcher / dieser", "welche / diese", "welchem / diesem", "welchen / diesen"], "mit + Dativ feminin: welcher / dieser", "welch_dies"),
        q("_____ Tastatur (f) funktioniert einwandfrei? - _____ dort am Arbeitsplatz.", "Welche", ["Welche / Diese", "Welcher / Dieser", "Welches / Dieses", "Welchen / Diesen"], "Nominativ feminin: Welche? - Diese", "welch_dies"),
        q("_____ Berichte (Pl.) müssen wir heute noch signieren? - _____ drei Berichte.", "Welche", ["Welche / Diese", "Welcher / Dieser", "Welches / Dieses", "Welchen / Diesen"], "Plural: Welche? - Diese", "welch_dies"),
        q("In _____ Gebäude (n) befindet sich der Konferenzraum? - In _____ Gebäude.", "welchem", ["welchem / diesem", "welches / dieses", "welcher / dieser", "welchen / diesen"], "in + Dativ neutral: welchem / diesem", "welch_dies"),
        q("_____ Monitor (m) möchten Sie behalten? - Ich nehme _____ breiten Bildschirm.", "Welchen", ["Welchen / diesen", "Welcher / dieser", "Welches / dieses", "Welche / diese"], "Akkusativ maskulin: Welchen? - diesen", "welch_dies"),
        q("Für _____ Kunden (m) ist dieses System konzipiert? - Für _____ Großkunden.", "welchen", ["welchen / diesen", "welcher / dieser", "welchem / diesem", "welches / dieses"], "für + Akkusativ maskulin: welchen / diesen", "welch_dies"),
        q("_____ Lösung (f) bevorzugt das Architektur-Team? - _____ modulare Variante.", "Welche", ["Welche / Diese", "Welcher / Dieser", "Welches / Dieses", "Welchen / Diesen"], "Akkusativ feminin: Welche? - Diese", "welch_dies"),
        q("Aus _____ Stadt (f) kommen die neuen Entwickler? - Aus _____ Region hier.", "welcher", ["welcher / dieser", "welche / diese", "welchem / diesem", "welchen / diesen"], "aus + Dativ feminin: welcher / dieser", "welch_dies"),
        q("_____ Problem (n) blockiert aktuell das Release? - Genau _____ Problem hier.", "Welches", ["Welches / dieses", "Welcher / dieser", "Welche / diese", "Welchen / diesen"], "Nominativ neutral: Welches Problem?", "welch_dies")
      ]
    },
    {
      id: "LVL 1.58",
      chapter: "Linie 1 K16",
      title: "Präposition für + Akkusativ",
      ruleSummary: "Die Präposition 'für' verlangt IMMER den Akkusativ! (für den Chef, für das Team, für die Kollegin, für mich, für dich, für uns).",
      example: "Das ist für den Kunden. Ist das Ticket für mich? Wir arbeiten für ein Ziel.",
      questions: [
        q("Das neue Dienst-Notebook ist speziell für _____ neuen Architekten (m) bestellt.", "den", ["den", "dem", "der", "des"], "für + Akkusativ maskulin: für den Architekten", "praep_fuer_akk"),
        q("Herr Tim hat eine wichtige Aufgabe für _____ (du), Marco.", "dich", ["dich", "dir", "du", "dein"], "für + Akkusativ 2. Person: für dich", "praep_fuer_akk"),
        q("Wir entwickeln diese Schnittstelle für _____ Großkunden (m) in Frankfurt.", "einen", ["einen", "einem", "ein", "einer"], "für + Akkusativ maskulin: für einen Kunden", "praep_fuer_akk"),
        q("Ist dieses dringende Support-Ticket für _____ (ich) bestimmt?", "mich", ["mich", "mir", "ich", "mein"], "für + Akkusativ 1. Person: für mich", "praep_fuer_akk"),
        q("Das Meeting ist äußerst wichtig für _____ gesamte Team (n).", "das", ["das", "dem", "den", "der"], "für + Akkusativ neutral: für das Team", "praep_fuer_akk"),
        q("Der Techniker hat ein Update für _____ neue Sicherheitssoftware (f) bereitgestellt.", "die", ["die", "der", "den", "dem"], "für + Akkusativ feminin: für die Software", "praep_fuer_akk"),
        q("Die Geschäftsleitung bedankt sich für _____ herausragenden Einsatz (m).", "den", ["den", "dem", "der", "das"], "für + Akkusativ maskulin: für den Einsatz", "praep_fuer_akk"),
        q("Wir haben einen Kuchen für _____ Kollegen (Pl.) mitgebracht.", "die", ["die", "den", "der", "denen"], "für + Akkusativ Plural: für die Kollegen", "praep_fuer_akk"),
        q("Dieses Training ist obligatorisch für _____ Mitarbeiter (Pl.) bei DXC.", "alle", ["alle", "allen", "aller", "alles"], "für + Akkusativ Plural: für alle", "praep_fuer_akk"),
        q("Haben Sie heute etwas Zeit für _____ kurzes Telefongespräch (n)?", "ein", ["ein", "einen", "einem", "einer"], "für + Akkusativ neutral: für ein Gespräch", "praep_fuer_akk"),
        q("Der Chef hat eine Überraschung für _____ (wir) vorbereitet.", "uns", ["uns", "wir", "unser", "euch"], "für + Akkusativ 1. Person Plural: für uns", "praep_fuer_akk"),
        q("Vielen herzlichen Dank für _____ freundliche Unterstützung (f)!", "Ihre", ["Ihre", "Ihrer", "Ihrem", "Ihren"], "für + Akkusativ feminin: für Ihre Unterstützung", "praep_fuer_akk")
      ]
    },
    {
      id: "LVL 1.59",
      chapter: "Linie 1 K16",
      title: "Verben mit festem Dativ (gehören, helfen, gefallen, danken)",
      ruleSummary: "Typische Verben mit Dativ-Ergänzung (Wem?): gehören, helfen, gefallen, danken, antworten, gratulieren, schmecken, passen.",
      example: "Das Buch gehört dem Kollegen. Ich helfe dir. Das Büro gefällt mir.",
      questions: [
        q("Das moderne Headset gehört _____ neuen Mitarbeiter (m).", "dem", ["dem", "den", "der", "das"], "gehören + Dativ maskulin: gehört dem Mitarbeiter", "verb_dativ_core"),
        q("Bhavani hilft _____ Kollegen (m) bei der CMDB-Konfiguration.", "einem", ["einem", "einen", "eines", "ein"], "helfen + Dativ maskulin: hilft einem Kollegen", "verb_dativ_core"),
        q("Die neue Benutzeroberfläche gefällt _____ Kunden (m) außergewöhnlich gut.", "dem", ["dem", "den", "der", "des"], "gefallen + Dativ maskulin: gefällt dem Kunden", "verb_dativ_core"),
        q("Der Projektleiter dankt _____ Team (n) für die pünktliche Bereitstellung.", "dem", ["dem", "den", "das", "der"], "danken + Dativ neutral: dankt dem Team", "verb_dativ_core"),
        q("Wem gehört dieses Smartphone? - Es gehört _____ Kollegin (f) am Empfang.", "der", ["der", "die", "den", "dem"], "gehören + Dativ feminin: gehört der Kollegin", "verb_dativ_core"),
        q("Kannst du _____ (ich) bitte bei dieser kniffligen Aufgabe helfen?", "mir", ["mir", "mich", "ich", "dir"], "helfen + Dativ Pronomen: hilfst du mir?", "verb_dativ_core"),
        q("Der Termin am Freitag um 11 Uhr passt _____ (wir) optimal.", "uns", ["uns", "wir", "unser", "euch"], "passen + Dativ: passt uns", "verb_dativ_core"),
        q("Wir gratulieren _____ Vorgesetzten (m) herzlich zum Dienstjubiläum.", "dem", ["dem", "den", "der", "des"], "gratulieren + Dativ maskulin: dem Vorgesetzten", "verb_dativ_core"),
        q("Die Architektur-Skizze gefällt _____ Abteilungsleiterin (f) sehr gut.", "der", ["der", "die", "dem", "den"], "gefallen + Dativ feminin: gefällt der Leiterin", "verb_dativ_core"),
        q("Das Essen in der neuen Kantine schmeckt _____ Entwicklern (Pl.) prima.", "den", ["den", "die", "der", "dem"], "schmecken + Dativ Plural (+n): den Entwicklern", "verb_dativ_core"),
        q("Der Support antwortet _____ Anfragenden (Pl.) innerhalb von einer Stunde.", "den", ["den", "die", "der", "dem"], "antworten + Dativ Plural: den Anfragenden", "verb_dativ_core"),
        q("Ich danke _____ (du) vielmals für deine wertvollen Hinweise!", "dir", ["dir", "dich", "du", "dein"], "danken + Dativ 2. Person: danke dir", "verb_dativ_core")
      ]
    }
  ];

  if (!window.STAGE_A1_DATA) {
    window.STAGE_A1_DATA = { stage: "A1", levels: [] };
  }

  levelsK13toK16.forEach(newLvl => {
    const existingIdx = window.STAGE_A1_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A1_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A1_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A1_DATA.totalLevels = window.STAGE_A1_DATA.levels.length;
})();
