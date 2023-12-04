import { IconButton, useTheme } from '@mui/material';
import IconWithIsActive from '../Icon/IconWithIsActive';
import Tooltip from './Tooltip';
import React from 'react';
import { type CustomColor } from '../../interfaces';

interface TooltipWithIconButtonProps {
  title: '返信' | 'リツイート' | 'いいね' | 'ブックマーク';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
  isActive: boolean;
  interactionColorType?: CustomColor;
  ActiveIcon: React.ElementType;
  InactiveIcon: React.ElementType;
}

const TooltipWithIconButton: React.FC<TooltipWithIconButtonProps> = ({
  title,
  onClick,
  isActive,
  interactionColorType = 'default',
  ActiveIcon,
  InactiveIcon,
}: TooltipWithIconButtonProps) => {
  const getTooltipTitle = () => {
    if (isActive) {
      return `${title}を取り消す`;
    }
    return title;
  };

  const theme = useTheme();
  const color = theme.palette[interactionColorType]?.main;
  const backgroundColor = theme.palette[interactionColorType]?.background;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Tooltip title={getTooltipTitle()}>
      <IconButton
        sx={{
          color: isActive ? color : 'textSecondary',
          '&:hover': {
            color: color,
            backgroundColor: backgroundColor,
          },
        }}
        onClick={handleClick}
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
