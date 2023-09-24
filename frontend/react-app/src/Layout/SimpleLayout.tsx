import SidebarWrapper from '../components/Wrappers/SidebarWrapper';
import MessageWrapper from '../components/Wrappers/MessageWrapper';
import { useMobileView } from '../hooks/useMobileView';

import { Container, Grid, Box } from '@mui/material';

interface SimpleLayoutProps {
  children: React.ReactElement;
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  const { isMobile } = useMobileView();

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
        <Container maxWidth="xl" sx={{ m: 0, p: 0 }}>
          <Grid container justifyContent="center">
            <SidebarWrapper isMobile={isMobile} />
            <MessageWrapper isMobile={isMobile}>{children}</MessageWrapper>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SimpleLayout;
