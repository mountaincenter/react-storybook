import { Meta } from '@storybook/react';
import TooltipWithIconButton from './TooltipWithIconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const meta: Meta<typeof TooltipWithIconButton> = {
  component: TooltipWithIconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <TooltipWithIconButton {...args} />;
Default.args = {
  title: 'いいね',
  Icon: FavoriteIcon,
  color: 'error',
  isActive: true,
};
