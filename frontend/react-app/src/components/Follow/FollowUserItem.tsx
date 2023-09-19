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

interface FollowUserListProps {
  follow: User;
}

const FollowUserItem = ({ follow }: FollowUserListProps) => {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <ListItem>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <ListItemAvatar>
              <Avatar
                name={follow.name}
                avatar={follow.avatar}
                customComponent="Link"
                to={follow.username}
              />
            </ListItemAvatar>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body1"
                component={Link}
                to={`/${follow.username}`}
                sx={{ mr: 1, textDecoration: 'none', color: 'inherit' }}
              >
                {follow.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to={`/${follow.username}`}
                sx={{ textDecoration: 'none' }}
              >
                @{follow.username}
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              {follow.profile ? follow.profile : 'よろしくお願いします'}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {currentUser && follow.id !== currentUser.id && (
              <FollowButton user={follow} />
            )}
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};

export default FollowUserItem;
