import { useLocation } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Redirect from './pages/Redirect';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Bookmarks from './pages/Bookmarks';
import Messages from './pages/Messages';
import Next from './pages/Next';
import UserFollow from './pages/UserFollow';
import PostDetail from './pages/PostDetail';
import ModalNext from './pages/ModalNext';
import ModalTop from './pages/ModalTop';
import Modal from './components/modal';
import LoginDialog from './components/Dialog/LoginDialog';
import LogoutDialog from './components/Dialog/LogoutDialog';
import SignUpDialog from './components/Dialog/SignUpDialog';
import UserEditDialog from './components/Dialog/UserEditDialog';
import ImageDialog from './components/Dialog/ImageDialog';
import CommonLayout from './Layout/CommonLayout';
import SimpleLayout from './Layout/SimpleLayout';
import ModalDialogLayout from './Layout/ModalDialogLayout';
import { BackgroundLocation } from './hooks/useModalRoute';

import { useMobileView } from './hooks/useMobileView';

const CommonRoutes = () => {
  const { isMobile } = useMobileView();
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;

  const getMainRoutes = () => {
    return [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/explore', element: <Explore /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/messages', element: <Messages /> },
      { path: '/bookmarks', element: <Bookmarks /> },
      { path: '/redirect', element: <Redirect /> },
      { path: '/next', element: <Next /> },
      { path: '/:username', element: <Profile /> },
      { path: '/:username/:type', element: <UserFollow /> },
      { path: '/:username/status/:publicId', element: <PostDetail /> },
    ];
  };

  const getSimpleRoutes = () => {
    return [
      { path: 'messages', element: <Messages /> },
      { path: '/messages/:publicId', element: <Messages /> },
    ];
  };
  const getModalRoutes = () => {
    return [
      { path: 'modalTop', element: <ModalTop /> },
      { path: 'modalNext', element: <ModalNext /> },
      { path: 'login', element: <LoginDialog /> },
      { path: 'signup', element: <SignUpDialog /> },
      { path: 'logout', element: <LogoutDialog /> },
      { path: ':username/edit', element: <UserEditDialog /> },
      { path: ':username/:type', element: <ImageDialog /> },
    ];
  };

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

  return <>{renderRoutesWithLayout()}</>;
};

export default CommonRoutes;
