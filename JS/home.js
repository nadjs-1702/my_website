
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
        { src: 'IMG\\acryl\\pilzacrylganz.jpg', caption: 'Pilzwald' },
        { src: 'IMG\\acryl\\pilzacrylnahe_1.jpg', caption: 'Pilzwald Nahaufnahme 1' },
        { src: 'IMG\\acryl\\pilzacrylnahe_3.jpg', caption: 'Pilzwald Nahaufnahme 2' }
      ],
      description: 'Hier Beschreibung für Pilzwald.'
    },
    polandpregnancy: {
      slides: [
        { src: 'rocks1.jpg', caption: 'Rocks Photo 1' },
        { src: 'rocks2.jpg', caption: 'Rocks Photo 2' },
        { src: 'rocks3.jpg', caption: 'Rocks Photo 3' }
      ],
      description: 'Hier Beschreibung für Poland Pregnancy.'
    },
    blumenfingermalen: {
      slides: [
        { src: 'falls1.jpg', caption: 'Falls Photo 1' },
        { src: 'falls2.jpg', caption: 'Falls Photo 2' },
        { src: 'falls3.jpg', caption: 'Falls Photo 3' }
      ],
      description: 'Hier Beschreibung für Blumenfingermalen.'
    },
    rainbowpilz: {
      slides: [
        { src: 'paris1.jpg', caption: 'Paris Photo 1' },
        { src: 'paris2.jpg', caption: 'Paris Photo 2' },
        { src: 'paris3.jpg', caption: 'Paris Photo 3' }
      ],
      description: 'Hier Beschreibung für Rainbow Pilz.'
    },
    viel_pilzemitgesicht: {
      slides: [
        { src: 'nature1.jpg', caption: 'Nature Photo 1' },
        { src: 'nature2.jpg', caption: 'Nature Photo 2' },
        { src: 'nature3.jpg', caption: 'Nature Photo 3' }
      ],
      description: 'Hier Beschreibung für Viel Pilze mit Gesicht.'
    },
    kleinerpilzbiglips: {
      slides: [
        { src: 'mist1.jpg', caption: 'Mist Photo 1' },
        { src: 'mist2.jpg', caption: 'Mist Photo 2' },
        { src: 'mist3.jpg', caption: 'Mist Photo 3' }
      ],
      description: 'Hier Beschreibung für Kleiner Pilz Big Lips.'
    },
    viel_pilze: {
      slides: [
        { src: 'underwater1.jpg', caption: 'Underwater Photo 1' },
        { src: 'underwater2.jpg', caption: 'Underwater Photo 2' },
        { src: 'underwater3.jpg', caption: 'Underwater Photo 3' }
      ],
      description: 'Hier Beschreibung für Viel Pilze.'
    },
    risodruck: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Risodruck.'
    },
    stempeldruck: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Stempeldruck.'
    },
    flatbook: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Flatbook.'
    },
    ausstellung_sa: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Ausstellung SA.'
    },
    toepfern_schale_blau: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Töpfern Schale Blau.'
    },
    toepfern_2schalen: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Töpfern 2 Schalen.'
    },
    espressotasse: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Espressotasse.'
    },
    toepfern_schale_verschieden: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Töpfern Schale Verschieden.'
    },
    toepfernschalen_tropfen: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Töpfern Schalen Tropfen.'
    },
    Karton_relief: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Karton Relief.'
    },
    alberto_giacometti_relief: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Alberto Giacometti Relief.'
    },
    vollplastik: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Vollplastik.'
    },
    body_hell: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Body Hell.'
    },
    body_dunkel_1: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
      ],
      description: 'Hier Beschreibung für Body Dunkel 1.'
    },
    body_dunkel_2: {
      slides: [
        { src: 'ocean1.jpg', caption: 'Ocean Photo 1' },
        { src: 'ocean2.jpg', caption: 'Ocean Photo 2' },
        { src: 'ocean3.jpg', caption: 'Ocean Photo 3' }
      ],
      description: 'Hier Beschreibung für Body Dunkel 2.'
    },
    tube: {
      slides: [
        { src: 'mountainskies1.jpg', caption: 'Mountain Skies Photo 1' },
        { src: 'mountainskies2.jpg', caption: 'Mountain Skies Photo 2' },
        { src: 'mountainskies3.jpg', caption: 'Mountain Skies Photo 3' }
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
  
    document.getElementById('caption').innerText = galleries[project].slides[0].caption;
    document.getElementById('description').innerText = galleries[project].description;
    document.getElementById('myModal').style.display = 'block';
    slideIndex = 1;
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
    document.getElementById('caption').innerText = slides[slideIndex - 1].getElementsByTagName('img')[0].alt;
  }
  