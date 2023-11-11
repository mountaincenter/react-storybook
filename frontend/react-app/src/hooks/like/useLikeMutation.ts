import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { likesCountByPostIdSelector } from '../../selectors/likesCountByPostIdSelector';
import { useCreateLike, useDeleteLike } from './useLike';

const useLikeMutation = (publicId: string, initialState: boolean) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialState);
  const [error, setError] = useState<string | null>(null);
  // Recoil state for likes count
  const [, setLikesCount] = useRecoilState(
    likesCountByPostIdSelector(publicId)
  );

  const createLikeMutation = useCreateLike({ publicId, setLikesCount });
  const deleteLikeMutation = useDeleteLike({ publicId, setLikesCount });

  const toggleLike = async () => {
    setError(null); // Clear any existing errors

    try {
      if (isLiked) {
        await deleteLikeMutation.mutateAsync();
      } else {
        await createLikeMutation.mutateAsync();
      }
      setIsLiked(!isLiked);
    } catch (error) {
      // Log the error and set an error state for the UI to display
      console.error('Error toggling like:', error);
      setError('An error occurred while toggling the like. Please try again.');
    }
  };

  return { isLiked, toggleLike, error };
};

export default useLikeMutation;
