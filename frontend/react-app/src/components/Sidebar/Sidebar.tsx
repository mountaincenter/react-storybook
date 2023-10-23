import { Box, List } from '@mui/material';
import SidebarListItem from './SidebarListItem';
import SidebarFooter from './SidebarFooter';
import TweetButton from '../Button/TweetButton';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100svh',
    overflow: 'hidden',
    px: 2,
  },
  list: {
    flexGrow: 1,
    pt: 2,
  },
};

const Sidebar = () => {
  const content = (
    <Box sx={styles.box}>
      <List sx={styles.list}>
        <SidebarListItem />
        <TweetButton text="ツイートする" />
      </List>
      <SidebarFooter />
    </Box>
  );
  return content;
};

export default Sidebar;
