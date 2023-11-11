import { useRecoilState } from 'recoil';
import { Alert, Snackbar } from '@mui/material';
import { alertState } from '../../atoms/alertAtom';

export const AlertMessage = () => {
  const [{ open, message, type }, setAlert] = useRecoilState(alertState);

  const handleClose = () => {
    setAlert((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
