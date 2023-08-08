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

  const startModalPath = (to: string) => {
    setBackgroundLocation({ background: location });
    navigate(to, { state: { background: location } });
  };

  const endModalPath = () => {
    const background = backgroundLocation.background;
    navigate(
      `${background?.pathname.replace(/\/+$/, '')}/${background?.search}`
    );
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
