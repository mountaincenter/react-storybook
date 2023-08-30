import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Grid } from '@mui/material';
interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps): React.ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <main>
        <Container maxWidth="desktop" sx={{ marginTop: '3rem' }}>
          <Grid container justifyContent="center" spacing={0}>
            <Grid item>
              <Sidebar
                onOpen={() => setIsSidebarOpen(true)}
                onClose={() => setIsSidebarOpen(false)}
              />
            </Grid>
            <Grid item>{children}</Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default CommonLayout;
