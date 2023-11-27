import PostList from '../components/Post/PostList';
import BookmarkHeader from '../components/Header/BookmarkHeader';
import { useBookmarks } from '../hooks/bookmark/useBookmarks';
import { Grid } from '@mui/material';
import LoadingComponent from '../components/Loading/LoadingComponent';

const Bookmarks = () => {
  const { bookmarks, isLoading } = useBookmarks();
  // console.log(bookmarks);
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid item>
            <BookmarkHeader />
          </Grid>
          <Grid item>{bookmarks && <PostList posts={bookmarks} />}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Bookmarks;
