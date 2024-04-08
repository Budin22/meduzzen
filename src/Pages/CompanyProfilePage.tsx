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
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { useParams } from "react-router-dom";
import { useSelectorAuthToken } from "../Hooks/auth-token-hooks";
import { useSelectorCurrentUser } from "../Hooks/current-user-hooks";
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

export const CompanyProfilePage = memo(() => {
  const [isChangeable, setIsChangeable] = useState(false);
  const token = useSelectorAuthToken();
  const targetCompany = useSelectorTargetCompany();
  const currentUser = useSelectorCurrentUser();
  const dispatchSetTargetCompany = useDispatchSetTargetCompany();
  const { id } = useParams();

  useEffect(() => {
    if (!targetCompany) {
      getCompanyById(token, Number(id))
        .then((data) => {
          dispatchSetTargetCompany(data.result);
        })
        .catch((err) => console.log(err));
      return;
    }
    if (
      targetCompany.company_owner.user_id === currentUser.user_id ||
      currentUser.is_superuser
    )
      setIsChangeable(true);
  }, [id, token, currentUser, targetCompany, dispatchSetTargetCompany]);

  if (!id) return null;

  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Company Profile page
        </Typography>
        {targetCompany && (
          <>
            <ListItem alignItems="flex-start">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={targetCompany.company_avatar}
                    />
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
                    children={<CompanyCreateOne token={token} />}
                  />
                  {isChangeable && (
                    <>
                      <BasicModal
                        name="Change info"
                        children={
                          <CompanyChangeInfo
                            targetCompany={targetCompany}
                            token={token}
                          />
                        }
                      />
                      <BasicModal
                        name="Change avatar"
                        children={
                          <CompanyChangeAvatar
                            targetCompany={targetCompany}
                            token={token}
                          />
                        }
                      />
                      <CompanyRemoveForm
                        targetCompany={targetCompany}
                        token={token}
                      />
                    </>
                  )}
                </CardActions>
              </Card>
              {isChangeable && <CompanyActionWrapper companyId={Number(id)} />}
              {targetCompany.company_owner.user_id !== currentUser.user_id && (
                <SendRequestFromUserToCompany
                  companyId={Number(id)}
                  token={token}
                />
              )}
            </ListItem>
            <Divider variant="inset" />
          </>
        )}
      </GenericAuthContent>
    </GenericPage>
  );
});
