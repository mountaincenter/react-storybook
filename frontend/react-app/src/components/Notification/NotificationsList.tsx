import NotificationsItem from './NotificationsItem';
import { useNotifications } from '../../hooks/notification/useNotifications';
import { List } from '@mui/material';

const NotificationsList = () => {
  const { notifications } = useNotifications();
  console.log(notifications);

  return (
    <>
      {notifications?.map((notification: any) => (
        <List key={notification.id}>
          <NotificationsItem notification={notification} />
        </List>
      ))}
    </>
  );
};

export default NotificationsList;
