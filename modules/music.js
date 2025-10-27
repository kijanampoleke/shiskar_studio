export function renderMusic() {
  const section = document.getElementById("music");
  if (!section) return;

  section.innerHTML = `
    <h2>🎵 Music</h2>
    <p>Manage your tracks, playlists, and audio uploads here.</p>
  `;
}
