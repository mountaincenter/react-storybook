import { Grid, Typography } from '@mui/material';
import { useFollowersCount } from '../../hooks/follow/useFollowersCount';
import { useFollowingCount } from '../../hooks/follow/useFollowingCount';
import { useUser } from '../../hooks/user/useUser';

import { Link, useParams } from 'react-router-dom';

const FollowCount = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  const followersCount = useFollowersCount(username ? username : '');
  const followingCount = useFollowingCount(username ? username : '');

  return (
    <Grid container>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          component={Link}
          to={`/${user?.username}/followers`}
          sx={{
            textDecoration: 'none',
            color: 'gray',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {followersCount}フォロワー
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="body1"
          component={Link}
          to={`/${user?.username}/following`}
          sx={{
            textDecoration: 'none',
            color: 'gray',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {followingCount}フォロー中
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FollowCount;
