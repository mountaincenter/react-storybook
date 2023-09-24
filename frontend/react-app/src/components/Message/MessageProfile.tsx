import { Grid, Typography, Divider } from '@mui/material';
import Avatar from '../Avatar/Avatar';

import { Message, User } from '../../interfaces';

interface MessageProfileProps {
  currentUser: User;
  messages: Message[];
}

const MessageProfile = ({ currentUser, messages }: MessageProfileProps) => {
  const otherUser =
    messages &&
    messages.length > 0 &&
    (messages[0].sender.publicId === currentUser?.publicId
      ? messages[0].recipient
      : messages[0].sender);

  return (
    otherUser && (
      <>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{ maxWidth: '50%', margin: 'auto' }}
        >
          <Avatar
            name={otherUser?.name}
            src={otherUser?.avatar?.url || undefined}
            sx={{ width: 60, height: 60, mb: 1 }}
            customComponent="Link"
            to={`/${otherUser?.username}`}
          />
          <Typography variant="body2" color="textPrimary" component="span">
            {otherUser.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="span">
            @{otherUser.username}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="span">
            {otherUser.name}
          </Typography>
        </Grid>
        <Divider />
      </>
    )
  );
};

export default MessageProfile;
