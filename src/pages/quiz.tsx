import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { fetchGeminiResponse } from "../gateways/gemini";
import Loader from "../components/Loader";
import { Box } from "@chakra-ui/react";

const QuizPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchGeminiResponse(
          localStorage.getItem("category") as string
        );
        setQuiz(data);
      } catch (error) {
        setError("error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box
      display="flex"
      h="100%"
      w="100%"
      bg="linear-gradient(186deg, rgba(113,89,228,1) 0%, rgba(102,79,224,1) 100%)"
    >
      {loading ? <Loader /> : error ? error : <Quiz quiz={quiz} />}
    </Box>
  );
};

export default QuizPage;
