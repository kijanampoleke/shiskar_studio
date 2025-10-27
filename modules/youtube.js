const YOUTUBE_API_KEY = "AIzaSyCYpSokP1YvrXUgc7F7FEDc1Tam2aaVues";

export function initYouTubeManager() {
  const section = document.getElementById("youtube");
  section.innerHTML = `
    <h2>YouTube Manager</h2>
    <input id="youtubeSearch" placeholder="Search YouTube..." />
    <button id="searchYouTube">Search</button>
    <div id="youtubeResults"></div>
  `;

  document.getElementById("searchYouTube").addEventListener("click", async () => {
    const query = document.getElementById("youtubeSearch").value;
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`);
    const data = await res.json();
    const container = document.getElementById("youtubeResults");
    container.innerHTML = data.items.map(video => `
      <div>
        <h4>${video.snippet.title}</h4>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      </div>
    `).join("");
  });
}
