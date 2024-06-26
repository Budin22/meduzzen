import React, { memo, useEffect, useState } from "react";
import { getUserInvitesList } from "../../Api/user-data-api";
import { CompaniesItem } from "../../Type/user-data-types";
import { UserCompanyItem } from "./UserCompanyItem";
import { List } from "@mui/material";
import { acceptActionInvite, declineAction } from "../../Api/action-api";
import { GenericActionBtn } from "../Button/GenericActionBtn";

export const UserInvites = memo(({ userId }: { userId: number }) => {
  const [companies, setCompanies] = useState<CompaniesItem[]>([]);

  useEffect(() => {
    getUserInvitesList(userId)
      .then((data) => {
        setCompanies(data.result.companies);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  if (companies.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Request list</div>
        {companies.map((com) => (
          <>
            <UserCompanyItem key={com.company_id} company={com} />
            <GenericActionBtn
              actionId={com.action_id}
              name="accept invite"
              asFun={acceptActionInvite}
            />
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
