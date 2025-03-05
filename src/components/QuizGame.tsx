import { Box, Button, Typography } from "@mui/material";
import { AnswerIndex, useQuizStore } from "../store";
import { Info } from "./Info";

export const QuizGame = () => {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const currentOptions = useQuizStore((state) => state.options);
  const answers = useQuizStore((state) => state.answers);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const prevQuestion = useQuizStore((state) => state.previousQuestion);
  const selectAnswer = useQuizStore((state) => state.selectAnswer);
  const questions = useQuizStore((state) => state.quizData.questions);

  const hasAnswer = answers[currentQuestion.index];
  const isLastQuestion = questions.length - 1 === currentQuestion.index;

  return (
    <>
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
    </>
  );
};
