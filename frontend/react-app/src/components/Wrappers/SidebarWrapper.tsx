import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

interface SidebarWrapperProps {
  isMobile: boolean;
}

const SidebarWrapper = ({ isMobile }: SidebarWrapperProps) => {
  return (
    !isMobile && (
      <Box
        sx={{
          overflowY: 'auto',
          height: '100dvh',
        }}
      >
        <Sidebar />
      </Box>
    )
  );
};

export default SidebarWrapper;
