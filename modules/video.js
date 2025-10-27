export function renderVideo() {
  const section = document.getElementById("video");
  section.innerHTML = `
    <h2>Video Dashboard</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/..." frameborder="0" allowfullscreen></iframe>
  `;
}
