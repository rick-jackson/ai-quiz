import { Prose } from "../ui/prose";

const html = String.raw;

type QuestionProps = {
  question: string;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Prose
      textStyle="3xl"
      fontWeight="medium"
      fontSize="clamp(2rem, 4vw, 4vh)"
      textAlign="center"
      mt={5}
      dangerouslySetInnerHTML={{
        __html: html`${question}`,
      }}
    />
  );
};

export default Question;
