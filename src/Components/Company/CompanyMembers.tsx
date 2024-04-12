import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyMemberList } from "../../Api/company-data-api";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { CompanyMemberItem } from "./CompanyMemberItem";
import {
  addMemberToAdmin,
  leaveMemberFromCompany,
  removeMemberFromAdmin,
} from "../../Api/action-api";
import { GenericActionBtn } from "../Button/GenericActionBtn";
import { useSelectorCurrentUser } from "../../Hooks/current-user-hooks";
import { BasicModal } from "../Modals/BasicModal";
import { UserAnalyticInCompany } from "../analitic/UserAnalyticInCompany";

export const CompanyMembers = memo(({ companyId }: { companyId: number }) => {
  const [members, setMembers] = useState<CompanyMembersItem[]>([]);

  const { currentUser } = useSelectorCurrentUser();

  useEffect(() => {
    getCompanyMemberList(companyId)
      .then((data) => {
        setMembers(data.result.users);
      })
      .catch((err) => console.log(err));
  }, [companyId, currentUser]);

  if (members.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Members</div>
        {members.map((mem) => (
          <Stack key={mem.user_id}>
            <CompanyMemberItem member={mem}>
              <BasicModal name="Show anlytic">
                <UserAnalyticInCompany
                  userId={mem.user_id}
                  companyId={companyId}
                  name="User analytic"
                />
              </BasicModal>
              <GenericActionBtn
                actionId={mem.action_id}
                name="remove member"
                asFun={leaveMemberFromCompany}
              />
            </CompanyMemberItem>
            <GenericActionBtn
              actionId={mem.action_id}
              name="make admin"
              asFun={addMemberToAdmin}
            />
            <GenericActionBtn
              actionId={mem.action_id}
              name="remove from admin"
              asFun={removeMemberFromAdmin}
            />
          </Stack>
        ))}
      </List>
    </>
  );
});
