import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/User/useUser';
import Avatar from '../Avatar/Avatar';
import ProfileButton from '../Button/ProfileButton';
import useModalRoute from '../../hooks/useModalRoute';

const UserBox = () => {
  const { startModalPath } = useModalRoute();
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  console.log(user);

  if (user) {
    const handleHeaderPhotoClick = () => {
      startModalPath(`/${user.username}/header_photo`);
    };

    const handleAvatarClick = () => {
      startModalPath(`/${user.username}/avatar`);
    };

    return (
      <>
        <Grid item xs={12}>
          <Grid item xs={12} onClick={handleHeaderPhotoClick}>
            <Box
              sx={{
                height: '200px',
                backgroundImage: user.image ? `url(${user.image.url})` : 'none',
                backgroundColor: user.image ? 'none' : '#cfd9de',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </Grid>
          <Box sx={{ px: '15px', pt: '11px', mb: '15px' }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Avatar
                avatar={user.avatar}
                name={user.name}
                sx={{ width: '146px', height: '146px', mt: '-80px' }}
                customComponent="button"
                onClick={handleAvatarClick}
              />
              <ProfileButton />
            </Box>
            <Box sx={{ pt: 1 }}>
              <Typography variant="h5">{user.name}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="gray">
                @{user.username}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </>
    );
  }
  return null;
};

export default UserBox;
