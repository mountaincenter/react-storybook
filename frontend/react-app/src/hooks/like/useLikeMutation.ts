import { useMutation, useQueryClient } from 'react-query';
import { createLike, deleteLike } from '../../api/like';

export const useLikeMutation = (publicId: string, isLiked: boolean) => {
  const queryClient = useQueryClient();

  const create = useMutation(() => createLike(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.error('Error creating like', error);
    },
  });

  const remove = useMutation(() => deleteLike(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.error('Error deleting like', error);
    },
  });

  const toggleLike = () => {
    if (isLiked) {
      remove.mutate();
    } else {
      create.mutate();
    }
  };

  return {
    toggleLike,
    isLike: isLiked,
  };
};
