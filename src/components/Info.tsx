import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuizStore } from "../store";

export const Info: React.FC = () => {
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
