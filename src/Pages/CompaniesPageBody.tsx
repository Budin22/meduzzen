import React, { memo, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import { MyPagination } from "../Components/MyPagination";
import { CompanyItem } from "../Components/Company/CompanyItem";
import { getCompanyList } from "../Api/company-api";
import {
  useDispatchSetCompanyList,
  useSelectorCompanyList,
} from "../Hooks/company-list-hooks";

export const CompaniesPageBody = memo(() => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const dispatchSetCompanyList = useDispatchSetCompanyList();
  const { companies, pagination } = useSelectorCompanyList();

  useEffect(() => {
    if (companies.length === 0) {
      getCompanyList(page, pageSize)
        .then((data) => {
          dispatchSetCompanyList(data.result);
          console.log(data.result);
        })
        .catch((err) => console.log(err));
    }
  }, [companies, page, pageSize, dispatchSetCompanyList]);

  const changePageSizeHandler = (newPageSize: number) => {
    setPageSize(newPageSize);
    getCompanyList(page, newPageSize)
      .then((data) => {
        dispatchSetCompanyList(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  };

  const changePageHandler = (newPage: number) => {
    setPage(newPage);
    getCompanyList(newPage, pageSize)
      .then((data) => {
        dispatchSetCompanyList(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Company page
      </Typography>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <Typography
          textAlign="center"
          variant="h6"
          gutterBottom
          color="steelblue"
        >
          Company list
        </Typography>
        {companies.length > 0 &&
          companies.map((company) => (
            <CompanyItem key={company.company_id} company={company} />
          ))}
        <MyPagination
          page={page}
          totalPage={pagination.total_page}
          totalSize={pagination.total_results}
          changePageHandler={changePageHandler}
          changePageSizeHandler={changePageSizeHandler}
        />
      </List>
    </>
  );
});
