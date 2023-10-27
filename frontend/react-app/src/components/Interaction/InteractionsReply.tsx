import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TooltipWithIconButton from '..//Tooltip/TooltipWithIconButton';

interface InteractionsReplyProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
}

const InteractionsReply = ({ isActive, onClick }: InteractionsReplyProps) => {
  return (
    <>
      <TooltipWithIconButton
        title="返信"
        onClick={onClick}
        isActive={isActive}
        color="blue"
        ActiveIcon={ChatBubbleOutlineOutlinedIcon}
        InactiveIcon={ChatBubbleIcon}
      />
    </>
  );
};

export default InteractionsReply;
