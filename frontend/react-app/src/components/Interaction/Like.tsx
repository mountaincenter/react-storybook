import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InteractionButton from '../Button/InteractionButton';
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

  if (!post) return null;
  if (showCountType === 'onlyIcon' && post.likesCount === 0) return null;
  if (showCountType !== 'onlyIcon') {
    return (
      <InteractionButton
        isActive={isLiked}
        count={post.likesCount}
        onInteractionClick={toggleLike}
        title="いいね"
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
        hoverColor="error"
      />
    );
  }

  return null;
};

export default Like;
