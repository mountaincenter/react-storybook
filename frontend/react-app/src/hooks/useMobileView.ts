import { useMediaQuery } from '@mui/material';
import { customTheme } from '../Theme';

export const useMobileView = () => {
  const isMobile = useMediaQuery(customTheme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(customTheme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(customTheme.breakpoints.up('md'));

  return { isMobile, isTablet, isDesktop };
};
