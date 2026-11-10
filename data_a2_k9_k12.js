/**
 * STAGE A2 DATA PACK 3 (Levels 2.23 to 2.33 - Chapters K9 to K12)
 * Sourced directly from Linie 1 (A2) Grammatikthemen.
 * Focus: Reflexive Verben (mich/mir), Konjunktiv II Höflichkeit, Nebensätze mit als & wenn.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsA2_K9toK12 = [
    // -------------------------------------------------------------
    // KAPITEL 9: UNTERWEGS, REISEN & REFLEXIVVERBEN IM AKKUSATIV
    // -------------------------------------------------------------
    {
      id: "LVL 2.23",
      chapter: "Linie 1 A2 K9",
      title: "Reflexive Verben im Akkusativ (mich, dich, sich, uns, euch)",
      ruleSummary: "Echte und unechte reflexive Verben im Akkusativ: ich freue mich, du freust dich, er/sie freut sich, wir freuen uns, ihr freut euch, sie freuen sich.",
      example: "Ich ärgere mich über den Fehler. Freust du dich auf das Release?",
      questions: [
        q("Bhavani freut _____ sehr über das positive Feedback vom Kunden.", "sich", ["sich", "mich", "ihn", "ihm"], "3. Person Singular reflexiv: freut sich", "refl_akk"),
        q("Ich beeile _____ , damit ich den Bus nach Darmstadt noch erreiche.", "mich", ["mich", "mir", "sich", "dich"], "1. Person Singular reflexiv: beeile mich", "refl_akk"),
        q("Marco, ärgerst du _____ immer noch über das abgebrochene Update?", "dich", ["dich", "dir", "sich", "mich"], "2. Person Singular reflexiv: ärgerst du dich", "refl_akk"),
        q("Wir müssen _____ heute besonders gut auf das Kunden-Audit vorbereiten.", "uns", ["uns", "euch", "sich", "wir"], "1. Person Plural reflexiv: vorbereiten uns", "refl_akk"),
        q("Kollegen, bitte setzt _____ doch auf die freien Plätze im Raum!", "euch", ["euch", "uns", "sich", "ihr"], "2. Person Plural reflexiv: setzt euch", "refl_akk"),
        q("Herr Tim erkundigt _____ beim Support nach dem aktuellen Status des Tickets.", "sich", ["sich", "ihn", "ihm", "mich"], "3. Person Singular: erkundigt sich", "refl_akk"),
        q("Ich habe _____ gestern bei der Präsentation leider etwas verspätet.", "mich", ["mich", "mir", "sich", "dich"], "1. Person Singular: habe mich verspätet", "refl_akk"),
        q("Frau Weber fühlt _____ heute nach der Genesung wieder fit und gesund.", "sich", ["sich", "sie", "ihr", "mich"], "3. Person Singular feminin: fühlt sich", "refl_akk"),
        q("Hast du _____ schon für den neuen Architektur-Workshop angemeldet?", "dich", ["dich", "dir", "sich", "du"], "2. Person Singular: hast du dich angemeldet", "refl_akk"),
        q("Die neuen Mitarbeiter stellen _____ dem Team in der Kaffeepause vor.", "sich", ["sich", "ihnen", "uns", "euch"], "3. Person Plural: stellen sich vor", "refl_akk"),
        q("Wir treffen _____ jeden Dienstag um 9 Uhr zum Standup.", "uns", ["uns", "euch", "sich", "wir"], "1. Person Plural: treffen uns", "refl_akk"),
        q("Interessierst du _____ für Cloud-Technologien und CMDB-Systeme?", "dich", ["dich", "dir", "sich", "du"], "interessierst du dich", "refl_akk")
      ]
    },
    {
      id: "LVL 2.24",
      chapter: "Linie 1 A2 K9",
      title: "Temporale Nebensätze: als vs. wenn (Vergangenheit)",
      ruleSummary: "'als' wird für ein EINMALIGES Ereignis in der VERGANGENHEIT verwendet. 'wenn' steht für wiederholte Handlungen in der Vergangenheit (jedes Mal, wenn...) oder für Gegenwart/Zukunft.",
      example: "Als ich in Deutschland ankam, sprach ich wenig Deutsch. Jedes Mal, wenn der Zug kam, stieg er ein.",
      questions: [
        q("_____ Bhavani 2026 nach Deutschland kam, begann sein Job bei DXC.", "Als", ["Als", "Wenn", "Wann", "Weil"], "Einmaliges Ereignis in der Vergangenheit: Als", "temp_als_wenn"),
        q("Immer _____ der Server abstürzte, musste der Techniker nachts ins Büro.", "wenn", ["wenn", "als", "wann", "weil"], "Wiederholte Handlung in Vergangenheit (immer wenn): wenn", "temp_als_wenn"),
        q("_____ ich die erste ServiceNow-Zertifizierung bestand, war ich sehr stolz.", "Als", ["Als", "Wenn", "Wann", "Obwohl"], "Einmaliger Zeitpunkt in der Vergangenheit: Als", "temp_als_wenn"),
        q("Jedes Mal, _____ Herr Tim den Raum betrat, wurde es sofort ruhig.", "wenn", ["wenn", "als", "wann", "während"], "Wiederholung in der Vergangenheit: wenn", "temp_als_wenn"),
        q("_____ wir gestern das Ticket bearbeiteten, bemerkten wir den Konfigurationsfehler.", "Als", ["Als", "Wenn", "Wann", "Weil"], "Konkrete einmalige Situation gestern: Als", "temp_als_wenn"),
        q("Was hast du gedacht, _____ du die Zusage für die Stelle erhalten hast?", "als", ["als", "wenn", "wann", "ob"], "Einmaliges Ereignis: als", "temp_als_wenn"),
        q("Früher, _____ Marco noch in Frankfurt wohnte, pendelte er jeden Tag.", "als", ["als", "wenn", "wann", "weil"], "Vergangene Lebensphase: als", "temp_als_wenn"),
        q("Immer _____ wir Fragen zur CMDB hatten, half uns Bhavani sofort weiter.", "wenn", ["wenn", "als", "wann", "da"], "Wiederholtes Geschehen: wenn", "temp_als_wenn"),
        q("_____ der Wecker heute Morgen um 6 Uhr klingelte, stand ich sofort auf.", "Als", ["Als", "Wenn", "Wann", "Weil"], "Einmaliges Ereignis heute früh: Als", "temp_als_wenn"),
        q("_____ der Kollege zum ersten Mal eine Präsentation hielt, war er sehr nervös.", "Als", ["Als", "Wenn", "Wann", "Weil"], "Einmalig: Als er zum ersten Mal...", "temp_als_wenn"),
        q("Jedes Mal, _____ ein neues Update erschien, mussten die Tests wiederholt werden.", "wenn", ["wenn", "als", "wann", "weil"], "Wiederholte Bedingung/Zeit: wenn", "temp_als_wenn"),
        q("_____ ich mein Studium erfolgreich abschloss, feierten wir mit Freunden.", "Als", ["Als", "Wenn", "Wann", "Obwohl"], "Einmaliger Meilenstein: Als", "temp_als_wenn")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 10: KOMMUNIKATION, HÖFLICHKEIT & KONJUNKTIV II
    // -------------------------------------------------------------
    {
      id: "LVL 2.25",
      chapter: "Linie 1 A2 K10",
      title: "Konjunktiv II: Höfliche Bitten mit könnten & würden",
      ruleSummary: "Für besonders höfliche Bitten und Anfragen am Arbeitsplatz: könnten Sie + Infinitiv? würden Sie + Infinitiv? (könnte / würde).",
      example: "Könnten Sie mir bitte die Datei schicken? Würden Sie das Dokument prüfen?",
      questions: [
        q("_____ Sie mir bitte die Zugangsdaten für das Cloud-Portal per E-Mail senden?", "Könnten", ["Könnten", "Können", "Konnten", "Würdet"], "Höfliche Bitte (Sie-Form): Könnten Sie", "k2_bitte_formal"),
        q("Ich _____ gerne einen Termin mit Herrn Tim für nächste Woche vereinbaren.", "würde", ["würde", "werde", "wurde", "wollte"], "Höflicher Wunsch: würde gerne", "k2_bitte_formal"),
        q("_____ Sie bitte kurz einen Blick auf diesen fehlerhaften Code werfen?", "Würden", ["Würden", "Werden", "Wurden", "Wart"], "Höfliche Aufforderung: Würden Sie", "k2_bitte_formal"),
        q("Marco, _____ du mir bitte kurz bei der Fehlersuche im Log helfen?", "könntest", ["könntest", "kannst", "konntest", "würdest"], "Höfliche Bitte du-Form: könntest du", "k2_bitte_formal"),
        q("Frau Meyer, _____ Sie so freundlich und würden das Protokoll der Sitzung schreiben?", "wären", ["wären", "sind", "waren", "würden"], "Sehr höflich: Wären Sie so freundlich", "k2_bitte_formal"),
        q("Wir _____ gerne vorschlagen, den Release-Termin um zwei Tage zu verschieben.", "würden", ["würden", "werden", "wurden", "wollten"], "Höflicher Vorschlag: würden gerne vorschlagen", "k2_bitte_formal"),
        q("_____ du mir bitte deinen Bildschirmschlüssel für fünf Minuten leihen?", "Könntest", ["Könntest", "Kannst", "Konntest", "Solltest"], "Höfliche Bitte: Könntest du", "k2_bitte_formal"),
        q("Ich _____ mich freuen, wenn Sie mir bis morgen kurz Rückmeldung geben.", "würde", ["würde", "werde", "wurde", "hätte"], "Höfliche Erwartung: würde mich freuen", "k2_bitte_formal"),
        q("Herr Schmidt, _____ Sie bitte das Mikrofon stummschalten? Es hallt sehr stark.", "könnten", ["könnten", "können", "konnten", "würdet"], "Höfliche Bitte im Call: könnten Sie", "k2_bitte_formal"),
        q("Kollegen, _____ ihr mir bitte die aktuellen Folien in den gemeinsamen Ordner hochladen?", "könntet", ["könntet", "könnt", "konntet", "würdet"], "Höflich an Kollegen (ihr): könntet ihr", "k2_bitte_formal"),
        q("_____ es Ihnen passen, wenn wir das Gespräch auf Donnerstag verlegen?", "Würde", ["Würde", "Wird", "Wurde", "Könnte"], "Höflich: Würde es Ihnen passen", "k2_bitte_formal"),
        q("Ich _____ an Ihrer Stelle den Server vor dem Wochenende nicht mehr anfassen.", "würde", ["würde", "werde", "wurde", "hätte"], "Höflicher Ratschlag: ich würde an Ihrer Stelle", "k2_bitte_formal")
      ]
    },
    {
      id: "LVL 2.26",
      chapter: "Linie 1 A2 K10",
      title: "Konjunktiv II: Wünsche mit hätten & wären",
      ruleSummary: "Hypothetische Wünsche und Bedingungen: ich hätte gern(e) (= ich wünsche mir), ich wäre gern(e) (= ich möchte dort/so sein).",
      example: "Ich hätte gern einen Kaffee. Wir wären gern pünktlich gekommen.",
      questions: [
        q("Guten Tag, ich _____ gerne eine Tasse schwarzen Tee ohne Zucker.", "hätte", ["hätte", "habe", "hatte", "wäre"], "Höfliche Bestellung/Wunsch: ich hätte gern", "k2_haette_waere"),
        q("Wir _____ heute alle gerne etwas früher nach Hause gegangen, aber das Deployment lief noch.", "wären", ["wären", "waren", "sind", "hätten"], "Wunsch Vergangenheit (Bewegung): wären gerne gegangen", "k2_haette_waere"),
        q("Wenn ich mehr Zeit _____ , würde ich mich noch intensiver mit KI-Modellen beschäftigen.", "hätte", ["hätte", "habe", "hatte", "wäre"], "Hypothetische Bedingung: wenn ich mehr Zeit hätte", "k2_haette_waere"),
        q("Bhavani _____ morgen Vormittag für ein kurzes Gespräch verfügbar.", "wäre", ["wäre", "war", "ist", "hätte"], "Möglichkeitsform: wäre verfügbar", "k2_haette_waere"),
        q("_____ Sie morgen um 11 Uhr zehn Minuten Zeit für mich, Herr Tim?", "Hätten", ["Hätten", "Haben", "Hatten", "Wären"], "Höfliche Anfrage nach Zeit: Hätten Sie Zeit?", "k2_haette_waere"),
        q("Ich _____ gerne im Urlaub am Strand, anstatt hier im Regen zu stehen.", "wäre", ["wäre", "war", "bin", "hätte"], "Ort/Zustand hypothetisch: wäre gerne am Strand", "k2_haette_waere"),
        q("Wenn wir die neue Hardware schon _____ , könnten wir die Tests heute abschließen.", "hätten", ["hätten", "haben", "hatten", "wären"], "Besitz hypothetisch: wenn wir ... hätten", "k2_haette_waere"),
        q("Marco, _____ du heute Nachmittag kurz Zeit für einen Blick auf meine Skizze?", "hättest", ["hättest", "hast", "hattest", "wärst"], "du-Form: hättest du Zeit?", "k2_haette_waere"),
        q("Das _____ wirklich fantastisch, wenn wir das Projekt vor der Frist fertigstellen könnten!", "wäre", ["wäre", "war", "ist", "hätte"], "Bewertung hypothetisch: Das wäre fantastisch", "k2_haette_waere"),
        q("Wir _____ gerne mehr Unterstützung bei diesem komplexen Incident.", "hätten", ["hätten", "haben", "hatten", "wären"], "Wunsch: hätten gerne", "k2_haette_waere"),
        q("_____ du bereit, die Vertretung für Frau Weber nächste Woche zu übernehmen?", "Wärst", ["Wärst", "Bist", "Warst", "Hättest"], "Bereitschaft du-Form: Wärst du bereit?", "k2_haette_waere"),
        q("Ich _____ noch eine kurze Frage bezüglich der Rechnungsfreigabe.", "hätte", ["hätte", "habe", "hatte", "wäre"], "Höfliche Einleitung: Ich hätte noch eine Frage", "k2_haette_waere")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 11: MEDIEN, NACHRICHTEN & PASSIV PRÄSENS (GRUNDLAGEN)
    // -------------------------------------------------------------
    {
      id: "LVL 2.27",
      chapter: "Linie 1 A2 K11",
      title: "Passiv im Präsens: Vorgangspassiv mit werden",
      ruleSummary: "Passiv Präsens beschreibt einen Vorgang: Subjekt + konjugiertes 'werden' + Partizip II am Satzende (ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden).",
      example: "Der Bericht wird geschrieben. Die Server werden gewartet.",
      questions: [
        q("Der neue Vertrag _____ heute von beiden Geschäftsführern unterschrieben.", "wird", ["wird", "werde", "werden", "wurde"], "Passiv 3. Person Singular: wird unterschrieben", "passiv_praesens"),
        q("Die täglichen Backups _____ jede Nacht um 2 Uhr automatisch durchgeführt.", "werden", ["werden", "wird", "werdet", "wurden"], "Passiv Plural: werden durchgeführt", "passiv_praesens"),
        q("Das defekte Kabel _____ vom Techniker sofort ausgetauscht.", "wird", ["wird", "werde", "werden", "ist"], "Passiv Singular: wird ausgetauscht", "passiv_praesens"),
        q("In unserem Unternehmen _____ die Sicherheitsrichtlinien streng kontrolliert.", "werden", ["werden", "wird", "werdet", "worden"], "Passiv Plural: werden kontrolliert", "passiv_praesens"),
        q("Das Ticket _____ zurzeit von einem Spezialisten im Support bearbeitet.", "wird", ["wird", "werde", "werden", "hat"], "Passiv Singular: wird bearbeitet", "passiv_praesens"),
        q("Hier im Großraumbüro _____ während der Besprechungen leise gesprochen.", "wird", ["wird", "werden", "werdet", "wurde"], "Unpersönliches Passiv (man): wird gesprochen", "passiv_praesens"),
        q("Die neuen Architekten _____ von erfahrenen Mentoren eingearbeitet.", "werden", ["werden", "wird", "werdet", "sein"], "Passiv Plural: werden eingearbeitet", "passiv_praesens"),
        q("Alle vertraulichen Kundendaten _____ auf hochsicheren Servern gespeichert.", "werden", ["werden", "wird", "werdet", "worden"], "werden gespeichert", "passiv_praesens"),
        q("Der Release-Plan _____ im morgendlichen Standup ausführlich besprochen.", "wird", ["wird", "werden", "werde", "wurde"], "wird besprochen", "passiv_praesens"),
        q("Wann _____ die neuen Laptops an die Mitarbeiter verteilt?", "werden", ["werden", "wird", "werdet", "wurden"], "Frage Passiv Plural: werden verteilt", "passiv_praesens"),
        q("Das Passwort _____ nach drei Fehleingaben automatisch gesperrt.", "wird", ["wird", "werden", "werde", "ist"], "wird gesperrt", "passiv_praesens"),
        q("Jeden Freitag _____ die Büroräume gründlich gereinigt.", "werden", ["werden", "wird", "werdet", "haben"], "werden gereinigt", "passiv_praesens")
      ]
    },
    {
      id: "LVL 2.28",
      chapter: "Linie 1 A2 K11",
      title: "Passiv mit Modalverben im Präsens",
      ruleSummary: "Passiv + Modalverb: Modalverb auf Position 2 konjugiert, Partizip II + Infinitiv 'werden' am Satzende.",
      example: "Der Server muss neugestartet werden. Die Dokumente können heruntergeladen werden.",
      questions: [
        q("Das gesamte IT-System muss vor dem Rollout gründlich getestet _____ .", "werden", ["werden", "wird", "worden", "geworden"], "Modalverb Passiv: Partizip II + Infinitiv werden", "passiv_modal"),
        q("Die offenen Support-Tickets müssen bis heute 17 Uhr abgeschlossen _____ .", "werden", ["werden", "wird", "worden", "worden sein"], "müssen ... abgeschlossen werden", "passiv_modal"),
        q("Der Vertrag kann erst morgen vom Vorstand unterschrieben _____ .", "werden", ["werden", "wird", "worden", "geworden"], "kann ... unterschrieben werden", "passiv_modal"),
        q("Diese vertraulichen Unterlagen dürfen keinesfalls kopiert _____ .", "werden", ["werden", "wird", "worden", "geworden"], "dürfen ... kopiert werden (Verbot)", "passiv_modal"),
        q("Das Passwort sollte alle drei Monate geändert _____ .", "werden", ["werden", "wird", "worden", "geworden"], "sollte ... geändert werden", "passiv_modal"),
        q("Die fehlerhaften Daten können leider nicht automatisch wiederhergestellt _____ .", "werden", ["werden", "wird", "worden", "geworden"], "können nicht ... wiederhergestellt werden", "passiv_modal"),
        q("Der defekte Bildschirm muss schnellstmöglich ausgetauscht _____ .", "werden", ["werden", "wird", "worden", "geworden"], "muss ... ausgetauscht werden", "passiv_modal"),
        q("Das Protokoll soll noch heute an alle Beteiligten verschickt _____ .", "werden", ["werden", "wird", "worden", "geworden"], "soll ... verschickt werden", "passiv_modal"),
        q("Darf diese Software auch auf privaten Laptops installiert _____ ?", "werden", ["werden", "wird", "worden", "geworden"], "Frage Passiv: installiert werden?", "passiv_modal"),
        q("Die Konfiguration muss exakt nach der Vorlage vorgenommen _____ .", "werden", ["werden", "wird", "worden", "geworden"], "muss ... vorgenommen werden", "passiv_modal"),
        q("Das Meeting konnte gestern wegen technischer Probleme nicht durchgeführt _____ .", "werden", ["werden", "wird", "worden", "geworden"], "Präteritum Modalverb: konnte ... durchgeführt werden", "passiv_modal"),
        q("Alle Änderungen müssen vorab vom Lead-Architekten freigegeben _____ .", "werden", ["werden", "wird", "worden", "geworden"], "müssen ... freigegeben werden", "passiv_modal")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 12: FESTE, TRADITIONEN & INDIREKTE FRAGEN
    // -------------------------------------------------------------
    {
      id: "LVL 2.29",
      chapter: "Linie 1 A2 K12",
      title: "Indirekte Fragesätze mit ob (Ja/Nein-Fragen)",
      ruleSummary: "Entscheidungsfragen werden indirekt mit 'ob' eingeleitet. Als Nebensatz steht das konjugierte Verb am ABSOLUTEN SATZENDE.",
      example: "Können Sie mir sagen, ob der Zug Pünktlich ist? Ich weiß nicht, ob er kommt.",
      questions: [
        q("Bhavani weiß noch nicht genau, _____ der Kunde das Angebot annehmen wird.", "ob", ["ob", "dass", "wenn", "weil"], "Indirekte Ja/Nein-Frage: ob", "indirekt_ob"),
        q("Könnten Sie mir bitte sagen, _____ der Konferenzraum 3 im 2. Stock frei ist?", "ob", ["ob", "dass", "wie", "wann"], "ob der Raum frei ist", "indirekt_ob"),
        q("Marco fragt beim Empfang nach, _____ ein Paket für ihn angekommen ist.", "ob", ["ob", "dass", "wenn", "als"], "ob ein Paket angekommen ist", "indirekt_ob"),
        q("Ich bin mir nicht sicher, _____ die Schnittstelle alle Daten korrekt überträgt.", "ob", ["ob", "dass", "wie", "weil"], "ob die Schnittstelle ... überträgt", "indirekt_ob"),
        q("Der Projektleiter möchte wissen, _____ das Release planmäßig am Freitag stattfindet.", "ob", ["ob", "dass", "wenn", "wann"], "ob das Release ... stattfindet", "indirekt_ob"),
        q("Wissen Sie zufällig, _____ Herr Tim heute im Büro in Weiterstadt arbeitet?", "ob", ["ob", "dass", "wie", "wo"], "ob Herr Tim ... arbeitet", "indirekt_ob"),
        q("Wir müssen prüfen, _____ alle Mitarbeiter die neue Richtlinie unterschrieben haben.", "ob", ["ob", "dass", "wenn", "weil"], "ob alle Mitarbeiter ... haben", "indirekt_ob"),
        q("Der Techniker prüft im Logfile nach, _____ der Serverabsturz erneut aufgetreten ist.", "ob", ["ob", "dass", "wie", "wann"], "ob der Absturz ... aufgetreten ist", "indirekt_ob"),
        q("Können Sie nachsehen, _____ noch Lizenzen für die Cloud verfügbar sind?", "ob", ["ob", "dass", "wenn", "als"], "ob noch Lizenzen ... verfügbar sind", "indirekt_ob"),
        q("Ich frage mich, _____ dieser Lösungsansatz langfristig stabil genug sein wird.", "ob", ["ob", "dass", "wie", "weil"], "ob dieser Ansatz ... sein wird", "indirekt_ob"),
        q("Frau Weber erkundigt sich, _____ die Kantine heute geöffnet hat.", "ob", ["ob", "dass", "wenn", "wann"], "ob die Kantine geöffnet hat", "indirekt_ob"),
        q("Niemand im Team weiß genau, _____ der Kollege nächste Woche aus dem Urlaub zurückkehrt.", "ob", ["ob", "dass", "wenn", "weil"], "ob der Kollege ... zurückkehrt", "indirekt_ob")
      ]
    },
    {
      id: "LVL 2.30",
      chapter: "Linie 1 A2 K12",
      title: "Indirekte Fragesätze mit W-Wörtern (Wortstellung)",
      ruleSummary: "W-Fragen werden indirekt eingeleitet, indem das W-Wort als Konnektor dient. Das konjugierte Verb wandert ans SATZENDE.",
      example: "Wissen Sie, wann der Zug abfährt? Sagen Sie mir, wo das Büro ist.",
      questions: [
        q("Können Sie mir sagen, wann die Besprechung heute genau _____ ?", "beginnt", ["beginnt", "sie beginnt", "beginnen", "begann"], "Indirekte Frage: konjugiertes Verb ans Satzende (wann ... beginnt)", "indirekt_w_verbend"),
        q("Bhavani erklärt dem neuen Kollegen, wie man das Skript richtig _____ .", "ausführt", ["ausführt", "führt aus", "ausführen", "ausgeführt hat"], "Trennbare Verben am Ende zusammen: wie man ... ausführt", "indirekt_w_trennbar"),
        q("Wissen Sie, wo der Besprechungsraum 4 _____ ?", "liegt", ["liegt", "er liegt", "liegen", "gelegen"], "wo der Raum ... liegt", "indirekt_w_verbend"),
        q("Der Chef möchte wissen, wer dieses Support-Ticket bereits _____ .", "bearbeitet hat", ["bearbeitet hat", "hat bearbeitet", "bearbeitete", "bearbeiten hat"], "Perfekt im Nebensatz: Partizip II + Hilfsverb am Ende", "indirekt_w_perfekt"),
        q("Ich weiß leider nicht mehr, wie das Passwort für den Root-Zugang _____ .", "lautet", ["lautet", "es lautet", "lauten", "lautete"], "wie das Passwort ... lautet", "indirekt_w_verbend"),
        q("Könnten Sie mir bitte erklären, warum dieser Fehler im Dashboard _____ ?", "auftritt", ["auftritt", "tritt auf", "auftreten", "aufgetreten"], "trennbare Verben zusammen am Ende: auftritt", "indirekt_w_trennbar"),
        q("Marco fragt, wohin die Projektleiter zur Mittagspause _____ .", "gehen", ["gehen", "sie gehen", "geht", "gegangen"], "wohin die Projektleiter ... gehen", "indirekt_w_verbend"),
        q("Niemand weiß so recht, wie lange die Störung im Netzwerk noch _____ .", "dauert", ["dauert", "sie dauert", "dauern", "gedauert"], "wie lange die Störung ... dauert", "indirekt_w_verbend"),
        q("Frau Meyer fragt nach, wo man die Abrechnungsformulare im Intranet _____ .", "findet", ["findet", "man findet", "finden", "gefunden"], "wo man die Formulare ... findet", "indirekt_w_verbend"),
        q("Können Sie mir mitteilen, welcher Bus direkt nach Darmstadt _____ ?", "fährt", ["fährt", "er fährt", "fahren", "fuhr"], "welcher Bus ... fährt", "indirekt_w_verbend"),
        q("Ich verstehe nicht ganz, warum das Deployment schon wieder abgebrochen _____ .", "wurde", ["wurde", "wird", "worden", "geworden"], "Passiv Präteritum am Ende: abgebrochen wurde", "indirekt_w_verbend"),
        q("Wissen Sie zufällig, um wie viel Uhr der Vorstand im Büro _____ ?", "eintrifft", ["eintrifft", "trifft ein", "eintreffen", "eingetroffen"], "eintreffen -> eintrifft", "indirekt_w_trennbar")
      ]
    },
    {
      id: "LVL 2.31",
      chapter: "Linie 1 A2 K12",
      title: "Verben mit Präpositionalergänzung: Genitiv-Vorschau & Dativ-Vertiefung",
      ruleSummary: "Präpositionen mit festem Dativ: aus, bei, mit, nach, seit, von, zu. Vorschau auf Genitivpräpositionen: während (+ Gen/Dat), trotz (+ Gen/Dat), wegen (+ Gen/Dat).",
      example: "während der Konferenz, trotz des Regens, wegen des Fehlers",
      questions: [
        q("Wegen _____ Serverausfalls (m) konnte das Team den Release-Plan nicht einhalten.", "des", ["des", "dem", "den", "der"], "wegen + Genitiv maskulin: wegen des Ausfalls", "genitiv_praep"),
        q("Trotz _____ hohen Aufwands (m) haben die Architekten das Projekt rechtzeitig beendet.", "des", ["des", "dem", "den", "der"], "trotz + Genitiv maskulin: trotz des Aufwands", "genitiv_praep"),
        q("Während _____ Besprechung (f) waren alle Mobiltelefone stummgeschaltet.", "der", ["der", "die", "des", "den"], "während + Genitiv feminin: während der Besprechung", "genitiv_praep"),
        q("Wegen _____ schlechten Wetters (n) fuhr Bhavani mit der Bahn statt mit dem Rad.", "des", ["des", "dem", "das", "den"], "wegen + Genitiv neutral: wegen des Wetters", "genitiv_praep"),
        q("Trotz _____ schwierigen Verhandlungen (Pl.) erzielten die Partner eine Einigung.", "der", ["der", "den", "des", "die"], "trotz + Genitiv Plural: trotz der Verhandlungen", "genitiv_praep"),
        q("Während _____ gesamten Projekts (n) arbeitete das Team eng mit dem Kunden zusammen.", "des", ["des", "dem", "das", "der"], "während + Genitiv neutral: während des Projekts", "genitiv_praep"),
        q("Wegen _____ dringenden Kundentermins (m) muss Marco die Schulung leider absagen.", "eines", ["eines", "einem", "einen", "einer"], "wegen + Genitiv maskulin unbestimmt: eines Termins", "genitiv_praep"),
        q("Trotz _____ Verspätung (f) der Bahn kam der Architekt noch pünktlich an.", "der", ["der", "die", "des", "den"], "trotz + Genitiv feminin: trotz der Verspätung", "genitiv_praep"),
        q("Während _____ Schulung (f) wurden praxisnahe Übungen zur CMDB durchgeführt.", "der", ["der", "die", "des", "den"], "während + Genitiv feminin: während der Schulung", "genitiv_praep"),
        q("Wegen _____ technischen Störung (f) ist das Portal vorübergehend nicht erreichbar.", "einer", ["einer", "eine", "einem", "eines"], "wegen + Genitiv feminin: einer Störung", "genitiv_praep"),
        q("Trotz _____ vielen offenen Fragen (Pl.) starteten die Entwickler mit der Umsetzung.", "der", ["der", "den", "des", "die"], "trotz + Genitiv Plural: trotz der Fragen", "genitiv_praep"),
        q("Während _____ Urlaubs (m) von Herrn Tim übernimmt Herr Keller die Teamleitung.", "des", ["des", "dem", "den", "der"], "während + Genitiv maskulin: während des Urlaubs", "genitiv_praep")
      ]
    },
    {
      id: "LVL 2.32",
      chapter: "Linie 1 A2 K12",
      title: "Temporale Konjunktionen: bevor, während, nachdem",
      ruleSummary: "Temporale Nebensätze mit 'bevor' (vorher), 'während' (gleichzeitig) und 'nachdem' (Vorzeitigkeit). Das konjugierte Verb steht immer am SATZENDE.",
      example: "Bevor er geht, speichert er die Daten. Nachdem wir gegessen hatten, arbeiteten wir weiter.",
      questions: [
        q("Bevor Bhavani den Rechner herunterfährt, _____ er alle aktuellen Code-Änderungen.", "speichert", ["speichert", "er speichert", "speichern", "gespeichert"], "Hauptsatz nach bevor beginnt mit Verb: speichert er", "temp_konn_inversion"),
        q("Während Marco die Dokumentation schreibt, _____ die Entwickler die Schnittstelle.", "testen", ["testen", "sie testen", "testet", "getestet"], "Hauptsatz: testen die Entwickler", "temp_konn_inversion"),
        q("Nachdem wir die Tests erfolgreich abgeschlossen hatten, _____ wir das Release frei.", "gaben", ["gaben", "wir gaben", "geben", "gegeben"], "Hauptsatz Vorzeitigkeit: gaben wir frei", "temp_konn_inversion"),
        q("Prüfen Sie bitte alle Tickets, bevor Sie das Büro am Freitag _____ !", "verlassen", ["verlassen", "verlässt", "verließen", "verlassen haben"], "bevor-Satz: Verb am Ende (verlassen)", "temp_konn_verbend"),
        q("Während der Server das Backup erstellte, _____ die Datenbank extrem langsam.", "reagierte", ["reagierte", "sie reagierte", "reagieren", "gereagiert"], "Hauptsatz: reagierte die Datenbank", "temp_konn_inversion"),
        q("Nachdem Herr Tim den Vorfall analysiert hatte, _____ er den Kunden direkt an.", "rief", ["rief", "er rief", "rufen", "angerufen"], "Hauptsatz: rief er ... an", "temp_konn_inversion"),
        q("Trinken Sie ausreichend Wasser, bevor Sie die anstrengende Besprechung _____ !", "beginnen", ["beginnen", "beginnt", "begannen", "begonnen"], "bevor-Satz: Verb am Ende", "temp_konn_verbend"),
        q("Während der Präsentation _____ alle Teilnehmer aufmerksam den Ausführungen.", "folgten", ["folgten", "sie folgten", "folgen", "gefolgt"], "während als Präposition oder Konjunktor", "temp_konn_inversion"),
        q("Nachdem das Update installiert war, _____ das System wieder einwandfrei.", "funktionierte", ["funktionierte", "es funktionierte", "funktionieren", "funktioniert"], "Hauptsatz: funktionierte das System", "temp_konn_inversion"),
        q("Bevor wir eine finale Entscheidung treffen, _____ wir die Kosten genau kalkulieren.", "müssen", ["müssen", "wir müssen", "mussten", "gemusst"], "Hauptsatz: müssen wir", "temp_konn_inversion"),
        q("Während die Kollegen zu Mittag aßen, _____ der Notdienst das Ticket weiter.", "bearbeitete", ["bearbeitete", "er bearbeitete", "bearbeiten", "bearbeitet"], "Hauptsatz: bearbeitete der Notdienst", "temp_konn_inversion"),
        q("Nachdem Bhavani die Zertifizierung erhalten hatte, _____ ihm das ganze Team.", "gratulierte", ["gratulierte", "es gratulierte", "gratulieren", "gratuliert"], "Hauptsatz: gratulierte ihm das Team", "temp_konn_inversion")
      ]
    },
    {
      id: "LVL 2.33",
      chapter: "Linie 1 A2 K12",
      title: "Verbindungen mit deshalb, trotzdem und sonst (Konnektoren auf Position 1)",
      ruleSummary: "Konjunktionaladverbien (deshalb/deswegen, trotzdem, sonst) belegen POSITION 1 im Hauptsatz! Direkt auf Position 2 folgt das VERB vor dem Subjekt.",
      example: "Es regnet, deshalb nehme ich den Bus. Er war krank, trotzdem kam er zur Arbeit.",
      questions: [
        q("Der Serverraum war überhitzt, deshalb _____ das automatische Abschaltsystem sofort.", "reagierte", ["reagierte", "das System reagierte", "reagieren", "gereagiert"], "deshalb auf Pos 1 -> Verb auf Pos 2: reagierte das System", "konn_pos1_adv"),
        q("Bhavani war gestern etwas erkältet, trotzdem _____ er die wichtige Präsentation.", "hielt", ["hielt", "er hielt", "halten", "gehalten"], "trotzdem auf Pos 1 -> Verb auf Pos 2: hielt er", "konn_pos1_adv"),
        q("Speichern Sie Ihre Änderungen regelmäßig, sonst _____ die Daten bei einem Absturz verloren.", "gehen", ["gehen", "die Daten gehen", "geht", "gegangen"], "sonst auf Pos 1 -> Verb auf Pos 2: gehen die Daten", "konn_pos1_adv"),
        q("Die Bahn hatte 30 Minuten Verspätung, deswegen _____ Herr Tim zu spät zum Meeting.", "kam", ["kam", "er kam", "kommen", "gekommen"], "deswegen auf Pos 1 -> Verb auf Pos 2: kam Herr Tim", "konn_pos1_adv"),
        q("Die Aufgabe war extrem komplex, trotzdem _____ die Entwickler eine elegante Lösung.", "fanden", ["fanden", "sie fanden", "finden", "gefunden"], "trotzdem -> fanden die Entwickler", "konn_pos1_adv"),
        q("Wir müssen die Tickets heute schließen, sonst _____ wir die vereinbarte SLA.", "verpassen", ["verpassen", "wir verpassen", "verpasst", "verpasst haben"], "sonst -> verpassen wir", "konn_pos1_adv"),
        q("Er hat viel für die Prüfung gelernt, deshalb _____ er den Test ohne Probleme.", "bestand", ["bestand", "er bestand", "bestehen", "bestanden"], "deshalb -> bestand er", "konn_pos1_adv"),
        q("Das Wetter war stürmisch, trotzdem _____ die Kollegen in der Mittagspause nach draußen.", "gingen", ["gingen", "sie gingen", "gehen", "gegangen"], "trotzdem -> gingen die Kollegen", "konn_pos1_adv"),
        q("Bitte tragen Sie Ihre Arbeitszeiten ein, sonst _____ die Abrechnung nicht freigegeben.", "wird", ["wird", "die Abrechnung wird", "werden", "wurde"], "sonst -> wird die Abrechnung", "konn_pos1_adv"),
        q("Die Anforderungen haben sich geändert, deswegen _____ wir den Zeitplan anpassen.", "müssen", ["müssen", "wir müssen", "mussten", "gemusst"], "deswegen -> müssen wir", "konn_pos1_adv"),
        q("Der Monitor ist defekt, deshalb _____ der IT-Support heute ein Ersatzgerät.", "liefert", ["liefert", "der Support liefert", "liefern", "geliefert"], "deshalb -> liefert der Support", "konn_pos1_adv"),
        q("Marco hatte wenig Schlaf, trotzdem _____ er heute hochkonzentriert und produktiv.", "arbeitet", ["arbeitet", "er arbeitet", "arbeiten", "gearbeitet"], "trotzdem -> arbeitet er", "konn_pos1_adv")
      ]
    }
  ];

  if (!window.STAGE_A2_DATA) {
    window.STAGE_A2_DATA = { stage: "A2", levels: [] };
  }

  levelsA2_K9toK12.forEach(newLvl => {
    const existingIdx = window.STAGE_A2_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A2_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A2_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A2_DATA.totalLevels = window.STAGE_A2_DATA.levels.length;
})();
