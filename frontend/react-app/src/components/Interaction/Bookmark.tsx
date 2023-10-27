import { useBookmark } from '../../hooks/bookmark/useBookmark';
import BookmarkButtonWithCount from './BookmarkButtonWithCount';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';

interface BookmarkProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Bookmark = ({ publicId, showCountType }: BookmarkProps) => {
  const bookmark = useRecoilValue(postByIdSelector(publicId));
  const { isBookmark, toggleBookmark } = useBookmark(
    bookmark?.id || 0,
    publicId,
    bookmark?.bookmarked || false
  );
  const bookmarkCount = bookmark?.bookmarksCount || 0;
  if (showCountType === 'onlyIcon' && bookmarkCount === 0) {
    return null;
  }
  return (
    <div>
      {showCountType !== 'onlyIcon' && (
        <BookmarkButtonWithCount
          publicId={publicId}
          isActive={isBookmark}
          toggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
};
export default Bookmark;
