import { Prose } from "../ui/prose";

const html = String.raw;

type QuestionProps = {
  question: string;
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Prose
      textStyle="3xl"
      fontWeight={600}
      fontSize="clamp(1.5rem, 4vw, 4vh)"
      lineHeight={1.1}
      textAlign={{ base: "left", md: "center" }}
      color="#3b2f6f"
      dangerouslySetInnerHTML={{
        __html: html`${question}`,
      }}
    />
  );
};

export default Question;
