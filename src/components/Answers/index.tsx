import { Flex, Button, For } from "@chakra-ui/react";
import type Quiz from "../../types/quiz";
import { Prose } from "../ui/prose";

const html = String.raw;

type AnswersProps = {
  answers: Quiz["answers"];
  onSelectAnswer: (answerId: number) => void;
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
            onClick={() => onSelectAnswer(answer.id)}
          >
            <Prose
              whiteSpace="normal !important"
              textAlign="left !important"
              dangerouslySetInnerHTML={{
                __html: html`${answer.text}`,
              }}
            />
          </Button>
        )}
      </For>
    </Flex>
  );
};

export default Answers;
