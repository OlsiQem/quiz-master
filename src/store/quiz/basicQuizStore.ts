import { create } from "zustand";
import { BasicQuizStore, optionCodes } from "./store.types";
import { defaultStoreValues } from "./initialValues";
import javascriptQuestions from "../../../data/javascriptQuestions.json";

export const useQuizStore = create<BasicQuizStore>((set) => ({
  ...defaultStoreValues,
  nextQuestion: () => {
    set((state) => {
      const nextIndex = state.currentQuestion.index + 1;
      const currentQuestion = {
        question: javascriptQuestions.questions[nextIndex].question,
        index: nextIndex,
      };
      return {
        currentQuestion,
        options: javascriptQuestions.questions[nextIndex].options,
      };
    });
  },
  previousQuestion: () => {
    set((state) => {
      const nextIndex = state.currentQuestion.index - 1;
      const currentQuestion = {
        question: javascriptQuestions.questions[nextIndex].question,
        index: nextIndex,
      };
      return {
        currentQuestion,
        options: javascriptQuestions.questions[nextIndex].options,
      };
    });
  },
  resetQuiz: () => {
    set(() => defaultStoreValues);
  },
  selectAnswer: (answerIndex, isCorrect) => {
    set((state) => {
      const currentAnswer = optionCodes[`option${answerIndex}`];
      const index = state.currentQuestion.index;
      const hasAnswerBefore = state.answers[index];
      const score = isCorrect ? state.score + 1 : state.score;

      if (hasAnswerBefore) {
        return {
          answers: state.answers.map((oldAnswer, i) =>
            index === i ? currentAnswer : oldAnswer
          ),
          score,
        };
      }
      return {
        answers: [...state.answers, currentAnswer],
        score,
      };
    });
  },
}));
