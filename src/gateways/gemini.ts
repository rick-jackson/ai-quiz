export const fetchGeminiResponse = async (prompt: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
};
