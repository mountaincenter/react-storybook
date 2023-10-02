import { Grid, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { type Post } from '../../interfaces';
import Avatar from '../Avatar/Avatar';
import QuotePost from './QuotePost';
import PostMeta from './PostMeta';
import PostBody from './PostBody';
import ReplyTo from './ReplyTo';
import PostImages from './PostImages';
import InteractionList from '../Interaction/InteractionList';

interface PostContentProps {
  post: Post;
  children?: React.ReactNode;
}

const PostContent = ({ post, children }: PostContentProps) => {
  console.log(post);
  return (
    <>
      <Grid container>
        <Grid item xs="auto">
          <Avatar
            name={post.user.name}
            avatar={post.user.avatar}
            customComponent="Link"
            to={post.user.username}
          />
        </Grid>
        <Grid
          item
          xs="auto"
          sx={{ pl: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Link
            to={`/${post.user.username}/status/${post.publicId}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <PostMeta user={post.user} createdAt={post.createdAt} />
            <ReplyTo parent={post.parent && post.parent.user.username} />
            <PostBody content={post.content} />
            <PostImages images={post.images} />
            {post.original && (
              <Card>
                <QuotePost post={post.original} />
              </Card>
            )}
          </Link>
          <InteractionList publicId={post.publicId} />
          <Grid
            item
            xs="auto"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostContent;
