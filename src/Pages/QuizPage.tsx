import React, { memo } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { QuizPageBody } from "./QuizPageBody";

export const QuizPage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <QuizPageBody />
      </GenericAuthContent>
    </GenericPage>
  );
});
