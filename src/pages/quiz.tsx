import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { fetchGeminiResponse } from "../gateways/gemini";
import Loader from "../components/Loader";
import { Box } from "@chakra-ui/react";
import Error from "../components/Error";

type ErrorType = { error: string; status: number };

const QuizPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>({} as ErrorType);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchGeminiResponse(
          localStorage.getItem("category") as string,
          localStorage.getItem("level") as string,
          Number(localStorage.getItem("answersCount"))
        );
        console.log(data);
        if (!data?.error) {
          setQuiz(data);
        } else {
          setError(data);
        }
      } catch (error) {
        console.log(error);
        setError(error as { status: number; error: string });
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
      {loading ? (
        <Loader />
      ) : !!error?.error ? (
        <Error {...error} />
      ) : (
        <Quiz quiz={quiz} />
      )}
    </Box>
  );
};

export default QuizPage;
