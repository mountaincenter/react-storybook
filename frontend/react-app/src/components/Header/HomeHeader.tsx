import { Box, Divider, Typography } from '@mui/material';

import { useMobileView } from '../../hooks/useMobileView';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

import MobileHeader from './MobileContentHeader';

interface ContentHeaderProps {
  label: string;
}

const HomeHeader = ({ label }: ContentHeaderProps) => {
  const { isMobile } = useMobileView();
  const { currentUser } = useCurrentUser();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          mx: 2,
          height: '50px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isMobile && <Typography variant="h6">{label}</Typography>}
        {isMobile && currentUser && <MobileHeader currentUser={currentUser} />}
      </Box>
      <Divider />
    </>
  );
};

export default HomeHeader;
