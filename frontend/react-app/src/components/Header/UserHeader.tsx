import Header from './Header';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { useUser } from '../../hooks/user/useUser';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcons from '@mui/icons-material/ArrowBack';
import Tooltip from '../Tooltip';

const UserHeader = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (user) {
    return (
      <Header>
        <Grid item xs={12}>
          <Box>
            <Box alignItems="center" display="flex">
              <Tooltip title="戻る">
                <IconButton onClick={goBack} sx={{ color: 'inherit' }}>
                  <ArrowBackIcons />
                </IconButton>
              </Tooltip>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">{user?.name}</Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {user?.username}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Header>
    );
  }
  return null;
};

export default UserHeader;
