import React, { memo, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { getCompanyMemberList } from "../../Api/company-data-api";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { CompanyMemberItem } from "./CompanyMemberItem";
import { GenericActionBtn } from "../Button/GenericActionBtn";
import { removeMemberFromAdmin } from "../../Api/action-api";

export const CompanyAdmin = memo(({ companyId }: { companyId: number }) => {
  const [members, setMembers] = useState<CompanyMembersItem[]>([]);

  useEffect(() => {
    getCompanyMemberList(companyId)
      .then((data) => {
        const adminList = data.result.users.filter(
          (user) => user.action === "admin",
        );
        setMembers(adminList);
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  if (members.length === 0) return null;

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <div>Admin</div>
        {members.map((mem) => (
          <Stack key={mem.user_id}>
            <CompanyMemberItem member={mem}>
              <GenericActionBtn
                actionId={mem.action_id}
                name="remove from admin"
                asFun={removeMemberFromAdmin}
              />
            </CompanyMemberItem>
          </Stack>
        ))}
      </List>
    </>
  );
});
