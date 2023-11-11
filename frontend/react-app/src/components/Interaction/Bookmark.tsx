import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Button/InteractionButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useBookmark } from '../../hooks/bookmark/useBookmark';

interface BookmarkProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Bookmark: React.FC<BookmarkProps> = ({ publicId, showCountType }) => {
  const bookmark = useRecoilValue(postByIdSelector(publicId));
  const { isBookmark, toggleBookmark } = useBookmark(
    bookmark?.id || 0,
    publicId,
    bookmark?.bookmarked || false
  );

  // Early returns
  if (!bookmark) return null;
  if (showCountType === 'onlyIcon' && bookmark.bookmarksCount === 0)
    return null;

  if (showCountType !== 'onlyIcon') {
    return (
      <InteractionButton
        isActive={isBookmark}
        count={bookmark.bookmarksCount}
        onInteractionClick={toggleBookmark}
        title="ブックマーク"
        ActiveIcon={BookmarkIcon}
        InactiveIcon={BookmarkBorderIcon}
        hoverColor="blue"
      />
    );
  }

  return null;
};

export default Bookmark;
