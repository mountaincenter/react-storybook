import React from 'react';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Button/InteractionButton';
import useModalRoute from '../../hooks/useModalRoute';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

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

  if (showCountType === 'onlyIcon' && post.repliesCount === 0) return null;

  if (showCountType !== 'onlyIcon') {
    return (
      <InteractionButton
        isActive={isCurrentUserReplies}
        count={post.repliesCount}
        onInteractionClick={handleReply}
        title="返信"
        ActiveIcon={ChatIcon}
        InactiveIcon={ChatBubbleOutlineIcon}
        hoverColor="blue"
      />
    );
  }

  return null;
};

export default Reply;
