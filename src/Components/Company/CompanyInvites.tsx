import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyInvitesList } from "../../Api/company-data-api";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { CompanyMemberItem } from "./CompanyMemberItem";
import { GenericActionBtn } from "../Button/GenericActionBtn";
import { declineAction } from "../../Api/action-api";

export const CompanyInvites = memo(({ companyId }: { companyId: number }) => {
  const [members, setMembers] = useState<CompanyMembersItem[]>([]);

  useEffect(() => {
    getCompanyInvitesList(companyId)
      .then((data) => {
        setMembers(data.result.users);
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  if (members.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Invites</div>
        {members.map((mem) => (
          <Stack key={mem.user_id}>
            <CompanyMemberItem member={mem}>
              <GenericActionBtn
                actionId={mem.action_id}
                name="decline"
                asFun={declineAction}
              />
            </CompanyMemberItem>
          </Stack>
        ))}
      </List>
    </>
  );
});
