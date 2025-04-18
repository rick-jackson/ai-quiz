import Toolbar from "../Toolbar";
import Question from "../Question";
import Answers from "../Answers";
import type QuizType from "../../types/quiz";
import { useState } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import Result from "../Result";

type QuizProps = {
  quiz: QuizType[];
  getQuizData: () => Promise<void>;
};

const Quiz: React.FC<QuizProps> = ({ quiz, getQuizData }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<
    Record<number, { id: number; isCorrect: boolean }>
  >({});
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(
    quiz[0].id
  );

  const currentQuestion = quiz.find((el) => el.id === currentQuestionId);
  const lastQuestionId = quiz[quiz.length - 1].id;

  const handleNextQuestion = () => {
    if (currentQuestionId !== lastQuestionId) {
      setCurrentQuestionId((prev) => prev + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 700);
    }
  };

  const handleSelectAnswer = (answerId: number, isCorrect: boolean) => {
    if (!userAnswers[currentQuestionId]) {
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestionId]: { id: answerId, isCorrect },
      }));
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResult(false);
    setCurrentQuestionId(1);
  };

  if (showResult)
    return (
      <Result
        getQuizData={getQuizData}
        onResetQuiz={handleResetQuiz}
        allQuestionsCount={quiz.length}
        correctUserAnswers={
          Object.values(userAnswers).filter((answer) => answer.isCorrect).length
        }
      />
    );

  return (
    <Container
      h="100%"
      display="flex"
      flexDir="column"
      p={{ base: 2, md: 10 }}
      pt="48px"
    >
      <Toolbar
        currentQuestionId={currentQuestionId}
        totalQuestions={quiz.length}
      />
      <Box
        mx="auto"
        w="100%"
        bg="white"
        borderRadius={7}
        color="bg.primary"
        mt={5}
        flex="1 auto"
        display="flex"
        flexDir="column"
        p={{ base: 2, md: 10 }}
      >
        <Question question={currentQuestion!.question} />
        <Answers
          answers={currentQuestion!.answers}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswerId={userAnswers[currentQuestionId]?.id}
        />
        <Button
          bg="bg.primary"
          w="100%"
          variant="solid"
          size="2xl"
          textStyle="xl"
          mt="auto"
          loading={loading}
          borderRadius={7}
          disabled={!userAnswers[currentQuestionId] || loading}
          onClick={handleNextQuestion}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Quiz;
