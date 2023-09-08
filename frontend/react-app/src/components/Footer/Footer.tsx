import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import useModalRoute from '../../hooks/useModalRoute';
import { guestSignIn } from '../../api/auth';
import { getCurrentUser } from '../../hooks/currentUser/getCurrentUser';
import { useQueryClient } from 'react-query';

const Footer: React.FC = () => {
  const { startModalPath } = useModalRoute();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const commonButtonStyle = {
    border: '1px solid #e6ecf0',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#71c2f8',
      boxShadow: 'none',
    },
    fontWeight: 'bold',
    mx: 1,
  };

  const FooterButton: React.FC<{
    label: string;
    onClick: () => void;
    dataCy?: string;
  }> = ({ label, onClick, dataCy }) => (
    <Button
      label={label}
      variant="contained"
      color="primary"
      sx={commonButtonStyle}
      onClick={onClick}
      data-cy={dataCy}
    />
  );

  const handleEasyLogin = async () => {
    try {
      await guestSignIn();
      const currentUser = await getCurrentUser();
      queryClient.invalidateQueries('currentUser');
      navigate('/');
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="desktop" sx={{ postion: 'relative' }}>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, px: 4 }}>
          <Toolbar>
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
            <FooterButton label="簡単ログイン" onClick={handleEasyLogin} />
            <FooterButton
              label="ログイン"
              onClick={() => startModalPath('/login')}
              dataCy="login"
            />
            <FooterButton
              label="アカウント作成"
              onClick={() => startModalPath('/signUp')}
            />
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Footer;
