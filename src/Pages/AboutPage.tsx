import React, { memo } from "react";
import { Container, Typography } from "@mui/material";
import { useHealthCheckQuery } from "../Hooks/queries/useHealthCheckQuery";

export const AboutPage = memo(() => {
  const { data, isLoading } = useHealthCheckQuery();
  console.log(data);

  return (
    <Container>
      {isLoading ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          Loading
        </Typography>
      ) : data ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          detail: {data.detail}, result: {data.result}, status:
          {data.status_code}
        </Typography>
      ) : (
        <Typography variant="h1" gutterBottom color="red">
          Something went wrong
        </Typography>
      )}
    </Container>
  );
});
