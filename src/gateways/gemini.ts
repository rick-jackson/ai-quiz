export const fetchGeminiResponse = async (
  prompt: string,
  difficulty: string,
  answerCount: number,
  questionCount: number
) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, difficulty, answerCount, questionCount }),
  });

  // if (!response.ok) {
  //   throw new Error(`API error: ${response.status}`);
  // }

  return await response.json();
};
