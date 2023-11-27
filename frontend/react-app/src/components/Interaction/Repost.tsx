import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import RepostPopover from '../Popover/RepostPopover';
import InteractionButton from '../Button/InteractionButton';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface RepostProps {
  publicId: string;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Repost: React.FC<RepostProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // console.log('Repost', post);
  const showRepostPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeRepostPopover = () => {
    setAnchorEl(null);
  };

  if (!post) return null;

  const renderRepostButton = () => {
    return (
      <>
        <InteractionButton
          isActive={post.reposted}
          count={post.totalRepostsCount}
          onInteractionClick={showRepostPopover}
          title="リツイート"
          ActiveIcon={RepeatIcon}
          InactiveIcon={RepeatOutlinedIcon}
          color="rgb(23, 191, 99)"
          backgroundColor="rgb(23, 191, 99, 0.1)"
        />
        <RepostPopover
          originalId={post.id}
          currentUserRepostPublicId={post.currentUserRepostPublicId || null}
          onClose={closeRepostPopover}
          anchorEl={anchorEl}
          isReposted={post.reposted}
        />
      </>
    );
  };

  const renderCountText = () => {
    return (
      <>
        <CountText
          count={post.repostsCount}
          text="リポスト"
          color="rgb(23, 191, 99)"
          showCountType={showCountType}
          isActive={post.reposted}
        />
        <CountText
          count={post.quoteRepostsCount}
          text="引用リポスト"
          color="rgb(23, 191, 99)"
          showCountType={showCountType}
          isActive={post.reposted}
        />
        <RepostPopover
          originalId={post.id}
          currentUserRepostPublicId={post.currentUserRepostPublicId || null}
          onClose={closeRepostPopover}
          anchorEl={anchorEl}
          isReposted={post.reposted}
        />
      </>
    );
  };

  const renderIconOnly = () => {
    return (
      <>
        <TooltipWithIconButton
          title="リツイート"
          onClick={showRepostPopover}
          isActive={post.reposted}
          ActiveIcon={RepeatIcon}
          InactiveIcon={RepeatOutlinedIcon}
          color="rgb(23, 191, 99)"
          backgroundColor="rgb(23, 191, 99, 0.1)"
        />
        <RepostPopover
          originalId={post.id}
          currentUserRepostPublicId={post.currentUserRepostPublicId || null}
          onClose={closeRepostPopover}
          anchorEl={anchorEl}
          isReposted={post.reposted}
        />
      </>
    );
  };

  switch (showCountType) {
    case 'onlyCount':
      return renderCountText();
    case 'onlyIcon':
      return renderIconOnly();
    default:
      return renderRepostButton();
  }
};

export default Repost;
