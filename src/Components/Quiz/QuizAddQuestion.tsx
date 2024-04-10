import React, { memo, useCallback, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addQuestionForQuiz } from "../../Api/quiz-api";
import { NewQuizQuestion } from "../../Type/share-types";

export const QuizAddQuestion = memo(
  ({
    quiz_id,
    questionsHandler,
    question,
    updateQuestionHandler,
  }: {
    quiz_id?: number;
    questionsHandler?: (question: NewQuizQuestion) => void;
    question?: NewQuizQuestion;
    updateQuestionHandler?: (question: NewQuizQuestion) => void;
  }) => {
    const [question_text, setQuestion_text] = useState(
      question?.question_text ? question.question_text : "",
    );
    const [answer, setAnswer] = useState("");
    const [question_correct_answer, setQuestion_correct_answer] = useState(
      question?.question_correct_answer ? question.question_correct_answer : 0,
    );
    const [question_answers, setQuestion_answers] = useState<string[]>(
      question?.question_answers ? question.question_answers : [],
    );

    const addQuestionHandler = () => {
      if (
        isNaN(question_correct_answer) ||
        question_correct_answer <= 0 ||
        question_correct_answer > question_answers.length
      ) {
        alert("Need choose right answer!");
        return;
      }

      const newQuestion = {
        question_text,
        question_answers,
        question_correct_answer: question_correct_answer - 1,
      };

      if (newQuestion && updateQuestionHandler) {
        updateQuestionHandler(newQuestion);
      }

      if (questionsHandler) {
        questionsHandler(newQuestion);
        setAnswer("");
        setQuestion_text("");
        setQuestion_answers([]);
        setQuestion_correct_answer(0);
      }

      if (quiz_id) {
        addQuestionForQuiz(quiz_id, newQuestion)
          .then((data) => console.log(data.result))
          .catch((err) => console.log(err));
      }
    };

    const addAnswerHandler = useCallback(() => {
      setQuestion_answers((state) => [...state, answer]);
      setAnswer("");
    }, [answer]);

    return (
      <Box>
        <Typography variant="h6" gutterBottom color="steelblue">
          Add questions
        </Typography>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Question text</InputLabel>
            <Input
              onChange={(e) => setQuestion_text(e.target.value)}
              placeholder="1+1"
              value={question_text}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Question answers</InputLabel>
            <Input
              placeholder="2"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
            />
            <Typography>[{question_answers.toString()}]</Typography>
          </FormControl>
        </Box>
        <Button
          onClick={addAnswerHandler}
          variant="contained"
          sx={{ maxWidth: "100%" }}
        >
          Add answer
        </Button>
        <Button
          onClick={() => setQuestion_answers([])}
          variant="contained"
          sx={{ maxWidth: "100%" }}
        >
          Clear answers
        </Button>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Question correct answer number</InputLabel>
            <Input
              type="number"
              value={question_correct_answer}
              onChange={(e) =>
                setQuestion_correct_answer(Number(e.target.value))
              }
            />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          onClick={addQuestionHandler}
          sx={{ maxWidth: "100%" }}
        >
          Add question
        </Button>
      </Box>
    );
  },
);
