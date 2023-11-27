import { useMutation, useQueryClient } from 'react-query';
import { createLike, deleteLike } from '../../api/like';

interface useLikeProps {
  publicId: string;
}

export const useCreateLike = ({ publicId }: useLikeProps) => {
  const queryClient = useQueryClient();

  return useMutation(() => createLike(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useDeleteLike = ({ publicId }: useLikeProps) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteLike(publicId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
