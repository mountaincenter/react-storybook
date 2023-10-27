import PostContent from './PostContent';
import PostListWrapper from '../Wrappers/PostListWrapper';
import { useRecoilValue } from 'recoil';
import { Typography } from '@mui/material';

import { postsAtom } from '../../atoms/postsAtom';

import { type Post, type User } from 'interfaces';
import { postsByUsernameSelector } from '../../selectors/postsByUsernameSelector';

interface PostListProps {
  posts?: Post[];
  user?: User;
}

const PostList = ({ posts, user }: PostListProps) => {
  const allPostsFromAtom = useRecoilValue(postsAtom);
  const userPosts = useRecoilValue(
    postsByUsernameSelector(user?.username || '')
  );

  const displayPosts = posts || (user ? userPosts : allPostsFromAtom);
  // console.log('Posts', Posts);
  // console.log('PostListUser', user);
  // console.log('userPosts', userPosts);
  // console.log('PostList', posts);
  if (!displayPosts) {
    return <Typography>投稿がありません</Typography>;
  }
  return (
    <>
      {displayPosts.map((post: Post) => {
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
