import { Meta } from '@storybook/react';
import CountText from './CountText';

const meta: Meta<typeof CountText> = {
  component: CountText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <CountText {...args} />;

Default.args = {
  count: 10,
  text: 'いいね',
  isActive: true,
  color: 'rgb(249, 24, 128)',
};

export const OnlyCount = (args) => <CountText {...args} />;

OnlyCount.args = {
  count: 10,
  text: 'いいね',
  isActive: false,
  showCountType: 'onlyCount',
};
