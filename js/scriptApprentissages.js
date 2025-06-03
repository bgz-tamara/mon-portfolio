
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

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `tab-${target}`) {
                content.classList.add('active');
            }
        });
    });
});

window.addEventListener("load", function () {
  const titres = document.querySelectorAll(".titre, .pTexteApprentissage");

  titres.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 500);
  });
});

