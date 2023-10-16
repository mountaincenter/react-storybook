import PostContent from './PostContent';
import PostListWrapper from '../Wrappers/PostListWrapper';

import { type Post, type User } from 'interfaces';

interface PostListProps {
  posts: Post[];
  user?: User;
}

const PostList = ({ posts, user }: PostListProps) => {
  console.log(posts);
  return (
    <>
      {posts &&
        posts.map((post: Post) => {
          const key = `${post?.id}-${post.postType}`;
          const targetPost = post.postType === 'repost' ? post.original : post;
          return (
            targetPost && (
              <PostListWrapper key={key}>
                <PostContent post={targetPost} user={user} />
              </PostListWrapper>
            )
          );
        })}
    </>
  );
};

export default PostList;
