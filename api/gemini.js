export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const { prompt, difficulty, answerCount, questionCount, language } = req.body;
  if (!prompt)
    return res
      .status(400)
      .json({ error: "Parameter 'prompt' is required", status: 400 });

  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("Missing API key");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
                  Generate a set of ${questionCount} quiz questions on the topic: ${prompt}.

Requirements:
- Language: ${language}
- Format: JSON array of objects only (NO other text or explanation)
- Each object structure must follow this format:
  {
    "id": <number>,
    "question": "<html-formatted question text>",
    "answers": [
      { "id": 1, "text": "<answer1>", "isCorrect": <true|false> },
      { "id": 2, "text": "<answer2>", "isCorrect": <true|false> },
      ...
    ]
  }

Answer options:
- Total answers per question: ${answerCount}
- The correct answer must appear in a **random** position in the list
- All answer texts should be roughly equal in length

Content requirements:
- Questions must be diverse in wording and type
- Difficulty level: ${difficulty}
- Each generation must be different from the previous
If the topic is invalid or unsuitable for a quiz, return **only** the following line:
Do not include any extra explanations or text outside the array.
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok)
      throw new Error(`API error: ${response.status} ${response.statusText}`);

    const data = await response.json();
    const parsedContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!parsedContent) throw new Error("Invalid API response format");

    res.json(JSON.parse(parsedContent.replace(/```json\n|\n```/g, "")));
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
