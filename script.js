document.addEventListener("DOMContentLoaded", function () {
  let words = document.querySelectorAll(".word");
  let index = 0;

  function showNextWord() {
    words[index].classList.remove("active");

    index = (index + 1) % words.length;

    words[index].classList.add("active");
  }

  setInterval(showNextWord, 3000);
});
