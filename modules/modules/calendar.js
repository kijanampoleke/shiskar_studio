export function renderCalendar() {
  const section = document.getElementById("calendar");
  const today = new Date().toDateString();
  section.innerHTML = `
    <h2>Release Calendar</h2>
    <p>Today: ${today}</p>
    <ul>
      <li>🎧 Track drop – 3:00 PM</li>
      <li>📢 Social post – 5:00 PM</li>
    </ul>
  `;
}
