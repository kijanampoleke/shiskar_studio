import { renderMusic } from "./modules/music.js";
import { renderVideo } from "./modules/video.js";
import { renderCalendar } from "./modules/calendar.js";
import { initYouTubeManager } from "./modules/youtube.js";
import { initResearchHub } from "./modules/researchHub.js";
import { initSettings } from "./modules/settings.js";
import { initAuth } from "./modules/auth.js";

function showSection(id) {
  document.querySelectorAll("main section").forEach(section => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

window.addEventListener("hashchange", () => {
  const sectionId = location.hash.replace("#", "") || "music";
  showSection(sectionId);
});

document.addEventListener("DOMContentLoaded", () => {
  renderMusic();
  renderVideo();
  renderCalendar();
  initYouTubeManager();
  initResearchHub();
  initSettings();
  initAuth();

  const initialSection = location.hash.replace("#", "") || "music";
  showSection(initialSection);
});
