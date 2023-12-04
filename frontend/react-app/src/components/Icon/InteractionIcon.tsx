import React from 'react';
import CountText from '../Interaction/CountText';
import TooltipWithIconButton from '../Tooltip/TooltipWithIconButton';
import {
  type CustomColor,
  type Title,
  type ShowCountType,
} from '../../interfaces';

interface InteractionButtonProps {
  isActive: boolean;
  count: number;
  onInteractionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: Title;
  ActiveIcon: React.ComponentType;
  InactiveIcon: React.ComponentType;
  interactionColorType?: CustomColor;
  showCountType?: ShowCountType;
}

const InteractionIcon: React.FC<InteractionButtonProps> = ({
  isActive,
  count,
  onInteractionClick,
  title,
  ActiveIcon,
  InactiveIcon,
  interactionColorType = 'default',
  showCountType = 'both',
}) => {
  return (
    <>
      {showCountType !== 'onlyCount' && (
        <TooltipWithIconButton
          title={title}
          onClick={onInteractionClick}
          isActive={isActive}
          ActiveIcon={ActiveIcon}
          InactiveIcon={InactiveIcon}
          interactionColorType={interactionColorType}
        />
      )}
      {showCountType !== 'onlyIcon' && (
        <CountText
          count={count}
          text={title}
          isActive={isActive}
          interactionColorType={interactionColorType}
          showCountType={showCountType}
        />
      )}
    </>
  );
};

export default InteractionIcon;
