import { memo, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import { FullQuestion } from "../../Type/quiz-types";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const QuizQuestionItem = memo(
  ({ question }: { question: FullQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setSelectedAnswer(event.target.value);
    };
    if (!question) return null;
    return (
      <Box display="flex" flexDirection="row" alignItems="center" padding={3}>
        <Box sx={{ minWidth: 120 }}>
          <Typography component="span">{question.question_text}</Typography>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: 400 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Answer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedAnswer}
              label="Answer"
              onChange={handleChange}
            >
              {question.question_answers.map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    );
  },
);
