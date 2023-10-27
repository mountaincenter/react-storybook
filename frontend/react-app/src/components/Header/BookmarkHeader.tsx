import Header from './Header';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import ArrowBackIcons from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Tooltip from '../Tooltip/Tooltip';

const BookmarkHeader = () => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (!currentUser) return null;

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
              <Typography variant="h6">ブックマーク</Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                @{currentUser.username}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Header>
  );
};

export default BookmarkHeader;
