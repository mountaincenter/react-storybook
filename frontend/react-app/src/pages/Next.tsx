import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import useModalRoute from '../hooks/useModalRoute';

const Next = () => {
  const { startModalPath } = useModalRoute();

  return (
    <>
      <h2>次ページ</h2>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => startModalPath('/modalTop')} variant="contained">
          モーダルダイアログ
        </Button>
        <Button component={Link} to="/home" variant="outlined">
          戻る
        </Button>
      </Stack>
    </>
  );
};

export default Next;
