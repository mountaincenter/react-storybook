import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Skeleton,
  Box,
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '../Avatar/Avatar';

import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import useModalRoute from '../../hooks/useModalRoute';
import { useMobileView } from '../../hooks/useMobileView';

const SidebarFooter = () => {
  const { currentUser, isLoading } = useCurrentUser();
  const { startModalPath } = useModalRoute();
  const { isDesktop } = useMobileView();

  // console.log(isLoading);

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
            <IconButton onClick={() => startModalPath('/logout')}>
              <MoreHorizIcon />
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
