import React, { memo } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useSelectorUser } from "../Hooks/user-hooks";

export const UsersPage = memo(() => {
  const { users } = useSelectorUser();
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Users page
      </Typography>
      <Stack>
        {users?.length !== 0 &&
          users.map((u) => (
            <span key={u.id}>
              {u.id}. {u.email}
            </span>
          ))}
      </Stack>
    </Container>
  );
});
