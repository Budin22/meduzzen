import { memo, useEffect, useState } from "react";
import { useSelectorTargetUser } from "../../Hooks/target-user-hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import { getOptionListForUser } from "../../Util/getOptionListForUser";

export const UserActionWrapper = memo(() => {
  const [actionOption, setActionOption] = useState("companies");
  const [actionList, setActionList] = useState<string[]>([]);
  const [optionsList, setOptionsList] = useState<
    Map<string, JSX.Element> | undefined
  >();

  const targetUser = useSelectorTargetUser();

  useEffect(() => {
    if (!targetUser) return;
    const action = getOptionListForUser(targetUser.user_id);
    setOptionsList(action);
    const acList: string[] = [];
    action.forEach((el, key) => acList.push(key));
    setActionList(acList);
  }, [targetUser]);

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
      {optionsList.get(actionOption)}
    </Box>
  );
});
