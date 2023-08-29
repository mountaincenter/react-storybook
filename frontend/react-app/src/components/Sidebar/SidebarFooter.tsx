import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  useMediaQuery,
  Skeleton,
  Box,
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '../Avatar/Avatar';

import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

import { customTheme } from '../../Theme';

const SidebarFooter = () => {
  const { currentUser, isLoading, error } = useCurrentUser();
  console.log(currentUser);
  console.log(error);
  console.log(isLoading);

  const isDesktop = useMediaQuery(customTheme.breakpoints.up('desktop'));

  const LoadingState = () => {
    return (
      <>
        <ListItemAvatar sx={{ justifyContent: 'center' }}>
          <Avatar
            isLoading={true}
            name={currentUser?.name || ''}
            avatar={{ url: null }}
          />
        </ListItemAvatar>
        {isDesktop && (
          <Box flexDirection="column">
            <Skeleton variant="text" width={100} height={24} />
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
        )}
      </>
    );
  };

  const LoadedState = () => {
    return (
      <>
        <ListItemAvatar sx={{ justifyContent: 'center' }}>
          <Avatar
            to={currentUser?.username || ''}
            name={currentUser?.name || ''}
            avatar={currentUser?.avatar || { url: '' }}
            customComponent="Link"
          />
        </ListItemAvatar>
        {isDesktop && (
          <>
            <ListItemText
              primary={currentUser?.name}
              secondary={currentUser?.username}
            />
            <IconButton>
              <MoreHorizIcon
                onClick={() => console.log('logout button dialog')}
              />
            </IconButton>
          </>
        )}
      </>
    );
  };

  return (
    <ListItem sx={{ borderTop: '1px solid #d3d4d5', mt: 'auto' }}>
      {isLoading ? <LoadingState /> : <LoadedState />}
    </ListItem>
  );
};

export default SidebarFooter;
