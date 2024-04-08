import { memo, useCallback } from "react";
import Button from "@mui/material/Button";
import { createActionFromUser } from "../../../Api/action-api";

export const SendRequestFromUserToCompany = memo(
  ({ companyId }: { companyId: number }) => {
    const sendRequestHandler = useCallback(() => {
      createActionFromUser(companyId)
        .then((data) => console.log(data.result))
        .catch((err) => console.log(err));
    }, [companyId]);

    return (
      <Button onClick={sendRequestHandler}>Send request to company</Button>
    );
  },
);
