import React from "react";
import { Container, Paper } from "@mui/material";
import { useQuizStore } from "./store";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { QuizResults } from "./components/QuizResults";
import { QuizGame } from "./components/QuizGame";

const App: React.FC = () => {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const answers = useQuizStore((state) => state.answers);
  const questions = useQuizStore((state) => state.quizData.questions);

  const hasAnswer = answers[currentQuestion.index];
  const isLastQuestion = questions.length - 1 === currentQuestion.index;
  const hasGameEnded = isLastQuestion && hasAnswer;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
        {hasGameEnded ? <QuizResults /> : <QuizGame />}
      </Paper>
      <ThemeSwitcher />
    </Container>
  );
};

export default App;
