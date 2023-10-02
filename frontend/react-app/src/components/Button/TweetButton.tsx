import { Button, Typography, IconButton, ListItem } from '@mui/material';

import Tooltip from '../Tooltip/Tooltip';
import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useMobileView } from '../../hooks/useMobileView';

interface TweetButtonProps {
  text: string;
  onClick: () => void;
}

const TweetButton = ({ text, onClick }: TweetButtonProps) => {
  const { isDesktop, isTablet } = useMobileView();

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
