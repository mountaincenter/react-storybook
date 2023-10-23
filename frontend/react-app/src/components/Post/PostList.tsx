import PostContent from './PostContent';
import PostListWrapper from '../Wrappers/PostListWrapper';
import { useRecoilValue } from 'recoil';
import { Typography } from '@mui/material';

import { postsAtom } from '../../atoms/postsAtom';

import { type Post, type User } from 'interfaces';
import { postsByUsernameSelector } from '../../selectors/postsByUsernameSelector';

interface PostListProps {
  user?: User;
}

const PostList = ({ user }: PostListProps) => {
  const Posts = useRecoilValue(postsAtom);
  const userPosts = useRecoilValue(
    postsByUsernameSelector(user?.username || '')
  );
  const posts = user ? userPosts : Posts;
  // console.log('Posts', Posts);
  // console.log('PostListUser', user);
  // console.log('userPosts', userPosts);
  // console.log('PostList', posts);
  if (!posts) {
    return <Typography>投稿がありません</Typography>;
  }
  return (
    <>
      {posts.map((post: Post) => {
        const key = `${post?.id}-${post.postType}`;
        const targetPost = post.postType === 'repost' ? post.original : post;
        return (
          targetPost && (
            <PostListWrapper key={key}>
              <PostContent publicId={targetPost.publicId} user={user} />
            </PostListWrapper>
          )
        );
      })}
    </>
  );
};

export default PostList;
