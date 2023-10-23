import { useLocation } from 'react-router-dom';
import { BackgroundLocation } from '../hooks/useModalRoute';

export const useBackgroundLocation = () => {
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;
  return background || location;
};
