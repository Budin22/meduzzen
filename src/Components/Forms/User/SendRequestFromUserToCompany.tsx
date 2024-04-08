import { memo, useCallback } from "react";
import Button from "@mui/material/Button";
import { createActionFromUser } from "../../../Api/action-api";

export const SendRequestFromUserToCompany = memo(
  ({ companyId, token }: { companyId: number; token: string }) => {
    const sendRequestHandler = useCallback(() => {
      createActionFromUser(token, companyId)
        .then((data) => console.log(data.result))
        .catch((err) => console.log(err));
    }, [token, companyId]);

    return (
      <Button onClick={sendRequestHandler}>Send request to company</Button>
    );
  },
);
