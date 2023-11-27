import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InteractionButton from '../Button/InteractionButton';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import { useLikeMutation } from '../../hooks/like/useLikeMutation';

interface LikeProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Like: React.FC<LikeProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { toggleLike } = useLikeMutation(publicId, post?.liked || false);

  if (!post) return null;

  const renderLikeButton = () => {
    return (
      <InteractionButton
        isActive={post.liked}
        count={post.likesCount}
        onInteractionClick={toggleLike}
        title="いいね"
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
        color="rgb(249, 24, 128)"
        backgroundColor="rgb(249, 24, 128, 0.1)"
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.likesCount}
        text="いいね"
        isActive={post.liked}
        color="rgb(249, 24, 128)"
        showCountType={showCountType}
      />
    );
  };

  const renderIconOnly = () => {
    return (
      <TooltipWithIconButton
        title="いいね"
        onClick={toggleLike}
        isActive={post.liked}
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
        color="rgb(249, 24, 128)"
        backgroundColor="rgb(249, 24, 128, 0.1)"
      />
    );
  };

  switch (showCountType) {
    case 'onlyCount':
      return renderCountText();
    case 'onlyIcon':
      return renderIconOnly();
    default:
      return renderLikeButton();
  }
};

export default Like;
