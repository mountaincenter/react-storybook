import React from 'react';
import SidebarWrapper from '../components/Wrappers/SidebarWrapper';
import ContentWrapper from '../components/Wrappers/ContentWrapper';
import { Container, Grid } from '@mui/material';
import { useMobileView } from '../hooks/useMobileView';

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps): React.ReactElement => {
  const isMobile = useMobileView();
  return (
    <>
      <main>
        <Container maxWidth="desktop" sx={{ marginTop: '3rem' }}>
          <Grid container direction="row" justifyContent="center" spacing={0}>
            <Grid item xs={12} sm={4}>
              {' '}
              {/* 標準のブレークポイントを使用 */}
              <SidebarWrapper isMobile={isMobile} />
            </Grid>
            <Grid item xs={12} sm={8}>
              {' '}
              {/* 標準のブレークポイントを使用 */}
              <ContentWrapper isMobile={isMobile}>{children}</ContentWrapper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default CommonLayout;
