import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import RepostPopover from '../Popover/RepostPopover';
import InteractionButton from '../Button/InteractionButton';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';

interface RepostProps {
  publicId: string;
  isActive: boolean;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Repost: React.FC<RepostProps> = ({
  publicId,
  isActive,
  showCountType,
}) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const repostCount = post?.reposts.length || 0;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const showRepostPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeRepostPopover = () => {
    setAnchorEl(null);
  };

  if (!post) return null;

  if (showCountType === 'onlyIcon' && repostCount === 0) {
    return null;
  }

  return (
    <>
      <InteractionButton
        isActive={isActive}
        count={repostCount}
        onInteractionClick={showRepostPopover}
        title="リツイート"
        ActiveIcon={RepeatIcon}
        InactiveIcon={RepeatOutlinedIcon}
        hoverColor="green"
      />
      <RepostPopover
        originalId={post.id}
        onClose={closeRepostPopover}
        anchorEl={anchorEl}
      />
    </>
  );
};

export default Repost;
