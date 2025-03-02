document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR TRANSPARENS =====
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ===== SLIDING TEXT ANIMATION =====
  const words = document.querySelectorAll(".sliding-text .word");
  let index = 0;

  function showNextWord() {
    words.forEach((word) => word.classList.remove("active"));
    words[index].classList.add("active");
    index = (index + 1) % words.length;
  }

  if (words.length > 0) {
    words[0].classList.add("active");
    setInterval(showNextWord, 3000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script.js is running!");

  const words = document.querySelectorAll(".sliding-text .word");

  if (words.length > 0) {
    words[0].classList.add("active"); // Vis første ord med en gang
    console.log("Første ord aktivert:", words[0].textContent);

    let index = 0;
    setInterval(() => {
      words.forEach((word) => word.classList.remove("active"));
      index = (index + 1) % words.length;
      words[index].classList.add("active");
      console.log("Nytt ord aktivert:", words[index].textContent);
    }, 3000);
  } else {
    console.error("Ingen ord funnet i .sliding-text");
  }
});
