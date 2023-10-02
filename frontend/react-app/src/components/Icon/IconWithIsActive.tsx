import React from 'react';
import BaseIcon from './BaseIcon/BaseIcon';

interface IconWithIsActiveProps {
  isActive: boolean;
  ActiveIcon: React.ElementType;
  InactiveIcon: React.ElementType;
  color?: string;
}

const IconWithIsActive: React.FC<IconWithIsActiveProps> = ({
  isActive,
  ActiveIcon,
  InactiveIcon,
  color,
}) => {
  const IconComponent = isActive ? ActiveIcon : InactiveIcon;

  return <BaseIcon Icon={IconComponent} color={color} />;
};

export default IconWithIsActive;
