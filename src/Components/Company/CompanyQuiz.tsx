import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyQuizzesList } from "../../Api/company-data-api";
import { CompanyQuizzesItem } from "../../Type/company-data-types";
import { CompanyQuizItem } from "./CompanyQuizItem";

export const CompanyQuiz = memo(({ companyId }: { companyId: number }) => {
  const [quizzes, setQuizzes] = useState<CompanyQuizzesItem[]>([]);

  useEffect(() => {
    getCompanyQuizzesList(companyId)
      .then((data) => {
        setQuizzes(data.result.quizzes);
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  if (quizzes.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Quizzes</div>
        {quizzes.map((quiz) => (
          <Stack key={quiz.quiz_id}>
            <CompanyQuizItem quiz={quiz} />
          </Stack>
        ))}
      </List>
    </>
  );
});
