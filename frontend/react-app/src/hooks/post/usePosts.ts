import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { postsAtom } from '../../atoms/postsAtom';
import { getPosts } from '../../api/post';
import { type Post, type ApiResponse } from 'interfaces';

export const usePosts = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);

  const { isLoading, isError } = useQuery<ApiResponse<Post[]>, Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
    onSuccess: (data) => {
      console.log('Fetched Data', data);
      setPosts(data.data);
    },
  });

  return { posts, isLoading, isError };
};
