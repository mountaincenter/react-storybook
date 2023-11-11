import { useLocation } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Modal from '../components/modal';
import CommonLayout from '../Layout/CommonLayout';
import SimpleLayout from '../Layout/SimpleLayout';
import ModalDialogLayout from '../Layout/ModalDialogLayout';
import { BackgroundLocation } from '../hooks/useModalRoute';
import AlertMessage from '../components/AlertMessage/AlertMessage';

import {
  getMainRoutes,
  getModalRoutes,
  getSimpleRoutes,
} from './RouteDefinitions';

import { useMobileView } from '../hooks/useMobileView';

const CommonRoutes = () => {
  const { isMobile } = useMobileView();
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;

  const mainRoutes = useRoutes(getMainRoutes(), background || location);
  const simpleRoutes = useRoutes(getSimpleRoutes(), background || location);

  const modalRoutes = useRoutes([
    {
      path: '/',
      element: <Modal />,
      children: getModalRoutes(),
    },
  ]);

  const mobileRoutes = useRoutes([...getMainRoutes(), ...getModalRoutes()]);

  const renderRoutesWithLayout = () => {
    if (isMobile && mobileRoutes) {
      return <CommonLayout>{mobileRoutes}</CommonLayout>;
    } else if (background && modalRoutes) {
      return <ModalDialogLayout>{modalRoutes}</ModalDialogLayout>;
    } else if (simpleRoutes) {
      // SimpleRoutes用の条件を追加
      return <SimpleLayout>{simpleRoutes}</SimpleLayout>;
    } else if (mainRoutes) {
      return <CommonLayout>{mainRoutes}</CommonLayout>;
    }
    return null;
  };

  return (
    <>
      {renderRoutesWithLayout()}
      <AlertMessage />
    </>
  );
};

export default CommonRoutes;
