import { Meta } from '@storybook/react';
import TooltipWithTime from './TooltipWithTime';

const meta: Meta<typeof TooltipWithTime> = {
  component: TooltipWithTime,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <TooltipWithTime {...args} />;
Default.args = {
  createdAt: new Date(),
};
