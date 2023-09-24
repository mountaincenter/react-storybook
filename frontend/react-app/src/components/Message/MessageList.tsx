import { useAllMessages } from '../../hooks/message/useAllMessages';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Box,
} from '@mui/material';

import { type User } from '../../interfaces';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const MessageList = () => {
  const { messages } = useAllMessages();
  return (
    <>
      <Box
        sx={{
          overflow: 'auto',
          maxHeight: '100svh',
        }}
      >
        {messages?.map((message: User) => (
          <List key={message.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Link
                  to={`/messages/${message.publicId}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Avatar
                    name={message.name}
                    src={message.avatar.url || undefined}
                    customComponent="Link"
                    to={`/${message.username}`}
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Link
                      to={`/messages/${message.publicId}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {message.name} <small>@{message.username}</small>
                    </Link>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </List>
        ))}
      </Box>
    </>
  );
};

export default MessageList;
