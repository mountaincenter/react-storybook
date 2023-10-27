import { Meta } from '@storybook/react';
import InteractionButton from './InteractionButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const meta: Meta<typeof InteractionButton> = {
  component: InteractionButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const LikeActive = (args) => <InteractionButton {...args} />;
LikeActive.args = {
  title: 'いいね',
  isActive: true,
  count: 12,
  onInteractionClick: () => {},
  ActiveIcon: FavoriteIcon,
  InactiveIcon: FavoriteBorderIcon,
  hoverColor: 'red',
};

export const LikeInactive = (args) => <InteractionButton {...args} />;
LikeInactive.args = {
  ...LikeActive.args,
  isActive: false,
};
