import type { Meta } from '@storybook/react';
import * as Icons from '../IconData';
import BaseIcon from './BaseIcon';

import { Box, Typography } from '@mui/material';

import { ThemeProvider } from '@mui/material';
import { customTheme } from '../../../Theme';

import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const meta: Meta = {
  component: BaseIcon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={customTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const AllBaseIcons = () => {
  const iconsWithBadge = [
    { label: 'NotificationsIcon', Icon: NotificationsIcon, badgeContent: 5 },
    {
      label: 'NotificationsOutlinedIcon',
      Icon: NotificationsOutlinedIcon,
      badgeContent: 100,
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      sx={{ maxWidth: '250px' }}
    >
      <Typography variant="h5">Base Icons</Typography>
      <Box display="flex" flexWrap="wrap">
        {Object.entries(Icons.BaseIcons).map(([label, Icon]) => (
          <Box display="flex" alignItems="center" m={2} key={label}>
            <Typography variant="body1" mr={1}>
              {label}
            </Typography>
            <BaseIcon Icon={Icon} />
          </Box>
        ))}
        {iconsWithBadge.map(({ label, Icon, badgeContent }) => (
          <Box display="flex" alignItems="center" m={2} key={label}>
            <Typography variant="body1" mr={1}>
              {label}
            </Typography>
            <BaseIcon Icon={Icon} badgeContent={badgeContent} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
