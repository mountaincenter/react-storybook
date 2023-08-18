import React from 'react';
import BaseIcon from '../BaseIcon/BaseIcon';
import BadgeComponent from '../../Badge';
import Tooltip from '../../Tooltip';
import { Link, useLocation } from 'react-router-dom';
import {
  useMediaQuery,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import { customTheme } from '../../../Theme';

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
  const isDesktop = useMediaQuery(customTheme.breakpoints.up('desktop'));
  const isTablet = useMediaQuery(
    customTheme.breakpoints.between('tablet', 'desktop')
  );
  const isActive =
    activeProp !== undefined ? activeProp : location.pathname === link;

  const IconToRender = isActive && Icon ? Icon : OutlinedIcon;

  return (
    <>
      {isDesktop && (
        <ListItemButton
          component={Link}
          to={link}
          onClick={onClick}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            '&:hover': {
              borderRadius: '9999px',
            },
          }}
        >
          <BadgeComponent
            badgeContent={
              text === 'NotificationsWithBadgeContent'
                ? badgeContent
                : undefined
            }
          >
            <BaseIcon Icon={IconToRender} />
          </BadgeComponent>
          <ListItemText primary={text} sx={{ ml: 2 }} />
        </ListItemButton>
      )}
      {isTablet && (
        <Tooltip title={text}>
          <IconButton color="inherit">
            <BadgeComponent
              badgeContent={
                text === 'NotificationsWithBadgeContent'
                  ? badgeContent
                  : undefined
              }
            >
              <BaseIcon Icon={IconToRender} />
            </BadgeComponent>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default IconWithText;
