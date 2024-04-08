import { memo, useEffect, useState } from "react";
import { useSelectorAuthToken } from "../../Hooks/auth-token-hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import { getOptionListForCompany } from "../../Util/getOptionListForCompany";
import { useSelectorCurrentUser } from "../../Hooks/current-user-hooks";

export const CompanyActionWrapper = memo(
  ({ companyId }: { companyId: number }) => {
    const [actionOption, setActionOption] = useState("members");
    const [actionList, setActionList] = useState<string[]>([]);
    const [optionsList, setOptionsList] = useState<
      Map<string, JSX.Element> | undefined
    >();

    const currentUser = useSelectorCurrentUser();
    const token = useSelectorAuthToken();

    useEffect(() => {
      const action = getOptionListForCompany(companyId, token);
      setOptionsList(action);
      const acList: string[] = [];
      action.forEach((el, key) => acList.push(key));
      setActionList(acList);
    }, [currentUser, token, companyId]);

    const handleChange = (event: SelectChangeEvent) => {
      setActionOption(event.target.value as string);
    };
    if (!optionsList) return null;

    return (
      <Box sx={{ minWidth: 120, maxWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Action</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={actionOption}
            label="Action"
            onChange={handleChange}
          >
            {actionList.map((o) => (
              <MenuItem key={o} value={o}>
                {o}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {optionsList && optionsList.get(actionOption)}
      </Box>
    );
  },
);
