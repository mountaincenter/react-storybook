import { useEffect } from 'react';
import { Typography, Link } from '@mui/material';
import useModalRoute from '../hooks/useModalRoute';

const Redirect = () => {
  const { startModalPath } = useModalRoute();

  useEffect(() => {
    const timer = setTimeout(() => {
      startModalPath('/login', { from: 'redirect' });
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [startModalPath]);

  return (
    <>
      <Typography>
        メール承認が完了しました自動的にログインフォームへ移動します。
      </Typography>
      <Typography>
        移動しない場合は
        <Link
          component="button"
          variant="body2"
          onClick={() => startModalPath('/login', { from: 'redirect' })}
        >
          こちらをクリック
        </Link>
        してください。
      </Typography>
    </>
  );
};

export default Redirect;
