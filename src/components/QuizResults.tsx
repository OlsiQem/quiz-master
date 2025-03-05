import { Button, Typography } from "@mui/material";
import { useQuizStore } from "../store";

export const QuizResults: React.FC = () => {
  const score = useQuizStore((state) => state.score);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Game Ended
      </Typography>
      <Typography variant="subtitle1">Your score is {score}</Typography>
      <Button variant="contained" onClick={resetQuiz} sx={{ mt: 2 }}>
        Reset Quiz
      </Button>
    </>
  );
};
