/**
 * STAGE A2 DATA PACK 1 (Levels 2.01 to 2.11 - Chapters K1 to K4)
 * Directly from Linie 1 (A2) Grammatikthemen.
 * Focus: Nebensätze mit weil, Wechselpräpositionen Dativ/Akkusativ, Verben stellen/stehen & legen/liegen.
 */

(function () {
  function q(sentence, correct, options, rule, tag) {
    return { sentence, correct, options, rule, tag };
  }

  const levelsA2_K1toK4 = [
    // -------------------------------------------------------------
    // KAPITEL 1: ANKOMMEN, ZUSAMMENLEBEN & NEBENSÄTZE MIT WEIL
    // -------------------------------------------------------------
    {
      id: "LVL 2.01",
      chapter: "Linie 1 A2 K1",
      title: "Kausale Nebensätze mit weil (Verb am Satzende)",
      ruleSummary: "Die Konjunktion 'weil' leitet einen Nebensatz ein (Grund/Ursache). Das konjugierte Verb wandert zwingend an das ABSOLUTE SATZENDE (Verb-Kick).",
      example: "Ich lerne Deutsch, weil ich in Deutschland arbeite. Er kommt spät, weil der Zug Verspätung hat.",
      questions: [
        q("Bhavani arbeitet heute von zu Hause aus, weil sein Sohn krank _____ .", "ist", ["ist", "wird", "hat", "sein"], "Nebensatz mit weil: konjugiertes Verb ans Satzende (weil ... krank ist)", "ns_weil_verbend"),
        q("Ich finde meine neuen Kollegen sehr nett, weil sie mir immer _____ .", "helfen", ["helfen", "hilft", "geholfen", "helft"], "weil + Subjekt (sie) + Dativ (mir) + Verb am Ende (helfen)", "ns_weil_verbend"),
        q("Herr Tim kann heute nicht am Call teilnehmen, weil er einen Kundentermin _____ .", "hat", ["hat", "hatte", "haben", "hätte"], "weil ... einen Kundentermin hat", "ns_weil_verbend"),
        q("Wir müssen das Deployment verschieben, weil der Server noch nicht stabil _____ .", "läuft", ["läuft", "laufen", "lief", "gelaufen"], "weil ... noch nicht stabil läuft", "ns_weil_verbend"),
        q("Marco fährt lieber mit der Bahn, weil Autofahren auf der A5 zu anstrengend _____ .", "ist", ["ist", "war", "sein", "wäre"], "weil ... zu anstrengend ist", "ns_weil_verbend"),
        q("Ich trinke heute Nachmittag lieber Pfefferminztee, weil ich Kaffee nicht _____ .", "vertrage", ["vertrage", "verträgst", "vertragen", "vertragen habe"], "weil ... Kaffee nicht vertrage", "ns_weil_verbend"),
        q("Frau Weber lernt fleißig Deutsch, weil sie beruflich weiterkommen _____ .", "will", ["will", "willst", "wollen", "wollte"], "Modalverb im Nebensatz ans absolute Satzende: weiterkommen will", "ns_weil_modal"),
        q("Die Entwickler freuen sich über das Release, weil alle automatisierten Tests grün _____ .", "sind", ["sind", "waren", "sein", "seid"], "weil alle Tests ... grün sind", "ns_weil_verbend"),
        q("Er hat das Meeting vorzeitig verlassen, weil er dringend zum Arzt _____ .", "musste", ["musste", "muss", "gemusst", "müsste"], "weil er ... zum Arzt musste", "ns_weil_modal"),
        q("Wir buchen kein teures Hotel, weil wir unser Projektbudget einhalten _____ .", "müssen", ["müssen", "müsst", "muss", "mussten"], "Modalverb am Ende: einhalten müssen", "ns_weil_modal"),
        q("Ich kann den Anhang nicht öffnen, weil mein Laptop ein Update _____ .", "braucht", ["braucht", "brauchen", "brauchte", "gebraucht"], "weil mein Laptop ... braucht", "ns_weil_verbend"),
        q("Sie kauft die Monatskarte im RMV, weil sie täglich nach Darmstadt _____ .", "pendelt", ["pendelt", "pendeln", "gependelt", "pendelte"], "weil sie ... pendelt", "ns_weil_verbend")
      ]
    },
    {
      id: "LVL 2.02",
      chapter: "Linie 1 A2 K1",
      title: "Verben mit Präpositionalergänzung I (warten auf, sich freuen auf)",
      ruleSummary: "Feste Verbindungen aus Verb + Präposition: 'warten auf' (+ Akk), 'sich freuen auf' (+ Akk = Zukunft), 'sprechen über' (+ Akk), 'denken an' (+ Akk).",
      example: "Ich warte auf den Bus (Akk). Wir freuen uns auf das Wochenende.",
      questions: [
        q("Bhavani wartet an der Haltestelle Otto-Wels-Straße auf _____ Bus 675 (m).", "den", ["den", "dem", "der", "das"], "warten auf + Akkusativ maskulin: auf den Bus", "verb_praep_akk"),
        q("Das gesamte Entwicklerteam freut sich schon riesig auf _____ Release (n).", "das", ["das", "dem", "den", "der"], "sich freuen auf + Akkusativ neutral: auf das Release", "verb_praep_akk"),
        q("Herr Tim spricht in der Besprechung über _____ neuen Architektur-Plan (m).", "den", ["den", "dem", "der", "des"], "sprechen über + Akkusativ maskulin: über den Plan", "verb_praep_akk"),
        q("Denkst du bei der Konfiguration bitte an _____ Datensicherheit (f)?", "die", ["die", "der", "den", "dem"], "denken an + Akkusativ feminin: an die Datensicherheit", "verb_praep_akk"),
        q("Wir warten seit zwanzig Minuten auf _____ verspäteten Kunden (m).", "den", ["den", "dem", "der", "des"], "warten auf + Akkusativ maskulin: auf den Kunden", "verb_praep_akk"),
        q("Ich freue mich sehr auf _____ Zusammenarbeit (f) mit Ihnen.", "die", ["die", "der", "den", "dem"], "sich freuen auf + Akkusativ feminin: auf die Zusammenarbeit", "verb_praep_akk"),
        q("Der Support-Leiter diskutiert mit dem Team über _____ Ticket (n).", "das", ["das", "dem", "den", "der"], "diskutieren über + Akkusativ neutral: über das Ticket", "verb_praep_akk"),
        q("Marco erinnert sich noch gut an _____ ersten Arbeitstag (m) bei DXC.", "den", ["den", "dem", "der", "des"], "sich erinnern an + Akkusativ maskulin: an den Arbeitstag", "verb_praep_akk"),
        q("Frau Meyer bereitet sich gründlich auf _____ Vorstellungsgespräch (n) vor.", "das", ["das", "dem", "den", "der"], "sich vorbereiten auf + Akkusativ neutral: auf das Gespräch", "verb_praep_akk"),
        q("Worauf wartest du noch? - Ich warte auf _____ Rückruf (m) vom Chef.", "den", ["den", "dem", "der", "das"], "warten auf + Akkusativ maskulin: auf den Rückruf", "verb_praep_akk"),
        q("Wir sprechen heute Nachmittag über _____ offenen Punkte (Pl.).", "die", ["die", "den", "der", "denen"], "sprechen über + Akkusativ Plural: über die Punkte", "verb_praep_akk"),
        q("Freust du dich schon auf _____ Urlaub (m) im Dezember?", "deinen", ["deinen", "deinem", "dein", "deiner"], "freuen auf + Akkusativ maskulin Possessiv: deinen Urlaub", "verb_praep_akk")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 2: WOHNEN, EINRICHTEN & WECHSELPRÄPOSITIONEN
    // -------------------------------------------------------------
    {
      id: "LVL 2.03",
      chapter: "Linie 1 A2 K2",
      title: "Wechselpräpositionen mit Dativ (Wo? - Ruhelage)",
      ruleSummary: "Die 9 Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen) fordern bei der Frage 'Wo?' IMMER den Dativ: dem (m/n), der (f), den + -n (Pl).",
      example: "Das Buch liegt auf dem Tisch. Die Lampe steht neben dem Schreibtisch.",
      questions: [
        q("Wo steht das Notebook? - Es steht auf _____ Schreibtisch (m).", "dem", ["dem", "den", "der", "das"], "Wo? + Dativ maskulin: auf dem Schreibtisch", "wechsel_dat_wo"),
        q("Der Konferenzraum befindet sich in _____ zweiten Etage (f).", "der", ["der", "die", "den", "dem"], "Wo? + Dativ feminin: in der Etage", "wechsel_dat_wo"),
        q("Die Backup-Festplatte liegt sicher in _____ Server-Schrank (m).", "dem", ["dem", "den", "der", "das"], "Wo? + Dativ maskulin: in dem (im) Schrank", "wechsel_dat_wo"),
        q("Das Firmenauto parkt direkt unter _____ großen Vordach (n).", "dem", ["dem", "den", "das", "der"], "Wo? + Dativ neutral: unter dem Vordach", "wechsel_dat_wo"),
        q("Frau Weber sitzt in der Besprechung neben _____ Abteilungsleiter (m).", "dem", ["dem", "den", "der", "des"], "Wo? + Dativ maskulin: neben dem Abteilungsleiter", "wechsel_dat_wo"),
        q("Die Aktenordner stehen geordnet hinter _____ Bürotür (f).", "der", ["der", "die", "den", "dem"], "Wo? + Dativ feminin: hinter der Bürotür", "wechsel_dat_wo"),
        q("Der Monitor hängt genau über _____ Arbeitsplatz (m) an der Wand.", "dem", ["dem", "den", "der", "das"], "Wo? + Dativ maskulin: über dem Arbeitsplatz", "wechsel_dat_wo"),
        q("Bhavani sitzt im Open Space zwischen _____ zwei Kollegen (Pl.).", "den", ["den", "die", "der", "dem"], "Wo? + Dativ Plural: zwischen den Kollegen", "wechsel_dat_wo"),
        q("Die Kaffeetasse steht auf _____ kleinen Beistelltisch (m).", "einem", ["einem", "einen", "eines", "ein"], "Wo? + Dativ maskulin unbestimmt: auf einem Tisch", "wechsel_dat_wo"),
        q("Der USB-Stick lag die ganze Zeit unter _____ Dokumenten (Pl.).", "den", ["den", "die", "der", "dem"], "Wo? + Dativ Plural: unter den Dokumenten", "wechsel_dat_wo"),
        q("Vor _____ Bürogebäude (n) gibt es ausreichend Besucherparkplätze.", "dem", ["dem", "das", "den", "der"], "Wo? + Dativ neutral: vor dem Gebäude", "wechsel_dat_wo"),
        q("Das Whiteboard hängt an _____ Wand (f) neben der Präsentationsleinwand.", "der", ["der", "die", "den", "dem"], "Wo? + Dativ feminin: an der Wand", "wechsel_dat_wo")
      ]
    },
    {
      id: "LVL 2.04",
      chapter: "Linie 1 A2 K2",
      title: "Wechselpräpositionen mit Akkusativ (Wohin? - Richtung)",
      ruleSummary: "Die 9 Wechselpräpositionen fordern bei der Frage 'Wohin?' (Aktion/Bewegung/Richtung) IMMER den Akkusativ: den (m), das (n), die (f), die (Pl).",
      example: "Ich lege das Buch auf den Tisch. Er hängt die Lampe an die Decke.",
      questions: [
        q("Wohin soll ich den Laptop stellen? - Bitte stell ihn auf _____ Tisch (m)!", "den", ["den", "dem", "der", "das"], "Wohin? + Akkusativ maskulin: auf den Tisch", "wechsel_akk_wohin"),
        q("Frau Meyer hängt den aktuellen Zeitplan an _____ Pinnwand (f).", "die", ["die", "der", "den", "dem"], "Wohin? + Akkusativ feminin: an die Pinnwand", "wechsel_akk_wohin"),
        q("Bhavani legt das unterzeichnete Dokument in _____ Fach (n) von Herrn Tim.", "das", ["das", "dem", "den", "der"], "Wohin? + Akkusativ neutral: in das Fach", "wechsel_akk_wohin"),
        q("Wir schieben den großen Konferenztisch in _____ Mitte (f) des Raumes.", "die", ["die", "der", "den", "dem"], "Wohin? + Akkusativ feminin: in die Mitte", "wechsel_akk_wohin"),
        q("Fahr das Firmenfahrzeug bitte hinter _____ Gebäude (n)!", "das", ["das", "dem", "den", "der"], "Wohin? + Akkusativ neutral: hinter das Gebäude", "wechsel_akk_wohin"),
        q("Er setzt sich in der Schulung neben _____ neuen Entwickler (m).", "den", ["den", "dem", "der", "des"], "Wohin? + Akkusativ maskulin: neben den Entwickler", "wechsel_akk_wohin"),
        q("Bitte hängen Sie Ihren Wintermantel an _____ Garderobe (f)!", "die", ["die", "der", "den", "dem"], "Wohin? + Akkusativ feminin: an die Garderobe", "wechsel_akk_wohin"),
        q("Der Techniker steckt das Ethernetkabel in _____ Router (m).", "den", ["den", "dem", "der", "das"], "Wohin? + Akkusativ maskulin: in den Router", "wechsel_akk_wohin"),
        q("Wir stellen zwei zusätzliche Stühle zwischen _____ Schreibtische (Pl.).", "die", ["die", "den", "der", "denen"], "Wohin? + Akkusativ Plural: zwischen die Schreibtische", "wechsel_akk_wohin"),
        q("Ich lege mein Smartphone kurz auf _____ Fensterbank (f).", "die", ["die", "der", "den", "dem"], "Wohin? + Akkusativ feminin: auf die Fensterbank", "wechsel_akk_wohin"),
        q("Gehen Sie bitte direkt in _____ Raum 204 (m) im zweiten Stock!", "den", ["den", "dem", "der", "das"], "Wohin? + Akkusativ maskulin: in den Raum", "wechsel_akk_wohin"),
        q("Stellen Sie den Drucker bitte neben _____ Aktenschrank (m)!", "den", ["den", "dem", "der", "das"], "Wohin? + Akkusativ maskulin: neben den Aktenschrank", "wechsel_akk_wohin")
      ]
    },
    {
      id: "LVL 2.05",
      chapter: "Linie 1 A2 K2",
      title: "Verbenpaare: stellen/stehen & legen/liegen",
      ruleSummary: "Aktion / Richtung (Wohin? + Akkusativ): stellen (aufrecht), legen (flach), setzen, hängen. Zustand / Ort (Wo? + Dativ): stehen, liegen, sitzen, hängen.",
      example: "Ich stelle die Tasse auf den Tisch (Akk). Die Tasse steht auf dem Tisch (Dat).",
      questions: [
        q("Bhavani _____ den Monitor auf den Schreibtisch (Akkusativ).", "stellt", ["stellt", "steht", "liegt", "legen"], "Aktivität/Richtung aufrecht: stellen (er stellt)", "verben_pos_richtung"),
        q("Der Monitor _____ bereits auf dem Schreibtisch (Dativ).", "steht", ["steht", "stellt", "liegt", "legt"], "Zustand/Ruhelage aufrecht: stehen (er steht)", "verben_pos_zustand"),
        q("Ich _____ das wichtige Dokument in die rote Mappe (Akkusativ).", "lege", ["lege", "liege", "stelle", "stehe"], "Aktivität flach: legen (ich lege)", "verben_pos_richtung"),
        q("Der Vertrag _____ schon seit gestern in der roten Mappe (Dativ).", "liegt", ["liegt", "legt", "steht", "stellt"], "Zustand flach: liegen (er liegt)", "verben_pos_zustand"),
        q("Marco _____ seinen Rucksack neben die Bürotür.", "stellt", ["stellt", "steht", "liegt", "gelegen"], "Aktion: stellen", "verben_pos_richtung"),
        q("Wo ist mein Kuli? - Er _____ dort drüben unter den Unterlagen.", "liegt", ["liegt", "legt", "steht", "stellt"], "Zustand flach: liegen", "verben_pos_zustand"),
        q("Frau Meyer _____ die Kaffeetassen in die Spülmaschine.", "stellt", ["stellt", "steht", "liegt", "gelegen"], "Aktion: stellen", "verben_pos_richtung"),
        q("Die Mitarbeiter _____ im Konferenzraum und warten auf den Chef.", "sitzen", ["sitzen", "setzen", "stehen", "stellen"], "Zustand/Position: sitzen", "verben_pos_zustand"),
        q("Bitte _____ Sie sich auf diesen freien Stuhl hier!", "setzen", ["setzen", "sitzen", "stellen", "stehen"], "Aktion (sich setzen): setzen Sie sich", "verben_pos_richtung"),
        q("Das Ticket _____ schon seit drei Tagen im Backlog und wartet auf Review.", "liegt", ["liegt", "legt", "steht", "stellt"], "Metaphorischer Zustand: liegen", "verben_pos_zustand"),
        q("Der Server-Tower _____ stabil auf dem Boden neben dem Regal.", "steht", ["steht", "stellt", "liegt", "legt"], "Zustand: stehen", "verben_pos_zustand"),
        q("Wohin hast du meinen Schlüsselbund _____ ?", "gelegt", ["gelegt", "gelegen", "gestanden", "gestellt"], "Perfekt der Aktion legen: hast ... gelegt", "verben_pos_richtung")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 3: ARBEITSWELT, TÄTIGKEITEN & PRÄTERITUM
    // -------------------------------------------------------------
    {
      id: "LVL 2.06",
      chapter: "Linie 1 A2 K3",
      title: "Präteritum der Modalverben (musste, konnte, wollte, durfte)",
      ruleSummary: "Präteritum: müssen -> musste, können -> konnte, wollen -> wollte, dürfen -> durfte, sollen -> sollte. Vergangenheitsform ohne Umlaut!",
      example: "Gestern musste ich länger arbeiten. Er konnte nicht kommen.",
      questions: [
        q("Gestern _____ Bhavani bis 19 Uhr arbeiten, weil ein Produktionsfehler auftrat.", "musste", ["musste", "müsste", "konnte", "wollte"], "Notwendigkeit Vergangenheit: musste", "praet_modal"),
        q("Herr Tim _____ gestern nicht am Meeting teilnehmen, da er krank war.", "konnte", ["konnte", "könnte", "musste", "durfte"], "Unfähigkeit/Unmöglichkeit Vergangenheit: konnte nicht", "praet_modal"),
        q("Wir _____ das Release eigentlich am Freitag veröffentlichen, aber die Tests fehlten.", "wollten", ["wollten", "mussten", "konnten", "durften"], "Absicht Vergangenheit: wollten", "praet_modal"),
        q("Im alten Firmengebäude _____ man im Büro absolut nicht rauchen.", "durfte", ["durfte", "dürfte", "musste", "konnte"], "Verbot Vergangenheit: durfte nicht", "praet_modal"),
        q("Marco, _____ du gestern die neue Schnittstelle im Labor testen?", "konntest", ["konntest", "musstest", "wolltest", "durftest"], "Fähigkeit/Gelegenheit du-Form: konntest du", "praet_modal"),
        q("Die Mitarbeiter _____ vor dem Audit alle Sicherheitsregeln wiederholen.", "mussten", ["mussten", "konnten", "durften", "wollten"], "Pflicht Plural: mussten", "praet_modal"),
        q("Ich _____ dich gestern Nachmittag anrufen, aber mein Akku war leer.", "wollte", ["wollte", "musste", "konnte", "durfte"], "Absicht 1. Person: wollte anrufen", "praet_modal"),
        q("Wegen der Baustelle auf der Bahnstrecke _____ der Zug nur langsam fahren.", "durfte", ["durfte", "konnte", "musste", "wollte"], "Geschwindigkeitsbeschränkung/Regel: durfte", "praet_modal"),
        q("Kollegen, _____ ihr gestern rechtzeitig die Zeiterfassung einreichen?", "konntet", ["konntet", "musstet", "wolltet", "durftet"], "ihr-Form: konntet ihr", "praet_modal"),
        q("Der Projektleiter sagte, wir _____ den Kunden sofort informieren.", "sollten", ["sollten", "mussten", "konnten", "wollten"], "Auftrag Vergangenheit: sollten", "praet_modal"),
        q("Frau Meyer _____ früher nach Hause gehen, weil ihr Kind Fieber hatte.", "musste", ["musste", "durfte", "konnte", "wollte"], "Dringlichkeit: musste gehen", "praet_modal"),
        q("_____ Sie das Problem gestern noch lösen, Herr Schmidt?", "Konnten", ["Konnten", "Mussten", "Wollten", "Durften"], "Höflichkeitsform: Konnten Sie lösen", "praet_modal")
      ]
    },
    {
      id: "LVL 2.07",
      chapter: "Linie 1 A2 K3",
      title: "Adjektivdeklination nach bestimmtem Artikel (Nominativ & Akkusativ)",
      ruleSummary: "Nach 'der, das, die': Im Nominativ enden alle Adjektive auf -e (der neue Tisch, das neue Büro, die neue Lampe; Plural: -en). Im Akkusativ erhält Maskulin -en (den neuen Tisch).",
      example: "der neue Computer, das schnelle Netz, die moderne Küche, den neuen Vertrag",
      questions: [
        q("Der _____ Architekt (m) leitet ab heute das gesamte Enterprise-Projekt.", "neue", ["neue", "neuen", "neuem", "neuer"], "Nominativ maskulin nach bestimmtem Artikel: der neue Architekt", "adj_bestimmt_nom"),
        q("Haben Sie den _____ Vertrag (m) für die Cloud-Erweiterung schon gelesen?", "neuen", ["neuen", "neue", "neuem", "neuer"], "Akkusativ maskulin nach bestimmtem Artikel: den neuen Vertrag", "adj_bestimmt_akk"),
        q("Das _____ Ticket (n) im Support-System hat die höchste Prioritätsstufe.", "dringende", ["dringende", "dringenden", "dringendes", "dringendem"], "Nominativ neutral nach 'das': das dringende Ticket", "adj_bestimmt_nom"),
        q("Ich kaufe das _____ Dienst-Handy (n) direkt über das IT-Portal.", "neue", ["neue", "neuen", "neues", "neuem"], "Akkusativ neutral nach 'das': das neue Handy", "adj_bestimmt_akk"),
        q("Die _____ Kollegin (f) arbeitet im Team für Prozessoptimierung.", "neue", ["neue", "neuen", "neuer", "neuem"], "Nominativ feminin nach 'die': die neue Kollegin", "adj_bestimmt_nom"),
        q("Wir begrüßen die _____ Mitarbeiterin (f) ganz herzlich im Team.", "neue", ["neue", "neuen", "neuer", "neuem"], "Akkusativ feminin nach 'die': die neue Mitarbeiterin", "adj_bestimmt_akk"),
        q("Die _____ Monitore (Pl.) im Labor bieten eine gestochen scharfe Auflösung.", "großen", ["großen", "große", "großer", "großes"], "Nominativ Plural nach 'die': immer -en (die großen Monitore)", "adj_bestimmt_plur"),
        q("Der Techniker repariert den _____ Server (m) im Erdgeschoss.", "defekten", ["defekten", "defekte", "defekter", "defektem"], "Akkusativ maskulin: den defekten Server", "adj_bestimmt_akk"),
        q("Das _____ Protokoll (n) der Sitzung liegt auf dem gemeinsamen Netzlaufwerk.", "ausführliche", ["ausführliche", "ausführlichen", "ausführliches", "ausführlichem"], "Nominativ neutral: das ausführliche Protokoll", "adj_bestimmt_nom"),
        q("Wir haben den _____ Termin (m) um eine Woche verschoben.", "geplanten", ["geplanten", "geplante", "geplanter", "geplantem"], "Akkusativ maskulin: den geplanten Termin", "adj_bestimmt_akk"),
        q("Die _____ Kaffeemaschine (f) in der Teeküche funktioniert wieder einwandfrei.", "reparierte", ["reparierte", "reparierten", "reparierter", "repariertes"], "Nominativ feminin: die reparierte Maschine", "adj_bestimmt_nom"),
        q("Er testet die _____ Software-Updates (Pl.) vor der Installation.", "wichtigen", ["wichtigen", "wichtige", "wichtiger", "wichtiges"], "Akkusativ Plural nach 'die': die wichtigen Updates", "adj_bestimmt_plur")
      ]
    },
    {
      id: "LVL 2.08",
      chapter: "Linie 1 A2 K3",
      title: "Adjektivdeklination nach unbestimmtem Artikel (ein, eine / kein)",
      ruleSummary: "Nach 'ein/kein/mein': Das Adjektiv übernimmt im Nominativ die Signalendung des Artikels: ein neuer (m), ein neues (n), eine neue (f). Akkusativ maskulin: einen neuen (m).",
      example: "ein neuer Laptop, ein schnelles Auto, eine moderne Wohnung, einen neuen Kuli",
      questions: [
        q("Bhavani braucht für seine tägliche Arbeit einen _____ Rechner (m).", "schnellen", ["schnellen", "schneller", "schnelles", "schnelle"], "Akkusativ maskulin unbestimmt: einen schnellen Rechner", "adj_unbestimmt_akk"),
        q("Im Konferenzraum steht ab heute ein _____ Besprechungstisch (m).", "großer", ["großer", "großen", "großes", "große"], "Nominativ maskulin unbestimmt Signalendung: ein großer Tisch", "adj_unbestimmt_nom"),
        q("Wir haben gestern ein _____ Ergebnis (n) in den Performancetests erzielt.", "hervorragendes", ["hervorragendes", "hervorragende", "hervorragenden", "hervorragender"], "Nominativ/Akkusativ neutral Signalendung: ein hervorragendes Ergebnis", "adj_unbestimmt_nom"),
        q("Frau Meyer hat eine _____ Präsentation (f) für den Vorstand vorbereitet.", "klare", ["klare", "klaren", "klarer", "klares"], "Akkusativ feminin: eine klare Präsentation", "adj_unbestimmt_akk"),
        q("Das ist wirklich kein _____ Problem (n), wir beheben das sofort.", "großes", ["großes", "großer", "großen", "große"], "kein + neutral Nominativ: kein großes Problem", "adj_unbestimmt_nom"),
        q("Ich suche einen _____ Raum (m) für ein vertrauliches Mitarbeitergespräch.", "ruhigen", ["ruhigen", "ruhiger", "ruhiges", "ruhige"], "Akkusativ maskulin: einen ruhigen Raum", "adj_unbestimmt_akk"),
        q("Dort drüben arbeitet ein _____ Kollege (m) aus der IT-Sicherheit.", "neuer", ["neuer", "neuen", "neues", "neue"], "Nominativ maskulin: ein neuer Kollege", "adj_unbestimmt_nom"),
        q("Das Team hat keine _____ Zeit (f) mehr vor der Deadline.", "freie", ["freie", "freien", "freier", "freies"], "keine + feminin: keine freie Zeit", "adj_unbestimmt_akk"),
        q("Herr Tim besitzt ein _____ Fachwissen (n) im Bereich CMDB-Architektur.", "fundiertes", ["fundiertes", "fundierte", "fundierten", "fundierter"], "ein + neutral: ein fundiertes Fachwissen", "adj_unbestimmt_nom"),
        q("Wir suchen eine _____ Fachkraft (f) für unser DevOps-Team.", "qualifizierte", ["qualifizierte", "qualifizierten", "qualifizierter", "qualifiziertes"], "eine + feminin: eine qualifizierte Fachkraft", "adj_unbestimmt_akk"),
        q("Er trinkt morgens gerne einen _____ Espresso (m).", "starken", ["starken", "starker", "starkes", "starke"], "Akkusativ maskulin: einen starken Espresso", "adj_unbestimmt_akk"),
        q("Das war ein _____ Erfolg (m) für unser gesamtes Projekt.", "wichtiger", ["wichtiger", "wichtigen", "wichtiges", "wichtige"], "Nominativ maskulin: ein wichtiger Erfolg", "adj_unbestimmt_nom")
      ]
    },

    // -------------------------------------------------------------
    // KAPITEL 4: GESUNDHEIT, KÖRPER & RATSCHLÄGE
    // -------------------------------------------------------------
    {
      id: "LVL 2.09",
      chapter: "Linie 1 A2 K4",
      title: "Imperativ und Höflichkeit mit Konjunktiv II (sollte, könnte)",
      ruleSummary: "Ratschläge und Empfehlungen formuliert man höflich mit Konjunktiv II von sollen (du solltest, Sie sollten) oder können (Sie könnten).",
      example: "Du solltest viel Tee trinken. Sie sollten zum Arzt gehen. Sie könnten früher Schluss machen.",
      questions: [
        q("Du hast starke Kopfschmerzen? Du _____ heute viel Wasser trinken und dich ausruhen.", "solltest", ["solltest", "sollst", "musst", "kannst"], "Höflicher Ratschlag du: solltest", "k2_ratschlag"),
        q("Frau Weber, bei diesen Rückenschmerzen _____ Sie unbedingt einen Facharzt aufsuchen.", "sollten", ["sollten", "sollen", "müssten", "durften"], "Höfliche Empfehlung Sie: sollten", "k2_ratschlag"),
        q("Herr Schmidt, Sie _____ vielleicht heute etwas früher Feierabend machen.", "könnten", ["könnten", "können", "konnten", "sollten"], "Höflicher Vorschlag: könnten", "k2_ratschlag"),
        q("Marco, du sitzt zu lange am Schreibtisch. Du _____ regelmäßig kurze Pausen machen.", "solltest", ["solltest", "sollst", "musst", "darfst"], "Ratschlag an Kollegen: solltest", "k2_ratschlag"),
        q("Kollegen, ihr seht alle erschöpft aus. Ihr _____ euch am Wochenende richtig erholen.", "solltet", ["solltet", "sollten", "müsstet", "könntet"], "Empfehlung ihr: solltet", "k2_ratschlag"),
        q("Bei Fieber _____ man auf keinen Fall ins Büro kommen, um niemanden anzustecken.", "sollte", ["sollte", "soll", "müsste", "darf"], "Allgemeiner Ratschlag man: sollte", "k2_ratschlag"),
        q("_____ du mir bitte einen Gefallen tun und dieses Ticket für mich übernehmen?", "Könntest", ["Könntest", "Kannst", "Konntest", "Solltest"], "Höfliche Bitte du: Könntest du", "k2_bitte"),
        q("Sie _____ vor der Einnahme des Medikaments die Packungsbeilage gründlich lesen.", "sollten", ["sollten", "sollen", "müssen", "durften"], "Empfehlung Sie: sollten", "k2_ratschlag"),
        q("Wenn der Rechner streikt, _____ du zuerst einen Neustart versuchen.", "solltest", ["solltest", "sollst", "kannst", "musst"], "Technischer Ratschlag: solltest", "k2_ratschlag"),
        q("Wir _____ den Termin besser verschieben, wenn die halbe Mannschaft krank ist.", "sollten", ["sollten", "müssten", "konnten", "durften"], "Gemeinsame Empfehlung: sollten", "k2_ratschlag"),
        q("Du hustest schon seit einer Woche. Du _____ wirklich zum Arzt gehen!", "solltest", ["solltest", "sollst", "musst", "darfst"], "Dringender Ratschlag: solltest", "k2_ratschlag"),
        q("Frau Meyer, _____ Sie mir freundlicherweise die Kontaktdaten von Herrn Keller geben?", "könnten", ["könnten", "können", "konnten", "würden"], "Höfliche Bitte: könnten Sie", "k2_bitte")
      ]
    },
    {
      id: "LVL 2.10",
      chapter: "Linie 1 A2 K4",
      title: "Pronomen im Dativ bei Körperteilen & Befinden (weh tun)",
      ruleSummary: "Ausdrücke des Befindens und Schmerzes nutzen Dativ-Pronomen: 'mir tut der Kopf weh', 'ihm tun die Augen weh', 'was fehlt Ihnen?'.",
      example: "Der Rücken tut mir weh. Die Beine tun ihm weh. Was tut dir weh?",
      questions: [
        q("Vom langen Arbeiten vor dem Bildschirm tut _____ der Kopf weh.", "mir", ["mir", "mich", "ich", "mein"], "Schmerz/Befinden 1. Person: tut mir weh", "dat_koerper"),
        q("Marco, was fehlt _____ ? Du siehst heute so blass aus.", "dir", ["dir", "dich", "du", "dein"], "Befinden 2. Person: was fehlt dir?", "dat_koerper"),
        q("Herr Tim hat sich verhoben. Jetzt tut _____ der Rücken weh.", "ihm", ["ihm", "ihn", "er", "sein"], "Dativ maskulin (er): tut ihm weh", "dat_koerper"),
        q("Frau Weber kann kaum tippen, weil _____ das Handgelenk schmerzt.", "ihr", ["ihr", "sie", "ihm", "ihnen"], "Dativ feminin (sie): schmerzt ihr", "dat_koerper"),
        q("Nach der langen Autofahrt tun _____ (wir) die Beine weh.", "uns", ["uns", "wir", "unser", "euch"], "Dativ 1. Person Plural: tun uns weh", "dat_koerper"),
        q("Guten Tag, Herr Becker! Wie kann ich _____ helfen? Was tut weh?", "Ihnen", ["Ihnen", "Sie", "dir", "ihm"], "Dativ Höflichkeitsform: kann ich Ihnen helfen", "dat_koerper"),
        q("Den Entwicklern tun nach dem langen Sprint die Augen _____ .", "weh", ["weh", "schlecht", "krank", "leid"], "Feste Wendung: weh tun", "dat_koerper"),
        q("Tut _____ nach dem Sport immer noch die Schulter weh, Marco?", "dir", ["dir", "dich", "du", "dein"], "tut dir weh", "dat_koerper"),
        q("Dem neuen Kollegen ist schlecht, _____ ist schwindelig.", "ihm", ["ihm", "ihn", "er", "sein"], "Unpersönliches Befinden: ihm ist schwindelig", "dat_koerper"),
        q("Können Sie lauter sprechen? Meine Ohren tun _____ heute weh.", "mir", ["mir", "mich", "ich", "mein"], "tun mir weh", "dat_koerper"),
        q("Ihr seht müde aus. Fehlt _____ (ihr) etwas Schlaf?", "euch", ["euch", "uns", "ihr", "ihnen"], "Dativ 2. Person Plural: fehlt euch", "dat_koerper"),
        q("Der Patientin geht es glücklicherweise wieder besser, nichts tut _____ mehr weh.", "ihr", ["ihr", "sie", "ihm", "ihnen"], "Dativ feminin: tut ihr mehr weh", "dat_koerper")
      ]
    },
    {
      id: "LVL 2.11",
      chapter: "Linie 1 A2 K4",
      title: "Präposition seit + Dativ (Gesundheit & Zustand)",
      ruleSummary: "Die temporale Präposition 'seit' fordert IMMER den Dativ (seit einem Tag, seit einer Woche, seit drei Monaten) und beschreibt Zustände, die bis JETZT andauern.",
      example: "Ich habe seit drei Tagen Halsschmerzen. Er ist seit einer Woche krankgeschrieben.",
      questions: [
        q("Bhavani hat _____ zwei Tagen leichte Halsschmerzen.", "seit", ["seit", "vor", "ab", "in"], "Dauert in der Gegenwart an: seit zwei Tagen", "praep_seit_dat"),
        q("Herr Becker ist bereits seit _____ ganzen Woche krankgeschrieben.", "einer", ["einer", "eine", "einem", "einen"], "seit + Dativ feminin: seit einer Woche", "praep_seit_dat"),
        q("Ich nehme dieses pflanzliche Medikament seit _____ Monat regelmäßig ein.", "einem", ["einem", "einen", "eines", "ein"], "seit + Dativ maskulin: seit einem Monat", "praep_seit_dat"),
        q("Seit _____ Tagen klagt der Kollege über stechende Rückenschmerzen.", "drei", ["drei", "dreien", "dritter", "dritten"], "seit + Zeitangabe im Dativ Plural", "praep_seit_dat"),
        q("Frau Meyer arbeitet seit _____ halben Jahr mit ergonomischer Tastatur.", "einem", ["einem", "einer", "einen", "ein"], "seit + Dativ neutral (das halbe Jahr): einem", "praep_seit_dat"),
        q("Seit _____ Uhr warten die Patienten im Wartezimmer der Praxis?", "welcher", ["welcher", "welche", "welchem", "welchen"], "seit + Dativ feminin (die Uhrzeit): welcher Uhr", "praep_seit_dat"),
        q("Marco treibt seit _____ letzten Bandscheibenvorfall gezielt Rehasport.", "seinem", ["seinem", "seinen", "sein", "seiner"], "seit + Dativ maskulin Possessiv: seinem Vorfall", "praep_seit_dat"),
        q("Wir nutzen die neue Softwareversion seit _____ gestrigen Systemupdate.", "dem", ["dem", "den", "das", "der"], "seit + Dativ neutral: dem Update", "praep_seit_dat"),
        q("Seit _____ Tagen fühle ich mich wieder fit und voll einsatzbereit.", "einigen", ["einigen", "einige", "einiger", "einiges"], "seit + Dativ Plural: einigen Tagen", "praep_seit_dat"),
        q("Sie leidet seit _____ Jahren unter Heuschnupfen im Frühling.", "vielen", ["vielen", "viele", "vieler", "viel"], "seit + Dativ Plural (+n): vielen Jahren", "praep_seit_dat"),
        q("Der Entwickler sucht seit _____ Stunde nach der Ursache für den Bug.", "einer", ["einer", "eine", "einem", "einen"], "seit + Dativ feminin (die Stunde): einer Stunde", "praep_seit_dat"),
        q("Seit _____ wann nehmen Sie diese Tabletten schon ein? - Seit gestern.", "wann", ["wann", "wie", "wo", "woher"], "Frage nach Andauer: Seit wann?", "praep_seit_dat")
      ]
    }
  ];

  // Stage A2 Global Initializer
  if (!window.STAGE_A2_DATA) {
    window.STAGE_A2_DATA = { stage: "A2", levels: [] };
  }

  levelsA2_K1toK4.forEach(newLvl => {
    const existingIdx = window.STAGE_A2_DATA.levels.findIndex(l => l.id === newLvl.id);
    if (existingIdx !== -1) {
      window.STAGE_A2_DATA.levels[existingIdx] = newLvl;
    } else {
      window.STAGE_A2_DATA.levels.push(newLvl);
    }
  });

  window.STAGE_A2_DATA.totalLevels = window.STAGE_A2_DATA.levels.length;
})();
