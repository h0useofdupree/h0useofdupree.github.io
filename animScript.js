const navSlideAnim = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Event Burger
  burger.addEventListener("click", () => {
    //Nav einblenden
    nav.classList.toggle("nav-active");
    //Link Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};
navSlideAnim();
