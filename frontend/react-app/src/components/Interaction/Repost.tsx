import { useState } from 'react';
import RepostButtonWithCount from './RepostButtonWithCount';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';

interface RepostProps {
  publicId: string;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Repost = ({ publicId, showCountType }: RepostProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
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
