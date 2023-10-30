import React from 'react';
import InteractionButton from './InteractionButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useLikeMutation from '../../hooks/post/useLikeMutation';

interface LikeButtonProps {
  publicId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ publicId }) => {
  const { isLike, toggleLike, likesCount } = useLikeMutation(publicId);
  return (
    <InteractionButton
      isActive={isLike}
      count={likesCount}
      onInteractionClick={toggleLike}
      ActiveIcon={FavoriteIcon}
      InactiveIcon={FavoriteBorderIcon}
      hoverColor="red"
    />
  );
};

export default LikeButton;
