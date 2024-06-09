
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
        { src: '/IMG/acryl/pilzacrylganz.jpg', caption: 'Pilzwald' },
        { src: '/IMG/acryl/pilzacrylnahe_1.jpg', caption: 'Pilzwald Nahaufnahme 1' },
        { src: '/IMG/acryl/pilzacrylnahe_2.jpg', caption: 'Pilzwald Nahaufnahme 2' }
      ],
      description: 'Hier Beschreibung für Pilzwald.'
    },
    polandpregnancy: {
      slides: [
        { src: '/IMG/acryl/polandpregnancy.jpg', caption: 'Poland Pregnancy' },
        { src: 'rocks2.jpg', caption: 'Rocks Photo 2' },
        { src: 'rocks3.jpg', caption: 'Rocks Photo 3' }
      ],
      description: 'Hier Beschreibung für Poland Pregnancy.'
    },
    blumenfingermalen: {
      slides: [
        { src: '/IMG/acryl/blumenfingermalen.jpg', caption: 'Blumenstillleben, Fingermalerei' },
      ],
      description: 'Hier Beschreibung für Blumenfingermalen.'
    },
    rainbowpilz: {
      slides: [
        { src: '/IMG/mushroom/rainbowpilz.jpg', caption: 'Rainbowpilz' },
      ],
      description: 'Hier Beschreibung für Rainbow Pilz.'
    },
    viel_pilzemitgesicht: {
      slides: [
        { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Nature Photo 1' },
      ],
      description: 'Hier Beschreibung für Viel Pilze mit Gesicht.'
    },
    kleinerpilzbiglips: {
      slides: [
        { src: '/IMG/mushroom/kleinerpilzbiglips.jpg', caption: 'klein Pilz, big Lips' },
      ],
      description: 'Hier Beschreibung für Kleiner Pilz Big Lips.'
    },
    viel_pilze: {
      slides: [
        { src: '/IMG/mushroom/viel_pilzemitgesicht.jpg', caption: 'Underwater Photo 1' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
      
    },
    collage1: {
      slides: [
        { src: '/IMG/collage/collage1.jpg', caption: 'Collage 1' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
      
    },
    collage2: {
      slides: [
        { src: '/IMG/collage/collage2.jpg', caption: 'Collage 2' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
      
    },
    collage3: {
      slides: [
        { src: '/IMG/collage/collage3.jpeg', caption: 'Collage 3' },
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
      
    },
    risodruck: {
      slides: [
        { src: '/IMG/druck/Risodruck/Tobi_risodruck.jpg', caption: 'Tobi, Analogfoto zu Risodruck' },
        { src: '/IMG/druck/Risodruck/alicia_risodruck.jpg', caption: 'Alicia, Analogfoto zu Risodruck' },
        { src: '/IMG/druck/Risodruck/eva_risodruck.jpg', caption: 'Eva, Analogfoto zu Risodruck' },
        { src: '/IMG/druck/Risodruck/risodruck.jpg', caption: 'Risodruck' },
        { src: '/IMG/druck/Risodruck/risodruck2.jpg', caption: 'Eva, Analogfoto zu Risodruck' },
      ],
      description: 'Hier Beschreibung für Risodruck.'
    },
    stempeldruck: {
      slides: [
        { src: '/IMG/druck/stempel/stempeldruck_blume_gelb.jpg', caption: 'Stempeldruck, Margeriten auf gelb' },
        { src: '/IMG/druck/stempel/stempeldruck_grün_1.jpg', caption: 'Stempeldruck, Buchzeichen und Karte' },
        { src: '/IMG/druck/stempel/stempeldruck_grün_2.jpg', caption: 'Stempeldruck, Buchzeichen und Buch' },
        { src: '/IMG/druck/stempel/stempeldruck_rotgrün.jpg', caption: 'Stempeldruck, Notizhefte' }
      ],
      description: 'Hier Beschreibung für Stempeldruck.'
    },
    flatbook: {
      slides: [
        { src: '/IMG/flatbook/buchfächer.jpg', caption: 'Flatbook, Buchfächer' },
        { src: '/IMG/flatbook/buchoffen_1.jpg', caption: 'Flatbook, Inhaltseiten' },
        { src: '/IMG/flatbook/buchoffen_2.jpg', caption: 'Flatbook, Inhaltseiten 2' },
        { src: '/IMG/flatbook/buchoffen_3.jpg', caption: 'Flatbook, Inhaltseiten 3' },
        { src: '/IMG/flatbook/buchseite_flach.jpg', caption: 'Flatbook' },
        { src: '/IMG/flatbook7deckseite_buch.jpg', caption: 'Deckseite, Druck mit Holzschnitt' }
      ],
      description: 'Hier Beschreibung für Flatbook.'
    },
    ausstellung_sa: {
      slides: [
        { src: '/IMG/ausstellung sa/ausstelltung_sa_10.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_1.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_2.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_3.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_4.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_5.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_6.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_7.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_8.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_9.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
        { src: '/IMG/ausstellung sa/ausstelltung_sa_11.jpg', caption: 'Selbständige Arbeit FMS, Austellung in der Kantonsschule Romanshorn' },
      ],
      description: 'Hier Beschreibung für Ausstellung SA.'
    },
    toepfern_schale_blau: {
      slides: [
        { src: '/IMG/toepfern/toepfern_schale_blau_1.jpg', caption: 'Schale, innen blau mit blauem Rand' },
        { src: '/IMG/toepfern/toepfern_schale_blau_2.jpg', caption: 'Pilz, als Signatur' },
    
      ],
      description: 'Hier Beschreibung für Töpfern Schale Blau.'
    },
    toepfern_2schalen: {
      slides: [
        { src: '/IMG/toepfern/toepfern_2schalen_1.jpg', caption: 'Schalen, gedreht und glasiert' },
        { src: '/IMG/toepfern/toepfern_2schalen_2.jpg', caption: 'Schalen, gedreht und glasiert' },
        { src: '/IMG/toepfern/toepfern_2schalen_3.jpg', caption: 'Schalen, gedreht und glasiert' }
      ],
      description: 'Hier Beschreibung für Töpfern 2 Schalen.'
    },
    espressotasse: {
      slides: [
        { src: '/IMG/toepfern/toepfern_espressotasse.jpg', caption: 'Espressotassen, gedreht und glasiert' },
      ],
      description: 'Hier Beschreibung für Espressotasse.'
    },
    toepfern_schale_verschieden: {
      slides: [
        { src: '/IMG/toepfern/toepfern_schale_verschieden_1.jpg', caption: 'Schale und Kaffebecher' },
        { src: 'IMG/toepfern/toepfern_schale_verschieden_2.jpg', caption: 'Schale und Kaffebecher' },
        { src: 'IMG/toepfern/toepfern_schale_verschieden_3.jpg', caption: 'Schale und Kaffebecher' }
      ],
      description: 'Hier Beschreibung für Töpfern Schale Verschieden.'
    },
    toepfernschalen_tropfen: {
      slides: [
        { src: '/IMG/toepfern/toepfernschalen_tropfen_1.jpg', caption: 'Schmuckgefäss und Kerzenhalter' },
        { src: '/IMG/toepfern/toepfernschalen_tropfen_2.jpg', caption: 'Nahaufnahme, ausgehöhlte Tropfen' }
      ],
      description: 'Hier Beschreibung für Töpfern Schalen Tropfen.'
    },
    Karton_relief: {
      slides: [
        { src: '/IMG/Karton/Karton_relief_main.JPG', caption: 'Kartonrelief, eine abstrahierte Version von dem Ton Relief von Alberto Giacometti' },
        { src: '/IMG/Karton/Karton_relief_1.JPG', caption: 'Kartonrelief, Nahaufnahme halbierte Konvexe' },
        { src: '/IMG/Karton/Karton_relief_2.JPG', caption: 'Kartonrelief, front Nahaufnahme Konkave' },
        { src: '/IMG/Karton/Karton_relief_3.JPG', caption: 'Kartonrelief, seitliche Nahaufnahme Konkave' },
        { src: '/IMG/Karton/Karton_relief_4.JPG', caption: 'Kartonrelief, linke Seite' },
        { src: '/IMG/Karton/Karton_relief_5.JPG', caption: 'Kartonrelief, Aufbau' },
        { src: '/IMG/Karton/Karton_relief_6.JPG', caption: 'Kartonrelief, Aufbau der Ebenen' },
        { src: '/IMG/Karton/Karton_relief_7.JPG', caption: 'Kartonrelief' },
        { src: '/IMG/Karton/Karton_relief_8.JPG', caption: 'Kartonrelief' },
      ],
      description: 'Hier Beschreibung für Karton Relief.'
    },
    alberto_giacometti_relief: {
      slides: [
        { src: '/IMG/Ton/alberto/alberto_giacometti_relief.jpg', caption: 'Tonrelief nach Selbstportrait von Alberto Giacometti' },
        { src: '/IMG/Ton/alberto/relief_prozess_1.jpg', caption: 'Tonrelief, im Arbeitsprozess 1' },
        { src: '/IMG/Ton/alberto/relief_prozess_2.jpg', caption: 'Tonrelief, im Arbeitsprozess 2' },
        { src: '/IMG/Ton/alberto/relief_prozess_3.jpg', caption: 'Tonrelief, im Arbeitsprozess 3' },
        { src: '/IMG/Ton/alberto/relief_prozess_4.jpg', caption: 'Tonrelief, im Arbeitsprozess 4' },
        { src: '/IMG/Ton/alberto/relief_prozess_5.jpg', caption: 'Tonrelief, im Arbeitsprozess 5' },
        { src: '/IMG/Ton/alberto/relief_prozess_6.jpg', caption: 'Tonrelief, im Arbeitsprozess 6' },
        { src: '/IMG/Ton/alberto/relief_prozess_7.jpg', caption: 'Tonrelief, im Arbeitsprozess 7' },
        { src: '/IMG/Ton/alberto/relief_prozess_8.jpg', caption: 'Tonrelief, im Arbeitsprozess 8' }
      ],
      description: 'Hier Beschreibung für Alberto Giacometti Relief.'
    },
    vollplastik: {
      slides: [
        { src: '/IMG/Ton/vollplastik/vollplastik_main.jpg', caption: 'Abstrahierte Vollplastik basierend auf dem Tonrelief von Alberto Giacometti' },
        { src: '/IMG/Ton/vollplastik/vollplastik_1.jpg', caption: 'Vollplastik, 1' },
        { src: '/IMG/Ton/vollplastik/vollplastik_2.jpg', caption: 'Vollplastik, 2' },
        { src: '/IMG/Ton/vollplastik/vollplastik_3.jpg', caption: 'Vollplastik, 3' },
        { src: '/IMG/Ton/vollplastik/vollplastik_4.jpg', caption: 'Vollplastik, 4' },
      ],
      description: 'Hier Beschreibung für Vollplastik.'
    },
    portrait_storren_schwarz_weiss: {
      slides: [
        { src: '/IMG/schwarzweiss_portrait/portrait_storren_schwarz-weiss.jpg', caption: 'Selbstportrait, Sonnenaufgang' },
       ],
      description: 'Hier Beschreibung für Body Hell.'
    },
    portrait_zwei_Gesichter: {
      slides: [
        { src: '/IMG/schwarzweiss_portrait/portrait_zwei_Gesichter.jpg', caption: 'Selbstportrait, einseitige Belichtung' },
       ],
      description: 'Hier Beschreibung für Body Dunkel 1.'
    },
    vier_bilder_schwarz_weiss: {
      slides: [
        { src: '/IMG/schwarzweiss_portrait/vier_bilder_schwarz_weiss.jpg', caption: 'Selbstportrait im Kreislauf' },
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    tube: {
      slides: [
        { src: '/IMG/tube/tube_8.jpg', caption: 'Tube aus Ytong' },
        { src: '/IMG/tube/tube_1.jpg', caption: 'Tube aus Ytong, 2' },
        { src: '/IMG/tube/tube_2.jpg', caption: 'Tube aus Ytong, 3' },
        { src: '/IMG/tube/tube_3.jpg', caption: 'Tube aus Ytong, 4' },
        { src: '/IMG/tube/tube_4.jpg', caption: 'Tube aus Ytong, 5' },
        { src: '/IMG/tube/tube_5.jpg', caption: 'Tube aus Ytong, 6' },
        { src: '/IMG/tube/tube_6.jpg', caption: 'Tube aus Ytong, 8' },
        { src: '/IMG/tube/tube_7.jpg', caption: 'Tube aus Ytong, 9' },
        { src: '/IMG/tube/tube_prozess_1.jpg', caption: 'Ytongblock im Prozess zur Tube' },
        { src: '/IMG/tube/tube_prozess_2.jpg', caption: 'Ytongblock im Prozess zur Tube, 1' },
        { src: '/IMG/tube/tube_prozess_3.jpg', caption: 'Ytongblock im Prozess zur Tube, 2' },
        { src: '/IMG/tube/tube_prozess_4.jpg', caption: 'Ytongblock im Prozess zur Tube, 3' },
        { src: '/IMG/tube/tube_prozess_5.jpg', caption: 'Ytongblock im Prozess zur Tube, 4' },
        { src: '/IMG/tube/tube_prozess_6.jpg', caption: 'Ytongblock im Prozess zur Tube, 5' },
        { src: '/IMG/tube/tube_prozess_7.jpg', caption: 'Ytongblock im Prozess zur Tube, 6' },
        { src: '/IMG/tube/tube_prozess_8.jpg', caption: 'Ytongblock im Prozess zur Tube, 7' },
        { src: '/IMG/tube/tube_prozess_9.jpg', caption: 'Ytongblock im Prozess zur Tube, 8' },
        { src: '/IMG/tube/tube_prozess_10.jpg', caption: 'Ytongblock im Prozess zur Tube, 9' },
        { src: '/IMG/tube/tube_prozess_11.jpg', caption: 'Ytongblock im Prozess zur Tube, 10' },
        { src: '/IMG/tube/tube_prozess_12.jpg', caption: 'Ytongblock im Prozess zur Tube, 11' },
        { src: '/IMG/tube/tube_prozess_13.jpg', caption: 'Ytongblock im Prozess zur Tube, 12' },
        { src: '/IMG/tube/tube_prozess_14.jpg', caption: 'Ytongblock im Prozess zur Tube, 13' },
        { src: '/IMG/tube/tube_prozess_15.jpg', caption: 'Ytongblock im Prozess zur Tube, 14' },
        { src: '/IMG/tube/tube_prozess_16.jpg', caption: 'Ytongblock im Prozess zur Tube, 15' },
        { src: '/IMG/tube/tube_prozess_17.jpg', caption: 'Ytongblock im Prozess zur Tube, 16' },
        { src: '/IMG/tube/tube_prozess_18.jpg', caption: 'Ytongblock im Prozess zur Tube, 17' },
        { src: '/IMG/tube/tube_prozess_19.jpg', caption: 'Ytongblock im Prozess zur Tube, 18' },
        { src: '/IMG/tube/tube_prozess_20.jpg', caption: 'Ytongblock im Prozess zur Tube, 19' },
        { src: '/IMG/tube/tube_prozess_21.jpg', caption: 'Ytongblock im Prozess zur Tube, 20' },
        { src: '/IMG/tube/tube_prozess_22.jpg', caption: 'Ytongblock im Prozess zur Tube, 21' },
        { src: '/IMG/tube/tube_prozess_23.jpg', caption: 'Ytongblock im Prozess zur Tube, 22' },
        { src: '/IMG/tube/tube_prozess_24.jpg', caption: 'Ytongblock im Prozess zur Tube, 23' },
        { src: '/IMG/tube/tube_prozess_25.jpg', caption: 'Ytongblock im Prozess zur Tube, 24' },

      ],
      description: 'Hier Beschreibung für Tube.'
    }
  };
  
  

  function openModal(project) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';

    galleries[project].slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('mySlides');
        if (index === 0) slideDiv.style.display = 'block';

        const img = document.createElement('img');
        img.src = slide.src;
        img.alt = slide.caption;

        slideDiv.appendChild(img);
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
  