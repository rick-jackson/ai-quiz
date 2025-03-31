import Toolbar from "../Toolbar";
import Question from "../Question";
import Answers from "../Answers";
import type QuizType from "../../types/quiz";
import { useState } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import Result from "../Result";

type QuizProps = {
  quiz: QuizType[];
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(
    quiz[0].id
  );

  const currentQuestion = quiz.find((el) => el.id === currentQuestionId);
  const lastQuestionId = quiz[quiz.length - 1].id;
  const firstQuestionId = quiz[0].id;

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

  const handlePrevQuestion = () => {
    setCurrentQuestionId((prev) => prev - 1);
  };

  const handleSelectAnswer = (answerId: number) => {
    if (!userAnswers[currentQuestionId]) {
      setUserAnswers((prev) => ({ ...prev, [currentQuestionId]: answerId }));
    }
  };

  if (!showResult) return <Result />;

  return (
    <Container
      py={10}
      maxW={600}
      maxH={800}
      h="100%"
      display="flex"
      flexDir="column"
      m="auto"
      boxSizing="border-box"
    >
      <Toolbar
        currentQuestionId={currentQuestionId}
        onPrevQuestion={handlePrevQuestion}
        isFirstQuestion={firstQuestionId === currentQuestionId}
      />
      <Box flex="1 auto">
        <Question question={currentQuestion!.question} />
        <Answers
          answers={currentQuestion!.answers}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswerId={userAnswers[currentQuestionId]}
        />
      </Box>
      <Button
        variant="subtle"
        bg="bg.secondary"
        color="white"
        fontWeight="bold"
        size="2xl"
        mt="auto"
        _hover={{
          bg: "bg.primaryHover",
        }}
        loading={loading}
        disabled={!userAnswers[currentQuestionId] || loading}
        onClick={handleNextQuestion}
      >
        Next
      </Button>
    </Container>
  );
};

export default Quiz;
