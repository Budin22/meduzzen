import React, { memo, useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  useDispatchSetRole,
  useSelectorCurrentUser,
} from "../Hooks/current-user-hooks";
import { getCompanyById } from "../Api/company-api";
import { BasicModal } from "../Components/Modals/BasicModal";
import { CompanyChangeInfo } from "../Components/Forms/Company/CompanyChangeInfo";
import { CompanyRemoveForm } from "../Components/Forms/Company/CompanyRemoveForm";
import { CompanyCreateOne } from "../Components/Forms/Company/CompanyCreateOne";
import { CompanyChangeAvatar } from "../Components/Forms/Company/CompanyChangeAvatar";
import {
  useDispatchSetTargetCompany,
  useSelectorTargetCompany,
} from "../Hooks/target-company-hooks";
import { CompanyActionWrapper } from "../Components/Company/CompanyActionWrapper";
import { SendRequestFromUserToCompany } from "../Components/Forms/User/SendRequestFromUserToCompany";
import { getCompanyMemberList } from "../Api/company-data-api";
import { QuizCreator } from "../Components/Quiz/QuizCreator";

export const CompanyProfileBody = memo(() => {
  const [isChangeable, setIsChangeable] = useState(false);
  const targetCompany = useSelectorTargetCompany();
  const { currentUser, role } = useSelectorCurrentUser();
  const dispatchSetTargetCompany = useDispatchSetTargetCompany();
  const dispatchSetRole = useDispatchSetRole();
  const { id } = useParams();

  useEffect(() => {
    if (!targetCompany || targetCompany.company_id !== Number(id)) {
      getCompanyById(Number(id))
        .then((data) => {
          dispatchSetTargetCompany(data.result);
          getCompanyMemberList(data.result.company_id)
            .then((data) => {
              data.result.users.forEach((mem) => {
                if (mem.user_id === currentUser.user_id) {
                  dispatchSetRole(mem.action);
                }
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      return;
    }
    if (
      targetCompany.company_owner.user_id === currentUser.user_id ||
      currentUser.is_superuser ||
      role === "admin"
    )
      setIsChangeable(true);
  }, [
    id,
    currentUser,
    targetCompany,
    dispatchSetTargetCompany,
    dispatchSetRole,
    role,
  ]);

  return (
    <>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Company Profile page
      </Typography>
      {targetCompany && (
        <>
          <ListItem alignItems="flex-start">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={targetCompany.company_avatar} />
                </ListItemAvatar>
                <Typography variant="h5" component="div">
                  {targetCompany.company_owner.user_email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  company id:{targetCompany.company_id} owner id:{" "}
                  {targetCompany.company_owner.user_id}
                </Typography>
                <Typography variant="body2">
                  description: {targetCompany.company_description}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <BasicModal
                  name="Create company"
                  children={<CompanyCreateOne />}
                />
                {isChangeable && (
                  <>
                    <BasicModal
                      name="Change info"
                      children={
                        <CompanyChangeInfo targetCompany={targetCompany} />
                      }
                    />
                    <BasicModal
                      name="Change avatar"
                      children={
                        <CompanyChangeAvatar targetCompany={targetCompany} />
                      }
                    />
                    <CompanyRemoveForm targetCompany={targetCompany} />
                  </>
                )}
              </CardActions>
            </Card>
            {isChangeable && <CompanyActionWrapper companyId={Number(id)} />}
            {targetCompany.company_owner.user_id !== currentUser.user_id && (
              <SendRequestFromUserToCompany companyId={Number(id)} />
            )}
          </ListItem>
          <Divider variant="inset" />
          <BasicModal name="Create quiz">
            <QuizCreator company_id={targetCompany.company_id} />
          </BasicModal>
        </>
      )}
    </>
  );
});
