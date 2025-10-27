import { renderMusic } from "./modules/music.js";
import { renderVideo } from "./modules/video.js";
import { renderCalendar } from "./modules/calendar.js";
import { initYouTubeManager } from "./modules/youtube.js";
import { initResearchHub } from "./modules/researchHub.js";
import { initSettings } from "./modules/settings.js";
import { initAuth } from "./modules/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMusic();
  renderVideo();
  renderCalendar();
  initYouTubeManager();
  initResearchHub();
  initSettings();
  initAuth();
});
