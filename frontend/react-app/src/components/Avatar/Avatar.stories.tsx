import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { users } from '../../mocks/userMock';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const Default: Story = (args) => <Avatar {...args} />;
Default.args = {
  name: users[0].name || 'Default Name',
  avatar: users[0].avatar,
  customComponent: 'Link',
  to: users[0].username,
  isLoading: false,
};

const AvatarWithoutUrl: Story = (args) => <Avatar {...args} />;
AvatarWithoutUrl.args = {
  name: users[1].name,
  avatar: users[1].avatar,
  customComponent: 'Link',
  to: users[1].username,
  isLoading: false,
};

const Skeleton: Story = (args) => <Avatar {...args} />;
Skeleton.args = {
  ...Default.args,
  isLoading: true,
};

export const AllAvatar = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar {...Default.args} />
        <Avatar {...AvatarWithoutUrl.args} />
        <Avatar {...Skeleton.args} />
      </Box>
    </>
  );
};

export const DefaultAvatar = () => <Avatar {...Default.args} />;
export const AvatarWithoutUrlAvatar = () => (
  <Avatar {...AvatarWithoutUrl.args} />
);
export const SkeletonAvatar = () => <Avatar {...Skeleton.args} />;
