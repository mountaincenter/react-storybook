import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InteractionButton from '../Icon/InteractionIcon';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import { useLikeMutation } from '../../hooks/like/useLikeMutation';
import { type ShowCountType } from '../../interfaces';

interface LikeProps {
  publicId: string;
  showCountType?: ShowCountType;
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
        interactionColorType="like"
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.likesCount}
        text="いいね"
        isActive={post.liked}
        showCountType={showCountType}
        interactionColorType="like"
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
        interactionColorType="like"
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
