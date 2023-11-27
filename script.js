

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector(".menu-toggle");
    var menuNav = document.getElementById("myNav");

    // Agregar evento de clic al botón de menú
    menuToggle.addEventListener("click", function () {
      // Alternar la clase 'open' en el menú
      menuNav.classList.toggle("open");
    });
  });


const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playButton.textContent = "Play";
    }
}



