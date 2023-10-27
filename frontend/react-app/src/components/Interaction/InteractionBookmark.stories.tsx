import { Meta } from '@storybook/react';
import BookmarkButtonWithCount from './BookmarkButtonWithCount';

const meta: Meta<typeof BookmarkButtonWithCount> = {
  component: BookmarkButtonWithCount,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <BookmarkButtonWithCount {...args} />;
Default.args = {
  isActive: false,
  onClick: () => console.log('clicked'),
};
