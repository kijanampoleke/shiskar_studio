const GEMINI_API_KEY = "AIzaSyA9brAUD5R5HzbZaiq28AsQB8H0NQPXvWs";

export function initResearchHub() {
  const section = document.getElementById("research");
  section.innerHTML = `
    <h2>Research Hub</h2>
    <textarea id="promptInput" placeholder="Ask Gemini something..."></textarea>
    <button id="sendPrompt">Send</button>
    <div id="aiResponse"></div>
  `;

  document.getElementById("sendPrompt").addEventListener("click", async () => {
    const prompt = document.getElementById("promptInput").value;
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, topP: 0.9, maxOutputTokens: 512 }
      })
    });
    const data = await res.json();
    document.getElementById("aiResponse").textContent =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  });
}
