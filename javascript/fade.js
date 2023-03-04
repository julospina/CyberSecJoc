
const element = document.querySelector("#elemento");
const toggleBtn = document.querySelector("#toggle");

let isFadingOut = false;

function fadeIn() {
  element.style.opacity = 1;
}

function fadeOut() {
  element.style.opacity = 0;
}

function toggleFade() {
  if (isFadingOut) {
    fadeIn();
    toggleBtn.textContent = "Ocultar juego";
  } else {
    fadeOut();
    toggleBtn.textContent = "Continuar";
  }
  isFadingOut = !isFadingOut;
}

toggleBtn.addEventListener("click", toggleFade);