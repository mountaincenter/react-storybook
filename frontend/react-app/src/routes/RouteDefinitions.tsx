import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Searches from '../pages/Searches';
import Redirect from '../pages/Redirect';
import Explore from '../pages/Explore';
import Notifications from '../pages/Notifications';
import Bookmarks from '../pages/Bookmarks';
import Messages from '../pages/Messages';
import Next from '../pages/Next';
import UserFollow from '../pages/UserFollow';
import PostDetail from '../pages/PostDetail';
import ModalNext from '../pages/ModalNext';
import ModalTop from '../pages/ModalTop';
import LoginDialog from '../components/Dialog/LoginDialog';
import LogoutDialog from '../components/Dialog/LogoutDialog';
import PostDialog from '../components/Dialog/PostDialog';
import SignUpDialog from '../components/Dialog/SignUpDialog';
import UserEditDialog from '../components/Dialog/UserEditDialog';
import ImageDialog from '../components/Dialog/ImageDialog';

export const getMainRoutes = () => {
  return [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/searches/:query', element: <Searches /> },
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

export const getSimpleRoutes = () => {
  return [
    { path: 'messages', element: <Messages /> },
    { path: '/messages/:publicId', element: <Messages /> },
  ];
};

export const getModalRoutes = () => {
  return [
    { path: 'modalTop', element: <ModalTop /> },
    { path: 'modalNext', element: <ModalNext /> },
    { path: 'login', element: <LoginDialog /> },
    { path: 'signup', element: <SignUpDialog /> },
    { path: 'logout', element: <LogoutDialog /> },
    { path: 'post/:type/:associatedId?', element: <PostDialog /> },
    { path: ':username/edit', element: <UserEditDialog /> },
    { path: ':username/:type', element: <ImageDialog /> },
  ];
};
