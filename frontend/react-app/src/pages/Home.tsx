import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Typography>トップページ</Typography>
      <Button component={Link} to="/next" variant="contained">
        次へ
      </Button>
    </>
  );
};

export default Home;
