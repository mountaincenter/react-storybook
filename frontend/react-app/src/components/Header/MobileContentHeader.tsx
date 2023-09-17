import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';

import Avatar from '../Avatar/Avatar';
import SidebarWrapper from '../Wrappers/SidebarWrapper';

import { type User } from '../../interfaces';

interface MobileHeaderProps {
  currentUser: User;
}

const MobileHeader = ({ currentUser }: MobileHeaderProps) => {
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

export default MobileHeader;
