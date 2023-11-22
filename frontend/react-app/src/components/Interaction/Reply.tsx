import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Button/InteractionButton';
import useModalRoute from '../../hooks/useModalRoute';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import CountText from './CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface ReplyProps {
  publicId: string;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Reply: React.FC<ReplyProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { currentUser } = useCurrentUser();
  const { startModalPath } = useModalRoute();

  if (!post) return null;

  const isCurrentUserReplies =
    post?.replies.some((reply) => reply.user.id === currentUser?.id) || false;

  const handleReply = () => {
    startModalPath(`/post/reply/${post.publicId}`);
  };

  const renderReplyButton = () => {
    return (
      <InteractionButton
        isActive={isCurrentUserReplies}
        count={post.repliesCount}
        onInteractionClick={handleReply}
        title="返信"
        ActiveIcon={ChatBubbleOutlineIcon}
        InactiveIcon={ChatBubbleOutlineIcon}
        hoverColor="#1d9bf0"
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.repliesCount}
        text="返信"
        hoverColor="#1d9bf0"
        showCountType={showCountType}
      />
    );
  };

  const renderIconOnly = () => {
    return (
      <TooltipWithIconButton
        title="返信"
        onClick={handleReply}
        isActive={isCurrentUserReplies}
        ActiveIcon={ChatBubbleOutlineIcon}
        InactiveIcon={ChatBubbleOutlineIcon}
        color="#1d9bf0"
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
