import {
  Button,
  DialogActions,
  DialogContentText,
  Typography,
} from '@mui/material';
import useModalRoute from '../hooks/useModalRoute';

const ModalNext = () => {
  const { endModalPath } = useModalRoute();
  return (
    <>
      <DialogContentText>
        <Typography component="span">次ページ</Typography>
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => endModalPath()} variant="outlined">
          閉じる
        </Button>
      </DialogActions>
    </>
  );
};

export default ModalNext;
