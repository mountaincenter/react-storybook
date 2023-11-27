import { useMutation, useQueryClient } from 'react-query';
import { createPost, deletePost } from '../../api/post';
import { useSetRecoilState } from 'recoil';
import { alertState } from '../../atoms/alertAtom';

export const usePostMutation = () => {
  const queryClient = useQueryClient();
  const setAlertState = useSetRecoilState(alertState);

  const createPostMutation = useMutation((data: FormData) => createPost(data), {
    onSuccess: () => {
      setAlertState({
        open: true,
        message: '投稿が成功しました',
        type: 'success',
      });
      queryClient.invalidateQueries('posts');
    },
    onError: (error) => {
      setAlertState({
        open: true,
        message: '投稿に失敗しました再度投稿してください',
        type: 'error',
      });
      console.log(error);
    },
  });

  const deletePostMutation = useMutation(
    (publicId: string) => deletePost(publicId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { createPostMutation, deletePostMutation };
};
