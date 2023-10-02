import { useState } from 'react';
import { useCreateLike, useDeleteLike } from './useLike';

const useLikeMutation = (publicId: string, initialState: boolean) => {
  const [isLike, setIsLike] = useState<boolean>(initialState);
  const createLikeMutation = useCreateLike(publicId);
  const deleteLikeMutation = useDeleteLike(publicId);

  const toggleLike = () => {
    if (isLike) {
      deleteLikeMutation.mutate();
      setIsLike(false);
    } else {
      createLikeMutation.mutate();
      setIsLike(true);
    }
  };
  return { isLike, toggleLike };
};

export default useLikeMutation;
