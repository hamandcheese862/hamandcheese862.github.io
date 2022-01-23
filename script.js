var hawkSound = document.getElementById("nighthawkRec"),
  ctrl = document.getElementById("audioControl"),
  playButton = document.getElementById("play"),
  pauseButton = document.getElementById("pause");
nighthawkRec.currentTime = 0;

function toggleButton() {
  if (playButton.style.display === "none") {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  } else {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  }
}

ctrl.onclick = function () {
  if (hawkSound.paused) {
    hawkSound.play();
  } else {
    hawkSound.pause();
  }

  toggleButton();

  return false;
};