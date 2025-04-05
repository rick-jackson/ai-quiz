import { Flex, Button, For, Text } from "@chakra-ui/react";
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
    <Flex direction="column" gap={2} mt={6}>
      <For each={answers}>
        {(answer) => (
          <Button
            key={answer.id}
            justifyContent="flex-start"
            size="2xl"
            variant="subtle"
            borderWidth={2}
            transition="none"
            {...(selectedAnswerId === answer.id && { borderColor: "red" })}
            {...(!!selectedAnswerId &&
              answer.isCorrect && { borderColor: "green" })}
            onClick={() => onSelectAnswer(answer.id, answer.isCorrect)}
          >
            <Text>{answer.text}</Text>
          </Button>
        )}
      </For>
    </Flex>
  );
};

export default Answers;
