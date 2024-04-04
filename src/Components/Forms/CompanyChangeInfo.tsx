import React, { FormEvent, memo, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getCompanyById, updateCompanyInfo } from "../../Api/company-api";
import { CompanyBodyRes } from "../../Type/companyTypes";
import { useDispatchSetTargetCompany } from "../../Hooks/target-company-hooks";

export const CompanyChangeInfo = memo(
  ({
    targetCompany,
    token,
  }: {
    targetCompany: CompanyBodyRes;
    token: string;
  }) => {
    const {
      company_name,
      company_title,
      company_city,
      company_description,
      company_phone,
      company_links,
      company_id,
    } = targetCompany;
    const dispatchSetTargetCompany = useDispatchSetTargetCompany();
    const [name, setName] = useState(company_name);
    const [title, setTitle] = useState(company_title);
    const [description, setDescription] = useState(company_description);
    const [city, setCity] = useState(company_city);
    const [phone, setPhone] = useState(company_phone);
    const [links, setLinks] = useState<string[]>(company_links);

    const changeInfoHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateCompanyInfo(
        {
          company_name: name,
          company_title: title,
          company_description: description,
          company_city: city,
          company_phone: phone,
          company_links: links,
        },
        token,
        company_id,
      )
        .then((data) => {
          getCompanyById(token, company_id)
            .then((data) => {
              dispatchSetTargetCompany(data.result);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };

    return (
      <form onSubmit={changeInfoHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Change company info
        </Typography>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Company name</InputLabel>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={name}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Title</InputLabel>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder={title}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Description</InputLabel>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              placeholder={description}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>City</InputLabel>
            <Input
              onChange={(e) => setCity(e.target.value)}
              placeholder={city}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              placeholder={phone ? phone : "+38093545882"}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Links</InputLabel>
            <Input onChange={(e) => setLinks([])} placeholder="Links" />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Change info
        </Button>
      </form>
    );
  },
);
