import { useState } from "react";
import { fetchGeminiResponse } from "./gateways/gemini";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetchGeminiResponse(input);
      setResponse(data?.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Помилка:", error);
      setResponse("Помилка при отриманні відповіді від сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gemini AI API</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={4}
          cols={50}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть запит..."
        />
        <br />
        <button type="submit">Надіслати</button>
      </form>
      {loading ? (
        "...loading"
      ) : (
        <>
          <h3>Відповідь:</h3>
          <pre>{response}</pre>
        </>
      )}
    </div>
  );
}

export default App;
