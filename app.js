import { renderMusic } from "./modules/music.js";
import { renderVideo } from "./modules/video.js";
import { renderCalendar } from "./modules/calendar.js";
import { initYouTubeManager } from "./modules/youtube.js";
import { initResearchHub } from "./modules/researchHub.js";
import { initSettings } from "./modules/settings.js";
import { initAuth } from "./modules/auth.js";

// 🔁 Show only the active section
function showSection(id) {
  document.querySelectorAll("main section").forEach(section => {
    section.style.display = section.id === id ? "block" : "none";
  });
}

// 🧭 Handle hash changes
window.addEventListener("hashchange", () => {
  const sectionId = location.hash.replace("#", "") || "music";
  showSection(sectionId);
});

// 🚀 Initialize app
document.addEventListener("DOMContentLoaded", () => {
  // Load all modules once
  renderMusic();
  renderVideo();
  renderCalendar();
  initYouTubeManager();
  initResearchHub();
  initSettings();
  initAuth();

  // Show initial section
  const initialSection = location.hash.replace("#", "") || "music";
  showSection(initialSection);
});
