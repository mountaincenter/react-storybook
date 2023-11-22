import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InteractionButton from '../Button/InteractionButton';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import useLikeMutation from '../../hooks/like/useLikeMutation';

interface LikeProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Like: React.FC<LikeProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { isLiked, toggleLike } = useLikeMutation(
    publicId,
    post?.liked || false
  );

  console.log('Component post', { publicId, showCountType, isLiked });

  if (!post) return null;

  const renderLikeButton = () => {
    return (
      <InteractionButton
        isActive={isLiked}
        count={post.likesCount}
        onInteractionClick={toggleLike}
        title="いいね"
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
        hoverColor="#f91880"
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.likesCount}
        text="いいね"
        hoverColor="#f91880"
        showCountType={showCountType}
      />
    );
  };

  const renderIconOnly = () => {
    return (
      <TooltipWithIconButton
        title="いいね"
        onClick={() => {
          toggleLike().catch((error) => {
            console.error('Error toggling like:', error);
          });
        }}
        isActive={isLiked}
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
        color="#f91880"
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
