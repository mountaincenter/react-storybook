import React from 'react';
import { Grid } from '@mui/material';

interface MessageWrapperProps {
  children: React.ReactElement;
  isMobile: boolean;
}

const MessageWrapper = ({ children, isMobile }: MessageWrapperProps) => {
  return (
    <Grid
      container
      alignItems="stretch"
      sx={{
        overflowY: 'auto',
        maxHeight: '100dvh',
        width: isMobile ? '100%' : '600px',
        maxWidth: '100%',
      }}
    >
      {children}
    </Grid>
  );
};

export default MessageWrapper;
