import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Typography>トップページ</Typography>
      <Button component={Link} to="/next" variant="contained">
        次へ
      </Button>
      <Footer />
    </>
  );
};

export default Home;
