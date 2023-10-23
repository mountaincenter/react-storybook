import { Button, Typography, IconButton, ListItem } from '@mui/material';

import Tooltip from '../Tooltip/Tooltip';
import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useMobileView } from '../../hooks/useMobileView';

import useModalRoute from '../../hooks/useModalRoute';

interface TweetButtonProps {
  text: string;
}

const TweetButton = ({ text }: TweetButtonProps) => {
  const { startModalPath } = useModalRoute();
  const { isDesktop, isTablet } = useMobileView();

  const handlePost = () => {
    startModalPath(`/post/original`);
  };

  return (
    <>
      {isDesktop && (
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ borderRadius: '9999px', mt: 2 }}
          onClick={handlePost}
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
