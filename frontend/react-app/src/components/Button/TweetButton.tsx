import { Button, Typography, IconButton } from '@mui/material';

import { useMediaQuery, ListItem } from '@mui/material';
import { customTheme } from '../../Theme';

import Tooltip from '../Tooltip';
import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface TweetButtonProps {
  text: string;
  onClick: () => void;
}

const TweetButton = ({ text, onClick }: TweetButtonProps) => {
  const isDesktop = useMediaQuery(customTheme.breakpoints.up('desktop'));
  const isTablet = useMediaQuery(
    customTheme.breakpoints.between('tablet', 'desktop')
  );
  return (
    <>
      {isDesktop && (
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ borderRadius: '9999px', mt: 2 }}
          onClick={onClick}
        >
          <Typography>{text}</Typography>
        </Button>
      )}
      {isTablet && (
        <ListItem>
          <Tooltip title={text}>
            <IconButton size="large" color="primary" sx={{ padding: '8px' }}>
              <BaseIcon Icon={AddCircleIcon} />
            </IconButton>
          </Tooltip>
        </ListItem>
      )}
    </>
  );
};

export default TweetButton;
