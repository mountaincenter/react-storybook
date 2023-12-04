import {
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material';

import Avatar from '../Avatar/Avatar';
import { type Notification } from '../../interfaces';

import { NotificationIconCombinations } from '../Icon/IconData';
import BaseIcon from '../Icon/BaseIcon/BaseIcon';

interface NotificationsItemProps {
  notification: Notification;
}

const NotificationsItem = ({ notification }: NotificationsItemProps) => {
  const { notificationType, message } = notification;
  const iconConfig = NotificationIconCombinations[notificationType];

  if (!message) return null;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          {iconConfig && (
            <BaseIcon Icon={iconConfig?.Icon} color={iconConfig.color} />
          )}
        </ListItemIcon>
        <Box alignItems="center">
          <Box display="flex">
            <ListItemAvatar>
              <Avatar
                src={notification.message.avatar?.url}
                name={notification.message.title}
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="body1">
                {notification.message.title}
              </Typography>
            </ListItemText>
          </Box>
          <ListItemText>
            <Typography variant="body2" color="textSecondary">
              {notification.message.body}
            </Typography>
          </ListItemText>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default NotificationsItem;
