import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // <-- Import action from Storybook
import Uploader from './Uploader';

const meta: Meta = {
  component: Uploader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Uploader>;

export const Default: Story = (args: any) => {
  return <Uploader {...args} />;
};

Default.args = {
  onUpload: action('onUpload'),
  allowMultiple: true,
  label: 'アップロード',
};

export const AvatarUploader: Story = (args: any) => {
  return <Uploader {...args} />;
};

AvatarUploader.args = {
  onUpload: action('onUpload'),
  allowMultiple: false,
  label: 'アバターを選択',
};
