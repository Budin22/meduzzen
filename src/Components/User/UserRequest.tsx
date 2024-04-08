import React, { memo, useEffect, useState } from "react";
import { getUserRequestsList } from "../../Api/user-data-api";
import { CompaniesItem } from "../../Type/user-data-types";
import { UserCompanyItem } from "./UserCompanyItem";
import { List } from "@mui/material";
import { declineAction } from "../../Api/action-api";
import { GenericActionBtn } from "../Button/GenericActionBtn";

export const UserRequest = memo(({ userId }: { userId: number }) => {
  const [companies, setCompanies] = useState<CompaniesItem[]>([]);

  useEffect(() => {
    getUserRequestsList(userId)
      .then((data) => {
        setCompanies(data.result.companies);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  if (companies.length === 0) return null;

  return (
    <>
      <div>Request list</div>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        {companies.map((com) => (
          <>
            <UserCompanyItem key={com.company_id} company={com} />
            <GenericActionBtn
              actionId={com.action_id}
              name="decline"
              asFun={declineAction}
            />
          </>
        ))}
      </List>
    </>
  );
});
