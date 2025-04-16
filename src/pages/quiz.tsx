import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { fetchGeminiResponse } from "../gateways/gemini";
import Loader from "../components/Loader";
import Error from "../components/Error";

type ErrorType = { error: string; status: number };

const QuizPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>({} as ErrorType);
  const [quiz, setQuiz] = useState([]);

  const getQuizData = async () => {
    setLoading(true);
    try {
      const data = await fetchGeminiResponse(
        localStorage.getItem("category") as string,
        (localStorage.getItem("difficulty") as string) || "Very Hard",
        Number(localStorage.getItem("answerCount")) || 4,
        Number(localStorage.getItem("questionCount")) || 10,
        localStorage.getItem("language") || "English"
      );
      if (!data?.error) {
        setQuiz(data);
      } else {
        setError(data);
      }
    } catch (error) {
      setError({ error: "Server Error", status: 500 } as {
        status: number;
        error: string;
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuizData();
  }, []);

  if (loading) return <Loader />;
  if (!!error?.error) return <Error {...error} />;

  return <Quiz quiz={quiz} getQuizData={getQuizData} />;
};

export default QuizPage;
