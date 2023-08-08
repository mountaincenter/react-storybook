import {
  Button,
  DialogActions,
  DialogContentText,
  Typography,
} from '@mui/material';
import useModalRoute from '../hooks/useModalRoute';

const ModalTop = () => {
  const { goModalPath } = useModalRoute();
  return (
    <>
      <DialogContentText>
        <Typography component="span">トップページ</Typography>
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => goModalPath('/modalNext')} variant="contained">
          次へ
        </Button>
      </DialogActions>
    </>
  );
};

export default ModalTop;
