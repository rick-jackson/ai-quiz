import { Flex, Button, For } from "@chakra-ui/react";
import type Quiz from "../../types/quiz";

type AnswersProps = {
  answers: Quiz["answers"];
  onSelectAnswer: (answerId: number, isCorrect: boolean) => void;
  selectedAnswerId: number;
};

const Answers: React.FC<AnswersProps> = ({
  answers,
  onSelectAnswer,
  selectedAnswerId,
}) => {
  return (
    <Flex direction="column" gap={2} my={10}>
      <For each={answers}>
        {(answer) => (
          <Button
            key={answer.id}
            justifyContent="flex-start"
            size="2xl"
            variant="outline"
            borderColor="bg.primary"
            color="#3b2f6f"
            borderWidth={3}
            borderRadius={7}
            transition="none"
            whiteSpace="wrap"
            textAlign="left"
            minH="64px"
            h="auto"
            {...(selectedAnswerId === answer.id && { borderColor: "red.500" })}
            {...(!!selectedAnswerId &&
              answer.isCorrect && { borderColor: "green.600" })}
            onClick={() => onSelectAnswer(answer.id, answer.isCorrect)}
          >
            {answer.text}
          </Button>
        )}
      </For>
    </Flex>
  );
};

export default Answers;
