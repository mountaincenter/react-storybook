import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthButtons from '../Button/AuthButtons';

const Footer: React.FC = () => {
  return (
    <>
      <Container maxWidth="desktop" sx={{ postion: 'relative' }}>
        <AppBar
          position="fixed"
          sx={{ top: 'auto', bottom: 0, px: 4, width: '100%' }}
        >
          <Toolbar
            sx={{
              maxWidth: 1280,
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Sample
            </Typography>
            <AuthButtons />
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Footer;
