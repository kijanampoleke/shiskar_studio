export function initSettings() {
  const section = document.getElementById("settings");
  section.innerHTML = `
    <h2>Settings</h2>
    <label>Theme:
      <select>
        <option>Light</option>
        <option>Dark</option>
      </select>
    </label>
    <p>Offline-first mode: Enabled</p>
  `;
}
