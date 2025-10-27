export function renderCalendar() {
  const section = document.getElementById("calendar");
  if (!section) return;

  const today = new Date().toDateString();

  section.innerHTML = `
    <h2>📅 Calendar</h2>
    <p><strong>Today:</strong> ${today}</p>
    <ul>
      <li>🎧 Track drop – 3:00 PM</li>
      <li>📢 Social post – 5:00 PM</li>
      <li>🛠 Studio sync – 7:00 PM</li>
    </ul>
  `;
}
