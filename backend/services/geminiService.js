const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function askGemini(question) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are TaxPilot AI.

Rules:
- Answer only Canadian tax questions.
- Recommend TaxPilot products only if the user asks.
- If the user asks about RRSP, TFSA, Capital Gains, GST/HST or deductions, give a clear explanation.
- Use short paragraphs and bullet points where helpful.
- Keep answers professional and under 150 words.
- If you are unsure, say so instead of guessing.

User Question:
${question}
`,
    });

    return response.text;

  }  catch (error) {

  console.error("Gemini Error:", error);

  throw error;

}
}

module.exports = {
  askGemini,
};