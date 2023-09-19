import React from 'react';
import IconWithBadge from './IconWithBadge';
import Tooltip from '../../Tooltip';
import { Link, useLocation } from 'react-router-dom';
import {
  ListItemButton,
  ListItemText,
  ListItem,
  IconButton,
  Typography,
} from '@mui/material';
import { useMobileView } from '../../../hooks/useMobileView';
interface IconWithTextProps {
  link: string;
  text: string;
  Icon?: React.ElementType;
  OutlinedIcon: React.ElementType;
  onClick?: () => void;
  badgeContent?: number;
  isActive: boolean;
}

const IconWithText: React.FC<IconWithTextProps> = ({
  link,
  text,
  Icon,
  OutlinedIcon,
  onClick,
  badgeContent,
  isActive: activeProp,
}) => {
  const location = useLocation();
  const { isDesktop, isTablet } = useMobileView();
  // console.log('badgeContent', badgeContent);
  // console.log('text', text);

  const isActive =
    activeProp !== undefined ? activeProp : location.pathname === link;

  const IconToRender = isActive && Icon ? Icon : OutlinedIcon;

  const commonProps = {
    component: Link,
    to: link,
    onClick: onClick,
    sx: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <>
      {isDesktop && (
        <ListItemButton
          {...commonProps}
          sx={{
            ...commonProps.sx,
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            '&:hover': {
              borderRadius: '9999px',
            },
          }}
        >
          <IconWithBadge
            badgeContent={text === '通知' ? badgeContent : undefined}
            Icon={IconToRender}
          />
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{ fontWeight: isActive ? 'bold' : 'normal' }}
              >
                {text}
              </Typography>
            }
            sx={{ ml: 2 }}
          />
        </ListItemButton>
      )}
      {isTablet && (
        <>
          <Tooltip title={text}>
            <ListItem {...commonProps}>
              <IconButton color="inherit">
                <IconWithBadge
                  badgeContent={
                    text === 'Notifications' ? badgeContent : undefined
                  }
                  Icon={IconToRender}
                />
              </IconButton>
            </ListItem>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default IconWithText;
