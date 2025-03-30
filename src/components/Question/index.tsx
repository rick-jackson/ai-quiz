import { Text } from "@chakra-ui/react";

type QuestionProps = {
  question: string;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Text
      textStyle="3xl"
      fontWeight="medium"
      fontSize="clamp(2rem, 4vw, 4vh)"
      textAlign="center"
      mt={5}
    >
      {question}
    </Text>
  );
};

export default Question;
