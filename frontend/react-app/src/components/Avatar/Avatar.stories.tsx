import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { users } from '../../mocks/userMock';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { type AvatarProps } from './Avatar';

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

export const Default: Story = (args: any) => <Avatar {...args} />;
Default.args = {
  name: users[0].name,
  avatar: users[0].avatar,
  customComponent: 'Link',
  to: users[0].username,
  isLoading: false,
} as AvatarProps;

export const AvatarWithoutUrl: Story = (args: any) => <Avatar {...args} />;
AvatarWithoutUrl.args = {
  name: users[1].name,
  avatar: users[1].avatar,
  customComponent: 'Link',
  to: users[1].username,
  isLoading: false,
} as AvatarProps;

export const Skeleton: Story = (args: any) => <Avatar {...args} />;
Skeleton.args = {
  ...Default.args,
  isLoading: true,
} as AvatarProps;

export const AvatarWithButton: Story = (args: any) => <Avatar {...args} />;
AvatarWithButton.args = {
  ...Default.args,
  customComponent: 'button',
  onClick: () => console.log('button clicked'),
} as AvatarProps;

export const AvatarWithSx: Story = (args: any) => <Avatar {...args} />;
AvatarWithSx.args = {
  ...Default.args,
  sx: { width: 60, height: 60 },
} as AvatarProps;

const AvatarWithSkeleton: Story = (args: any) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Avatar {...args} />
  </Box>
);
AvatarWithSkeleton.args = {
  ...Skeleton.args,
} as AvatarProps;
