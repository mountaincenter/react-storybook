import { useState } from 'react';
import ReplyButtonWithCount from './ReplyButtonWithCount';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

interface ReplyProps {
  publicId: string;
  showCountType?: 'onlyIcon' | 'onlyCount';
}

const Reply = ({ publicId, showCountType }: ReplyProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { currentUser } = useCurrentUser();

  const isCurrentUserReplies =
    post?.replies.some((reply) => reply.user.id === currentUser?.id) || false;

  const [isReplied, setIsReplied] = useState<boolean>(isCurrentUserReplies);
  const ReplyCount = post?.replies.length || 0;

  if (showCountType === 'onlyIcon' && ReplyCount === 0) {
    return null;
  }

  return (
    <div>
      {showCountType !== 'onlyIcon' && post && (
        <ReplyButtonWithCount
          publicId={post.publicId}
          isActive={isReplied}
          toggleReply={() => setIsReplied(!isReplied)}
        />
      )}
    </div>
  );
};
export default Reply;
