import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  ProgressCircle,
  Text,
} from "@chakra-ui/react";

type ResultProps = {
  allQuestionsCount: number;
  correctUserAnswers: number;
  onResetQuiz: () => void;
};

const Result: React.FC<ResultProps> = ({
  allQuestionsCount,
  correctUserAnswers,
  onResetQuiz,
}) => {
  const resultPercent = (correctUserAnswers / allQuestionsCount) * 100;

  return (
    <Container
      m="auto"
      textAlign="center"
      display="flex"
      flexDir="column"
      gap={6}
      maxW={500}
    >
      <Text textStyle="5xl">Result</Text>

      <Box
        w={266}
        h={266}
        display="flex"
        justifyContent="center"
        alignItems="center"
        m="auto"
      >
        <ProgressCircle.Root
          value={resultPercent}
          colorPalette="pink"
          transform="scale(7)"
        >
          <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
            <ProgressCircle.Track />
            <ProgressCircle.Range strokeLinecap="unset" />
          </ProgressCircle.Circle>
          <AbsoluteCenter>
            <Text as="span" fontSize={10}>
              {correctUserAnswers}/{allQuestionsCount}
            </Text>
          </AbsoluteCenter>
        </ProgressCircle.Root>
      </Box>

      <Text>
        You got {resultPercent}% of the answers correct. Congratulations!
      </Text>
      <Button size="xl" variant="surface" onClick={onResetQuiz}>
        Пройти знову
      </Button>
      <Button size="xl" variant="surface">
        Оновити запитання
      </Button>
      <Button size="xl" variant="surface">
        Змінити тему
      </Button>
    </Container>
  );
};

export default Result;
