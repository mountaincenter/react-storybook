import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '.';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Icon from '../Icon/BaseIcon/BaseIcon';
import Badge from '../Badge';

import { IconButton } from '@mui/material';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'ホーム',
    children: <Icon MuiIcon={HomeIcon} />,
  },
};

export const WithBadge: Story = {
  args: {
    title: '通知',
    children: <Icon MuiIcon={NotificationsIcon} badgeContent={5} />,
  },
};

export const Like: Story = {
  args: {
    title: 'いいね',
    children: <Icon MuiIcon={FavoriteIcon} color="primary" />,
  },
};

export const DirectTooltipTest: Story = {
  args: {
    title: '通知',
    children: (
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    ),
  },
};

export const DirectTooltipTest2: Story = {
  args: {
    title: '通知',
    children: (
      <Badge badgeContent={5}>
        <NotificationsIcon />
      </Badge>
    ),
  },
};
