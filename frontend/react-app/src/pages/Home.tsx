import { Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { usePosts } from '../hooks/post/usePosts';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';
import Footer from '../components/Footer/Footer';
import PostList from '../components/Post/PostList';
import PostComposer from '../components/Post/PostComposer';
import HomeHeader from '../components/Header/HomeHeader';

const Home = () => {
  const { currentUser } = useCurrentUser();
  const { posts } = usePosts();
  // console.log(currentUser);
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
                  <PostList posts={posts} />
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
