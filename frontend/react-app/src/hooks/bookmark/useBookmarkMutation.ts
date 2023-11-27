import { useMutation, useQueryClient } from 'react-query';
import { createBookmark, deleteBookmark } from '../../api/bookmark';
import { alertState } from '../../atoms/alertAtom';
import { useSetRecoilState } from 'recoil';

export const useBookmarkMutation = (
  publicId: string,
  isBookmarked: boolean
) => {
  const setAlertConfig = useSetRecoilState(alertState);
  const queryClient = useQueryClient();

  const create = useMutation(() => createBookmark(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
      setAlertConfig({
        open: true,
        message: 'ブックマークしました',
        type: 'info',
      });
    },
    onError: (error) => {
      console.log('Error creating bookmark', error);
    },
  });

  const remove = useMutation(() => deleteBookmark(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
      setAlertConfig({
        open: true,
        message: 'ブックマークを解除しました',
        type: 'info',
      });
    },
    onError: (error) => {
      console.log('Error deleting bookmark', error);
    },
  });

  const toggleBookmark = () => {
    if (isBookmarked) {
      remove.mutate();
    } else {
      create.mutate();
    }
  };

  return {
    toggleBookmark,
    isBookmark: isBookmarked,
  };
};
