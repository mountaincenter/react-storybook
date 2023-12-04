import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import InteractionButton from '../Icon/InteractionIcon';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useBookmarkMutation } from '../../hooks/bookmark/useBookmarkMutation';
import CountText from './CountText';
import TooltipWithIconButton from '../../components/Tooltip/TooltipWithIconButton';
import { type ShowCountType } from '../../interfaces';
interface BookmarkProps {
  publicId: string;
  showCountType?: ShowCountType;
}

const Bookmark: React.FC<BookmarkProps> = ({ publicId, showCountType }) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  const { isBookmark, toggleBookmark } = useBookmarkMutation(
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
      />
    );
  };

  const renderCountText = () => {
    return (
      <CountText
        count={post.bookmarksCount}
        text="ブックマーク"
        showCountType={showCountType}
        isActive={isBookmark}
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
