import "../styles.css";

import Visuals from "./visual";
import Music from "./music";

const canvasElement = document.getElementById("canvas");
const visuals = new Visuals(canvasElement);

const music = new Music((...args) => {
  visuals.scheduleEvent(...args);
});

const playButton = document.getElementById("play");
playButton?.addEventListener("click", async () => {
  playButton.value = "LOADING...";

  await music.load();
  await visuals.load();

  await music.play();
  visuals.loop();

  setInterval(() => {
    playButton?.remove();
  }, 500);
});
