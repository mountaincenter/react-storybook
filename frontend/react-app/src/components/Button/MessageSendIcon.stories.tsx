import type { Meta, StoryObj } from '@storybook/react';
import MessageSendButton from './MessageSendButton';

const meta: Meta<typeof MessageSendButton> = {
  component: MessageSendButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageSendButton>;

export const Default: Story = () => <MessageSendButton />;
