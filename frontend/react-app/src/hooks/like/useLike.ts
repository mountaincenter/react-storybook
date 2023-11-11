import { useMutation, useQueryClient } from 'react-query';
import { createLike, deleteLike } from '../../api/like';
import { SetterOrUpdater } from 'recoil';

interface useLikeProps {
  publicId: string;
  setLikesCount: SetterOrUpdater<number>;
}

export const useCreateLike = ({ publicId, setLikesCount }: useLikeProps) => {
  const queryClient = useQueryClient();

  return useMutation(() => createLike(publicId), {
    onSuccess: () => {
      setLikesCount((count) => count + 1);
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useDeleteLike = ({ publicId, setLikesCount }: useLikeProps) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteLike(publicId), {
    onSuccess: () => {
      setLikesCount((count) => count - 1);
      queryClient.invalidateQueries(['post', publicId]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
