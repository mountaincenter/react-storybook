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
  hoverColor: 'error',
};

export const OnlyCount = (args) => <CountText {...args} />;

OnlyCount.args = {
  count: 10,
  text: 'いいね',
  hoverColor: 'error',
  showCountType: 'onlyCount',
};

export const OnlyIcon = (args) => <CountText {...args} />;

OnlyIcon.args = {
  count: 10,
  text: 'いいね',
  hoverColor: 'error',
  showCountType: 'onlyIcon',
};
