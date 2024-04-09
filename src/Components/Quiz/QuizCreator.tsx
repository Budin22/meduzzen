import React, { FormEvent, memo, useCallback, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createQuiz } from "../../Api/quiz-api";
import { QuizAddQuestion } from "./QuizAddQuestion";
import { NewQuizQuestion } from "../../Type/share-types";

export const QuizCreator = memo(({ company_id }: { company_id: number }) => {
  const [quiz_name, setQuiz_name] = useState("");
  const [quiz_id, setQuiz_id] = useState<number>();
  const [quiz_frequency, setQuiz_frequency] = useState<number>(0);
  const [questions_list, setQuestions_list] = useState<NewQuizQuestion[]>([]);

  const changeInfoHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createQuiz({ quiz_name, quiz_frequency, company_id, questions_list })
        .then((data) => setQuiz_id(data.result.quiz_id))
        .catch((err) => console.log(err));
    },
    [quiz_name, quiz_frequency, company_id, questions_list],
  );

  const questionsHandler = useCallback((questions: NewQuizQuestion) => {
    setQuestions_list((state) => [...state, questions]);
  }, []);

  console.log("quiz id: " + quiz_id);
  return (
    <div>
      <form onSubmit={changeInfoHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Quiz creator
        </Typography>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Quiz name</InputLabel>
            <Input
              onChange={(e) => setQuiz_name(e.target.value)}
              placeholder={quiz_name}
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
        <QuizAddQuestion
          quiz_id={quiz_id}
          questionsHandler={questionsHandler}
        />
        <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
          Create quiz
        </Button>
      </form>
    </div>
  );
});
