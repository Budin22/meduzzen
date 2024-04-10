import React, { FormEvent, memo, useCallback, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createQuiz } from "../../Api/quiz-api";
import { QuizAddQuestion } from "./QuizAddQuestion";
import { NewQuizQuestion } from "../../Type/share-types";
import { BasicModal } from "../Modals/BasicModal";

export const QuizCreator = memo(({ company_id }: { company_id: number }) => {
  const [quiz_name, setQuiz_name] = useState("");
  const [quiz_id, setQuiz_id] = useState<number>();
  const [quiz_frequency, setQuiz_frequency] = useState<number>(0);

  const [questions_list, setQuestions_list] = useState<NewQuizQuestion[]>([]);
  const [question, setQuestion] = useState<NewQuizQuestion>();
  const [index, setIndex] = useState(-1);

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

  const removeQuestionHandler = useCallback((question: string) => {
    setQuestions_list((state) =>
      state.filter((q) => q.question_text !== question),
    );
  }, []);

  const updateQuestionHandler = useCallback(
    (question: string) => {
      const inx = questions_list.findIndex((q) => q.question_text === question);
      setIndex(inx);
      setQuestion(questions_list[inx]);
    },
    [questions_list],
  );

  const updateQuestion = useCallback(
    (question: NewQuizQuestion) => {
      questions_list[index] = question;
      setQuestions_list(questions_list);
      setQuestion(undefined);
    },
    [questions_list, index],
  );

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
          question={question}
          updateQuestionHandler={updateQuestion}
        />
        <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
          Create quiz
        </Button>
      </form>
      <p>Questions</p>
      <div style={{ height: 300, overflow: "scroll" }}>
        {questions_list.map((question, index) => {
          return (
            <div key={question.question_text}>
              <span>{index + 1}</span>
              <p>Question: {question.question_text}</p>
              <p>Answers: [{question.question_answers.toString()}]</p>
              <span>Right answer: {question.question_correct_answer + 1}</span>
              <Button
                onClick={() => removeQuestionHandler(question.question_text)}
              >
                remove question
              </Button>

              <Button
                onClick={() => {
                  updateQuestionHandler(question.question_text);
                }}
              >
                <BasicModal
                  name="update question"
                  children={
                    <QuizAddQuestion
                      question={question}
                      updateQuestionHandler={updateQuestion}
                    />
                  }
                />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
});
