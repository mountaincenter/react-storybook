import { useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { iso8601ToDateTime } from '../../utils/dateUtils';

import { type Message } from '../../interfaces';

interface MessageFeedProps {
  messages: Message[];
  publicId: string;
}

const MessageFeed = ({ messages, publicId }: MessageFeedProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  return (
    <Box
      sx={{
        overflow: 'auto',
        height: 'calc(100dvh - 300px)',
      }}
    >
      {messages?.map((message: Message, index: number) => (
        <Grid
          key={index}
          container
          direction="column"
          justifyContent={
            message.sender.publicId === publicId ? 'flex-start' : 'flex-end'
          }
        >
          <Grid item>
            <Grid
              container
              justifyContent={
                message.sender.publicId === publicId ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                borderRadius={9999}
                bgcolor={
                  message.sender.publicId === publicId ? '#d3d3d3' : '#ffb6c1'
                }
                color={
                  message.sender.publicId === publicId ? '#000000' : '#ffffff'
                }
                m={1}
                border={0}
                boxShadow={1}
                p={2}
                sx={{ maxWidth: '100%' }}
              >
                <Typography variant="body1" component="p">
                  {message.body}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                component="p"
                color="textSecondary"
                style={{
                  textAlign:
                    message.sender.publicId === publicId ? 'left' : 'right',
                }}
              >
                {iso8601ToDateTime(
                  message.createdAt?.toString() ?? '100000000'
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessageFeed;
