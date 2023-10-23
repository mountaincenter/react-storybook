import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { postsAtom } from '../../atoms/postsAtom';
import { getPost } from '../../api/post';
import { type ApiResponse, type Post } from 'interfaces';

export const usePost = (publicId: string) => {
  const [posts, setPosts] = useRecoilState(postsAtom);

  const { data, isLoading, error } = useQuery<ApiResponse<Post>, Error>({
    queryKey: ['posts'],
    queryFn: () => getPost(publicId),
    onSuccess: (data) => {
      if (posts) {
        const updatedPosts = [...posts].map((post) =>
          post.publicId === publicId ? data.data : post
        );
        setPosts(updatedPosts);
      }
    },
  });

  const post = data?.data;
  return { post, isLoading, error };
};
