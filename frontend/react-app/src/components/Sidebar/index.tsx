import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface SidebarOptionProps {
  link: string;
  text: string;
  Icon?: React.ElementType;
  OutlinedIcon: React.ElementType;
  onClick?: () => void;
}

const SidebarOption = ({
  link,
  text,
  Icon,
  OutlinedIcon,
  onClick,
}: SidebarOptionProps) => {
  const location = useLocation();

  const isActive = location.pathname === link;
  const IconToRender = isActive && Icon ? Icon : OutlinedIcon;

  return (
    <ListItemButton
      component={Link}
      to={link}
      onClick={onClick}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        fontWeight: isActive ? 'bold' : 'normal',
        width: 'auto',
        height: 'auto',
        '&:hover': {
          borderRadius: '9999px',
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 'auto' }}>
        <IconToRender />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="body2"
            sx={{ fontWeight: isActive ? 'bold' : 'normal' }}
          >
            {text}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default SidebarOption;
