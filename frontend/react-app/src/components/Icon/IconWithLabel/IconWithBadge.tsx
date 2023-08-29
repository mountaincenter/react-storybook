import React from 'react';
import BaseIcon from '../BaseIcon/BaseIcon';
import Badge from '../../Badge/Badge';

interface IconWithBadgeProps {
  badgeContent?: number;
  Icon: React.ElementType;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  badgeContent,
  Icon,
}) => {
  return (
    <Badge badgeContent={badgeContent}>
      <BaseIcon Icon={Icon} />
    </Badge>
  );
};

export default IconWithBadge;
