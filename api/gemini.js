export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Parameter 'prompt' is required" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Згенеруй 10 запитань з відповідями для квіза на тему: ${prompt}.
Формат відповіді – тільки масив об'єктів без додаткового тексту.
Приклад обєкта:
[{
  "id": 1,
  "question": "Який HTTP-метод зазвичай використовується для отримання даних із сервера?",
  "title": "Робота з API",
  "answers": [
    { "id": 1, "text": "<strong>GET</strong>", "isCorrect": true },
    { "id": 2, "text": "<strong>POST</strong>", "isCorrect": false },
    { "id": 3, "text": "<strong>DELETE</strong>", "isCorrect": false },
    { "id": 4, "text": "<strong>PATCH</strong>", "isCorrect": false },
  ]
}];
Якщо створити запитання за вказаною темою неможливо, поверни тільки цей рядок:
"Некоректний запит."
Жодного іншого тексту у відповіді не має бути!
можна використовувати html теги, що текст виглядав привабливішим.
Старайся, щоб відповіді були приблизно однієї довжини
`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(
      JSON.parse(
        data?.candidates[0].content.parts[0].text.replace(
          /```json\n|\n```/g,
          ""
        )
      )
    );
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
