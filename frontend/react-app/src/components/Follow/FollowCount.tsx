import { Grid, Typography } from '@mui/material';
import { useUser } from '../../hooks/user/useUser';

import { Link, useParams } from 'react-router-dom';

const FollowCount = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');

  if (!user) return <></>;
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
          {user.followersCount}フォロワー
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
          {user.followingCount}フォロー中
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FollowCount;
