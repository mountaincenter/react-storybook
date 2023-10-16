import { Popover, Typography } from '@mui/material';
import { type User } from '../../interfaces';

interface UserPopoverProps {
  user: User;
  anchorEl: HTMLElement | null;
}

const UserPopover = ({ user, anchorEl }: UserPopoverProps) => {
  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => {}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography>{user.name}</Typography>
      </Popover>
    </>
  );
};

export default UserPopover;
