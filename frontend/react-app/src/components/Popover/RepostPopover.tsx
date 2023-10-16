import { Popover } from '@mui/material';
import useModalRoute from '../../hooks/useModalRoute';
import { useCreatePost } from '../../hooks/post/useCreatePost';
import Button from '../Button/Button';

interface RepostDialogProps {
  originalId: number;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
}

const RepostPopover = ({
  originalId,
  onClose,
  anchorEl,
}: RepostDialogProps) => {
  console.log(originalId);
  const { startModalPath } = useModalRoute();
  const { postMutation } = useCreatePost();

  const handleRepost = () => {
    const formData = new FormData();
    formData.append('content', '');
    formData.append('postType', 'repost');
    formData.append('originalId', originalId.toString());
    postMutation.mutate(formData);
    onClose();
  };

  const handleQuoteRepost = () => {
    startModalPath(`/post/quote_repost/${originalId}`);
    onClose();
  };

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button
          variant="text"
          label="リツイート"
          onClick={handleRepost}
          fullWidth
        />
        <Button
          variant="text"
          label="引用リツイート"
          onClick={handleQuoteRepost}
          fullWidth
        />
      </Popover>
    </>
  );
};

export default RepostPopover;
