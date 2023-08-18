import React from 'react';
import { Badge } from '@mui/material';
import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

interface BadgeProps extends MuiBadgeProps {
  badgeContent?: number;
  children?: React.ReactNode;
}

const BadgeComponent = React.forwardRef<HTMLButtonElement, BadgeProps>(
  (props, ref) => {
    const { badgeContent, children, ...rest } = props;

    if (badgeContent && badgeContent > 0) {
      return (
        <Badge
          badgeContent={badgeContent}
          color="primary"
          max={99}
          ref={ref}
          {...rest}
        >
          {children}
        </Badge>
      );
    }
    return children;
  }
);

export default BadgeComponent;
