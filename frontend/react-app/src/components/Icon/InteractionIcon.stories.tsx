import { Meta } from '@storybook/react';
import InteractionIcon from '../Icon/InteractionIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const meta: Meta<typeof InteractionIcon> = {
  component: InteractionIcon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

export const LikeActive = (args) => <InteractionIcon {...args} />;
LikeActive.args = {
  title: 'いいね',
  isActive: true,
  count: 12,
  onInteractionClick: () => {},
  ActiveIcon: FavoriteIcon,
  InactiveIcon: FavoriteBorderIcon,
  hoverColor: 'red',
};

export const LikeInactive = (args) => <InteractionIcon {...args} />;
LikeInactive.args = {
  ...LikeActive.args,
  isActive: false,
};
