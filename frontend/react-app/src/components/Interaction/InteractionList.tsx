import { Box } from '@mui/material';

import Like from './Like';
import Repost from './Repost';

interface InteractionListProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const InteractionList = ({ publicId, showCountType }: InteractionListProps) => {
  return (
    <>
      <Box display="flex">
        <Like publicId={publicId} showCountType={showCountType} />
        <Repost publicId={publicId} showCountType={showCountType} />
      </Box>
    </>
  );
};

export default InteractionList;
