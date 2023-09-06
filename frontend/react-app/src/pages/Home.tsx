import { Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';

import Footer from '../components/Footer/Footer';

console.log(process.env.NODE_ENV);

const Home = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item mobile={12}>
          <Grid item>
            <Box>
              <Typography>トップページ</Typography>
              <Typography>{process.env.NODE_ENV}</Typography>
              <Typography>{currentUser?.name}</Typography>
              <Button component={Link} to="/next" variant="contained">
                次へ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
