import { BasicQuizState, BasicQuizStore } from "./store.types";
import javascriptQuestions from "../../../data/javascriptQuestions.json";

export const defaultStoreValues: BasicQuizState = {
  quizData: javascriptQuestions as BasicQuizStore["quizData"],
  answers: [],
  currentQuestion: {
    question: javascriptQuestions.questions[0].question,
    index: 0,
  },
  options: javascriptQuestions.questions[0].options,
  score: 0,
};
