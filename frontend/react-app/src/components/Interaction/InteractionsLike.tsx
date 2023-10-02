import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface InteractionsLikeProps {
  isActive: boolean;
  onClick: () => void;
}

const InteractionsLike = ({ isActive, onClick }: InteractionsLikeProps) => {
  return (
    <>
      <TooltipWithIconButton
        title="いいね"
        onClick={onClick}
        isActive={isActive}
        color="red"
        ActiveIcon={FavoriteIcon}
        InactiveIcon={FavoriteBorderIcon}
      />
    </>
  );
};

export default InteractionsLike;
