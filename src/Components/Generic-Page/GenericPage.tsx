import { memo } from "react";
import { Header } from "../Header";
import Box from "@mui/material/Box";
import { GenericPageProps } from "./generic-page-props";

export const GenericPage = memo(({ children }: GenericPageProps) => {
  return (
    <Box>
      <Header />
      <Box sx={{ paddingTop: 8 }}>{children}</Box>
    </Box>
  );
});
