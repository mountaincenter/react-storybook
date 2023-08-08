import React from 'react';
import { Container, Grid } from '@mui/material';
import Footer from './Footer';

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps): React.ReactElement => {
  return (
    <>
      <main>
        <Container maxWidth="xl" sx={{ marginTop: '3rem' }}>
          <Grid container justifyContent="center" spacing={0}>
            <Grid item>{children}</Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default CommonLayout;
