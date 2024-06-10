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
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
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

document.addEventListener("DOMContentLoaded", function() {
    const contentAboutMe = document.querySelector('.contentaboutme');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(contentAboutMe);
});