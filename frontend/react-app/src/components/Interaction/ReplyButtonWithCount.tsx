import InteractionsReply from './InteractionsReply';
import CountText from './CountText';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';

import useModalRoute from '../../hooks/useModalRoute';

interface ReplyProps {
  publicId: string;
  isActive: boolean;
  toggleReply: () => void;
}

const ReplyButtonWithCount = ({ publicId, isActive }: ReplyProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const replyCount = post?.replies.length || 0;
  const { startModalPath } = useModalRoute();

  const handleReply = () => {
    startModalPath(`/post/reply/${parent}`);
  };

  if (!post) {
    return null;
  }

  return (
    <>
      <InteractionsReply isActive={isActive} onClick={handleReply} />
      <CountText count={replyCount} text="リプライ" hoverColor="blue" />
    </>
  );
};

export default ReplyButtonWithCount;
