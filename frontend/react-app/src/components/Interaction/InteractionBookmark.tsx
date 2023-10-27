import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface InteractionsBookmarkProps {
  isActive: boolean;
  onClick: () => void;
}

const InteractionsBookmark = ({
  isActive,
  onClick,
}: InteractionsBookmarkProps) => {
  return (
    <>
      <TooltipWithIconButton
        title="ブックマーク"
        onClick={onClick}
        isActive={isActive}
        color="blue"
        ActiveIcon={BookmarkIcon}
        InactiveIcon={BookmarkBorderOutlinedIcon}
      />
    </>
  );
};
export default InteractionsBookmark;
