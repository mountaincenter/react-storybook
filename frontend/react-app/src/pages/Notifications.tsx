import NotificationsList from '../components/Notification/NotificationsList';
import CommonHeader from '../components/Header/CommonHeader';

const Notifications = () => {
  return (
    <>
      <CommonHeader title={'通知'} />
      <NotificationsList />
    </>
  );
};

export default Notifications;
