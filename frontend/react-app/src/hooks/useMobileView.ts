import { useMediaQuery } from '@mui/material';
import { customTheme } from '../Theme';

export const useMobileView = () => {
  const isMobile = useMediaQuery(customTheme.breakpoints.down('mobile'));
  const isTablet = useMediaQuery(customTheme.breakpoints.down('tablet'));

  return { isMobile, isTablet };
};
