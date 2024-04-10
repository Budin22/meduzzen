import React, { memo, useCallback, useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSelectorCurrentUser } from "../Hooks/current-user-hooks";
import { BasicModal } from "../Components/Modals/BasicModal";
import { getQuizById, takeQuiz } from "../Api/quiz-api";
import { Answer, FullQuiz } from "../Type/quiz-types";
import { RemoveQuizBtn } from "../Components/Button/RemoveQuizBtn";
import { QuizQuestionItem } from "../Components/Quiz/QuizQuestionItem";
import { QuizUpdateInfo } from "../Components/Quiz/QuizUpdateInfo";
import { QuizAddQuestion } from "../Components/Quiz/QuizAddQuestion";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const QuizPageBody = memo(() => {
  const [isChangeable, setIsChangeable] = useState(false);
  const [quiz, setQuiz] = useState<FullQuiz>();
  const [answer, setAnswer] = useState<Answer>();
  const navigation = useNavigate();

  const { role } = useSelectorCurrentUser();
  const { id } = useParams();

  useEffect(() => {
    getQuizById(Number(id))
      .then((data) => setQuiz(data.result))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (role === "admin" || role === "owner") setIsChangeable(true);
  }, [role]);

  const addAnswerHandler = useCallback((id: number, answer: string) => {
    setAnswer((state) => {
      const newState = { ...state };
      newState[id] = answer;
      return newState;
    });
  }, []);

  const sendQuizHandler = useCallback(() => {
    if (!quiz || !answer) return;
    console.log(answer);
    takeQuiz(quiz.quiz_id, { answers: { ...answer } })
      .then((data) => {
        alert(
          "id: " +
            data.result.result_id +
            ") your result: " +
            data.result.result_score,
        );
        navigation("/companies/");
      })
      .catch((err) => console.log(err));
  }, [answer, quiz, navigation]);

  return (
    <div>
      {quiz && (
        <div>
          <Typography variant="h1" gutterBottom color="steelblue">
            Quiz #{id}
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {quiz.quiz_name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                quiz id:{quiz.quiz_id}
              </Typography>
              <Typography variant="body2">
                description: {quiz.quiz_description}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              {isChangeable && (
                <div>
                  <BasicModal name="Update quiz info">
                    <QuizUpdateInfo quiz_id={quiz.quiz_id} />
                  </BasicModal>
                  <BasicModal name="Add question">
                    <QuizAddQuestion quiz_id={quiz.quiz_id} />
                  </BasicModal>
                  <RemoveQuizBtn quiz_id={quiz.quiz_id} />
                </div>
              )}
            </CardActions>
          </Card>
          <Box>
            <Typography>Questions</Typography>
            {quiz.questions_list.map((question) => (
              <QuizQuestionItem
                key={question.question_id}
                question={question}
                addAnswerHandler={addAnswerHandler}
              />
            ))}
            <Button
              variant="contained"
              onClick={sendQuizHandler}
              sx={{ maxWidth: "100%" }}
            >
              Submit quiz
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
});
