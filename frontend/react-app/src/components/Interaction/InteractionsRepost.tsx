import RepeatIcon from '@mui/icons-material/Repeat';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface InteractionsRepostProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
}

const InteractionsRepost = ({ isActive, onClick }: InteractionsRepostProps) => {
  return (
    <>
      <TooltipWithIconButton
        title="リツイート"
        onClick={onClick}
        isActive={isActive}
        color="green"
        ActiveIcon={RepeatIcon}
        InactiveIcon={RepeatIcon}
      />
    </>
  );
};

export default InteractionsRepost;
