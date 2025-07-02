
// Event handler pour scroll et changement de couleur de la barre de navigation
window.addEventListener('scroll', function () {
    const navBarD = document.querySelector("header");
    const lianNav = document.getElementsByClassName("surligne");
    const nomNav = document.getElementById("logo");

    if (window.scrollY > 15) {
      navBarD.style.backgroundColor = `white`;
      nomNav.style.color = "rgba(0, 0, 0, 0.8)";
      for (let el of lianNav) {
        el.style.color = "black";
        el.classList.add("noir");
      }
      navBarD.style.transition = `background-color 0.6s ease`;

    } else {
      navBarD.style.backgroundColor = `transparent`;
      nomNav.style.color = "white";

      for (let el of lianNav) {
        el.style.color = "white";
        el.classList.remove("noir");
      }
      navBarD.style.transition = `background-color 0.6s ease`;
    }
});

/* transition de chargement de la bannière d'accueil */
window.addEventListener("load", function () {
  const titres = document.querySelectorAll(".debut, .milieu, .titre_nom, .p_profession, .fin");
const delays = [0, 800, 1500, 2100, 3100]; // ajustables pour chaque élément

  titres.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, delays[index] || 0); // fallback 0 si pas de délai défini
  });
});

/* transition du texte Qui Suis-Je ? ////////*/
document.addEventListener("DOMContentLoaded", () => {
  const textes = document.querySelectorAll(".text-apparait");
  const vignettes = document.querySelectorAll(".vignette_liens");
  const projets = document.querySelectorAll(".bloc-1-projet");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 
  });

  textes.forEach((el, index) => {
    // el.style.transitionDelay = `${index * 0.3}s`;
    observer.observe(el);
  });

  projets.forEach((el, index) => {
    el.style.transitionDelay = "0.2s";
    observer.observe(el);
  });

  vignettes.forEach((el, index) => {
  const img = el.querySelector("img");
  if (img) {
    // img.style.transitionDelay = index === 0 ? '0s' : `${index * 0.4}s`;
  }
  observer.observe(el);
  });
});



