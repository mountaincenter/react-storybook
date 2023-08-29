import { SwipeableDrawer, Box, List } from '@mui/material';
import SidebarListItem from './SidebarListItem';
import SidebarFooter from './SidebarFooter';
import TweetButton from '../Button/TweetButton';
import { useMobileView } from 'hooks/useMobileView';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100svh',
    position: 'fixed',
    minWidth: {
      desktop: 259,
      laptop: 72,
      tablet: 'none',
    },
    overflow: 'hidden',
    px: 2,
  },
  list: {
    flexGrow: 1,
    pt: 2,
    minWidth: {
      desktop: 259,
      laptop: 72,
      tablet: 'none',
      mobile: 259,
    },
  },
};

type SidebarProps = {
  open: () => void;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const isMobile = useMobileView();
  const content = (
    <Box sx={styles.box}>
      <List sx={styles.list}>
        <SidebarListItem />
        <TweetButton
          text="ツイートする"
          onClick={() => console.log('ツイートする')}
        />
      </List>
      {!isMobile && <SidebarFooter />}
    </Box>
  );
  if (isMobile) {
    return (
      <SwipeableDrawer anchor="left" onOpen={open} onClose={onClose}>
        {content}
      </SwipeableDrawer>
    );
  } else {
    return content;
  }
};

export default Sidebar;
