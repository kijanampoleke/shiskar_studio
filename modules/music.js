export function renderMusic() {
  const section = document.getElementById("music");
  section.innerHTML = `
    <h2>Music Manager</h2>
    <iframe src="https://audiomack.com/embed/..." width="100%" height="120"></iframe>
    <iframe src="https://w.soundcloud.com/player/..." width="100%" height="120"></iframe>
    <p>Spotify integration and release toggles coming soon.</p>
  `;
}
