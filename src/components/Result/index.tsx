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
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="auto"
      >
        <Image
          src={`/robot/${
            resultPercent <= 50 ? 5 : resultPercent <= 75 ? 6 : 4
          }.png`}
        />
      </Box>
      <Text fontWeight={400} textStyle="xl">
        {resultPercent >= 75 ? (
          <>
            Great job! You answered all <strong>{correctUserAnswers}</strong>{" "}
            out of <strong>{allQuestionsCount}</strong> questions correctly,
            which makes <strong>{resultPercent.toFixed(1)}%</strong>. Keep it
            up!
          </>
        ) : resultPercent >= 50 ? (
          <>
            Nice try! You got <strong>{correctUserAnswers}</strong> out of{" "}
            <strong>{allQuestionsCount}</strong> questions right — that's{" "}
            <strong>{resultPercent.toFixed(1)}%</strong>. Just a little more and
            you'll ace it next time!
          </>
        ) : (
          <>
            Don't worry! You answered <strong>{correctUserAnswers}</strong> out
            of <strong>{allQuestionsCount}</strong> questions correctly — that’s{" "}
            <strong>{resultPercent.toFixed(1)}%</strong>%. Review the material
            and give it another shot!
          </>
        )}
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
