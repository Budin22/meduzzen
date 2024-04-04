import React, {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useState,
} from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { changeCompanyAvatar } from "../../Api/company-api";
import { CompanySuccessfulRes } from "../../Type/companyTypes";
import { useDispatchSetTargetCompany } from "../../Hooks/target-company-hooks";

export const CompanyChangeAvatar = memo(
  ({
    targetCompany,
    token,
  }: {
    targetCompany: CompanySuccessfulRes;
    token: string;
  }) => {
    const dispatchSetTargetCompany = useDispatchSetTargetCompany();
    const [uploadedImage, setUploadedImage] = useState<File>();

    const changeAvatarHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (uploadedImage) {
          formData.append("file", uploadedImage);
          changeCompanyAvatar(formData, token, targetCompany.company_id)
            .then((data) => {
              const newCompany: CompanySuccessfulRes = JSON.parse(
                JSON.stringify(targetCompany),
              );
              newCompany.company_avatar = data.result;
              dispatchSetTargetCompany(newCompany);
            })
            .catch((err) => console.log(err));
        }
      },
      [uploadedImage, token, dispatchSetTargetCompany, targetCompany],
    );

    const setUploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        if (e.target.files[0]) setUploadedImage(e.target.files[0]);
      }
    };

    return (
      <form onSubmit={changeAvatarHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Change avatar
        </Typography>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl variant="standard">
            <InputLabel>Avatar</InputLabel>
            <Input type="file" onChange={setUploadFileHandler} />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{ maxWidth: "100%", marginRight: 2 }}
        >
          Change avatar
        </Button>
      </form>
    );
  },
);
