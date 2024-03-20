import { memo } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { Container } from "@mui/material";
import { GenericPageProps } from "./generic-page-props";

export const GenericAccessPage = memo(({ children }: GenericPageProps) => {
  return (
    <Box>
      <Header />
      <Container sx={{ paddingTop: 8 }}>{children}</Container>
    </Box>
  );
});
