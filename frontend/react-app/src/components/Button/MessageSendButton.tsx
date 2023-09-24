import Button from './Button';

import SendIcon from '@mui/icons-material/Send';
import Icon from '../Icon/BaseIcon/BaseIcon';

const MessageSendButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: '0.5rem' }}
        type="submit"
        label={<Icon Icon={SendIcon} />}
        overrideDefaultStyles={true}
      />
    </>
  );
};

export default MessageSendButton;
