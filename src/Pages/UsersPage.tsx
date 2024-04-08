import React, { memo, useEffect, useState } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import {
  useDispatchSetUserList,
  useSelectorUserList,
} from "../Hooks/user-list-hooks";
import { UserItem } from "../Components/User/UserItem";
import { getUserList } from "../Api/user-api";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import { MyPagination } from "../Components/MyPagination";
import { GenericPage } from "../Components/Generic-Page/GenericPage";

export const UsersPage = memo(() => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const dispatchSetUserList = useDispatchSetUserList();
  const { users, pagination } = useSelectorUserList();

  useEffect(() => {
    if (users.length === 0) {
      getUserList(page, pageSize)
        .then((data) => {
          dispatchSetUserList(data.result);
        })
        .catch((err) => console.log(err));
    }
  }, [users, page, pageSize, dispatchSetUserList]);

  const changePageSizeHandler = (newPageSize: number) => {
    setPageSize(newPageSize);
    getUserList(page, newPageSize)
      .then((data) => {
        dispatchSetUserList(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  };

  const changePageHandler = (newPage: number) => {
    setPage(newPage);
    getUserList(newPage, pageSize)
      .then((data) => {
        dispatchSetUserList(data.result);
        console.log(data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Users page
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            gutterBottom
            color="steelblue"
          >
            User list
          </Typography>
          {users.length > 0 &&
            users.map((user) => <UserItem key={user.user_id} user={user} />)}
          <MyPagination
            page={page}
            totalPage={pagination.total_page}
            totalSize={pagination.total_results}
            changePageHandler={changePageHandler}
            changePageSizeHandler={changePageSizeHandler}
          />
        </List>
      </GenericAuthContent>
    </GenericPage>
  );
});
