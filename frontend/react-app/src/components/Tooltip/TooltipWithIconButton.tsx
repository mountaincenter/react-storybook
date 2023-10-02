import { IconButton } from '@mui/material';
import IconWithIsActive from '../Icon/IconWithIsActive';
import Tooltip from './Tooltip';

interface TooltipWithIconButtonProps {
  title: '返信' | 'リツイート' | 'いいね' | 'ブックマーク';
  onClick: () => void;
  isActive: boolean;
  color: string;
  ActiveIcon: React.ElementType;
  InactiveIcon: React.ElementType;
}

const TooltipWithIconButton: React.FC<TooltipWithIconButtonProps> = ({
  title,
  onClick,
  isActive,
  color,
  ActiveIcon,
  InactiveIcon,
}: TooltipWithIconButtonProps) => {
  return (
    <Tooltip title={title}>
      <IconButton
        sx={{
          color: isActive ? color : 'textSecondary',
          '&:hover': {
            color: color,
          },
        }}
        onClick={onClick}
      >
        <IconWithIsActive
          ActiveIcon={ActiveIcon}
          InactiveIcon={InactiveIcon}
          isActive={isActive}
        />
      </IconButton>
    </Tooltip>
  );
};

export default TooltipWithIconButton;
