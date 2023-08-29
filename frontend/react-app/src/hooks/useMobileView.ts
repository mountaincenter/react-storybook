import { useMediaQuery } from '@mui/material';
import { customTheme } from '../Theme';

export const useMobileView = () => {
  return useMediaQuery(customTheme.breakpoints.down('mobile'));
};
