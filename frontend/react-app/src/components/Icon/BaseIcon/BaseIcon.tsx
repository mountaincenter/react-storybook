import React from 'react';
import BadgeComponent from '../../Badge/Badge';

export interface IconProps {
  Icon: React.ElementType;
  badgeContent?: number;
  color?: string;
}

const BaseIcon = React.forwardRef<HTMLButtonElement, IconProps>(
  (props, ref) => {
    const { Icon, badgeContent, color, ...rest } = props;

    if (badgeContent && badgeContent > 0) {
      return (
        <BadgeComponent badgeContent={badgeContent} ref={ref}>
          <Icon color={color} {...rest} />
        </BadgeComponent>
      );
    }
    return <Icon color={color} {...rest} />;
  }
);

export default BaseIcon;
