import { useRecoilValue } from 'recoil';
import PostList from '../components/Post/PostList';
import BookmarkHeader from '../components/Header/BookmarkHeader';
import { Typography } from '@mui/material';
import { postsByBookmarkedSelector } from '../selectors/postsByBookmarkedSelector';

const Bookmarks = () => {
  const bookmarkedPosts = useRecoilValue(postsByBookmarkedSelector);
  if (!bookmarkedPosts || bookmarkedPosts.length === 0) {
    return <Typography>ブックマークがありません</Typography>;
  }
  return (
    <>
      <BookmarkHeader />
      <PostList posts={bookmarkedPosts} />;
    </>
  );
};

export default Bookmarks;
