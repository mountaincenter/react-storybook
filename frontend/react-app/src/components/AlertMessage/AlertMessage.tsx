import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { type AlertProps } from '@mui/material/Alert';
import { type SnackbarCloseReason } from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props: AlertProps,
  ref: React.Ref<HTMLDivElement>
): JSX.Element {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface AlertMessageProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity: 'error' | 'success' | 'info' | 'warning';
  message: string;
}

const AlertMessage = ({
  open,
  setOpen,
  severity,
  message,
}: AlertMessageProps): JSX.Element => {
  const navigate = useNavigate();
  const handleCloseAlertMessage = (reason: SnackbarCloseReason): void => {
    if (reason === 'clickaway') return;

    setOpen(false);

    if (reason === 'timeout') {
      navigate('/login');
    }
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => handleCloseAlertMessage}
      >
        <Alert onClose={() => handleCloseAlertMessage} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
