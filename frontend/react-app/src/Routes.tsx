import { useLocation } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './pages/Redirect';
import Next from './pages/Next';
import ModalNext from './pages/ModalNext';
import ModalTop from './pages/ModalTop';
import Modal from './components/modal';
import LoginDialog from './components/Dialog/LoginDialog';
import LogoutDialog from './components/Dialog/LogoutDialog';
import SignUpDialog from './components/Dialog/SignUpDialog';
import CommonLayout from './Layout/CommonLayout';
import ModalDialogLayout from './Layout/ModalDialogLayout';
import { BackgroundLocation } from './hooks/useModalRoute';

import { useMediaQuery } from '@mui/material';
import { customTheme } from './Theme';

const CommonRoutes = () => {
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;
  const matchesSMorBelow = useMediaQuery(
    customTheme.breakpoints.down('mobile')
  );

  const getMainRoutes = () => {
    return [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/redirect', element: <Redirect /> },
      { path: '/next', element: <Next /> },
    ];
  };

  const getModalRoutes = () => {
    return [
      { path: 'modalTop', element: <ModalTop /> },
      { path: 'modalNext', element: <ModalNext /> },
      { path: 'login', element: <LoginDialog /> },
      { path: 'signup', element: <SignUpDialog /> },
      { path: 'logout', element: <LogoutDialog /> },
    ];
  };

  const mainRoutes = useRoutes(getMainRoutes(), background || location);

  const modalRoutes = useRoutes([
    {
      path: '/',
      element: <Modal />,
      children: getModalRoutes(),
    },
  ]);

  const mobileRoutes = useRoutes([...getMainRoutes(), ...getModalRoutes()]);

  const renderRoutesWithLayout = () => {
    if (matchesSMorBelow && mobileRoutes) {
      return <CommonLayout>{mobileRoutes}</CommonLayout>;
    } else if (background && modalRoutes) {
      return <ModalDialogLayout>{modalRoutes}</ModalDialogLayout>;
    } else if (mainRoutes) {
      return <CommonLayout>{mainRoutes}</CommonLayout>;
    }
    return null;
  };
  return <>{renderRoutesWithLayout()}</>;
};

export default CommonRoutes;
