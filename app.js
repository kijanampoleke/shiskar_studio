document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

function addOnlineMusic() {
  const title = getVal('onlineTitle');
  const artist = getVal('onlineArtist');
  const url = getVal('onlineURL');
  if (!url.startsWith('http')) return alert("Invalid URL");
  const entry = { title, artist, url };
  const list = getList('onlineMusic');
  list.push(entry);
  saveList('onlineMusic', list);
  renderOnlineMusic();
}

function renderOnlineMusic() {
  const list = getList('onlineMusic');
  const container = document.getElementById('onlineMusicList');
  container.innerHTML = '';
  list.forEach((item, i) => {
    container.innerHTML += `<div>${i + 1}. ${item.title} by ${item.artist} <a href="${item.url}" target="_blank">Play</a></div>`;
  });
}

function saveNewSong() {
  const title = getVal('newTitle');
  const artist = getVal('newArtist');
  const tags = getVal('newTags');
  const lyrics = getVal('lyricsEditor');
  const entry = { title, artist, tags, lyrics };
  saveList('newSong', entry);
  alert("Song saved locally");
}

function deleteSong() {
  localStorage.removeItem('newSong');
  alert("Song deleted");
}

function importLyrics() {
  const file = document.getElementById('lyricsImport').files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById('lyricsEditor').value = reader.result;
  };
  reader.readAsText(file);
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
function getList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}
function saveList(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}