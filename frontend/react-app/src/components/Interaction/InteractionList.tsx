import { Box } from '@mui/material';

import Like from './Like';
import Repost from './Repost';
import Bookmark from './Bookmark';
import Reply from './Reply';

interface InteractionListProps {
  publicId: string;
  showCountType?: 'onlyCount' | 'onlyIcon';
}

const InteractionList = ({ publicId, showCountType }: InteractionListProps) => {
  return (
    <>
      <Box display="flex">
        <Reply publicId={publicId} showCountType={showCountType} />
        <Like publicId={publicId} showCountType={showCountType} />
        <Repost publicId={publicId} showCountType={showCountType} />
        <Bookmark publicId={publicId} showCountType={showCountType} />
      </Box>
    </>
  );
};

export default InteractionList;
