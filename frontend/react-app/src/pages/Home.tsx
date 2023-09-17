import { Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';

import Footer from '../components/Footer/Footer';

import Avatar from '../components/Avatar/Avatar';

import HomeHeader from '../components/Header/HomeHeader';

const Home = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid item>
            <HomeHeader label="ホーム" />
          </Grid>
          <Grid item>
            <Box>
              <Typography>トップページ</Typography>
              {currentUser?.name ? (
                <>
                  <Typography>ログイン中</Typography>
                  <Typography>ユーザー名：{currentUser?.name}</Typography>
                  <Typography>アバター：{currentUser?.avatar.url}</Typography>
                  <Avatar
                    to={currentUser?.username || ''}
                    name={currentUser?.name || ''}
                    avatar={currentUser?.avatar || { url: '' }}
                    customComponent="Link"
                  />
                </>
              ) : (
                <>
                  <Typography>未ログイン</Typography>
                </>
              )}
              <Button component={Link} to="/next" variant="contained">
                次へ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {!currentUser && <Footer />}
    </>
  );
};

export default Home;
