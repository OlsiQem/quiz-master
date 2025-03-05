import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { AnswerIndex, useQuizStore } from "./store";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Info: React.FC = () => {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const questions = useQuizStore((state) => state.quizData.questions);
  return (
    <Box sx={{ position: "relative", display: "inline-flex", mt: 2 }}>
      <CircularProgress
        variant="determinate"
        value={((currentQuestion.index + 1) / questions.length) * 100}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {`${currentQuestion.index + 1}/${questions.length}`}
        </Typography>
      </Box>
    </Box>
  );
};

const QuizResults: React.FC = () => {
  const score = useQuizStore((state) => state.score);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Game Ended
      </Typography>
      <Typography variant="subtitle1">Your score is {score}</Typography>
      <Button variant="contained" onClick={resetQuiz} sx={{ mt: 2 }}>
        Reset Quiz
      </Button>
    </Paper>
  );
};

const App: React.FC = () => {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const currentOptions = useQuizStore((state) => state.options);
  const answers = useQuizStore((state) => state.answers);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const prevQuestion = useQuizStore((state) => state.previousQuestion);
  const selectAnswer = useQuizStore((state) => state.selectAnswer);
  const questions = useQuizStore((state) => state.quizData.questions);

  const hasAnswer = answers[currentQuestion.index];
  const isLastQuestion = questions.length - 1 === currentQuestion.index;
  const hasGameEnded = isLastQuestion && hasAnswer;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {hasGameEnded ? (
        <QuizResults />
      ) : (
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {currentQuestion.question}
          </Typography>
          {currentOptions.map((option, index) => (
            <Button
              key={`${option.explanation}-${index}`}
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              onClick={() => {
                selectAnswer((index + 1) as AnswerIndex, option.isCorrect);
              }}
            >
              {option.answer}
            </Button>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={prevQuestion}
              disabled={currentQuestion.index === 0}
            >
              Previous
            </Button>

            {!isLastQuestion && (
              <Button
                variant="contained"
                onClick={nextQuestion}
                disabled={!hasAnswer}
              >
                Next
              </Button>
            )}
          </Box>
          <Info />
        </Paper>
      )}
      <ThemeSwitcher />
    </Container>
  );
};

export default App;
