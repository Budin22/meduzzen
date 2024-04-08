import { memo, useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { createActionFromCompany } from "../../../Api/action-api";
import { useSelectorCurrentUser } from "../../../Hooks/current-user-hooks";
import { getUserCompanyList } from "../../../Api/user-data-api";
import { CompaniesItem } from "../../../Type/user-data-types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";

export const SendRequestFromCompanyToUser = memo(
  ({ targetUserId }: { targetUserId: number }) => {
    const [companies, setCompanies] = useState<CompaniesItem[]>([]);
    const [selectedCompany, setSelectedCompany] = useState("");

    const { currentUser } = useSelectorCurrentUser();

    useEffect(() => {
      if (!currentUser) return;
      getUserCompanyList(currentUser.user_id)
        .then((data) => setCompanies(data.result.companies))
        .catch((err) => console.log(err));
    }, [currentUser]);

    const sendRequestHandler = useCallback(() => {
      createActionFromCompany(Number(selectedCompany), targetUserId)
        .then((data) => console.log(data.result))
        .catch((err) => console.log(err));
    }, [selectedCompany, targetUserId]);

    const handleChange = (event: SelectChangeEvent) => {
      setSelectedCompany(event.target.value);
    };

    return (
      <Box sx={{ minWidth: 120, maxWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Company</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCompany}
            label="Company"
            onChange={handleChange}
          >
            {companies.map((com) => (
              <MenuItem key={com.company_id} value={com.company_id}>
                {com.company_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={sendRequestHandler}>Send to user</Button>
      </Box>
    );
  },
);
