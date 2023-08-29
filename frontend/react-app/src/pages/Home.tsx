import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useCurrentUser } from '../hooks/currentUser/useCurrentUser';

import Footer from '../components/Footer/Footer';

console.log(process.env.NODE_ENV);

const Home = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  return (
    <>
      <Typography>トップページ</Typography>
      <Typography>{process.env.NODE_ENV}</Typography>
      <Typography>{currentUser?.name}</Typography>
      <Button component={Link} to="/next" variant="contained">
        次へ
      </Button>
      <Footer />
    </>
  );
};

export default Home;
