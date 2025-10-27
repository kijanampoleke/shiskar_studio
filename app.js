function addMusic() {
  const title = getVal('songTitle');
  const artist = getVal('artistName');
  const tags = getVal('tags');
  const entry = { title, artist, tags };
  const list = getList('musicList');
  list.push(entry);
  saveList('musicList', list);
  renderMusic();
}

function renderMusic() {
  const list = getList('musicList');
  const container = document.getElementById('musicList');
  if (container) {
    container.innerHTML = '';
    list.forEach((item, i) => {
      container.innerHTML += `<div>${i + 1}. ${item.title} by ${item.artist} [${item.tags}]</div>`;
    });
  }
}

function addReminder() {
  const date = getVal('reminderDate');
  const time = getVal('reminderTime');
  const text = getVal('reminderText');
  const entry = { date, time, text };
  const list = getList('reminderList');
  list.push(entry);
  saveList('reminderList', list);
  renderReminders();
}

function renderReminders() {
  const list = getList('reminderList');
  const container = document.getElementById('reminderList');
  if (container) {
    container.innerHTML = '';
    list.forEach((item, i) => {
      container.innerHTML += `<div>${i + 1}. ${item.date} ${item.time} — ${item.text}</div>`;
    });
  }
}

function addChannel() {
  const url = getVal('customChannel');
  const select = document.getElementById('channelSelect');
  if (select && url) {
    const option = document.createElement('option');
    option.value = url;
    option.text = url;
    select.appendChild(option);
  }
}

function playChannel() {
  const select = document.getElementById('channelSelect');
  const player = document.getElementById('ytPlayer');
  if (select && player) {
    player.src = select.value;
  }
}

function searchGoogle() {
  const query = getVal('searchQuery');
  const frame = document.getElementById('googleFrame');
  if (frame && query) {
    frame.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}

function clearData() {
  localStorage.clear();
  alert("All local data cleared.");
  if (document.getElementById('musicList')) renderMusic();
  if (document.getElementById('reminderList')) renderReminders();
}

function toggleAnimations() {
  const toggle = document.getElementById('toggleAnimations');
  if (toggle) {
    document.body.style.transition = toggle.checked ? 'all 0.3s ease' : 'none';
  }
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

document