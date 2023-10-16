import { useState } from 'react';
import { usePost } from '../../hooks/post/usePost';
import RepostButtonWithCount from './RepostButtonWithCount';

interface RepostProps {
  publicId: string;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Repost = ({ publicId, showCountType }: RepostProps) => {
  const { post } = usePost(publicId);
  const [isReposted, setIsReposted] = useState<boolean>(
    post?.reposted ? post.reposted : false
  );
  const totalRepostCount = post?.reposts.length || 0;

  if (showCountType === 'onlyIcon' && totalRepostCount === 0) {
    return null;
  }
  return (
    <div>
      {showCountType !== 'onlyIcon' && post && (
        <RepostButtonWithCount
          publicId={post.publicId}
          isActive={isReposted}
          toggleRepost={() => setIsReposted(!isReposted)}
        />
      )}
    </div>
  );
};

export default Repost;
