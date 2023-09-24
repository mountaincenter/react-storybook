import { Grid, Divider, Typography } from '@mui/material';
import MessageList from '../components/Message/MessageList';
import MessageDetails from '../components/Message/MessageDetails';
import { useLocation } from 'react-router-dom';

const Messages = () => {
  const location = useLocation();
  return (
    <>
      <Grid container alignItems="stretch">
        <Grid item xs={4}>
          <MessageList />
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" flexItem />
        </Grid>
        {location.pathname === '/messages' ? (
          <Grid item xs={7}>
            <Typography variant="body1">
              メッセージがここに表示されます
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={7}>
            <MessageDetails />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Messages;
