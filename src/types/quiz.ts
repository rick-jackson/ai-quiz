type Quiz = {
  id: number;
  title: string;
  question: string;
  answers: {
    id: number;
    text: string;
  }[];
};

export default Quiz;
