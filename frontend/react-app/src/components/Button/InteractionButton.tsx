import React from 'react';
import CountText from '../Interaction/CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';

interface InteractionButtonProps {
  isActive: boolean;
  count: number;
  onInteractionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: '返信' | 'リツイート' | 'いいね' | 'ブックマーク';
  ActiveIcon: React.ComponentType;
  InactiveIcon: React.ComponentType;
  color: string;
  backgroundColor: string;
}

const InteractionButton: React.FC<InteractionButtonProps> = ({
  isActive,
  count,
  onInteractionClick,
  title,
  ActiveIcon,
  InactiveIcon,
  color,
  backgroundColor,
}) => {
  return (
    <>
      <TooltipWithIconButton
        title={title}
        onClick={onInteractionClick}
        isActive={isActive}
        ActiveIcon={ActiveIcon}
        InactiveIcon={InactiveIcon}
        color={color}
        backgroundColor={backgroundColor}
      />
      <CountText count={count} text={title} color={color} isActive={isActive} />
    </>
  );
};

export default InteractionButton;
