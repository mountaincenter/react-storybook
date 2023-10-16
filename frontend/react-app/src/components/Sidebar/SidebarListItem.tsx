import SidebarOption from './SidebarOption';
import { SidebarIconCombinations } from '../Icon/IconData';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useNotificationsCount } from '../../hooks/notification/useNotificationsCount';
import { useMarkAllNotificationAsRead } from '../../hooks/notification/useMarkAllNotificationAsRead';

const SidebarListItem = () => {
  const { currentUser } = useCurrentUser();
  const notificationsCount = useNotificationsCount();
  const markAllAsRead = useMarkAllNotificationAsRead();

  const dynamicSidebarIconCombinations = {
    ...SidebarIconCombinations,
    Notifications: {
      ...SidebarIconCombinations.Notifications,
      badgeContent: notificationsCount,
      onClick: markAllAsRead.mutate,
    },
  };

  return (
    <>
      {Object.entries(dynamicSidebarIconCombinations).map(([key, icons]) => {
        if (icons.isCurrentUser && !currentUser) {
          return null;
        }

        return (
          <SidebarOption
            key={key}
            link={
              key === 'Profile' && currentUser
                ? `/${currentUser.username}`
                : `/${key.toLowerCase()}`
            }
            text={icons.label}
            {...icons}
          />
        );
      })}
    </>
  );
};

export default SidebarListItem;
