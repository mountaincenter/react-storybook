import { Popover } from '@mui/material';
import useModalRoute from '../../hooks/useModalRoute';
import { usePostMutation } from '../../hooks/post/usePostMutation';
import Button from '../Button/Button';

interface RepostDialogProps {
  originalId: number;
  currentUserRepostPublicId: string | null;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null;
  isReposted: boolean;
}

const RepostPopover = ({
  originalId,
  onClose,
  currentUserRepostPublicId,
  anchorEl,
  isReposted,
}: RepostDialogProps) => {
  // console.log(originalId);
  const { startModalPath } = useModalRoute();
  const { createPostMutation, deletePostMutation } = usePostMutation();

  const handleRepost = () => {
    const formData = new FormData();
    formData.append('content', '');
    formData.append('postType', 'repost');
    formData.append('originalId', originalId.toString());
    createPostMutation.mutate(formData);
    onClose();
  };

  const handleDelete = () => {
    deletePostMutation.mutate(currentUserRepostPublicId as string);
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
        {isReposted ? (
          <Button
            variant="text"
            label="リツイートを削除する"
            onClick={handleDelete}
            fullWidth
          />
        ) : (
          <Button
            variant="text"
            label="リツイートする"
            onClick={handleRepost}
            fullWidth
          />
        )}
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
