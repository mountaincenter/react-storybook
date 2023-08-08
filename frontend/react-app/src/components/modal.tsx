import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import useModalRoute from '../hooks/useModalRoute';
import { Outlet } from 'react-router-dom';

const Modal = () => {
  const { endModalPath, isModalOpened } = useModalRoute();
  const theme = useTheme();
  const matchesSMorBelow = useMediaQuery(theme.breakpoints.down('sm'));

  const closeModal = () => {
    endModalPath();
  };

  const ModalContent = () => (
    <DialogContent>
      <Outlet />
    </DialogContent>
  );

  if (matchesSMorBelow) {
    return <ModalContent />;
  }

  return (
    <Dialog open={isModalOpened()} onClose={closeModal}>
      <DialogTitle></DialogTitle>
      <ModalContent />
    </Dialog>
  );
};

export default Modal;
