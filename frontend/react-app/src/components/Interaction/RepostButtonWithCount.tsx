import { useState } from 'react';
import { usePost } from '../../hooks/post/usePost';
import InteractionsRepost from './InteractionsRepost';
import CountText from './CountText';
import RepostPopover from '../Popover/RepostPopover';

interface RepostProps {
  publicId: string;
  isActive: boolean;
  toggleRepost: () => void;
}

const RepostButtonWithCount = ({ publicId, isActive }: RepostProps) => {
  const { post } = usePost(publicId);
  const repostCount = post?.reposts.length || 0;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const showRepostPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  // console.log(post);

  const closeRepostPopover = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {post && (
        <>
          <InteractionsRepost isActive={isActive} onClick={showRepostPopover} />
          <CountText count={repostCount} text="リツイート" hoverColor="green" />
          <RepostPopover
            originalId={post.id}
            onClose={closeRepostPopover}
            anchorEl={anchorEl}
          />
        </>
      )}
    </>
  );
};

export default RepostButtonWithCount;
