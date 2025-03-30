import { Flex, Button, For } from "@chakra-ui/react";
import type Quiz from "../../types/quiz";
import { Prose } from "../ui/prose";

const html = String.raw;

type AnswersProps = {
  answers: Quiz["answers"];
};

const Answers: React.FC<AnswersProps> = ({ answers }) => {
  return (
    <Flex direction="column" gap={2} mt={6}>
      <For each={answers}>
        {(answer) => (
          <Button
            key={answer.id}
            justifyContent="flex-start"
            size="2xl"
            variant="subtle"
          >
            <Prose
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
