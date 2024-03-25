import { memo, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export interface MyPaginationProps {
  totalSize: number;
  page: number;
  totalPage: number;
  changePageHandler: (page: number) => void;
  changePageSizeHandler: (pageSize: number) => void;
}

export const MyPagination = memo(
  ({
    page,
    totalPage,
    totalSize,
    changePageHandler,
    changePageSizeHandler,
  }: MyPaginationProps) => {
    const [rangeList, setRange] = useState<string[]>([]);
    const [pageSize, setPageSize] = useState<string>("");

    useEffect(() => {
      let num = 4;
      const myRange = [];
      while (num < totalSize && myRange.length < 3) {
        myRange.push("" + num);
        num = num * 2;
      }
      myRange.push(totalSize.toString());
      setRange(myRange);
    }, [setRange, totalSize]);
    const pageSizeHandler = (e: SelectChangeEvent) => {
      if (Number(e.target.value)) {
        setPageSize(e.target.value);
        changePageSizeHandler(Number(e.target.value));
      }
    };

    const setNextPage = () => {
      if (totalSize > page && totalPage > page) {
        changePageHandler(page + 1);
      }
    };

    const setBackPage = () => {
      if (totalSize >= page && page !== 1) {
        changePageHandler(page - 1);
      }
    };

    return (
      <>
        <Button onClick={setBackPage}>back</Button>
        <Typography variant="h6" component="span">
          page: {page} totalSize: {totalSize} pages: {totalPage}
        </Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            sx={{ minWidth: 75 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pageSize}
            label="range"
            onChange={pageSizeHandler}
          >
            {rangeList.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={setNextPage}>next</Button>
      </>
    );
  },
);
