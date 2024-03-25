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
import { changeAvatar } from "../../Api/user-api";
import { useDispatchSetTargetUser } from "../../Hooks/target-user-hooks";
import { AuthUser } from "../../Type/userTypes";
import { useDispatchSetCurrentUser } from "../../Hooks/current-user-hooks";

export const UserChangeAvatarForm = memo(
  ({
    targetUser,
    currentUser,
    token,
  }: {
    targetUser: AuthUser;
    currentUser: AuthUser;
    token: string;
  }) => {
    const dispatchSetTargetUser = useDispatchSetTargetUser();
    const dispatchSetCurrentUser = useDispatchSetCurrentUser();
    const [uploadedImage, setUploadedImage] = useState<File>();

    const changeAvatarHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (uploadedImage) {
          formData.append("file", uploadedImage);
          changeAvatar(formData, token, targetUser.user_id)
            .then((data) => {
              targetUser.user_avatar = data.result;
              if (targetUser.user_id === currentUser.user_id)
                dispatchSetCurrentUser(targetUser);
              dispatchSetTargetUser(targetUser);
            })
            .catch((err) => console.log(err));
        }
      },
      [
        uploadedImage,
        token,
        targetUser,
        currentUser,
        dispatchSetCurrentUser,
        dispatchSetTargetUser,
      ],
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
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Change avatar
        </Button>
      </form>
    );
  },
);
