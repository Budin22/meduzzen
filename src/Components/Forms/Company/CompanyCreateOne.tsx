import React, { FormEvent, memo, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addCompany } from "../../../Api/company-api";

export const CompanyCreateOne = memo(({ token }: { token: string }) => {
  const [companyName, setCompanyName] = useState("");

  const createCompanyHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCompany(token, {
      company_name: companyName,
      is_visible: true,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={createCompanyHandler}>
      <Typography variant="h6" gutterBottom color="steelblue">
        Change user info
      </Typography>
      <Box display="flex" gap={3} marginBottom={2}>
        <FormControl sx={{ minWidth: "25%" }} variant="standard">
          <InputLabel>first name</InputLabel>
          <Input
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder={companyName}
            value={companyName}
          />
        </FormControl>
      </Box>
      <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
        Create company
      </Button>
    </form>
  );
});
