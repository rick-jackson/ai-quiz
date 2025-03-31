import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { useLocation } from "react-router-dom";
import { fetchGeminiResponse } from "../gateways/gemini";
import Loader from "../components/Loader";
import { Box } from "@chakra-ui/react";

const QuizPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [quiz, setQuiz] = useState([]);
  const params = new URLSearchParams(useLocation().search);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchGeminiResponse(params.get("param") as string);
        setQuiz(data);
      } catch (error) {
        setError("error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box display="flex" h="100%" w="100%" bg="bg.primary">
      {loading ? <Loader /> : error ? error : <Quiz quiz={quiz} />}
    </Box>
  );
};

export default QuizPage;
