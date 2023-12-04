import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import RepostPopover from '../Popover/RepostPopover';
import InteractionButton from '../Icon/InteractionIcon';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import { type ShowCountType } from '../../interfaces';

interface RepostProps {
  publicId: string;
  showCountType?: ShowCountType;
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

  const isRepoted = post.reposted || post.quoteReposted;

  const renderRepostButton = () => {
    return (
      <>
        <InteractionButton
          isActive={isRepoted}
          count={post.totalRepostsCount}
          onInteractionClick={showRepostPopover}
          title="リツイート"
          ActiveIcon={RepeatIcon}
          InactiveIcon={RepeatOutlinedIcon}
          interactionColorType="repost"
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
          showCountType={showCountType}
          isActive={post.reposted}
          interactionColorType="repost"
        />
        <CountText
          count={post.quoteRepostsCount}
          text="引用リポスト"
          showCountType={showCountType}
          isActive={post.quoteReposted}
          interactionColorType="repost"
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
          interactionColorType="repost"
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
