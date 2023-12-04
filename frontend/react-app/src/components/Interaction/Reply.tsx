import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Icon/InteractionIcon';
import useModalRoute from '../../hooks/useModalRoute';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import { type ShowCountType } from '../../interfaces';

interface ReplyProps {
  publicId: string;
  showCountType?: ShowCountType;
}

const Reply: React.FC<ReplyProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { startModalPath } = useModalRoute();

  if (!post) return null;

  const handleReply = () => {
    startModalPath(`/post/reply/${post.publicId}`);
  };

  const renderReplyButton = () => {
    return (
      <InteractionButton
        isActive={post.replied}
        count={post.repliesCount}
        onInteractionClick={handleReply}
        title="返信"
        ActiveIcon={ChatBubbleOutlineIcon}
        InactiveIcon={ChatBubbleOutlineIcon}
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.repliesCount}
        text="返信"
        showCountType={showCountType}
        isActive={post.replied}
      />
    );
  };

  const renderIconOnly = () => {
    return (
      <TooltipWithIconButton
        title="返信"
        onClick={handleReply}
        isActive={post.replied}
        ActiveIcon={ChatBubbleOutlineIcon}
        InactiveIcon={ChatBubbleOutlineIcon}
      />
    );
  };

  switch (showCountType) {
    case 'onlyCount':
      return renderCountText();
    case 'onlyIcon':
      return renderIconOnly();
    default:
      return renderReplyButton();
  }
};

export default Reply;
