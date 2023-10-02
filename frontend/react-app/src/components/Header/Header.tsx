import { Box, Divider } from '@mui/material';

interface HeaderProps {
  children: React.ReactElement;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          mx: 2,
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'background.default',
        }}
      >
        {children}
      </Box>
      <Divider />
    </>
  );
};

export default Header;
