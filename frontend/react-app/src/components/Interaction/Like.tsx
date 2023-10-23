import useLikeMutation from '../../hooks/post/useLikeMutation';
import LikeButtonWithCount from './LikeButtonWithCount';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
interface LikeProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Like = ({ publicId, showCountType }: LikeProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { isLike, toggleLike } = useLikeMutation(
    publicId,
    post?.liked || false
  );

  const likesCount = post?.likes.length || 0;

  if (showCountType === 'onlyIcon' && likesCount === 0) {
    return null;
  }
  return (
    <div>
      {showCountType !== 'onlyIcon' && (
        <LikeButtonWithCount
          publicId={publicId}
          isActive={isLike}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
};

export default Like;
