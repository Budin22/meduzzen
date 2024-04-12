import * as React from "react";
import { memo, useCallback, useEffect } from "react";
import { Divider, ListItem } from "@mui/material";
import { NotificationItem } from "../../Type/user-data-types";
import Button from "@mui/material/Button";

export const UserNotificationItem = memo(
  ({
    notification,
    readNotificationHandler,
  }: {
    notification: NotificationItem;
    readNotificationHandler: (id: number) => void;
  }) => {
    useEffect(() => {}, []);

    const readNotification = useCallback(() => {
      readNotificationHandler(notification.notification_id);
    }, [notification.notification_id, readNotificationHandler]);

    return (
      <>
        <ListItem>
          <p>
            <span>
              notification_user_id: {notification.notification_user_id}
            </span>
            <span>
              notification_company_id: {notification.notification_company_id}
            </span>
          </p>
          <p>
            <span>
              notification_message: {notification.notification_message}
            </span>
          </p>
          <p>
            <span>is_read: {notification.notification_message} </span>
            <span>created_at: {notification.created_at}</span>
          </p>
          <Button onClick={readNotification}>Read</Button>
        </ListItem>
        <Divider variant="inset" />
      </>
    );
  },
);
