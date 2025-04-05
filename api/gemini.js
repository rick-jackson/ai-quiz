export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const { prompt, level, answersCount } = req.body;
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
                  text: `Generate 10 questions with answers for a quiz on the topic: ${prompt}.
Answer format – array of objects only, with no additional text.
The correct answer must appear in a random position within the array.
Questions must be diverse. Each time you generate them, they must be different.
Question difficulty: ${level}.
Number of answers: ${answersCount}.
If it is not possible to create questions on the given topic, return only this line:
"Invalid prompt."
No other text should be included in the response!
You may use HTML tags to make the text visually appealing.
Try to keep the answers approximately the same length.
language: українська.
Example object:
[{
  "id": 1,
  "question": "question",
  "answers": [
    { "id": 1, "text": "answer1", "isCorrect": true },
    { "id": 2, "text": "answer2", "isCorrect": false },
    { "id": 3, "text": "answer3", "isCorrect": false },
    { "id": 4, "text": "answer4", "isCorrect": false }
  ]
}];
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
