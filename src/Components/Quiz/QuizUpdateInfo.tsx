import React, { FormEvent, memo, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { updateQuizInfo } from "../../Api/quiz-api";

export const QuizUpdateInfo = memo(
  ({ quiz_id }: { quiz_id: number | undefined }) => {
    const [quiz_name, setQuiz_name] = useState("");
    const [quiz_title, setQuiz_title] = useState("");
    const [quiz_description, setQuiz_description] = useState("");
    const [quiz_frequency, setQuiz_frequency] = useState<number>(0);

    const changeInfoHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!quiz_id) return;
      updateQuizInfo(quiz_id, {
        quiz_name,
        quiz_description,
        quiz_frequency,
        quiz_title,
      })
        .then((data) => console.log(data.result))
        .catch((err) => console.log(err));
    };

    return (
      <form onSubmit={changeInfoHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Change quiz info
        </Typography>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => setQuiz_name(e.target.value)}
              placeholder={quiz_name}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Title</InputLabel>
            <Input
              onChange={(e) => setQuiz_title(e.target.value)}
              placeholder={quiz_title}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Description</InputLabel>
            <Input
              onChange={(e) => setQuiz_description(e.target.value)}
              placeholder={quiz_description}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Quiz frequency</InputLabel>
            <Input
              type="number"
              onChange={(e) => setQuiz_frequency(Number(e.target.value))}
            />
          </FormControl>
        </Box>
        <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
          Change info
        </Button>
      </form>
    );
  },
);
