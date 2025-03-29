import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Помилка:", error);
      setResponse("Помилка при отриманні відповіді від сервера");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gemini AI API</h2>
      <form onSubmit={handleSubmit}></form>
      <textarea
        rows={4}
        cols={50}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введіть запит..."
      />
      <br />
      <button type="submit">Надіслати</button>
      <h3>Відповідь:</h3>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
