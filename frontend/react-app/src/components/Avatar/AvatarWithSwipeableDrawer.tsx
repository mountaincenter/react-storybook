import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';

import Avatar from './Avatar';
import SidebarWrapper from '../Wrappers/SidebarWrapper';

import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

const AvatarWithSwipeableDrawer = () => {
  const { currentUser } = useCurrentUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAvatarClick = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  if (!currentUser) return null;

  return (
    <>
      <Avatar
        name={currentUser.name}
        avatar={currentUser.avatar}
        customComponent="button"
        onClick={handleAvatarClick}
      />
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerClose}
      >
        <SidebarWrapper isMobile={true} />
      </SwipeableDrawer>
    </>
  );
};

export default AvatarWithSwipeableDrawer;
