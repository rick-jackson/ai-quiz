import { Box, Button, Container, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type ResultProps = {
  allQuestionsCount: number;
  correctUserAnswers: number;
  onResetQuiz: () => void;
  getQuizData: () => Promise<void>;
};

const Result: React.FC<ResultProps> = ({
  allQuestionsCount,
  correctUserAnswers,
  onResetQuiz,
  getQuizData,
}) => {
  const resultPercent = (correctUserAnswers / allQuestionsCount) * 100;

  return (
    <Container
      m="auto"
      textAlign="center"
      display="flex"
      flexDir="column"
      gap={5}
      maxW={500}
    >
      <Box
        w={266}
        h={266}
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="auto"
      >
        <Image
          src="/images/robot.png"
          w="100%"
          objectFit="contain"
          maxH={550}
          h="auto"
        />
      </Box>
      <Text fontWeight={400}>
        Great job! You answered all <strong>{correctUserAnswers}</strong> out of{" "}
        <strong>{allQuestionsCount}</strong> questions correctly, which makes{" "}
        <strong>{resultPercent.toFixed(1)}%</strong>. Keep it up!
      </Text>

      <Button size="xl" variant="surface" onClick={onResetQuiz}>
        Пройти знову
      </Button>
      <Button size="xl" variant="surface" onClick={getQuizData}>
        Оновити запитання
      </Button>
      <Link to="/#categories" style={{ display: "flex" }}>
        <Button size="xl" variant="surface" flex={1}>
          Змінити тему
        </Button>
      </Link>
    </Container>
  );
};

export default Result;
