export const fetchGeminiResponse = async (prompt: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/gemini`,
    // "https://ai-quiz-blush-tau.vercel.app/api/gemini",
    // "http://localhost:3000/api/gemini",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    }
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
};
