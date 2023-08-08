import { useLocation } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Next from './pages/Next';
import ModalNext from './pages/ModalNext';
import ModalTop from './pages/ModalTop';
import Modal from './components/modal';
import Login from './pages/Login';
import CommonLayout from './CommonLayout';
import { BackgroundLocation } from './hooks/useModalRoute';

import { useMediaQuery, useTheme } from '@mui/material';

const CommonRoutes = () => {
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;
  const theme = useTheme();
  const matchesSMorBelow = useMediaQuery(theme.breakpoints.down('sm'));

  const getMainRoutes = () => {
    return [
      { path: '/', element: <Home /> },
      { path: '/next', element: <Next /> },
    ];
  };

  const getModalRoutes = () => {
    return [
      { path: 'modalTop', element: <ModalTop /> },
      { path: 'modalNext', element: <ModalNext /> },
      { path: 'login', element: <Login /> },
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

  return (
    <>
      <CommonLayout>
        {matchesSMorBelow ? (
          <>{mobileRoutes}</>
        ) : (
          <>
            {mainRoutes}
            {background && modalRoutes}
          </>
        )}
      </CommonLayout>
    </>
  );
};

export default CommonRoutes;
