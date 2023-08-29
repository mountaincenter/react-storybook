import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '.';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Badge from '../Badge/Badge';

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
    children: <HomeIcon />,
  },
};

export const WithBadge: Story = {
  args: {
    title: '通知',
    children: (
      <Badge badgeContent={5}>
        <NotificationsIcon />
      </Badge>
    ),
  },
};

export const Like: Story = {
  args: {
    title: 'いいね',
    children: <FavoriteIcon color="secondary" />,
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
