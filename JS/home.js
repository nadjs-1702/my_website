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
      description: 'Hier Beschreibung für Pilzwald.'
  },
  polandpregnancy: {
      slides: [
          { src: '/IMG/acryl/polandpregnancy.jpg', caption: 'Poland Pregnancy', type: 'image' },
      ],
      description: 'Hier Beschreibung für Poland Pregnancy.'
  },
  blumenfingermalen: {
      slides: [
          { src: '/IMG/acryl/blumenfingermalen.jpg', caption: 'Blumenstillleben, Fingermalerei', type: 'image' },
      ],
      description: 'Hier Beschreibung für Blumenfingermalen.'
  },
  rainbowpilz: {
      slides: [
          { src: '/IMG/mushroom/rainbowpilz.jpg', caption: 'Rainbowpilz', type: 'image' },
      ],
      description: 'Hier Beschreibung für Rainbow Pilz.'
  },
  viel_pilzemitgesicht: {
      slides: [
          { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Nature Photo 1', type: 'image' },
      ],
      description: 'Hier Beschreibung für Viel Pilze mit Gesicht.'
  },
  kleinerpilzbiglips: {
      slides: [
          { src: '/IMG/mushroom/kleinerpilzbiglips.jpg', caption: 'klein Pilz, big Lips', type: 'image' },
      ],
      description: 'Hier Beschreibung für Kleiner Pilz Big Lips.'
  },
  viel_pilze: {
      slides: [
          { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Underwater Photo 1', type: 'image' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
  },
  collage1: {
      slides: [
          { src: '/IMG/collage/collage1.jpg', caption: 'Collage 1', type: 'image' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
  },
  collage2: {
      slides: [
          { src: '/IMG/collage/collage2.jpg', caption: 'Collage 2', type: 'image' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
  },
  collage3: {
      slides: [
          { src: '/IMG/collage/collage3.jpeg', caption: 'Collage 3', type: 'image' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
  },
  risodruck: {
      slides: [
          { src: '/IMG/druck/Risodruck/Tobi_risodruck.jpg', caption: 'Tobi, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/alicia_risodruck.jpg', caption: 'Alicia, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/eva_risodruck.jpg', caption: 'Eva, Analogfoto zu Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/risodruck.jpg', caption: 'Risodruck', type: 'image' },
          { src: '/IMG/druck/Risodruck/risodruck2.jpg', caption: 'Eva, Analogfoto zu Risodruck', type: 'image' },
      ],
      description: 'Hier Beschreibung für Risodruck.'
  },
  stempeldruck: {
      slides: [
          { src: '/IMG/druck/stempel/stempeldruck_blume_gelb.jpg', caption: 'Stempeldruck, Margeriten auf gelb', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_grün_1.jpg', caption: 'Stempeldruck, Buchzeichen und Karte', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_grün_2.jpg', caption: 'Stempeldruck, Buchzeichen und Buch', type: 'image' },
          { src: '/IMG/druck/stempel/stempeldruck_rotgrün.jpg', caption: 'Stempeldruck, Notizhefte', type: 'image' }
      ],
      description: 'Hier Beschreibung für Stempeldruck.'
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
      description: 'Hier Beschreibung für Flatbook.'
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
    description: 'Hier Beschreibung für Ausstellung SA.'
  },
  toepfern_schale_blau: {
    slides: [
      { src: '/IMG/toepfern/toepfern_schale_blau_1.jpg', caption: 'Schale, innen blau mit blauem Rand', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_blau_2.jpg', caption: 'Pilz, als Signatur', type: 'image' },
    ],
    description: 'Hier Beschreibung für Töpfern Schale Blau.'
  },
  toepfern_2schalen: {
    slides: [
      { src: '/IMG/toepfern/toepfern_2schalen_1.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' },
      { src: '/IMG/toepfern/toepfern_2schalen_2.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' },
      { src: '/IMG/toepfern/toepfern_2schalen_3.jpg', caption: 'Schalen, gedreht und glasiert', type: 'image' }
    ],
    description: 'Hier Beschreibung für Töpfern 2 Schalen.'
  },
  espressotasse: {
    slides: [
      { src: '/IMG/toepfern/toepfern_espressotasse.jpg', caption: 'Espressotassen, gedreht und glasiert', type: 'image' },
    ],
    description: 'Hier Beschreibung für Espressotasse.'
  },
  toepfern_schale_verschieden: {
    slides: [
      { src: '/IMG/toepfern/toepfern_schale_verschieden_1.jpg', caption: 'Schale und Kaffebecher', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_verschieden_2.jpg', caption: 'Schale und Kaffebecher', type: 'image' },
      { src: '/IMG/toepfern/toepfern_schale_verschieden_3.jpg', caption: 'Schale und Kaffebecher', type: 'image' }
    ],
    description: 'Hier Beschreibung für Töpfern Schale Verschieden.'
  },
  toepfernschalen_tropfen: {
    slides: [
      { src: '/IMG/toepfern/toepfernschalen_tropfen_1.jpg', caption: 'Schmuckgefäss und Kerzenhalter', type: 'image' },
      { src: '/IMG/toepfern/toepfernschalen_tropfen_2.jpg', caption: 'Nahaufnahme, ausgehöhlte Tropfen', type: 'image' }
    ],
    description: 'Hier Beschreibung für Töpfern Schalen Tropfen.'
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
    description: 'Hier Beschreibung für Karton Relief.'
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
    description: 'Hier Beschreibung für Alberto Giacometti Relief.'
  },
  vollplastik: {
    slides: [
      { src: '/IMG/Ton/vollplastik/vollplastik_main.jpg', caption: 'Abstrahierte Vollplastik basierend auf dem Tonrelief von Alberto Giacometti', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_1.jpg', caption: 'Vollplastik, 1', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_2.jpg', caption: 'Vollplastik, 2', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_3.jpg', caption: 'Vollplastik, 3', type: 'image' },
      { src: '/IMG/Ton/vollplastik/vollplastik_4.jpg', caption: 'Vollplastik, 4', type: 'image' },
    ],
    description: 'Hier Beschreibung für Vollplastik.'
  },
  portrait_storren_schwarz_weiss: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/portrait_storren_schwarz_weiss.jpg', caption: 'Selbstportrait, Sonnenaufgang', type: 'image' },
     ],
    description: 'Hier Beschreibung für Body Hell.'
  },
  portrait_zwei_Gesichter: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/portrait_zwei_Gesichter.jpg', caption: 'Selbstportrait, einseitige Belichtung', type: 'image' },
     ],
    description: 'Hier Beschreibung für Body Dunkel 1.'
  },
  vier_bilder_schwarz_weiss: {
    slides: [
      { src: '/IMG/schwarzweiss_portrait/vier_bilder_schwarz_weiss.jpg', caption: 'Selbstportrait im Kreislauf', type: 'image' },
    ],
    description: 'Hier Beschreibung für Body Dunkel 2.'
  },
  
    kohle_hand: {
      slides: [
        { src: '/IMG/Kohle/kohle_hand.png', caption: 'Pilzwald', type: 'image' },
        { src: '/VIDEO/Hand_1.MOV', caption: 'Linke Hand in 20 Minuten', type: 'video' }
      ],
      description: 'Hier Beschreibung für Pilzwald.'
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
      description: 'Hier Beschreibung für Tube.'
    },
    Lichtzeichnen_1: {
      slides: [
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_1.JPG', caption: 'Lichtzeichnung in Tiefgarage', type: 'image' },
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_2.JPG', caption: 'Lichtzeichnung in Tiefgarage 2', type: 'image' },
        { src: '/IMG/LAngebelichtungszeit/Lichtzeichnen_3.JPG', caption: 'Lichtzeichnung in Tiefgarage 3', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 1.'
    },

    Eckige_Schrift: {
      slides: [
        { src: '/IMG/schrift_eckigefont/Eckige_Schrift.jpg', caption: 'Eckige Schrift', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },

    liegend_bag: {
      slides: [
        { src: '/IMG/sketching/bag/liegend_bag.jpg', caption: 'liegender Bag', type: 'image' },
        { src: '/IMG/sketching/bag/liegend_bag2.jpg', caption: 'liegender Bag 2', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },

    kopfsketch: {
      slides: [
        { src: '/IMG/sketching/kopf/kopfsketch.jpg', caption: 'Sketch von Kopfstatue', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    schraffur_skull: {
      slides: [
        { src: '/IMG/sketching/skull/schraffur_skull.jpg', caption: 'Schraffur Schädel', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    drache_kribbel_sketch: {
      slides: [
        { src: '/IMG/sketching/steindrachen/drache_kribbel_sketch.jpg', caption: 'Kribbel Drache', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    vogel_skribbel_sketch: {
      slides: [
        { src: '/IMG/sketching/steindrachen/vogel_skribbel_sketch.jpg', caption: 'flaternder Vogel', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    plattencover: {
      slides: [
        { src: '/IMG/Illustrator/plattencover_1.jpg', caption: 'Plattencover für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_2.png', caption: '1. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_3.png', caption: '2. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_4.png', caption: '3. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
        { src: '/IMG/Illustrator/plattencover_5.png', caption: '4. alternativ Version des Plattencovers für Song "Love is the Devil"', type: 'image' },
    
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    Champignon: {
      slides: [
        { src: '/IMG/Illustrator/Pilzplakat mit drip und anerii blau.jpg"', caption: 'Cuiller les Champignon', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    oelgesicht_1: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_1.jpg', caption: 'Gesicht mit Ölkreide, angry', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_2.jpg', caption: 'Gesicht mit Ölkreide, sad', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    oelgesicht_3: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_3.jpg', caption: 'Gesicht mit Ölkreide, warm', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_4.jpg', caption: 'Gesicht mit Ölkreide, cold', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    oelgesicht_5: {
      slides: [
        { src: '/IMG/oelkreide/ölgesicht_5.jpg', caption: 'Gesicht mit Ölkreide, long face yellow', type: 'image' },
        { src: '/IMG/oelkreide/ölgesicht_6.jpg', caption: 'Gesicht mit Ölkreide, long face red', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    pilzplakat_drip: {
      slides: [
        { src: '/IMG/Illustrator/pilzplakat_drip.jpg', caption: 'Pilzli Drip', type: 'image' },
        { src: '/IMG/Illustrator/Pilzplakat.jpg', caption: 'Pilzli ohne Drip', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
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
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
   
    wachsgesicht_3: {
      slides: [
        { src: '/IMG/wachsstifte/wachsgesicht_4.jpeg', caption: 'Wachsgesicht 1', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_3.jpg', caption: 'Wachsgesicht 2', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    wachsgesicht_5: {
      slides: [
        { src: '/IMG/wachsstifte/wachsgesicht_5.jpg', caption: 'Gesicht mit Wachsmalstift 1', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_1.jpg', caption: 'Gesicht mit Wachsmalstift 2', type: 'image' },
        { src: '/IMG/wachsstifte/wachsgesicht_2.jpg', caption: 'Gesicht mit Wachsmalstift 3', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    pastellgesicht_1: {
      slides: [
        { src: '/IMG/pastellkreide/pastellgesicht_1.jpg', caption: 'Pastellgesicht 1', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    pastellgesicht_2: {
      slides: [
        { src: '/IMG/pastellkreide/pastellgesicht_2.jpg', caption: 'Pastellgesicht 2', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    pastell_pilze: {
      slides: [
        { src: '/IMG/pastellkreide/pastell_pilze.jpg', caption: 'Pastellpilze', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
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
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    alice: {
      slides: [
        { src: '/IMG/akt/angezogen/alice.jpg', caption: 'Alice', type: 'image' },
        { src: '/IMG/akt/angezogen/basil.jpg', caption: 'Basil', type: 'image' },
        { src: '/IMG/akt/angezogen/sina.jpg', caption: 'Sina', type: 'image' },
        { src: '/IMG/akt/angezogen/marvin.jpg', caption: 'Marvin', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_2: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_2.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_17.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_3: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_3.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_4.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_11.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_12.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_1: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_1.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_13.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_14.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_15.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_5: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_5.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_6.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_7.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_16.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_8: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_8.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_9.jpg', caption: 'Aktzeichenen', type: 'image' },
        { src: '/IMG/akt/nude/akt_nude_10.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    akt_nude_18: {
      slides: [
        { src: '/IMG/akt/nude/akt_nude_18.jpg', caption: 'Aktzeichenen', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_5: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_5.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_4.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_2: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_2.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_9: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_9.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_7.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/VIDEO/Gesicht_1.MOV', caption: 'Gesicht mit Kohle', type: 'video' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_6: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_6.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
        { src: '/IMG/Kohle/kohle_kopf_3.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_1: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_1.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_gesicht_8: {
      slides: [
        { src: '/IMG/Kohle/kohle_kopf_8.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_nilpferd: {
      slides: [
        { src: '/IMG/Kohle/kohle_nilpferd.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_portrait: {
      slides: [
        { src: '/IMG/Kohle/kohle_portrait.jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    kohle_portrait_2: {
      slides: [
        { src: '/IMG/Kohle/kohle_portrait (2).jpg', caption: 'Gesicht mit Kohle', type: 'image' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
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