import React from 'react';
import SidebarWrapper from '../components/Wrappers/SidebarWrapper';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import WidgetWrapper from '../components/Wrappers/WidgetWrapper';
import Footer from '../components/Footer/Footer';
import { Container, Grid, Box } from '@mui/material';
import { useMobileView } from '../hooks/useMobileView';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps): React.ReactElement => {
  const { isMobile, isTablet } = useMobileView();
  const { currentUser } = useCurrentUser();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100dvh"
        sx={{
          overflowY: 'hidden',
        }}
      >
        <Container maxWidth="desktop" sx={{ m: 0, p: 0 }}>
          <Grid container justifyContent="center">
            <SidebarWrapper isMobile={isMobile} />
            <ContentWrapper isMobile={isMobile}>{children}</ContentWrapper>
            <WidgetWrapper isTablet={isTablet} />
          </Grid>
        </Container>
        {!currentUser && !isMobile && <Footer />}
      </Box>
    </>
  );
};

export default CommonLayout;
