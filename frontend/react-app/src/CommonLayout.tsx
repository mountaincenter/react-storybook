import React from 'react';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import Sidebar from './components/Sidebar/SidebarOption';
import theme from 'Theme';

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps): React.ReactElement => {
  return (
    <>
      <main>
        <Container maxWidth="desktop" sx={{ marginTop: '3rem' }}>
          <Grid container justifyContent="center" spacing={0}>
            <Grid item>{children}</Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default CommonLayout;
