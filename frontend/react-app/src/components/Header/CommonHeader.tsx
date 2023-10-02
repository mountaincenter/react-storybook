import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import ArrowBackIcons from '@mui/icons-material/ArrowBack';
import Tooltip from '../Tooltip/Tooltip';

interface CommonHeaderProps {
  title: string;
}

const CommonHeader = ({ title }: CommonHeaderProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Grid item xs={12}>
        <Box>
          <Box alignItems="center" display="flex">
            <Tooltip title="戻る">
              <ArrowBackIcons onClick={goBack} sx={{ color: 'inherit' }} />
            </Tooltip>
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6">{title}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Header>
  );
};

export default CommonHeader;
