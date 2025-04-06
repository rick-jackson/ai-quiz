import { Button, Container, Text, Image, Flex } from "@chakra-ui/react";
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
      maxW={800}
      p={{ base: 2, md: 10 }}
    >
      <Image
        src={`/robot/${
          resultPercent < 50 ? 7 : resultPercent < 75 ? 8 : 9
        }.png`}
        maxH="40vh"
        w="auto"
        objectFit="contain"
      />

      <Text fontWeight={400} textStyle="xl">
        {resultPercent >= 75 ? (
          <>
            Great job! You answered all <strong>{correctUserAnswers}</strong>{" "}
            out of <strong>{allQuestionsCount}</strong> questions correctly,
            which makes <strong>{resultPercent.toFixed(0)}%</strong>. Keep it
            up!
          </>
        ) : resultPercent >= 50 ? (
          <>
            Nice try! You got <strong>{correctUserAnswers}</strong> out of{" "}
            <strong>{allQuestionsCount}</strong> questions right — that's{" "}
            <strong>{resultPercent.toFixed(0)}%</strong>. Just a little more and
            you'll ace it next time!
          </>
        ) : (
          <>
            Don't worry! You answered <strong>{correctUserAnswers}</strong> out
            of <strong>{allQuestionsCount}</strong> questions correctly — that’s{" "}
            <strong>{resultPercent.toFixed(0)}%</strong>. Review the material
            and give it another shot!
          </>
        )}
      </Text>
      <Flex flexDir="column" gap={3} mt={5}>
        <Button size="xl" variant="surface" onClick={onResetQuiz}>
          Pass again
        </Button>
        <Button size="xl" variant="surface" onClick={getQuizData}>
          Update question
        </Button>
        <Link to="/#categories" style={{ display: "flex" }}>
          <Button size="xl" variant="surface" flex={1}>
            Change the topic
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Result;
