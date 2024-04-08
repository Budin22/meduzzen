import React, { memo, useEffect, useState } from "react";
import { getUserCompanyList } from "../../Api/user-data-api";
import { CompaniesItem } from "../../Type/user-data-types";
import { UserCompanyItem } from "./UserCompanyItem";
import { List, Stack } from "@mui/material";
import { leaveMemberFromCompany } from "../../Api/action-api";
import { GenericActionBtn } from "../Button/GenericActionBtn";

export const UserCompanies = memo(({ userId }: { userId: number }) => {
  const [userCompanies, setUserCompanies] = useState<CompaniesItem[]>([]);

  useEffect(() => {
    getUserCompanyList(userId)
      .then((data) => {
        setUserCompanies(data.result.companies);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  if (userCompanies.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Companies list</div>
        {userCompanies.map((com) => (
          <Stack
            key={com.company_id}
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <UserCompanyItem company={com} />
            <GenericActionBtn
              actionId={com.action_id}
              name="Leave"
              asFun={leaveMemberFromCompany}
            />
          </Stack>
        ))}
      </List>
    </>
  );
});
