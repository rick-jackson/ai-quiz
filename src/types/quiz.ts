type Quiz = {
  id: number;
  title: string;
  question: string;
  answers: {
    id: number;
    text: string;
    isCorrect: boolean;
  }[];
};

export default Quiz;
