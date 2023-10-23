import { Location, useLocation, useNavigate } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';

export type BackgroundLocation = { background: Location | undefined };

const BackgroundLocationState = atom<BackgroundLocation>({
  key: 'BackgroundLocationState',
  default: { background: undefined },
});

const useModalRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundLocation, setBackgroundLocation] = useRecoilState(
    BackgroundLocationState
  );
  // console.log('backgroundLocation', backgroundLocation);

  const startModalPath = (to: string, state?: any) => {
    setBackgroundLocation({ background: location });
    navigate(to, { state: { ...state, background: location } });
  };

  const endModalPath = () => {
    if (location.state?.from === 'redirect') {
      navigate('/');
      return;
    } else {
      const background = backgroundLocation.background;
      navigate(
        `${background?.pathname.replace(/\/+$/, '')}/${background?.search}`
      );
    }
  };

  const goModalPath = (to: string) => {
    navigate(to, { state: backgroundLocation });
  };

  const isModalOpened = (): boolean => {
    return Boolean(backgroundLocation.background);
  };

  return { startModalPath, endModalPath, goModalPath, isModalOpened };
};

export default useModalRoute;
