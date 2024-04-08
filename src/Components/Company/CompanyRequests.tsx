import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyRequestsList } from "../../Api/company-data-api";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { CompanyMemberItem } from "./CompanyMemberItem";
import { GenericActionBtn } from "../Button/GenericActionBtn";
import { acceptActionRequest, declineAction } from "../../Api/action-api";

export const CompanyRequests = memo(
  ({ companyId, token }: { companyId: number; token: string }) => {
    const [members, setMembers] = useState<CompanyMembersItem[]>([]);

    useEffect(() => {
      getCompanyRequestsList(token, companyId)
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
          <div>Requests</div>
          {members.map((mem) => (
            <Stack key={mem.user_id}>
              <CompanyMemberItem member={mem}>
                <GenericActionBtn
                  actionId={mem.action_id}
                  token={token}
                  name="accept invite"
                  asFun={acceptActionRequest}
                />
                <GenericActionBtn
                  actionId={mem.action_id}
                  token={token}
                  name="decline"
                  asFun={declineAction}
                />
              </CompanyMemberItem>
            </Stack>
          ))}
        </List>
      </>
    );
  },
);
