document.addEventListener("DOMContentLoaded", function () {
  const words = document.querySelectorAll(".word");
  let index = 0;

  function showNextWord() {
    words[index].classList.remove("active");
    index = (index + 1) % words.length;
    words[index].classList.add("active");
  }

  setInterval(showNextWord, 3000);

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");

    if (navbarMenu.classList.contains("show")) {
      navbarMenu.style.display = "block";
    } else {
      navbarMenu.style.display = "none";
    }
  });
});
