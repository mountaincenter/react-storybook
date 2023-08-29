import React from 'react';
import BadgeComponent from '../../Badge/Badge';

export interface IconProps {
  Icon: React.ElementType;
  badgeContent?: number;
}

const BaseIcon = React.forwardRef<HTMLButtonElement, IconProps>(
  (props, ref) => {
    const { Icon, badgeContent, ...rest } = props;

    if (badgeContent && badgeContent > 0) {
      return (
        <BadgeComponent badgeContent={badgeContent} ref={ref}>
          <Icon {...rest} />
        </BadgeComponent>
      );
    }
    return <Icon {...rest} />;
  }
);

export default BaseIcon;
