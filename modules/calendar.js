export function renderCalendar() {
  const section = document.getElementById("calendar");
  if (!section) return; // Prevent errors if section is missing

  const today = new Date().toDateString();
  section.innerHTML = `
    <h2>${today}</h2>
    <ul>
      <li>📅 Track drop – 3:00 PM</li>
      <li>📢 Social post – 5:00 PM</li>
    </ul>
  `;
}
