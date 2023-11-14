import { type User } from 'interfaces';
import {
  ListItem,
  ListItemAvatar,
  Divider,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FollowButton from '../Button/FollowButton';
import Avatar from '../Avatar/Avatar';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <ListItem>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <ListItemAvatar>
              <Avatar
                name={user.name}
                avatar={user.avatar}
                customComponent="Link"
                to={user.username}
              />
            </ListItemAvatar>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body1"
                component={Link}
                to={`/${user.username}`}
                sx={{ mr: 1, textDecoration: 'none', color: 'inherit' }}
              >
                {user.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to={`/${user.username}`}
                sx={{ textDecoration: 'none' }}
              >
                @{user.username}
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              {user.profile ? user.profile : 'よろしくお願いします'}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {currentUser && user.id !== currentUser.id && (
              <FollowButton user={user} />
            )}
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};

export default UserItem;
