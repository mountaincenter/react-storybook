import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import useModalRoute from '../../hooks/useModalRoute';

import { DialogTitle, IconButton } from '@mui/material';

const CloseableDialogTitle = () => {
  const { endModalPath } = useModalRoute();
  return (
    <DialogTitle>
      <IconButton
        aria-label="close"
        sx={{ position: 'absolute', left: 10, top: 10 }}
        onClick={() => endModalPath()}
      >
        <BaseIcon Icon={ClearOutlinedIcon} />
      </IconButton>
    </DialogTitle>
  );
};

export default CloseableDialogTitle;
