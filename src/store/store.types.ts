export const optionCodes = {
  option1: "A",
  option2: "B",
  option3: "C",
  option4: "D",
} as const;

export const difficulty = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
} as const;

export type AnswerIndex = 1 | 2 | 3 | 4;
export interface CurrentQuestion {
  question: string;
  index: number;
}
export interface Option {
  answer: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Question {
  question: string;
  hint: string;
  options: Option[];
}
export interface QuizData {
  topic: string;
  difficulty: keyof typeof difficulty;
  questions: Question[];
}

export type BasicQuizState = {
  quizData: QuizData;
  currentQuestion: CurrentQuestion;
  options: Option[];
  score: number;
  answers: Array<(typeof optionCodes)[keyof typeof optionCodes]>;
};

export type BasicQuizActions = {
  resetQuiz: () => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  selectAnswer: (answerIndex: AnswerIndex, isCorrect: boolean) => void;
};
export type BasicQuizStore = BasicQuizState & BasicQuizActions;
