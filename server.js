const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;
const API_KEY = "AIzaSyCbcbYmO57X1CWenrWv41Sgy0gWrmq-JtA";

app.use(cors());
app.use(express.json());

app.post("/gemini", async (req, res) => {
  console.log("Received request:", req.body);

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Parameter 'prompt' is required" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
