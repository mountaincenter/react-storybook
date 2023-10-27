import InteractionsBookmark from './InteractionBookmark';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';

import CountText from './CountText';

interface BookmarkButtonWithCountProps {
  publicId: string;
  isActive: boolean;
  toggleBookmark: () => void;
}

const BookmarkButtonWithCount = ({
  publicId,
  isActive,
  toggleBookmark,
}: BookmarkButtonWithCountProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const bookmarksCount = post?.bookmarksCount || 0;

  return (
    <>
      <InteractionsBookmark isActive={isActive} onClick={toggleBookmark} />
      <CountText count={bookmarksCount} text="ブックマーク" hoverColor="blue" />
    </>
  );
};

export default BookmarkButtonWithCount;
