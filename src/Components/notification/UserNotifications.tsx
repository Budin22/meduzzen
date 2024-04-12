import React, { memo, useCallback, useEffect, useState } from "react";
import { List, Stack } from "@mui/material";
import { NotificationItem } from "../../Type/user-data-types";
import {
  getUserNotificationList,
  markUserNotificationAsRead,
} from "../../Api/user-data-api";
import { UserNotificationItem } from "./UserNotificationItem";

export const UserNotifications = memo(({ userId }: { userId: number }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    getUserNotificationList(userId)
      .then((data) => {
        setNotifications(data.result.notifications);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const readNotificationHandler = useCallback(
    (id: number) => {
      markUserNotificationAsRead(userId, id)
        .then((data) => alert("Nice"))
        .catch((err) => console.log(err));
    },
    [userId],
  );

  return (
    <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      <div>Notifications</div>
      {notifications.length === 0 &&
        notifications.map((not) => (
          <Stack key={not.notification_id}>
            <UserNotificationItem
              notification={not}
              readNotificationHandler={readNotificationHandler}
            />
          </Stack>
        ))}
    </List>
  );
});
