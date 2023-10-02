import { Typography } from '@mui/material';

import { useMobileView } from '../../hooks/useMobileView';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

import Header from './Header';

import MobileHeader from './MobileContentHeader';

interface ContentHeaderProps {
  label: string;
}

const HomeHeader = ({ label }: ContentHeaderProps) => {
  const { isMobile } = useMobileView();
  const { currentUser } = useCurrentUser();

  return (
    <>
      <Header>
        <>
          {!isMobile && <Typography variant="h6">{label}</Typography>}
          {isMobile && currentUser && (
            <MobileHeader currentUser={currentUser} />
          )}
        </>
      </Header>
    </>
  );
};

export default HomeHeader;
