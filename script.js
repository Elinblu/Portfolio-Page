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
    words[0].classList.add("active");
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

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  function checkScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("appear");
      } else {
        item.classList.remove("appear");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".skill-list span");

  function checkScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    skillItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("appear");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    let isOpen = navbarCollapse.classList.contains("show");

    if (isOpen) {
      navbarCollapse.classList.remove("show");
      navbarToggler.setAttribute("aria-expanded", "false");
    } else {
      navbarCollapse.classList.add("show");
      navbarToggler.setAttribute("aria-expanded", "true");
    }
  });
});

// Henter prosjekt-ID fra URL-en (f.eks. project.html?id=weather-app)
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Henter JSON-filen
fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    // Finner riktig prosjekt basert på ID
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      // Fyller inn HTML-en med data fra prosjektet
      document.getElementById("project-title").textContent = project.title;
      document.getElementById("project-description").textContent =
        project.description;
      document.getElementById("project-image").src = project.image;
      document.getElementById("project-image").alt = project.title;

      // Legger til teknologier i en liste
      const techList = document.getElementById("project-technologies");
      techList.innerHTML = "";
      project.technologies.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        techList.appendChild(li);
      });

      // Oppdaterer GitHub-linken
      document.getElementById("project-github").href = project.github;
    } else {
      // Viser feilmelding hvis prosjektet ikke finnes
      document.getElementById("project-container").innerHTML =
        "<h1>Project not found</h1>";
    }
  })
  .catch((error) => console.error("Error fetching projects:", error));
