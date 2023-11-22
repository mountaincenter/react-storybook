import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Button/InteractionButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useBookmark } from '../../hooks/bookmark/useBookmark';
import CountText from './CountText';
import TooltipWithIconButton from '../../components/Tooltip/TooltipWithIconButton';
interface BookmarkProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const Bookmark: React.FC<BookmarkProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { isBookmark, toggleBookmark } = useBookmark(
    post?.id || 0,
    publicId,
    post?.bookmarked || false
  );
  // Early returns
  if (!post) return null;
  const renderBookmarkButton = () => {
    return (
      <InteractionButton
        isActive={isBookmark}
        count={post.bookmarksCount}
        onInteractionClick={toggleBookmark}
        title="ブックマーク"
        ActiveIcon={BookmarkIcon}
        InactiveIcon={BookmarkBorderIcon}
        hoverColor="#1d9bf0"
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.bookmarksCount}
        text="ブックマーク"
        hoverColor="#1d9bf0"
        showCountType={showCountType}
      />
    );
  };

  const renderIconOnly = () => {
    return (
      <TooltipWithIconButton
        title="ブックマーク"
        onClick={() => console.log('bookmark')}
        isActive={isBookmark}
        ActiveIcon={BookmarkIcon}
        InactiveIcon={BookmarkBorderIcon}
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
      return renderBookmarkButton();
  }
};

export default Bookmark;
