import { useMutation, useQueryClient } from 'react-query';
import { createBookmark, deleteBookmark } from '../../api/bookmark';
import { useNavigate } from 'react-router-dom';

export const useBookmark = (
  id: number,
  publicId: string,
  isBookmarked: boolean
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const create = useMutation(() => createBookmark(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
      navigate('/bookmarks');
    },
    onError: (error) => {
      console.log('Error creating bookmark', error);
    },
  });

  const remove = useMutation(() => deleteBookmark(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
      navigate('/');
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
