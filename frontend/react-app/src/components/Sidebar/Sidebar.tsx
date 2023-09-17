import { Box, List } from '@mui/material';
import SidebarListItem from './SidebarListItem';
import SidebarFooter from './SidebarFooter';
import TweetButton from '../Button/TweetButton';
import { useMobileView } from '../../hooks/useMobileView';

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
  return content;
};

export default Sidebar;
