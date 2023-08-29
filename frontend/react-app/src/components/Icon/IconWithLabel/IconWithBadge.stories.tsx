import type { Meta, StoryObj } from '@storybook/react';
import IconWithBadge from './IconWithBadge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const meta: Meta = {
  component: IconWithBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconWithBadge>;

export const Default: Story = {
  args: {
    badgeContent: 1,
    Icon: NotificationsIcon,
  },
};
export const WithZero: Story = {
  args: {
    badgeContent: 0,
    Icon: NotificationsIcon,
  },
};
