import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { useLocation } from "react-router-dom";
import { fetchGeminiResponse } from "../gateways/gemini";
import Loader from "../components/Loader";
import { Box, Button, Container } from "@chakra-ui/react";

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
        setError("Помилка при отриманні відповіді від сервера");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!!error) return error;

  return (
    <Box display="flex" h="100%" bg="bg.primary">
      {loading ? (
        <Loader />
      ) : (
        <Container py={10} maxW={600} display="flex" flexDir="column">
          <Quiz quiz={quiz} />
          <Button
            variant="subtle"
            bg="bg.secondary"
            color="white"
            fontWeight="bold"
            size="2xl"
            mt={10}
          >
            Next
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default QuizPage;
