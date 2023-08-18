import { DialogActions, DialogContentText, Typography } from '@mui/material';
import Button from '../Button/Button';
import useModalRoute from '../../hooks/useModalRoute';

const SignUpDialog = () => {
  const { endModalPath } = useModalRoute();
  return (
    <>
      <DialogContentText>
        <Typography component="span">サインアップ</Typography>
      </DialogContentText>
      <DialogActions>
        <Button
          onClick={() => endModalPath()}
          variant="outlined"
          label="閉じる"
        />
      </DialogActions>
    </>
  );
};

export default SignUpDialog;
