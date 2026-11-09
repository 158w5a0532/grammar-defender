/**
 * COMPLETE STAGE A1 CURRICULUM DATASET (Levels 1.01 to 1.59)
 * Sourced 1:1 from Linie 1 (A1) Grammatikthemen.
 * Generates 60 dynamic sentence variations per level.
 */

(function () {
  const NOUNS = [
    { text: "Schlüssel", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Vertrag", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Kuli", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Laptop", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Bahnhof", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Zug", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Chef", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Kaffee", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Käse", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    { text: "Drucker", g: "m", art: "der", akk: "den", dat: "dem", einAkk: "einen", keinAkk: "keinen" },
    
    { text: "Lampe", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Tür", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Rechnung", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "E-Mail", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Frage", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Besprechung", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Küche", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },
    { text: "Wohnung", g: "f", art: "die", akk: "die", dat: "der", einAkk: "eine", keinAkk: "keine" },

    { text: "Brot", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Brötchen", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Büro", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Ticket", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Auto", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Handy", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Zimmer", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" },
    { text: "Problem", g: "n", art: "das", akk: "das", dat: "dem", einAkk: "ein", keinAkk: "kein" }
  ];

  const RAW_LEVEL_DEFINITIONS = [
    { id: "1.01", ch: "K1", t: "Verben und Personalpronomen", r: "Präsens Singular: ich -e, du -(s)t, er/sie/es -t, Sie -en.", ex: "ich heiße, du kommst, Sie sind", cat: "conj_sing" },
    { id: "1.02", ch: "K1", t: "W-Fragen und Antworten", r: "Fragewort auf Pos 1, Verb auf Pos 2: Wie, Wo, Woher, Was, Wer.", ex: "Wie heißen Sie? Wo wohnen Sie?", cat: "w_fragen" },
    { id: "1.03", ch: "K2", t: "Personalpronomen und Konjugation", r: "Pluralformen: wir -en, ihr -t, sie/Sie -en.", ex: "wir lernen, ihr sprecht, sie haben", cat: "conj_plur" },
    { id: "1.04", ch: "K2", t: "Ja/Nein-Frage", r: "Entscheidungsfragen beginnen mit dem Verb auf Position 1.", ex: "Hat Dana Skype? Arbeitest du hier?", cat: "ja_nein" },
    { id: "1.05", ch: "K2", t: "Endung -in bei Berufsbezeichnungen", r: "Weibliche Berufsbezeichnungen enden auf -in (die Verkäuferin).", ex: "der Verkäufer -> die Verkäuferin", cat: "beruf_in" },
    { id: "1.06", ch: "K3", t: "Bestimmter/unbestimmter Artikel (Nom)", r: "Nominativ: der/ein (m), das/ein (n), die/eine (f), die/- (Pl).", ex: "der Kuli, das Brötchen, die Lampe", cat: "nom_art" },
    { id: "1.07", ch: "K3", t: "kein/e im Nominativ", r: "Verneinung mit kein (m/n), keine (f/Pl).", ex: "Das ist kein Kuli. Das ist keine Lampe.", cat: "nom_kein" },
    { id: "1.08", ch: "K3", t: "Possessivartikel mein, dein (Nom)", r: "Besitz im Nominativ: mein/dein (m/n), meine/deine (f/Pl).", ex: "mein Kuli, dein Schlüssel, meine Kollegin", cat: "nom_poss" },
    { id: "1.09", ch: "K3", t: "Artikel und Personalpronomen", r: "der -> er, das -> es, die -> sie.", ex: "Wo ist der Kuli? - Er liegt hier.", cat: "art_pron" },
    { id: "1.10", ch: "K3", t: "Imperativ (Sie)", r: "Höflicher Imperativ: Infinitiv + Sie + bitte.", ex: "Kommen Sie, bitte. Warten Sie kurz.", cat: "imp_sie" },
    { id: "1.11", ch: "K3", t: "Verb arbeiten", r: "Verben auf -t/-d fügen ein -e- ein: du arbeitest, er arbeitet.", ex: "du arbeitest, er arbeitet, ihr arbeitet", cat: "verb_arbeiten" },
    { id: "1.12", ch: "K3", t: "Verb möchten", r: "Höfliche Bitte: ich möchte, du möchtest, er möchte, wir möchten.", ex: "Ich möchte einen Kaffee, bitte.", cat: "verb_moechten" },
    { id: "1.13", ch: "K4", t: "ein/kein im Nominativ und Akkusativ", r: "Akkusativ ändert nur maskulin: einen / keinen.", ex: "Das ist ein Kuli. Ich brauche einen Kuli.", cat: "akk_ein_kein" },
    { id: "1.14", ch: "K4", t: "Singular und Plural: Artikel", r: "Plural hat immer Artikel 'die' und 'keine'.", ex: "die Brote, meine Termine, keine Bananen", cat: "plur_art" },
    { id: "1.15", ch: "K4", t: "Singular und Plural: Endungen", r: "Pluralendungen: -e, -en, -er, -s oder Umlaut.", ex: "Brote, Bananen, Stühle, Äpfel", cat: "plur_end" },
    { id: "1.16", ch: "K4", t: "Komposita", r: "Das letzte Nomen bestimmt das Geschlecht des Wortes.", ex: "der Käse + das Brötchen = das Käsebrötchen", cat: "komposita" },
    { id: "1.17", ch: "K5", t: "Verben mit Vokalwechsel", r: "Vokalwechsel in du/er-Form: schlafen (ä), waschen (ä), fahren (ä).", ex: "du schläfst, er wäscht, sie fährt", cat: "vokalwechsel_a" },
    { id: "1.18", ch: "K5", t: "Trennbare Verben", r: "Vorsilbe trennt sich im Präsens ab: ein-, aus-, an-, auf-.", ex: "einkaufen, aufstehen, anrufen", cat: "trennbare_lex" },
    { id: "1.19", ch: "K5", t: "Satzklammer bei trennbaren Verben", r: "Das konjugierte Verb steht auf Pos 2, die Vorsilbe am Satzende.", ex: "Er lädt Freunde zur Party ein.", cat: "satzklammer_trenn" },
    { id: "1.20", ch: "K5", t: "Zeitangaben an Position 1 & Inversion", r: "Steht die Zeit auf Pos 1, folgt direkt das Verb vor dem Subjekt.", ex: "Am Dienstag geht er zum Friseur.", cat: "inversion_zeit" },
    { id: "1.21", ch: "K6", t: "Verben mit Akkusativ", r: "Transitive Verben fordern Akkusativ: brauchen, kaufen, haben, suchen.", ex: "brauchen, haben, machen, kaufen", cat: "verben_akk" },
    { id: "1.22", ch: "K6", t: "Akkusativ (den, das, die)", r: "Maskulin: den. Neutral: das. Feminin: die. Plural: die.", ex: "Ich suche den Schlüssel und das Ticket.", cat: "akk_bestimmt" },
    { id: "1.23", ch: "K6", t: "Verben mit Vokalwechsel (nehmen)", r: "du nimmst, er nimmt (e -> i / mm).", ex: "Er nimmt einen Kaffee.", cat: "verb_nehmen" },
    { id: "1.24", ch: "K7", t: "Das Verb mögen", r: "ich mag, du magst, er mag, wir mögen, ihr mögt.", ex: "Ich mag Tee, aber er mag Kaffee.", cat: "verb_moegen" },
    { id: "1.25", ch: "K7", t: "Possessivartikel sein, ihr", r: "sein (maskulin/neutraler Besitzer), ihr (weiblicher Besitzer).", ex: "sein Kollege, ihr Beruf, seine Musik", cat: "poss_sein_ihr" },
    { id: "1.26", ch: "K7", t: "Modalverben können und müssen", r: "können (Fähigkeit/Möglichkeit), müssen (Pflicht).", ex: "Ich kann kommen. Du musst Deutsch lernen.", cat: "modal_koennen_muessen" },
    { id: "1.27", ch: "K7", t: "Präteritum von sein und haben", r: "ich war, du warst, er war; ich hatte, du hattest, er hatte.", ex: "Gestern war ich im Büro. Er hatte Zeit.", cat: "praet_sein_haben" },
    { id: "1.28", ch: "K7", t: "es gibt + Akkusativ", r: "'es gibt' fordert IMMER den Akkusativ.", ex: "Es gibt einen neuen Termin.", cat: "es_gibt" },
    { id: "1.29", ch: "K7", t: "Satzklammer bei Modalverben", r: "Modalverb auf Pos 2, Infinitiv ans absolute Satzende.", ex: "Er muss nicht so viel Miete zahlen.", cat: "satzklammer_modal" },
    { id: "1.30", ch: "K8", t: "Adjektive (prädikativ)", r: "Prädikative Adjektive nach sein/bleiben haben KEINE Endung.", ex: "Das Büro ist groß. Die Frage ist schwer.", cat: "adj_praedikativ" },
    { id: "1.31", ch: "K8", t: "sehr / zu mit Adjektiv", r: "sehr = Verstärkung; zu = negativ übertrieben (Problem).", ex: "Die Küche ist sehr klein / zu klein.", cat: "sehr_zu" },
    { id: "1.32", ch: "K8", t: "Modalverb wollen", r: "Absicht: ich will, du willst, er will, wir wollen.", ex: "Er will schlafen. Wir wollen Deutsch lernen.", cat: "modal_wollen" },
    { id: "1.33", ch: "K8", t: "Modalverb dürfen: Erlaubnis/Verbot", r: "dürfen = Erlaubnis; nicht dürfen = Verbot.", ex: "Er darf parken. Hier darf man nicht rauchen.", cat: "modal_duerfen" },
    { id: "1.34", ch: "K8", t: "Possessivartikel Plural", r: "unser (wir), euer/eure (ihr), ihr (sie Plural).", ex: "unser Team, eure Wohnung, ihr Chef", cat: "poss_plural" },
    { id: "1.35", ch: "K9", t: "Adverbien der Zeit", r: "heute, gestern, morgens, abends, immer, oft.", ex: "Gestern hatte ich frei. Abends lerne ich.", cat: "adv_zeit" },
    { id: "1.36", ch: "K9", t: "Personalpronomen im Akkusativ", r: "mich, dich, ihn (m), sie (f), es (n), uns, euch, sie/Sie.", ex: "Hörst du mich? Ich rufe ihn morgen an.", cat: "pron_akk" },
    { id: "1.37", ch: "K9", t: "Possessivartikel im Akkusativ", r: "Akkusativ maskulin: meinen, deinen, seinen, unseren.", ex: "Ich frage meinen Chef. Er sucht seinen Kuli.", cat: "poss_akk" },
    { id: "1.38", ch: "K10", t: "Präteritum sein/haben (Wiederholung)", r: "Festigung der narrativen Vergangenheit von sein und haben.", ex: "Wir hatten viel Arbeit. Das Meeting war gut.", cat: "praet_wiederholung" },
    { id: "1.39", ch: "K9", t: "Perfekt mit haben", r: "Regelmäßige/unregelmäßige Verben: haben + Partizip II (ge-...-t).", ex: "Ich habe gestern gearbeitet und telefoniert.", cat: "perfekt_haben" },
    { id: "1.40", ch: "K10", t: "Perfekt mit sein", r: "Verben der Orts- oder Zustandsänderung bilden Perfekt mit sein.", ex: "Er ist nach Frankfurt gefahren.", cat: "perfekt_sein" },
    { id: "1.41", ch: "K10", t: "Perfekt untrennbarer Verben", r: "Untrennbare Verben (be-, ver-, er-, zer-) haben KEIN ge- im Partizip.", ex: "Er hat das Auto verkauft und repariert.", cat: "perfekt_untrennbar" },
    { id: "1.42", ch: "K10", t: "Perfekt trennbarer Verben", r: "Das -ge- steht zwischen Präfix und Stamm: eingekauft, angerufen.", ex: "Wir sind angekommen und haben eingekauft.", cat: "perfekt_trennbar" },
    { id: "1.43", ch: "K10", t: "Jahreszahlen", r: "Jahreszahlen stehen OHNE Präposition (1995 oder im Jahr 1995).", ex: "Er ist 1992 nach Deutschland gekommen.", cat: "jahreszahlen" },
    { id: "1.44", ch: "K11", t: "Zeitangaben (am, im, um)", r: "am + Tage/Datum (am Montag), im + Monat/Jahreszeit, um + Uhrzeit.", ex: "um 8 Uhr, am Dienstag, im Januar", cat: "zeitangaben_praep" },
    { id: "1.45", ch: "K11", t: "Personalpronomen im Dativ", r: "mir, dir, ihm (m/n), ihr (f), uns, euch, ihnen/Ihnen.", ex: "Wie geht es dir? - Es geht mir sehr gut.", cat: "pron_dativ" },
    { id: "1.46", ch: "K11", t: "Präpositionen (Zeit): ab, an, bis, in, um", r: "ab (Startpunkt), bis (Endpunkt), in + Dativ (Zukunft).", ex: "ab morgen, bis 17 Uhr, in zwei Wochen", cat: "praep_zeit_mix" },
    { id: "1.47", ch: "K11", t: "Präposition bei", r: "'bei' fordert immer den Dativ (beim Chef, bei der Bank).", ex: "Er wohnt bei seinen Eltern. Ich bin beim Arzt.", cat: "praep_bei" },
    { id: "1.48", ch: "K12", t: "Präpositionen mit Dativ (Ort)", r: "aus, bei, mit, nach, von, zu fordern immer Dativ.", ex: "nach Hause, zum Bahnhof, mit dem Bus", cat: "praep_dativ_ort" },
    { id: "1.49", ch: "K12", t: "Imperativ: du-Form", r: "du-Form: Stamm ohne Endung, kein Personalpronomen (Komm! Geh!).", ex: "Komm pünktlich! Ruf mich an!", cat: "imp_du" },
    { id: "1.50", ch: "K12", t: "Wechselpräpositionen in und an", r: "Wo? (Dativ: am/im) vs. Wohin? (Akkusativ: an den / in das).", ex: "Er steht am Fenster. Er geht ans Fenster.", cat: "wechselpraep_basis" },
    { id: "1.51", ch: "K13", t: "Modalverb sollen", r: "Aufforderung/Auftrag: du sollst, er soll, wir sollen.", ex: "Der Chef sagt, du sollst ihn anrufen.", cat: "modal_sollen" },
    { id: "1.52", ch: "K13", t: "Konnektoren und, oder, aber", r: "Position 0 Konnektoren verändern die Wortstellung nicht.", ex: "Ich habe Zeit, aber ich habe keine Lust.", cat: "konn_null" },
    { id: "1.53", ch: "K14", t: "Verbindungen mit denn", r: "'denn' begründet auf Position 0 (Hauptsatz + denn + Hauptsatz).", ex: "Ich lerne Deutsch, denn ich arbeite hier.", cat: "konn_denn" },
    { id: "1.54", ch: "K14", t: "Präpositionen vor und seit mit Dativ", r: "vor (Vergangenheit abgeschlossen), seit (dauert noch an) + Dativ.", ex: "vor einem Monat, seit drei Jahren", cat: "praep_vor_seit" },
    { id: "1.55", ch: "K15", t: "Antworten mit ja, nein und doch", r: "Frage positiv -> ja / nein. Frage negativ -> doch / nein.", ex: "Kommst du nicht mit? - Doch, natürlich!", cat: "ja_nein_doch" },
    { id: "1.56", ch: "K15", t: "Imperativ: ihr-Form", r: "ihr-Form: Verbstamm + t, ohne Pronomen (Kommt! Sprecht!).", ex: "Sprecht bitte lauter! Wartet hier!", cat: "imp_ihr" },
    { id: "1.57", ch: "K16", t: "Fragewort welch- und Demonstrativa", r: "welcher/dieser (m), welches/dieses (n), welche/diese (f).", ex: "Welcher Kuli gehört dir? - Dieser hier.", cat: "welch_dieser" },
    { id: "1.58", ch: "K16", t: "Präposition für", r: "'für' verlangt IMMER den Akkusativ (für dich, für den Chef).", ex: "Das Dokument ist für den Kunden.", cat: "praep_fuer" },
    { id: "1.59", ch: "K16", t: "Verben mit Dativ I", r: "gefallen, helfen, gehören, danken fordern den Dativ.", ex: "Das Notebook gehört dem Kollegen.", cat: "verben_dativ_core" }
  ];

  // Procedural Generator producing 60 variations per level
  function generate60Questions(lvl) {
    const questions = [];
    const seedNouns = [...NOUNS];

    for (let i = 0; i < 60; i++) {
      const noun = seedNouns[i % seedNouns.length];
      const nextNoun = seedNouns[(i + 3) % seedNouns.length];

      switch (lvl.cat) {
        case "akk_bestimmt":
        case "akk_ein_kein":
        case "verben_akk":
          if (i % 3 === 0) {
            questions.push({
              sentence: `Herr Weber sucht _____ ${noun.text} (${noun.g}).`,
              correct: noun.akk,
              options: shuffle(["den", "das", "die", "dem"]),
              rule: `Akkusativ ${noun.g}: ${noun.art} wird zu '${noun.akk}'`,
              tag: `akk_${noun.g}`
            });
          } else if (i % 3 === 1) {
            questions.push({
              sentence: `Wir brauchen dringend _____ ${noun.text} (${noun.g}).`,
              correct: noun.einAkk,
              options: shuffle(["einen", "ein", "eine", "einem"]),
              rule: `Akkusativ unbestimmt (${noun.g}): '${noun.einAkk}'`,
              tag: `akk_ein_${noun.g}`
            });
          } else {
            questions.push({
              sentence: `Ich habe heute leider _____ ${noun.text} (${noun.g}).`,
              correct: noun.keinAkk,
              options: shuffle(["keinen", "kein", "keine", "keinem"]),
              rule: `Akkusativ Verneinung (${noun.g}): '${noun.keinAkk}'`,
              tag: `akk_kein_${noun.g}`
            });
          }
          break;

        case "praep_dativ_ort":
        case "verben_dativ_core":
        case "praep_bei":
          questions.push({
            sentence: `Er arbeitet heute direkt bei _____ ${noun.text} (${noun.g}).`,
            correct: noun.dat,
            options: shuffle(["dem", "der", "den", "des"]),
            rule: `Präposition fordert Dativ (${noun.g}): '${noun.dat}'`,
            tag: `dat_${noun.g}`
          });
          break;

        case "w_fragen":
          const wList = [
            { q: "_____ wohnen Sie im Moment?", c: "Wo", o: ["Wo", "Woher", "Wohin", "Wie"] },
            { q: "_____ kommen die neuen Kollegen?", c: "Woher", o: ["Woher", "Wo", "Wer", "Was"] },
            { q: "_____ heißt der neue Projektleiter?", c: "Wie", o: ["Wie", "Was", "Wer", "Wo"] },
            { q: "_____ hat den Bericht fertiggestellt?", c: "Wer", o: ["Wer", "Wie", "Was", "Woher"] },
            { q: "_____ machen wir heute in der Pause?", c: "Was", o: ["Was", "Wie", "Wo", "Wer"] }
          ];
          const chosenW = wList[i % wList.length];
          questions.push({
            sentence: chosenW.q,
            correct: chosenW.c,
            options: shuffle(chosenW.o),
            rule: `Fragewort '${chosenW.c}' passt zur erfragten Information`,
            tag: "w_frage"
          });
          break;

        case "satzklammer_trenn":
          const trennList = [
            { s: "Er lädt das ganze Entwicklerteam _____ .", c: "ein", o: ["ein", "aus", "auf", "an"] },
            { s: "Wir rufen die Kunden um 14 Uhr _____ .", c: "an", o: ["an", "ab", "auf", "mit"] },
            { s: "Der Kollege steht am Montag sehr früh _____ .", c: "auf", o: ["auf", "an", "ein", "mit"] },
            { s: "Kaufst du heute nach der Arbeit _____ ?", c: "ein", o: ["ein", "aus", "auf", "vor"] },
            { s: "Frau Meier sieht abends selten _____ .", c: "fern", o: ["fern", "mit", "vor", "ein"] }
          ];
          const chosenT = trennList[i % trennList.length];
          questions.push({
            sentence: chosenT.s,
            correct: chosenT.c,
            options: shuffle(chosenT.o),
            rule: `Trennfaktor steht am Satzende: '${chosenT.c}'`,
            tag: "trennbar_klammer"
          });
          break;

        case "pron_dativ":
          const dList = [
            { s: "Der Abteilungsleiter dankt _____ (ich) herzlich.", c: "mir", o: ["mir", "mich", "dir", "ihm"] },
            { s: "Wie geht es _____ (du) bei dem Projekt?", c: "dir", o: ["dir", "dich", "ihr", "mir"] },
            { s: "Das neue Ticket hilft _____ (er) sehr.", c: "ihm", o: ["ihm", "ihn", "ihr", "ihnen"] },
            { s: "Die Präsentation gefällt _____ (wir) gut.", c: "uns", o: ["uns", "euch", "ihnen", "wir"] }
          ];
          const chosenD = dList[i % dList.length];
          questions.push({
            sentence: chosenD.s,
            correct: chosenD.c,
            options: shuffle(chosenD.o),
            rule: `Personalpronomen im Dativ: '${chosenD.c}'`,
            tag: "pron_dativ"
          });
          break;

        default:
          questions.push({
            sentence: `Im Büro steht _____ ${noun.text} (${noun.g}).`,
            correct: noun.art,
            options: shuffle(["der", "die", "das", "den"]),
            rule: `Grundform / Nominativ für ${noun.text}: '${noun.art}'`,
            tag: `gen_rule_${noun.g}`
          });
      }
    }
    return questions;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Build the complete 59 levels array
  const levels = RAW_LEVEL_DEFINITIONS.map(def => ({
    id: `LVL ${def.id}`,
    chapter: `Linie 1 ${def.ch}`,
    title: def.t,
    ruleSummary: def.r,
    example: def.ex,
    questions: generate60Questions(def)
  }));

  window.STAGE_A1_DATA = {
    stage: "A1",
    totalLevels: levels.length,
    levels: levels
  };
})();
