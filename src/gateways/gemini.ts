export const fetchGeminiResponse = async (
  prompt: string,
  difficulty: string,
  answerCount: number,
  questionCount: number,
  language: string
) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      difficulty,
      answerCount,
      questionCount,
      language,
    }),
  });

  return await response.json();
};
