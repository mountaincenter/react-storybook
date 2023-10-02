import { usePost } from '../../hooks/post/usePost';
import InteractionsLike from './InteractionsLike';

import CountText from './CountText';

interface LikeButtonWithCountProps {
  publicId: string;
  isActive: boolean;
  toggleLike: () => void;
}
const LikeButtonWithCount = ({
  publicId,
  isActive,
  toggleLike,
}: LikeButtonWithCountProps) => {
  const { post } = usePost(publicId);
  const likesCount = post?.likes.length || 0;

  return (
    <>
      <InteractionsLike isActive={isActive} onClick={toggleLike} />
      <CountText count={likesCount} text="いいね" hoverColor="error" />
    </>
  );
};

export default LikeButtonWithCount;
