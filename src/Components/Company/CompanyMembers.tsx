import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyMemberList } from "../../Api/company-data-api";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { CompanyMemberItem } from "./CompanyMemberItem";
import { leaveMemberFromCompany } from "../../Api/action-api";
import { GenericActionBtn } from "../Button/GenericActionBtn";

export const CompanyMembers = memo(
  ({ companyId, token }: { companyId: number; token: string }) => {
    const [members, setMembers] = useState<CompanyMembersItem[]>([]);

    useEffect(() => {
      getCompanyMemberList(token, companyId)
        .then((data) => {
          setMembers(data.result.users);
        })
        .catch((err) => console.log(err));
    }, [companyId, token]);

    if (members.length === 0) return null;

    return (
      <>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        >
          <div>Members</div>
          {members.map((mem) => (
            <Stack key={mem.user_id}>
              <CompanyMemberItem member={mem}>
                <GenericActionBtn
                  actionId={mem.action_id}
                  token={token}
                  name="remove member"
                  asFun={leaveMemberFromCompany}
                />
              </CompanyMemberItem>
            </Stack>
          ))}
        </List>
      </>
    );
  },
);
