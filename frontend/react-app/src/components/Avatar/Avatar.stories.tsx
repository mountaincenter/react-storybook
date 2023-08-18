import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    isLoading: false,
  },
};
export const Skeleton: Story = {
  args: {
    isLoading: true,
  },
};
