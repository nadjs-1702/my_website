const textElement = document.getElementById('animated-text');
const texts = ["..drawing......", "..photography..", "..videography..", "..good vibes;)."];
let index = 0;

function changeText() {
    textElement.style.animation = 'none'; // Reset animation
    void textElement.offsetWidth; // Trigger reflow
    textElement.style.animation = null; // Reapply animation

    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
}

setInterval(changeText, 2000); // Change text every 2 seconds

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  /*PORTFOLIO IMAGEGRIDE UND MODAL*/

  
  let slideIndex = 1;

  const galleries = {
    pilzwald: {
      slides: [
          { src: '/IMG/acryl/pilzacrylganz.jpg', caption: 'Pilzwald', type: 'image' },
          { src: '/IMG/acryl/pilzacrylnahe_1.jpg', caption: 'Pilzwald Nahaufnahme 1', type: 'image' },
          { src: '/IMG/acryl/pilzacrylnahe_2.jpg', caption: 'Pilzwald Nahaufnahme 2', type: 'image' }
      ],
      description: 'Ein Waldstück mit Fliegenpilzen wurde mit Acryl auf Papier (A2) gemalt.'
  },
  polandpregnancy: {
      slides: [
          { src: '/IMG/acryl/polandpregnancy.jpg', caption: 'Poland Pregnancy', type: 'image' },
      ],
      description: 'Dieses Gemälde entstand, inspiriert von einem Ereignis in Polen. Aufgrund der Abtreibungsgesetze in Polen starb eine junge Frau. Man wusste, dass ihr Fötus nicht überleben würde, jedoch durfte sie gesetzlich nicht abtreiben, da es zu spät war. Man wartete, bis der Fötus in ihr starb. Die Frau erlitt einen anaphylaktischen Schock und verstarb. Man wusste, dass diese Möglichkeit bestand, stellte jedoch das Leben eines sterbenden Fötus über das einer jungen Frau.'
  },
  blumenfingermalen: {
      slides: [
          { src: '/IMG/acryl/blumenfingermalen.jpg', caption: 'Blumenstillleben, Fingermalerei', type: 'image' },
      ],
      description: 'Das ist ein Stillleben eines Blumenstraußes, den ich mit den Fingern gemalt habe. Dies war eine Aufwärmübung, die wir eines Morgens im Propädeutikum gemacht haben.'
  },
  rainbowpilz: {
      slides: [
          { src: '/IMG/mushroom/rainbowpilz.jpg', caption: 'Rainbowpilz', type: 'image' },
      ],
      description: 'Das ist eine Zeichnung eines Mischwesens aus Pilz und Frau, gezeichnet mit Aquarellfarben, Farbstiften, Fineliner und Neocolor.'
  },
  viel_pilzemitgesicht: {
      slides: [
          { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Nature Photo 1', type: 'image' },
      ],
      description: 'Das sind Mischwesen aus Frau und Pilz, die in verschiedenen Formen und Körpern gezeichnet sind, da auch wir alle verschieden sind.'
  },
  kleinerpilzbiglips: {
      slides: [
          { src: '/IMG/mushroom/kleinerpilzbiglips.jpg', caption: 'klein Pilz, big Lips', type: 'image' },
      ],
      description: 'Dieses Mischwesen aus Pilz und Frau entstand durch eine Oneline-Zeichnung, bei der man zeichnet, ohne einmal abzusetzen. Danach habe ich es noch mit Neocolor eingefärbt.'
  },
  viel_pilze: {
      slides: [
          { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Underwater Photo 1', type: 'image' },
      ],
      description: 'Diese Pilze zeichnete ich mit Farbsitift auf einem A3-Papier.'
  },
  collage1: {
      slides: [
          { src: '/IMG/collage/collage1.jpg', caption: 'Collage 1', type: 'image' },
      ],
      description: 'Das ist eine Mixed-Media-Collage zum Thema "Feminismus". Sie zeigt, welche Erwartungen an eine weiblich gelesene Person gestellt werden und wie sehr diese innerlich belasten. Oft bröckelt diese Fassade irgendwann und zerbricht.'
  },
  collage2: {
      slides: [
          { src: '/IMG/collage/collage2.jpg', caption: 'Collage 2', type: 'image' },
      ],
      description: 'Das ist eine Mixed-Media-Collage, die das Thema "Feminismus" mit dem Schwerpunkt auf "Toxic Masculinity" aufgreift.'
  },
  collage3: {
      slides: [
          { src: '/IMG/collage/collage3.jpeg', caption: 'Collage 3', type: 'image' },
      ],
      description: 'Das ist eine Mixed-Media-Collage, die das Thema Feminismus behandelt und zeigt, wie Medien und Trends den weiblichen Körper definieren und Frauen einreden, dass sie nur wertvoll sind, wenn sie schön sind.'
  },
  risodruck: {
      slides: [
          { src: '/IMG/druck/Risodruck/Tobi_risodruck.jpg', caption: 'Tobi, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/alicia_risodruck.jpg', caption: 'Alicia, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/eva_risodruck.jpg', caption: 'Eva, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/risodruck.jpg', caption: 'Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/risodruck2.jpg', caption: 'Eva, Analogfoto zu Risodruck', type: 'image' },
      ],
      description: 'Das sind Drucke aus dem Risodruck, einem speziellen Drucker, der immer nur eine Farbe pro Druckvorgang drucken kann. Die Farbe wird mit Maisstärke angemischt. Die goldenen Drucke entstanden als Weiterentwicklung von Analogfotografien.'
  },
  stempeldruck: {
      slides: [
          { src: '/IMG/druck/stempel/stempeldruck_blume_gelb.jpg', caption: 'Stempeldruck, Margeriten auf gelb', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_grün_1.jpg', caption: 'Stempeldruck, Buchzeichen und Karte', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_grün_2.jpg', caption: 'Stempeldruck, Buchzeichen und Buch', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_rotgrün.jpg', caption: 'Stempeldruck, Notizhefte', type: 'image' }
      ],
      description: 'Das sind Stempeldrucke. Die Stempel habe ich selbst gezeichnet und aus einer Gummimatte geschnitzt. Diese kann ich nun immer wieder verwenden und für diverse Drucke nutzen.'
  },
  flatbook: {
      slides: [
          { src: '/IMG/flatbook/buchfächer.jpg', caption: 'Flatbook, Buchfächer', type: 'image' },
          { src: '/IMG/flatbook/buchoffen_1.jpg', caption: 'Flatbook, Inhaltseiten', type: 'image' },
          { src: '/IMG/flatbook/buchoffen_2.jpg', caption: 'Flatbook, Inhaltseiten 2', type: 'image' },
          { src: '/IMG/flatbook/buchoffen_3.jpg', caption: 'Flatbook, Inhaltseiten 3', type: 'image' },
          { src: '/IMG/flatbook/buchseite_flach.jpg', caption: 'Flatbook', type: 'image' },
          { src: '/IMG/flatbook/deckseite_buch.jpg', caption: 'Deckseite, Druck mit Holzschnitt', type: 'image' }
      ],
      description: 'Das ist ein Flachbuch, das ich selbst gebunden habe. Es ist bebildert mit Waldfotos aus dem Güttinger Wald. Das Cover des Buches ist ein Holzschnittdruck eines der Bilder im Flachbuch.'
  },
  ausstellung_sa: {
    slides: [
      { src: '/IMG/ausstellung sa/ausstelltung_sa_10.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_1.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_2.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_3.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_4.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_5.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_6.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_7.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_8.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_9.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
      { src: '/IMG/ausstellung sa/ausstelltung_sa_11.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn', type: 'image' },
    ],
    description: 'Das ist die Ausstellung meiner selbständigen Arbeit an der FMS, die ein Musterbuch ist. In der Ausstellung habe ich meine Arbeit nochmals anders und neu aufgearbeitet und sie in der Kantonsschule Romanshorn präsentiert.'
  },
  toepfern_schale_blau: {
    slides: [
      { src: '/IMG/toepfern/toepfern_schale_blau_1.jpg', caption: 'Schale, innen blau mit blauem Rand', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_blau_2.jpg', caption: 'Pilz, als Signatur', type: 'image' },
    ],
    description: 'Diese Schale entstand in einem Töpferkurs in Basel. Das Anagramm des Pilzes ist seit längerer Zeit ein wichtiges Symbol für mich. In diesem Kurs lernte ich, wie man Gefäße dreht und produzierte weitere Schalen und Aschenbecher.'
  },
  toepfern_2schalen: {
    slides: [
      { src: '/IMG/toepfern/toepfern_2schalen_1.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' },
      { src: '/IMG/toepfern/toepfern_2schalen_2.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' },
      { src: '/IMG/toepfern/toepfern_2schalen_3.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' }
    ],
    description: 'Diese Schalen entstanden in einem Töpferkurs in Basel. In diesem Kurs lernte ich, wie man Gefäße dreht und produzierte weitere Schalen und Aschenbecher.'
  },
  espressotasse: {
    slides: [
      { src: '/IMG/toepfern/toepfern_espressotasse.jpg', caption: 'Espressotassen, gedreht und glasiert', type: 'image' },
    ],
    description: 'Das sind Espresso-Tassen, die ich in einem Töpferkurs in Basel gemacht habe. In diesem Kurs lernte ich, wie man Gefäße dreht und produzierte weitere Schalen und Aschenbecher.'
  },
  toepfern_schale_verschieden: {
    slides: [
      { src: '/IMG/toepfern/toepfern_schale_verschieden_1.jpg', caption: 'Schale und Kaffebecher', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_verschieden_2.jpg', caption: 'Schale und Kaffebecher', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_verschieden_3.jpg', caption: 'Schale und Kaffebecher', type: 'image' }
    ],
    description: '•	Das ist ein Kaffeebecher sowie eine kleine Schale, die ich in einem Töpferkurs in Basel gemacht habe. In diesem Kurs lernte ich, wie man Gefäße dreht und produzierte weitere Schalen und Aschenbecher.'
  },
  toepfernschalen_tropfen: {
    slides: [
      { src: '/IMG/toepfern/toepfernschalen_tropfen_1.jpg', caption: 'Schmuckgefäss und Kerzenhalter', type: 'image' },
      { src: '/IMG/toepfern/toepfernschalen_tropfen_2.jpg', caption: 'Nahaufnahme, ausgehöhlte Tropfen', type: 'image' }
    ],
    description: 'Das ist eine Kerzen- und eine Schmuckschale, die ich in einem Töpferkurs in Basel gemacht habe. In diesem Kurs lernte ich, wie man Gefäße dreht und produzierte weitere Schalen und Aschenbecher.'
  },
  karton_relief: {
    slides: [
      { src: '/IMG/Karton/Karton_relief_main.JPG', caption: 'Kartonrelief, eine abstrahierte Version von dem Ton Relief von Alberto Giacometti', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_1.JPG', caption: 'Kartonrelief, Nahaufnahme halbierte Konvexe', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_2.JPG', caption: 'Kartonrelief, front Nahaufnahme Konkave', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_3.JPG', caption: 'Kartonrelief, seitliche Nahaufnahme Konkave', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_4.JPG', caption: 'Kartonrelief, linke Seite', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_5.JPG', caption: 'Kartonrelief, Aufbau', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_6.JPG', caption: 'Kartonrelief, Aufbau der Ebenen', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_7.JPG', caption: 'Kartonrelief', type: 'image' },
      { src: '/IMG/Karton/Karton_relief_8.JPG', caption: 'Kartonrelief', type: 'image' },
    ],
    description: 'Dies ist eine Weiter¬entwicklung des Reliefs nach Vorbild eines Selbportrait von Alber-to Giacometti im Bezug zur Räumlichkeit. Dabei spielte ich mit dem Dar¬stellen des Gesischts, reduziert auf einzelne Ebenen. Das gleiche Gesicht, die gleiche Person kann durch eine konvexe und eine kon¬kave Darstellung ganz anders wahrgenommen '
  },
  alberto_giacometti_relief: {
    slides: [
      { src: '/IMG/Ton/alberto/alberto_giacometti_relief.jpg', caption: 'Tonrelief nach Selbstportrait von Alberto Giacometti', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_1.jpg', caption: 'Tonrelief, im Arbeitsprozess 1', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_2.jpg', caption: 'Tonrelief, im Arbeitsprozess 2', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_3.jpg', caption: 'Tonrelief, im Arbeitsprozess 3', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_4.jpg', caption: 'Tonrelief, im Arbeitsprozess 4', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_5.jpg', caption: 'Tonrelief, im Arbeitsprozess 5', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_6.jpg', caption: 'Tonrelief, im Arbeitsprozess 6', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_7.jpg', caption: 'Tonrelief, im Arbeitsprozess 7', type: 'image' },
      { src: '/IMG/Ton/alberto/relief_prozess_8.jpg', caption: 'Tonrelief, im Arbeitsprozess 8', type: 'image' }
    ],
    description: 'Das ist ein Tonrelief, basierend auf einem Selbstporträt des Schweizer Künstlers Alberto Giacometti. Bei Plastiken baut man das Bild auf, im Gegensatz zu Skulpturen, bei denen Material von einem Block abgetragen wird.'
  },
  vollplastik: {
    slides: [
      { src: '/IMG/Ton/vollplastik/vollplastik_main.jpg', caption: 'Abstrahierte Vollplastik basierend auf dem Tonrelief von Alberto Giacometti', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_1.jpg', caption: 'Vollplastik, 1', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_2.jpg', caption: 'Vollplastik, 2', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_3.jpg', caption: 'Vollplastik, 3', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_4.jpg', caption: 'Vollplastik, 4', type: 'image' },
    ],
    description: 'Das ist eine abstrahierte Vollplastik, eine Weiterentwicklung des Tonreliefs von Alberto Giacometti. Dabei habe ich auf die markantesten Gesichtspartien geachtet und sie verstärkt. Eine Seite gestaltete ich spitziger, die andere abgerundeter, um einen starken Kontrast zu erreichen.'
  },
  portrait_storren_schwarz_weiss: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/portrait_storren_schwarz_weiss.jpg', caption: 'Selbstportrait, Sonnenaufgang', type: 'image' },
     ],
    description: 'Das sind Selbstporträts, die ich mit meiner Digitalkamera Nikon D5300 in meinem Zimmer bei Sonnenaufgang gemacht habe. Diese habe ich in Photoshop weiter bearbeitet, um das Profil, das durch die einseitige Beleuchtung hervorgehoben wurde, noch mehr herauszuarbeiten.'
  },
  portrait_zwei_Gesichter: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/portrait_zwei_Gesichter.jpg', caption: 'Selbstportrait, einseitige Belichtung', type: 'image' },
     ],
    description: 'Das sind Selbstporträts, die ich mit meiner Digitalkamera Nikon D5300 in meinem Zimmer bei Sonnenaufgang gemacht habe. Diese habe ich in Photoshop weiter bearbeitet, um das Profil, das durch die einseitige Beleuchtung hervorgehoben wurde, noch mehr herauszuarbeiten.'
  },
  vier_bilder_schwarz_weiss: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/vier_bilder_schwarz_weiss.jpg', caption: 'Selbstportrait im Kreislauf', type: 'image' },
    ],
    description: 'Das sind Selbstporträts, die ich mit meiner Digitalkamera Nikon D5300 in meinem Zimmer bei Sonnenaufgang gemacht habe. Diese habe ich in Photoshop weiter bearbeitet, um das Profil, das durch die einseitige Beleuchtung hervorgehoben wurde, noch mehr herauszuarbeiten.'
  },
  
    kohle_hand: {
      slides: [
        { src: '/IMG/Kohle/kohle_hand.png', caption: 'Linke Hand in 20 Minuten', type: 'image' },
        { src: '/VIDEO/Hand_1.MOV', caption: 'Linke Hand in 20 Minuten', type: 'video' }
      ],
      description: 'Diese Hand habe ich mit Kohle gezeichnet. Im Video sieht man meine Herangehensweise, wenn ich etwas schnell zeichnen möchte. Ich konzentriere mich immer auf die Schatten.'
    },
    tube: {
      slides: [
        { src: '/IMG/tube/tube_8.jpg', caption: 'Tube aus Ytong', type: 'image' },
    { src: '/IMG/tube/tube_1.jpg', caption: 'Tube aus Ytong, 2', type: 'image' },
    { src: '/IMG/tube/tube_2.jpg', caption: 'Tube aus Ytong, 3', type: 'image' },
    { src: '/IMG/tube/tube_3.jpg', caption: 'Tube aus Ytong, 4', type: 'image' },
    { src: '/IMG/tube/tube_4.jpg', caption: 'Tube aus Ytong, 5', type: 'image' },
    { src: '/IMG/tube/tube_5.jpg', caption: 'Tube aus Ytong, 6', type: 'image' },
    { src: '/IMG/tube/tube_6.jpg', caption: 'Tube aus Ytong, 8', type: 'image' },
    { src: '/IMG/tube/tube_7.jpg', caption: 'Tube aus Ytong, 9', type: 'image' },
    { src: '/IMG/tube/tube_prozess_1.jpg', caption: 'Ytongblock im Prozess zur Tube', type: 'image' },
    { src: '/IMG/tube/tube_prozess_2.jpg', caption: 'Ytongblock im Prozess zur Tube, 1', type: 'image' },
    { src: '/IMG/tube/tube_prozess_3.jpg', caption: 'Ytongblock im Prozess zur Tube, 2', type: 'image' },
    { src: '/IMG/tube/tube_prozess_4.jpg', caption: 'Ytongblock im Prozess zur Tube, 3', type: 'image' },
    { src: '/IMG/tube/tube_prozess_5.jpg', caption: 'Ytongblock im Prozess zur Tube, 4', type: 'image' },
    { src: '/IMG/tube/tube_prozess_6.jpg', caption: 'Ytongblock im Prozess zur Tube, 5', type: 'image' },
    { src: '/IMG/tube/tube_prozess_7.jpg', caption: 'Ytongblock im Prozess zur Tube, 6', type: 'image' },
    { src: '/IMG/tube/tube_prozess_8.jpg', caption: 'Ytongblock im Prozess zur Tube, 7', type: 'image' },
    { src: '/IMG/tube/tube_prozess_9.jpg', caption: 'Ytongblock im Prozess zur Tube, 8', type: 'image' },
    { src: '/IMG/tube/tube_prozess_10.jpg', caption: 'Ytongblock im Prozess zur Tube, 9', type: 'image' },
    { src: '/IMG/tube/tube_prozess_11.jpg', caption: 'Ytongblock im Prozess zur Tube, 10', type: 'image' },
    { src: '/IMG/tube/tube_prozess_12.jpg', caption: 'Ytongblock im Prozess zur Tube, 11', type: 'image' },
    { src: '/IMG/tube/tube_prozess_13.jpg', caption: 'Ytongblock im Prozess zur Tube, 12', type: 'image' },
    { src: '/IMG/tube/tube_prozess_14.jpg', caption: 'Ytongblock im Prozess zur Tube, 13', type: 'image' },
    { src: '/IMG/tube/tube_prozess_15.jpg', caption: 'Ytongblock im Prozess zur Tube, 14', type: 'image' },
    { src: '/IMG/tube/tube_prozess_16.jpg', caption: 'Ytongblock im Prozess zur Tube, 15', type: 'image' },
    { src: '/IMG/tube/tube_prozess_17.jpg', caption: 'Ytongblock im Prozess zur Tube, 16', type: 'image' },
    { src: '/IMG/tube/tube_prozess_18.jpg', caption: 'Ytongblock im Prozess zur Tube, 17', type: 'image' },
    { src: '/IMG/tube/tube_prozess_19.jpg', caption: 'Ytongblock im Prozess zur Tube, 18', type: 'image' },
    { src: '/IMG/tube/tube_prozess_20.jpg', caption: 'Ytongblock im Prozess zur Tube, 19', type: 'image' },
    { src: '/IMG/tube/tube_prozess_21.jpg', caption: 'Ytongblock im Prozess zur Tube, 20', type: 'image' },
    { src: '/IMG/tube/tube_prozess_22.jpg', caption: 'Ytongblock im Prozess zur Tube, 21', type: 'image' },
    { src: '/IMG/tube/tube_prozess_23.jpg', caption: 'Ytongblock im Prozess zur Tube, 22', type: 'image' },
    { src: '/IMG/tube/tube_prozess_24.jpg', caption: 'Ytongblock im Prozess zur Tube, 23', type: 'image' },
    { src: '/IMG/tube/tube_prozess_25.jpg', caption: 'Ytongblock im Prozess zur Tube, 24', type: 'image' },

      ],
      description: 'Dieses Projekt zeigt die Auseinandersetzung mit einem Alltagsgegenstand. Zeichnerische sowie plastische Studien halfen mir, ein Verständnis für das Volumen der Tube zu bekommen. Das Endprodukt ist eine Ytong-Tube, die im hinteren Teil ausgewaschen und im vorderen Teil mit gefüllten Poren versehen ist.'
    },
    Lichtzeichnen_1: {
      slides: [
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_1.JPG', caption: 'Lichtzeichnung in Tiefgarage', type: 'image' },
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_2.JPG', caption: 'Lichtzeichnung in Tiefgarage 2', type: 'image' },
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_3.JPG', caption: 'Lichtzeichnung in Tiefgarage 3', type: 'image' },
      ],
      description: 'Bei dieser Fotoserie habe ich mich mit Lichtzeichnungen und langer Belichtungszeit auseinandergesetzt.'
    },

    Eckige_Schrift: {
      slides: [
        { src: '/IMG/schrift_eckigefont/Eckige_Schrift.jpg', caption: 'Eckige Schrift', type: 'image' },
      ],
      description: 'Diese Schrift habe ich selbst aus einem zufällig aufgezeichneten Raster entwickelt. Sie wirkt sehr geometrisch, ist aber leider nicht gut leserlich.'
    },

    liegend_bag: {
      slides: [
        { src: '/IMG/sketching/bag/liegend_bag.jpg', caption: 'liegender Bag', type: 'image' },
        { src: '/IMG/sketching/bag/liegend_bag2.jpg', caption: 'liegender Bag 2', type: 'image' },
      ],
      description: 'Das war eine Übung für das perspektivischen Zeichnen'
    },

    kopfsketch: {
      slides: [
        { src: '/IMG/sketching/kopf/kopfsketch.jpg', caption: 'Sketch von Kopfstatue', type: 'image' },
      ],
      description: 'Das ist das Resultat einer Übung, in der ich verschiedene Schraffurarten ausprobierte.'
    },
    schraffur_skull: {
      slides: [
        { src: '/IMG/sketching/skull/schraffur_skull.jpg', caption: 'Schraffur Schädel', type: 'image' },
      ],
      description: 'Das ist das Resultat einer Übung, in der ich verschiedene Schraffurarten ausprobierte.'
    },
    drache_kribbel_sketch: {
      slides: [
        { src: '/IMG/sketching/steindrachen/drache_kribbel_sketch.jpg', caption: 'Kribbel Drache', type: 'image' },
      ],
      description: 'Das ist das Resultat einer Übung, in der ich verschiedene Schraffurarten ausprobierte.'
    },
    vogel_skribbel_sketch: {
      slides: [
        { src: '/IMG/sketching/steindrachen/vogel_skribbel_sketch.jpg', caption: 'flaternder Vogel', type: 'image' },
      ],
      description: 'Das ist das Resultat einer Übung, in der ich verschiedene Schraffurarten ausprobierte.'
    },
    plattencover: {
      slides: [
        { src: '/IMG/Illustrator/plattencover_1.jpg', caption: 'Plattencover für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_2.png', caption: '1. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_3.png', caption: '2. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_4.png', caption: '3. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_5.png', caption: '4. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
    
      ],
      description: 'Das ist das Plattencover, das ich für das Lied "Love is the Devil" designt habe.'
    },
    Champignon: {
      slides: [
        { src: '/IMG/Illustrator/Pilzplakat mit drip und anerii blau.jpg', caption: 'Cuiller les Champignon', type: 'image' },
      ],
      description: 'Das ist eine Weiterentwicklung einer Pastellkreidezeichnung, die ich im Adobe Illustrator umgesetzt habe.'
    },
    oelgesicht_1: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_1.jpg', caption: 'Gesicht mit Ölkreide, angry', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_2.jpg', caption: 'Gesicht mit Ölkreide, sad', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Ölkreide.'
    },
    oelgesicht_3: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_3.jpg', caption: 'Gesicht mit Ölkreide, warm', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_4.jpg', caption: 'Gesicht mit Ölkreide, cold', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Ölkreide.'
    },
    oelgesicht_5: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_5.jpg', caption: 'Gesicht mit Ölkreide, long face yellow', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_6.jpg', caption: 'Gesicht mit Ölkreide, long face red', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Ölkreide.'
    },
    pilzplakat_drip: {
      slides: [
        { src: '/IMG/Illustrator/pilzplakat_drip.jpg', caption: 'Pilzli Drip', type: 'image' },
        { src: '/IMG/Illustrator/Pilzplakat.jpg', caption: 'Pilzli ohne Drip', type: 'image' },
      ],
      description: 'Das ist eine Weiterentwicklung einer Pastellkreidezeichnung, die ich im Adobe Illustrator umgesetzt habe.'
    },
    gips_schwarzlicht: {
      slides: [
        { src: '/IMG/gips/gips_schwarzlicht_2.jpg', caption: 'Schwarzlicht Wald', type: 'image' },
        { src: '/IMG/gips/gips_schwarzlicht_1.jpg', caption: 'Schwarzlicht Wald, 2', type: 'image' },
        { src: '/IMG/gips/gips_schwarzlicht_3.jpg', caption: 'Schwarzlicht Wald, 3', type: 'image' },
        { src: '/IMG/gips/gips_guss_1.jpg', caption: 'Gipsguss, 1', type: 'image' },
        { src: '/IMG/gips/gips_guss_2.jpg', caption: 'Gipsguss, 2', type: 'image' },
        { src: '/IMG/gips/gips_guss_3.jpg', caption: 'Gipsguss, 3', type: 'image' },
        { src: '/IMG/gips/gips_angemalt_1.jpg', caption: 'Gips angemalt, 1', type: 'image' },
        { src: '/IMG/gips/gips_angemalt_2.jpg', caption: 'Gips angemalt, 2', type: 'image' },
      ],
      description: 'Dies ist eine Gipsumsetzung von einem Baumstumpf und zwei Pilzen. Dafür habe ich ein Negativ aus Ton angefertigt. Das ist sehr schwierig, da man nicht weiß, wie es aussehen wird, bis man den Guss herausgenommen hat.'
    },
   
    wachsgesicht_3: {
      slides: [
        { src: '/IMG/wachsstifte/wachsgesicht_4.jpeg', caption: 'Wachsgesicht 1', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_3.jpg', caption: 'Wachsgesicht 2', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Wachsmalstiften.'
    },
    wachsgesicht_5: {
      slides: [
        { src: '/IMG/wachsstifte/wachsgesicht_5.jpg', caption: 'Gesicht mit Wachsmalstift 1', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_1.jpg', caption: 'Gesicht mit Wachsmalstift 2', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_2.jpg', caption: 'Gesicht mit Wachsmalstift 3', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Wachsmalstiften.'
    },
    pastellgesicht_1: {
      slides: [
        { src: '/IMG/pastellkreide/pastellgesicht_1.jpg', caption: 'Pastellgesicht 1', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Pastellkreide.'
    },
    pastellgesicht_2: {
      slides: [
        { src: '/IMG/pastellkreide/pastellgesicht_2.jpg', caption: 'Pastellgesicht 2', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Pastellkreide.'
    },
    pastell_pilze: {
      slides: [
        { src: '/IMG/pastellkreide/pastell_pilze.jpg', caption: 'Pastellpilze', type: 'image' },
      ],
      description: 'Das ist eine Zeichnung von zwei Pilzen mit Pastellkreiden. Die farbliche Umsetzung erinnert mich immer an den Sonnenuntergang.'
    },
    corsett: {
      slides: [
        { src: '/IMG/corsettop/corset 2.jpg', caption: 'Corsett', type: 'image' },
        { src: '/IMG/corsettop/corset.jpg', caption: 'Corsett', type: 'image' },
        { src: '/IMG/corsettop/hose für schnitt  stoff.jpeg', caption: 'alte Hose auftrennen', type: 'image' },
        { src: '/IMG/corsettop/mindmap_corset_2.jpg', caption: 'Ideensammlung, 1', type: 'image' },
        { src: '/IMG/corsettop/mindmap_corset.jpg', caption: 'Ideensammlung, 2', type: 'image' },
        { src: '/IMG/corsettop/schnittmuster_corset.jpg', caption: 'Schnittmuster skizziert', type: 'image' },
      ],
      description: 'Diese Corsett wurde aus einer meineer alten Hose gemacht. Dazu hab ich zuerst gebrainsormt und mir überlegt, was wäre mit dem stoff der Hose überhaupt Umsetztbar. Danach steckte ich es fest und mit Kabelbindern machte ich das Gestäng für das Corsett.'
    },
    alice: {
      slides: [
        { src: '/IMG/akt/angezogen/alice.jpg', caption: 'Alice', type: 'image' },
        { src: '/IMG/akt/angezogen/basil.jpg', caption: 'Basil', type: 'image' },
        { src: '/IMG/akt/angezogen/sina.jpg', caption: 'Sina', type: 'image' },
        { src: '/IMG/akt/angezogen/marvin.jpg', caption: 'Marvin', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_2: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_2.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_17.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_3: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_3.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_4.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_11.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_12.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_1: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_1.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_13.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_14.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_15.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_5: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_5.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_6.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_7.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_16.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_8: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_8.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_9.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_10.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    akt_nude_18: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_18.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Das sind Zeichnungen, die in einem von mehreren Aktzeichnungskursen entstanden sind. Für jede Zeichnung hatten wir ca. 15 Minuten Zeit, danach wechselte die Pose.'
    },
    kohle_gesicht_5: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_5.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_4.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle.'
    },
    kohle_gesicht_2: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_2.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle.'
    },
    kohle_gesicht_9: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_9.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_7.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/VIDEO/Gesicht_1.MOV', caption: 'Gesicht mit Kohle', type: 'video' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle. Dazu sieht man im Video, wie ich beim Zeichnen vorgehe.'
    },
    kohle_gesicht_6: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_6.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_3.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle.'
    },
    kohle_gesicht_1: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_1.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle.'
    },
    kohle_gesicht_8: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_8.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Diese Gesichter habe ich ohne große Gedanken, sondern mehr aus Emotionen heraus gemalt, mit Kohle.'
    },
    kohle_nilpferd: {
      slides: [
        { src: '/IMG/Kohle/kohle_nilpferd.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Das ist eine Zeichnung eines Nilpferds, die ich mit Kohle gezeichnet habe.'
    },
    kohle_portrait: {
      slides: [
        { src: '/IMG/Kohle/kohle_portrait.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Das ist ein Selbstportrait, gezeichnet mit Kohle.'
    },
    kohle_portrait_2: {
      slides: [
        { src: '/IMG/Kohle/kohle_portrait (2).jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Das ist ein Selbstportrait, gezeichnet mit Kohle.'
    },
  };
  
  
  document.getElementById('openModalButton').addEventListener('click', function() {
    const project = 'project'; // Replace 'someProject' with the desired project
    openModal(project);
});

function openModal(project) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';

    galleries[project].slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('mySlides');
        if (index === 0) slideDiv.style.display = 'block';

        if (slide.type === 'image') {
            const img = document.createElement('img');
            img.src = slide.src;
            img.alt = slide.caption;
            slideDiv.appendChild(img);
        } else if (slide.type === 'video') {
            const video = document.createElement('video');
            video.src = slide.src;
            video.alt = slide.caption;
            video.controls = true;
            slideDiv.appendChild(video);
        }
        modalContent.appendChild(slideDiv);
    });

    document.getElementById('description').innerText = galleries[project].description;
    document.getElementById('myModal').style.display = 'block';
    slideIndex = 1;
    showSlides(slideIndex); // Display the first slide
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    const caption = slides[slideIndex - 1].getElementsByTagName('img')[0].alt;
    document.getElementById('caption').innerText = caption;
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


