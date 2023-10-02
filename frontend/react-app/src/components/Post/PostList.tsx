import PostContent from './PostContent';
import PostListWrapper from '../Wrappers/PostListWrapper';

import { usePosts } from '../../hooks/post/usePosts';
import { type Post } from 'interfaces';

const PostList = () => {
  const { posts } = usePosts();
  // console.log(posts);
  return (
    <>
      {posts &&
        posts.map((post: Post) => {
          const targetPost = post.postType === 'repost' ? post.original : post;
          return (
            <PostListWrapper key={targetPost.id}>
              <PostContent post={targetPost}></PostContent>
            </PostListWrapper>
          );
        })}
    </>
  );
};

export default PostList;
