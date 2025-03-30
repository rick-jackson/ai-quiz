import Toolbar from "../Toolbar";
import Question from "../Question";
import Answers from "../Answers";
import type QuizType from "../../types/quiz";

type QuizProps = {
  quiz: QuizType[];
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const quizData = quiz[0];
  return (
    <>
      <Toolbar currentQuizId={9} />
      <Question question={quizData.question} />
      <Answers answers={quizData.answers} />
    </>
  );
};

export default Quiz;
