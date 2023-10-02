import { usePost } from '../../hooks/post/usePost';
import InteractionsRepost from './InteractionsRepost';

import CountText from './CountText';

interface RepostProps {
  publicId: string;
  isActive: boolean;
  toggleRepost: () => void;
}

const RepostButtonWithCount = ({
  publicId,
  isActive,
  toggleRepost,
}: RepostProps) => {
  const { post } = usePost(publicId);
  const repostCount = post?.reposts.length || 0;

  return (
    <>
      <InteractionsRepost isActive={isActive} onClick={toggleRepost} />
      <CountText count={repostCount} text="リツイート" hoverColor="green" />
    </>
  );
};

export default RepostButtonWithCount;
