import { Typography, Button, Grid, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import { usePosts } from '../hooks/post/usePosts';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';
import Footer from '../components/Footer/Footer';
import PostList from '../components/Post/PostList';
import PostComposer from '../components/Post/PostComposer';
import HomeHeader from '../components/Header/HomeHeader';

const Home = () => {
  const { currentUser } = useCurrentUser();
  const { posts, isLoading } = usePosts();
  // console.log('Home', posts);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid item>
            <HomeHeader label="ホーム" />
          </Grid>
          <Grid item>
            <Box>
              {currentUser?.name && posts ? (
                <>
                  <PostComposer />
                  <PostList />
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
