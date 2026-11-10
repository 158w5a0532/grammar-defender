/**
 * STAGE A2 DATA PACK 2 (Levels 2.12 to 2.22 - Chapters K5 to K8)
 * Sourced directly from Linie 1 (A2) Grammatikthemen.
 * Focus: Nebensätze mit dass & wenn, Adjektivdeklination im Dativ, Komparativ & Superlativ.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsA2_K5toK8 = [
    // -------------------------------------------------------------
    // KAPITEL 5: STADT, VERKEHR & NEBENSÄTZE MIT DASS
    // -------------------------------------------------------------
    {
      id: "LVL 2.12",
      chapter: "Linie 1 A2 K5",
      title: "Objektsätze mit dass (Verb am Satzende)",
      ruleSummary: "Die Konjunktion 'dass' verbindet einen Hauptsatz mit einem Nebensatz. Das konjugierte Verb wandert ans ABSOLUTE SATZENDE (Verb-Kick).",
      example: "Ich weiß, dass er heute kommt. Der Chef hofft, dass das Release klappt.",
      questions: [
        q("Ich habe gehört, dass das Team das Release erfolgreich abgeschlossen _____ .", "hat", ["hat", "hatte", "haben", "hätte"], "dass-Nebensatz: konjugiertes Hilfsverb ans Satzende", "ns_dass_verbend"),
        q("Bhavani hofft, dass der Bus 675 nach Weiterstadt pünktlich _____ .", "abfährt", ["abfährt", "fährt ab", "abfahren", "abgefahren"], "Trennbare Verben im Nebensatz werden zusammen ans Ende gestellt", "ns_dass_trennbar"),
        q("Herr Tim teilt mit, dass wir morgen ein wichtiges Architektur-Meeting _____ .", "haben", ["haben", "hat", "habt", "hatten"], "dass ... ein wichtiges Meeting haben", "ns_dass_verbend"),
        q("Es ist wichtig, dass alle Entwickler die neuen Sicherheitsregeln _____ .", "kennen", ["kennen", "kennt", "kannten", "gekannt"], "dass alle Entwickler ... kennen", "ns_dass_verbend"),
        q("Ich weiß genau, dass der Kunde diese Schnittstelle dringend _____ .", "benötigt", ["benötigt", "benötigen", "benötigte", "benötigst"], "dass der Kunde ... benötigt", "ns_dass_verbend"),
        q("Der Techniker glaubt, dass der Serverraum überhitzt _____ .", "ist", ["ist", "wird", "sein", "war"], "dass der Serverraum ... überhitzt ist", "ns_dass_verbend"),
        q("Frau Weber findet es gut, dass man bei DXC mobil arbeiten _____ .", "kann", ["kann", "können", "konnte", "könnte"], "Modalverb im dass-Satz am Ende: arbeiten kann", "ns_dass_modal"),
        q("Marco sagt, dass er den Fehler im Code bereits behoben _____ .", "hat", ["hat", "haben", "hatte", "hätte"], "dass er ... behoben hat", "ns_dass_verbend"),
        q("Wir hoffen sehr, dass Sie eine angenehme Anreise nach Darmstadt _____ .", "hatten", ["hatten", "haben", "hattet", "hätten"], "dass Sie ... hatten", "ns_dass_verbend"),
        q("Stimmt es, dass Herr Keller das Unternehmen zum Monatsende _____ ?", "verlässt", ["verlässt", "verlassen", "verließ", "verlassen hat"], "dass Herr Keller ... verlässt", "ns_dass_verbend"),
        q("Es tut mir leid, dass ich mich erst heute bei Ihnen _____ .", "melde", ["melde", "melden", "meldete", "gemeldet"], "dass ich mich ... melde", "ns_dass_verbend"),
        q("Ich sehe im Dashboard, dass zwei Tickets noch offen _____ .", "sind", ["sind", "waren", "sein", "seid"], "dass zwei Tickets ... offen sind", "ns_dass_verbend")
      ]
    },
    {
      id: "LVL 2.13",
      chapter: "Linie 1 A2 K5",
      title: "Präpositionen mit Akkusativ (für, um, durch, gegen, ohne)",
      ruleSummary: "Die Präpositionen 'durch, für, gegen, ohne, um' fordern ausnahmslos den AKKUSATIV: den (m), das (n), die (f/Pl).",
      example: "Er fährt durch den Tunnel. Wir arbeiten ohne einen Fehler. Das ist gegen die Wand.",
      questions: [
        q("Der Regionalbus fährt direkt durch _____ Tunnel (m) unter den Gleisen.", "den", ["den", "dem", "der", "das"], "durch + Akkusativ maskulin: durch den Tunnel", "praep_akk_rein"),
        q("Wir können das Problem nicht ohne _____ externen Berater (m) lösen.", "einen", ["einen", "einem", "ein", "einer"], "ohne + Akkusativ maskulin: ohne einen Berater", "praep_akk_rein"),
        q("Bhavani hat die Dokumentation für _____ neuen Teamleiter (m) vorbereitet.", "den", ["den", "dem", "der", "des"], "für + Akkusativ maskulin: für den Teamleiter", "praep_akk_rein"),
        q("Der Kollege fuhr mit dem Firmenwagen gegen _____ Pfeiler (m) im Parkhaus.", "den", ["den", "dem", "der", "das"], "gegen + Akkusativ maskulin: gegen den Pfeiler", "praep_akk_rein"),
        q("Wir treffen uns um 12:30 Uhr um _____ runden Besprechungstisch (m).", "den", ["den", "dem", "der", "das"], "um + Akkusativ maskulin: um den Tisch", "praep_akk_rein"),
        q("Ohne _____ gültige Fahrkarte (f) darf man die Bahn nicht betreten.", "eine", ["eine", "einer", "einen", "einem"], "ohne + Akkusativ feminin: ohne eine Fahrkarte", "praep_akk_rein"),
        q("Das Projektteam arbeitet hart für _____ gemeinsamen Erfolg (m).", "den", ["den", "dem", "der", "das"], "für + Akkusativ maskulin: für den Erfolg", "praep_akk_rein"),
        q("Der Datenverkehr fließt durch _____ gesichertes Netzwerk (n).", "ein", ["ein", "einem", "einen", "einer"], "durch + Akkusativ neutral: durch ein Netzwerk", "praep_akk_rein"),
        q("Ich habe absolut nichts gegen _____ Vorschlag (m) einzuwenden.", "deinen", ["deinen", "deinem", "dein", "deiner"], "gegen + Akkusativ maskulin: gegen deinen Vorschlag", "praep_akk_rein"),
        q("Kommen Sie bitte nicht ohne _____ Dienstausweis (m) ins Gebäude!", "Ihren", ["Ihren", "Ihrem", "Ihr", "Ihre"], "ohne + Akkusativ maskulin: ohne Ihren Ausweis", "praep_akk_rein"),
        q("Er geht jeden Mittag kurz um _____ Häuserblock (m) spazieren.", "den", ["den", "dem", "der", "das"], "um + Akkusativ maskulin: um den Block", "praep_akk_rein"),
        q("Dieses Skript wurde speziell für _____ automatisierten Tests (Pl.) geschrieben.", "die", ["die", "den", "der", "denen"], "für + Akkusativ Plural: für die Tests", "praep_akk_rein")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 6: KONSUM, EINKAUF & ADJEKTIVDEKLINATION IM DATIV
    // -------------------------------------------------------------
    {
      id: "LVL 2.14",
      chapter: "Linie 1 A2 K6",
      title: "Adjektivdeklination nach bestimmtem Artikel (Dativ)",
      ruleSummary: "Im Dativ nach 'dem / der / den' erhalten ALLE Adjektive immer die Endung -EN (dem neuen, der neuen, den neuen + n).",
      example: "mit dem neuen Laptop, in der großen Firma, bei den netten Kollegen",
      questions: [
        q("Bhavani arbeitet täglich mit dem _____ Firmen-Notebook (n).", "neuen", ["neuen", "neue", "neuem", "neuer"], "Dativ nach 'dem': immer -en (dem neuen Notebook)", "adj_dat_bestimmt"),
        q("Er spricht heute mit dem _____ Abteilungsleiter (m) über das Projekt.", "zuständigen", ["zuständigen", "zuständige", "zuständigem", "zuständiger"], "Dativ nach 'dem': dem zuständigen Leiter", "adj_dat_bestimmt"),
        q("Wir treffen uns in der _____ Cafeteria (f) im Erdgeschoss.", "gemütlichen", ["gemütlichen", "gemütliche", "gemütlicher", "gemütliches"], "Dativ nach 'der': der gemütlichen Cafeteria", "adj_dat_bestimmt"),
        q("Die Dokumentation liegt bei der _____ Sachbearbeiterin (f) auf dem Tisch.", "freundlichen", ["freundlichen", "freundliche", "freundlicher", "freundlichem"], "Dativ nach 'der': der freundlichen Sachbearbeiterin", "adj_dat_bestimmt"),
        q("Herr Tim bedankt sich bei den _____ Entwicklern (Pl.) für die Überstunden.", "fleißigen", ["fleißigen", "fleißige", "fleißiger", "fleißiges"], "Dativ Plural nach 'den': den fleißigen Entwicklern", "adj_dat_bestimmt"),
        q("Nach dem _____ Kundengespräch (n) war das gesamte Team erleichtert.", "schwierigen", ["schwierigen", "schwierige", "schwierigem", "schwieriges"], "nach + dem: dem schwierigen Gespräch", "adj_dat_bestimmt"),
        q("Der Bus hält direkt vor dem _____ Bürogebäude (n) in Darmstadt.", "modernen", ["modernen", "moderne", "modernem", "modernes"], "vor + dem: dem modernen Gebäude", "adj_dat_bestimmt"),
        q("Aus der _____ Fehlermeldung (f) konnte der Entwickler die Ursache ableiten.", "detaillierten", ["detaillierten", "detaillierte", "detaillierter", "detailliertem"], "aus + der: der detaillierten Meldung", "adj_dat_bestimmt"),
        q("Zu dem _____ Termin (m) am Freitag sind alle Architekten eingeladen.", "wichtigen", ["wichtigen", "wichtige", "wichtigem", "wichtiger"], "zu + dem: dem wichtigen Termin", "adj_dat_bestimmt"),
        q("Sie wohnt seit einem Jahr in der _____ Wohnung (f) in Weiterstadt.", "hellen", ["hellen", "helle", "heller", "helles"], "in + der: der hellen Wohnung", "adj_dat_bestimmt"),
        q("Das Ticket wurde von dem _____ Support-Mitarbeiter (m) gelöst.", "erfahrenen", ["erfahrenen", "erfahrene", "erfahrenem", "erfahrener"], "von + dem: dem erfahrenen Mitarbeiter", "adj_dat_bestimmt"),
        q("Zwischen den _____ Arbeitsplätzen (Pl.) stehen schallschluckende Trennwände.", "einzelnen", ["einzelnen", "einzelne", "einzelner", "einzelnes"], "zwischen + den: den einzelnen Plätzen", "adj_dat_bestimmt")
      ]
    },
    {
      id: "LVL 2.15",
      chapter: "Linie 1 A2 K6",
      title: "Adjektivdeklination nach unbestimmtem / Possessiv-Artikel (Dativ)",
      ruleSummary: "Im Dativ nach 'einem / einer / keinem / meinem / seinem' erhalten ALLE Adjektive immer die Endung -EN!",
      example: "mit einem schnellen Rechner, bei einer großen Firma, in keinem guten Zustand",
      questions: [
        q("Er fährt jeden Morgen mit einem _____ Regionalzug (m) zur Arbeit.", "überfüllten", ["überfüllten", "überfüllter", "überfülltem", "überfüllte"], "Dativ nach 'einem': immer -en", "adj_dat_unbestimmt"),
        q("Frau Weber arbeitet bei einer _____ Softwarefirma (f) in Frankfurt.", "internationalen", ["internationalen", "internationale", "internationaler", "internationales"], "Dativ nach 'einer': einer internationalen Firma", "adj_dat_unbestimmt"),
        q("Wir arbeiten an einem _____ Migrationsprojekt (n) für die Cloud.", "komplexen", ["komplexen", "komplexes", "komplexem", "komplexe"], "Dativ nach 'einem': einem komplexen Projekt", "adj_dat_unbestimmt"),
        q("Bhavani wohnt in einer _____ Nachbarschaft (f) in Weiterstadt.", "ruhigen", ["ruhigen", "ruhige", "ruhiger", "ruhiges"], "in einer ruhigen Nachbarschaft", "adj_dat_unbestimmt"),
        q("Marco hilft seinem _____ Kollegen (m) bei der Einrichtung der Tools.", "neuen", ["neuen", "neuer", "neuem", "neue"], "Dativ nach 'seinem': seinem neuen Kollegen", "adj_dat_unbestimmt"),
        q("Der Rechner befindet sich in keinem _____ Zustand (m) mehr.", "guten", ["guten", "guter", "gutem", "gute"], "in keinem guten Zustand", "adj_dat_unbestimmt"),
        q("Ich habe von einer _____ Weiterbildung (f) für Architekten gehört.", "interessanten", ["interessanten", "interessante", "interessanter", "interessantes"], "von einer interessanten Weiterbildung", "adj_dat_unbestimmt"),
        q("Mit meinem _____ Dienst-Handy (n) kann ich mich von überall einloggen.", "neuen", ["neuen", "neues", "neuem", "neue"], "mit meinem neuen Handy", "adj_dat_unbestimmt"),
        q("Herr Tim spricht mit einem _____ Kunden (m) über die SLA-Vorgaben.", "wichtigen", ["wichtigen", "wichtiger", "wichtigem", "wichtige"], "mit einem wichtigen Kunden", "adj_dat_unbestimmt"),
        q("Nach einem _____ Arbeitstag (m) freue ich mich auf den Feierabend.", "langen", ["langen", "langer", "langem", "lange"], "nach einem langen Arbeitstag", "adj_dat_unbestimmt"),
        q("Sie leidet unter einer _____ Allergie (f) gegen Birkenpollen.", "starken", ["starken", "starke", "starker", "starkes"], "unter einer starken Allergie", "adj_dat_unbestimmt"),
        q("Wir haben das Problem zu unserer _____ Zufriedenheit (f) gelöst.", "vollsten", ["vollsten", "vollste", "vollster", "vollstem"], "zu unserer vollsten Zufriedenheit", "adj_dat_unbestimmt")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 7: VERGLEICHE, SERVICE & KONDITIONALE NEBENSÄTZE
    // -------------------------------------------------------------
    {
      id: "LVL 2.16",
      chapter: "Linie 1 A2 K7",
      title: "Komparativ und Superlativ (Vergleiche mit als und wie)",
      ruleSummary: "Positiv: so ... wie (Gleichheit). Komparativ: -er ... als (Ungleichheit). Superlativ: am ...-sten. Unregelmäßig: gut/besser/am besten, viel/mehr/am meisten, gern/lieber/am liebsten.",
      example: "Der Zug ist schneller als der Bus. Er arbeitet so fleißig wie Marco. Am besten ist Kaffee.",
      questions: [
        q("Die Bahnverbindung nach Frankfurt ist deutlich _____ als die Buslinie über die Dörfer.", "schneller", ["schneller", "schnell", "am schnellsten", "schnellste"], "Ungleichheit (als): Komparativ schneller", "steigerung_komp"),
        q("Herr Tim trinkt gerne Tee, aber Kaffee trinkt er im Büro noch viel _____ .", "lieber", ["lieber", "gern", "am liebsten", "besser"], "Komparativ von gern: lieber", "steigerung_komp"),
        q("Dieses automatisierte Test-Framework ist _____ als das alte Skript.", "zuverlässiger", ["zuverlässiger", "zuverlässig", "am zuverlässigsten", "zuverlässigste"], "Komparativ mit als: zuverlässiger", "steigerung_komp"),
        q("Bhavani spricht heute schon viel flüssiger Deutsch _____ noch vor sechs Monaten.", "als", ["als", "wie", "wenn", "denn"], "Vergleich nach Komparativ: als", "vergleich_als_wie"),
        q("Unser neues Enterprise-Portal läuft genauso stabil _____ das Vorgängersystem.", "wie", ["wie", "als", "denn", "weil"], "Gleichheit (genauso ...): wie", "vergleich_als_wie"),
        q("Welcher Lösungsvorschlag ist für das Deployment _____ ?", "am besten", ["am besten", "besser", "gut", "das beste"], "Superlativ mit am: am besten", "steigerung_sup"),
        q("Im Großraumbüro ist es meistens wesentlich _____ als im Homeoffice.", "lauter", ["lauter", "laut", "am lautesten", "lautere"], "Komparativ mit Umlaut: lauter", "steigerung_komp"),
        q("Die Anforderungen an die Cloud-Sicherheit sind heute _____ als je zuvor.", "höher", ["höher", "hoch", "am höchsten", "hohe"], "Komparativ von hoch: höher", "steigerung_komp"),
        q("Am _____ arbeitet das Support-Team in den frühen Vormittagsstunden.", "produktivsten", ["produktivsten", "produktiver", "produktiv", "produktivste"], "Superlativ: am produktivsten", "steigerung_sup"),
        q("Er verdient in der neuen Position spürbar _____ als in seinem früheren Job.", "mehr", ["mehr", "viel", "am meisten", "mehrer"], "Komparativ von viel: mehr", "steigerung_komp"),
        q("Darmstadt ist nicht ganz so _____ wie die Finanzmetropole Frankfurt.", "groß", ["groß", "größer", "am größten", "große"], "Gleichheit (so ... wie): Positiv groß", "vergleich_als_wie"),
        q("Dieses Ticket hat von allen offenen Aufgaben die _____ Priorität.", "höchste", ["höchste", "höher", "am höchsten", "hoch"], "Superlativ als Adjektiv: die höchste", "steigerung_sup")
      ]
    },
    {
      id: "LVL 2.17",
      chapter: "Linie 1 A2 K7",
      title: "Konditionale Nebensätze mit wenn (Bedingung)",
      ruleSummary: "Die Konjunktion 'wenn' leitet eine Bedingung ein (Verb am Satzende). Beginnt der Satz mit 'wenn', folgt der Hauptsatz direkt mit dem Verb auf Position 1!",
      example: "Wenn Sie kurz Zeit haben, zeige ich es Ihnen. Wenn es regnet, nehme ich den Bus.",
      questions: [
        q("Wenn Bhavani eine Fehlermeldung sieht, _____ er sofort das System-Log.", "prüft", ["prüft", "er prüft", "prüfen", "geprüft"], "Konditionalsatz vorne -> Hauptsatz beginnt mit Verb (prüft er)", "ns_wenn_inversion"),
        q("Wenn Sie kurz Zeit _____ , erkläre ich Ihnen die neue Architektur.", "haben", ["haben", "hat", "hätten", "hatten"], "wenn-Nebensatz: konjugiertes Verb am Satzende", "ns_wenn_verbend"),
        q("Wir können das Deployment heute starten, wenn alle Tests erfolgreich _____ .", "sind", ["sind", "waren", "sein", "seid"], "wenn ... erfolgreich sind", "ns_wenn_verbend"),
        q("Wenn der Server überlastet ist, _____ die Reaktionszeiten spürbar.", "sinken", ["sinken", "sie sinken", "gesunken", "sanken"], "Hauptsatz nach wenn: Verb auf Pos 1 (sinken)", "ns_wenn_inversion"),
        q("Wenn du Hilfe bei der Konfiguration brauchst, _____ mich einfach an!", "ruf", ["ruf", "rufst", "anrufen", "rufe du"], "Imperativ nach wenn: Ruf ... an!", "ns_wenn_inversion"),
        q("Man versteht die Grammatik viel besser, wenn man täglich aktiv _____ .", "übt", ["übt", "üben", "geübt", "übte"], "wenn man ... übt (Verb am Ende)", "ns_wenn_verbend"),
        q("Wenn die Bahn wieder Verspätung hat, _____ Marco mit dem Taxi zur Firma.", "fährt", ["fährt", "er fährt", "fahren", "fuhr"], "Hauptsatz: fährt Marco", "ns_wenn_inversion"),
        q("Wir verschieben das Meeting auf Donnerstag, wenn der Kunde heute nicht _____ .", "kann", ["kann", "können", "konnte", "könnte"], "Modalverb am Ende des wenn-Satzes", "ns_wenn_verbend"),
        q("Wenn Sie auf diesen Link klicken, _____ sich das Ticket im Support-Portal.", "öffnet", ["öffnet", "es öffnet", "öffnen", "öffnete"], "Hauptsatz: öffnet sich", "ns_wenn_inversion"),
        q("Ich fahre gerne mit dem Fahrrad nach Darmstadt, wenn das Wetter schön _____ .", "ist", ["ist", "wird", "war", "wäre"], "wenn das Wetter schön ist", "ns_wenn_verbend"),
        q("Wenn du die Präsentation fertig hast, _____ du sie bitte an Herrn Tim!", "schickst", ["schickst", "du schickst", "schicken", "geschickt"], "Hauptsatz: schickst du", "ns_wenn_inversion"),
        q("Das System löst einen Alarm aus, wenn unbefugte Zugriffe registriert _____ .", "werden", ["werden", "wird", "worden", "wurden"], "Passiv-Nebensatz am Ende: registriert werden", "ns_wenn_verbend")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 8: BILDUNG, WEITERBILDUNG & PRÄPOSITIONALVERBEN II
    // -------------------------------------------------------------
    {
      id: "LVL 2.18",
      chapter: "Linie 1 A2 K8",
      title: "Verben mit Präpositionalergänzung II (Dativ-Objekte)",
      ruleSummary: "Verben mit fester Dativ-Präposition: teilnehmen an (+ Dat), sprechen mit (+ Dat), sich treffen mit (+ Dat), anfangen mit (+ Dat), gratulieren zu (+ Dat).",
      example: "Ich nehme an dem Kurs teil. Er spricht mit der Kollegin. Wir fangen mit der Arbeit an.",
      questions: [
        q("Bhavani nimmt jede Woche aktiv an _____ Deutschkurs (m) teil.", "einem", ["einem", "einen", "einer", "eines"], "teilnehmen an + Dativ maskulin: an einem Kurs", "verb_praep_dat"),
        q("Herr Tim spricht heute ausführlich mit _____ Kunden (m) über die SLA.", "dem", ["dem", "den", "der", "des"], "sprechen mit + Dativ maskulin: mit dem Kunden", "verb_praep_dat"),
        q("Wir treffen uns um 14 Uhr mit _____ Projektleiterin (f) im Konferenzraum.", "der", ["der", "die", "den", "dem"], "sich treffen mit + Dativ feminin: mit der Leiterin", "verb_praep_dat"),
        q("Wann fangen wir endlich mit _____ Migration (f) der Datenbanken an?", "der", ["der", "die", "den", "dem"], "anfangen mit + Dativ feminin: mit der Migration", "verb_praep_dat"),
        q("Das gesamte Team gratuliert Marco zu _____ bestandenen Zertifizierung (f).", "der", ["der", "die", "den", "dem"], "gratulieren zu + Dativ feminin: zu der (zur) Prüfung", "verb_praep_dat"),
        q("Der Support-Mitarbeiter telefoniert gerade mit _____ Anrufer (m).", "einem", ["einem", "einen", "eines", "einer"], "telefonieren mit + Dativ maskulin: mit einem Anrufer", "verb_praep_dat"),
        q("Bhavani hat sich erfolgreich zu _____ Architektur-Workshop (m) angemeldet.", "einem", ["einem", "einen", "einer", "eines"], "sich anmelden zu + Dativ maskulin: zu einem Workshop", "verb_praep_dat"),
        q("Sie träumt schon lange von _____ eigenen Beratungsunternehmen (n).", "einem", ["einem", "einer", "einen", "eines"], "träumen von + Dativ neutral: von einem Unternehmen", "verb_praep_dat"),
        q("Wir beginnen pünktlich um 9 Uhr mit _____ Schulung (f).", "der", ["der", "die", "den", "dem"], "beginnen mit + Dativ feminin: mit der Schulung", "verb_praep_dat"),
        q("Mit _____ (wer) hast du gestern über das Budget gesprochen?", "wem", ["wem", "wen", "wer", "wessen"], "Frage nach Dativ-Objekt mit Präposition: Mit wem?", "verb_praep_dat"),
        q("Der Consultant beschäftigt sich intensiv mit _____ Cloud-Plattform (f).", "der", ["der", "die", "den", "dem"], "sich beschäftigen mit + Dativ feminin: mit der Plattform", "verb_praep_dat"),
        q("Nimmst du morgen an _____ Meeting (n) der Architektur-Gilde teil?", "dem", ["dem", "das", "den", "der"], "an + Dativ neutral: an dem Meeting", "verb_praep_dat")
      ]
    },
    {
      id: "LVL 2.19",
      chapter: "Linie 1 A2 K8",
      title: "Fragewörter worauf, worüber, womit vs. woran (Präpositionalpronomen)",
      ruleSummary: "Sachen: wo(r) + Präposition (worauf, worüber, womit, woran). Personen: Präposition + Pronomen im Akkusativ/Dativ (auf wen, über wen, mit wem).",
      example: "Worauf wartest du? - Auf den Bus. Auf wen wartest du? - Auf Marco.",
      questions: [
        q("_____ wartet Herr Becker? - Auf den verspäteten Bus 675.", "Worauf", ["Worauf", "Auf wen", "Woran", "Womit"], "Frage nach einer Sache (der Bus): Worauf", "wo_r_praep"),
        q("_____ wartet Frau Weber? - Auf Herrn Tim vom IT-Management.", "Auf wen", ["Auf wen", "Worauf", "Woran", "Mit wem"], "Frage nach einer Person (Herr Tim): Auf wen", "praep_person"),
        q("_____ spricht das Team im Call? - Über die neuen Sicherheitsrichtlinien.", "Worüber", ["Worüber", "Über wen", "Woran", "Womit"], "Frage nach einer Sache: Worüber", "wo_r_praep"),
        q("_____ denkst du gerade so angestrengt nach? - An die Migration.", "Woran", ["Woran", "An wen", "Worauf", "Womit"], "Frage nach einer Sache: Woran", "wo_r_praep"),
        q("_____ ärgert sich der Entwickler? - Über den unklaren Bug-Report.", "Worüber", ["Worüber", "Über wen", "Woran", "Wofür"], "Frage nach Sache: Worüber", "wo_r_praep"),
        q("_____ freust du dich am meisten? - Auf meinen Urlaub im Dezember.", "Worauf", ["Worauf", "Auf wen", "Worüber", "Womit"], "Zukunft Sache: Worauf", "wo_r_praep"),
        q("_____ telefoniert der Projektleiter schon seit einer Stunde? - Mit dem Kunden.", "Mit wem", ["Mit wem", "Womit", "Worüber", "An wen"], "Frage nach Person (Dativ): Mit wem", "praep_person"),
        q("_____ testet ihr die Schnittstelle? - Mit automatisierten Test-Skripten.", "Womit", ["Womit", "Mit wem", "Woran", "Worüber"], "Frage nach Werkzeug/Mittel: Womit", "wo_r_praep"),
        q("_____ nimmst du nächste Woche teil? - An einem Cloud-Seminar.", "Woran", ["Woran", "An wen", "Worauf", "Wofür"], "Frage nach Sache (an): Woran", "wo_r_praep"),
        q("_____ arbeitet Bhavani aktuell? - An einer CMDB-Synchronisation.", "Woran", ["Woran", "Auf wen", "Worüber", "Wofür"], "arbeiten an + Sache: Woran", "wo_r_praep"),
        q("_____ bedankt sich die Geschäftsführung? - Für den herausragenden Einsatz.", "Wofür", ["Wofür", "Für wen", "Worüber", "Womit"], "danken für + Sache: Wofür", "wo_r_praep"),
        q("_____ erinnert sich Marco noch gerne? - An das gemeinsame Projektfest.", "Woran", ["Woran", "An wen", "Worüber", "Worauf"], "erinnern an + Sache: Woran", "wo_r_praep")
      ]
    },
    {
      id: "LVL 2.20",
      chapter: "Linie 1 A2 K8",
      title: "Adjektivdeklination ohne Artikel (Nullartikel)",
      ruleSummary: "Steht kein Artikel vor dem Nomen, übernimmt das Adjektiv die Signalendung des bestimmten Artikels: frischer Kaffee (-er / m), kaltes Wasser (-es / n), klare Milch (-e / f), gute Kollegen (-e / Pl).",
      example: "frischer Kaffee, deutsches Brot, warme Suppe, neue Computer",
      questions: [
        q("Bhavani trinkt morgens gerne _____ Kaffee (m) vor der ersten Besprechung.", "frischen", ["frischen", "frischer", "frischem", "frische"], "Nullartikel Akkusativ maskulin: frischen Kaffee", "adj_null_akk"),
        q("Im Besprechungsraum steht _____ Wasser (n) für die Gäste bereit.", "kaltes", ["kaltes", "kaltem", "kalter", "kalte"], "Nullartikel Nominativ neutral: kaltes Wasser", "adj_null_nom"),
        q("Wir wünschen Ihnen _____ Erfolg (m) bei der anstehenden Zertifizierung!", "großen", ["großen", "großer", "großem", "großes"], "Nullartikel Akkusativ maskulin: großen Erfolg", "adj_null_akk"),
        q("Hier ist _____ Geduld (f) bei der Analyse der Logfiles gefragt.", "große", ["große", "großer", "großen", "großes"], "Nullartikel Nominativ feminin: große Geduld", "adj_null_nom"),
        q("Das System verarbeitet _____ Daten (Pl.) in Echtzeit.", "komplexe", ["komplexe", "komplexen", "komplexer", "komplexes"], "Nullartikel Akkusativ Plural: komplexe Daten", "adj_null_akk"),
        q("Er arbeitet mit _____ Engagement (n) an der Fehlerbehebung.", "vollem", ["vollem", "vollen", "volles", "voller"], "Nullartikel Dativ neutral (mit): vollem Engagement", "adj_null_dat"),
        q("Wir haben heute _____ Wetter (n) für die Anreise nach Frankfurt.", "schönes", ["schönes", "schönem", "schönen", "schöner"], "Nullartikel Akkusativ neutral: schönes Wetter", "adj_null_akk"),
        q("DXC bietet _____ Lösungen (Pl.) für globale Großunternehmen an.", "innovative", ["innovative", "innovativen", "innovativer", "innovatives"], "Nullartikel Akkusativ Plural: innovative Lösungen", "adj_null_akk"),
        q("Bei _____ Kälte (f) zieht er sich eine dicke Winterjacke an.", "großer", ["großer", "große", "großem", "großen"], "Nullartikel Dativ feminin (bei): großer Kälte", "adj_null_dat"),
        q("_____ Brot (n) schmeckt in der Bäckerei in Weiterstadt besonders gut.", "Frisches", ["Frisches", "Frischem", "Frischen", "Frischer"], "Nullartikel Nominativ neutral: Frisches Brot", "adj_null_nom"),
        q("Der Bericht enthält _____ Informationen (Pl.) über den Vorfall.", "wichtige", ["wichtige", "wichtigen", "wichtiger", "wichtiges"], "Nullartikel Akkusativ Plural: wichtige Informationen", "adj_null_akk"),
        q("Aus _____ Fehlern (Pl.) lernt das Entwicklerteam am meisten.", "eigenen", ["eigenen", "eigene", "eigener", "eigenem"], "Nullartikel Dativ Plural (aus): eigenen Fehlern", "adj_null_dat")
      ]
    },
    {
      id: "LVL 2.21",
      chapter: "Linie 1 A2 K8",
      title: "Zweifelsfreie Zeitangaben: temporales Präfix im/am/um vs. ohne",
      ruleSummary: "Festigung der temporalen Fügungen: am + Tag/Datum, im + Monat/Jahr/Jahreszeit, um + Uhrzeit, jeden + Wochentag (jeden Montag).",
      example: "am Dienstag, im Oktober, um 15 Uhr, jeden Morgen",
      questions: [
        q("Wir führen das Release _____ kommenden Samstag durch.", "am", ["am", "im", "um", "in"], "Wochentag: am kommenden Samstag", "zeit_festigung"),
        q("Die nächste Quartalsbesprechung findet _____ Dezember statt.", "im", ["im", "am", "um", "an"], "Monat: im Dezember", "zeit_festigung"),
        q("Der Kundencall beginnt pünktlich _____ 16:30 Uhr.", "um", ["um", "am", "im", "an"], "Uhrzeit: um 16:30 Uhr", "zeit_festigung"),
        q("Bhavani fährt _____ Morgen mit der Linie 675 nach Darmstadt.", "jeden", ["jeden", "jedem", "jeder", "jedes"], "Akkusativ maskulin der Zeitdauer/Wiederholung: jeden Morgen", "zeit_festigung"),
        q("_____ 15. November ist die offizielle Abgabefrist für das Projekt.", "Am", ["Am", "Im", "Um", "An"], "Kalenderdatum: Am 15. November", "zeit_festigung"),
        q("Das Geschäftsjahr endet verbindlich _____ 31. Dezember.", "am", ["am", "im", "um", "an"], "Kalenderdatum: am 31. Dezember", "zeit_festigung"),
        q("Wir haben das Incident-Management _____ Sommer neu aufgestellt.", "im", ["im", "am", "um", "an"], "Jahreszeit: im Sommer", "zeit_festigung"),
        q("Marco liest _____ Abend die aktuellen Dokumentationen.", "jeden", ["jeden", "jedem", "jeder", "jedes"], "Akkusativ maskulin: jeden Abend", "zeit_festigung"),
        q("Die Konferenz startet am Dienstag _____ Punkt 9:00 Uhr.", "um", ["um", "am", "im", "in"], "Uhrzeit: um Punkt 9 Uhr", "zeit_festigung"),
        q("_____ Herbst steigen erfahrungsgemäß die Krankenstände an.", "Im", ["Im", "Am", "Um", "An"], "Jahreszeit: Im Herbst", "zeit_festigung"),
        q("Er arbeitet _____ Mittwoch im Büro vor Ort.", "jeden", ["jeden", "jedem", "jeder", "jedes"], "Wiederholung Wochentag: jeden Mittwoch", "zeit_festigung"),
        q("Die Umstellung der Server erfolgt _____ Nacht vom Freitag auf Samstag.", "in der", ["in der", "an der", "im", "um der"], "feste Fügung: in der Nacht", "zeit_festigung")
      ]
    },
    {
      id: "LVL 2.22",
      chapter: "Linie 1 A2 K8",
      title: "Zusammenfassung der Adjektivendungen (Matrix A2)",
      ruleSummary: "Festigung der Adjektivmatrix: Nominativ/Akkusativ/Dativ über bestimmte, unbestimmte und Nullartikel hinweg.",
      example: "der gute Rat, einen guten Rat, mit gutem Rat",
      questions: [
        q("Er sucht einen _____ Weg (m) zur Automatisierung der Prozesse.", "effizienten", ["effizienten", "effizienter", "effizientes", "effiziente"], "Akkusativ maskulin unbestimmt: einen effizienten Weg", "adj_matrix_rep"),
        q("Das _____ Team (n) feiert den erfolgreichen Projektabschluss.", "gesamte", ["gesamte", "gesamten", "gesamter", "gesamtes"], "Nominativ neutral bestimmt: das gesamte Team", "adj_matrix_rep"),
        q("Frau Weber hilft dem _____ Kollegen (m) bei der Einarbeitung.", "neuen", ["neuen", "neuer", "neuem", "neue"], "Dativ maskulin bestimmt: dem neuen Kollegen", "adj_matrix_rep"),
        q("Wir haben ein _____ Problem (n) in der Serverkonfiguration entdeckt.", "schwerwiegendes", ["schwerwiegendes", "schwerwiegende", "schwerwiegenden", "schwerwiegender"], "Akkusativ neutral unbestimmt: ein schwerwiegendes Problem", "adj_matrix_rep"),
        q("Bhavani arbeitet mit _____ Begeisterung (f) an innovativen Lösungen.", "großer", ["großer", "große", "großem", "großen"], "Nullartikel Dativ feminin: mit großer Begeisterung", "adj_matrix_rep"),
        q("Die _____ Kollegin (f) leitet das Standup heute souverän.", "erfahrene", ["erfahrene", "erfahrenen", "erfahrener", "erfahrenes"], "Nominativ feminin bestimmt: die erfahrene Kollegin", "adj_matrix_rep"),
        q("Haben Sie den _____ Bericht (m) an den Vorstand weitergeleitet?", "vollständigen", ["vollständigen", "vollständige", "vollständiger", "vollständigem"], "Akkusativ maskulin bestimmt: den vollständigen Bericht", "adj_matrix_rep"),
        q("Sie wohnen in einer _____ Wohnung (f) nahe dem Hauptbahnhof.", "schönen", ["schönen", "schöne", "schöner", "schönes"], "Dativ feminin unbestimmt: in einer schönen Wohnung", "adj_matrix_rep"),
        q("Die _____ Entwickler (Pl.) beheben den Fehler in Rekordzeit.", "kompetenten", ["kompetenten", "kompetente", "kompetenter", "kompetentes"], "Nominativ Plural bestimmt: die kompetenten Entwickler", "adj_matrix_rep"),
        q("Marco trinkt täglich _____ Tee (m) aus Indien.", "frischen", ["frischen", "frischer", "frischem", "frische"], "Nullartikel Akkusativ maskulin: frischen Tee", "adj_matrix_rep"),
        q("Das ist eine _____ Chance (f) für Ihre berufliche Weiterentwicklung.", "großartige", ["großartige", "großartigen", "großartiger", "großartiges"], "Nominativ feminin unbestimmt: eine großartige Chance", "adj_matrix_rep"),
        q("Nach dem _____ Meeting (n) gingen alle zufrieden in die Mittagspause.", "produktiven", ["produktiven", "produktive", "produktivem", "produktives"], "Dativ neutral bestimmt: nach dem produktiven Meeting", "adj_matrix_rep")
      ]
    }
  ];

  if (!window.STAGE_A2_DATA) {
    window.STAGE_A2_DATA = { stage: "A2", levels: [] };
  }

  levelsA2_K5toK8.forEach(newLvl => {
    const existingIdx = window.STAGE_A2_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A2_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A2_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A2_DATA.totalLevels = window.STAGE_A2_DATA.levels.length;
})();
