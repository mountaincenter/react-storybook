// import { useState } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { type User } from '../../interfaces';
import QuotePost from './QuotePost';
import PostMeta from './PostMeta';
import PostBody from './PostBody';
import ReplyTo from './ReplyTo';
import PostImages from './PostImages';
// import UserPopover from '../Popover/UserPopover';
import InteractionList from '../Interaction/InteractionList';
import PostComposerWrapper from '../Wrappers/PostComposerWrapper';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';

interface PostContentProps {
  publicId: string;
  user?: User;
  children?: React.ReactNode;
}

const PostContent = ({ publicId, user, children }: PostContentProps) => {
  const post = useRecoilValue(postByIdSelector(publicId));
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setAnchorEl(e.currentTarget);

  // };

  // const handleMouseLeave = () => {
  //   setAnchorEl(null);
  // };

  if (!post) {
    return null;
  }

  const postUser = post.user || user;

  if (post.postType === 'repost') {
    return null;
  }

  // console.log(post);

  return (
    <>
      <Grid container direction="column">
        {post.reposts && post.reposts.length > 0 && (
          <Grid item xs="auto">
            <span
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${post.reposts[0]}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Typography variant="caption" component="span">
                  {post.reposts[0].user.name}さんがリポストしました
                </Typography>
              </Link>
              {/* <UserPopover anchorEl={anchorEl} user={post.reposts[0].user} /> */}
            </span>
          </Grid>
        )}
        <PostComposerWrapper
          avatar={{ name: postUser.name, url: postUser.avatar.url }}
          to={`/${postUser.username}`}
        >
          <Grid
            item
            xs="auto"
            sx={{ pl: 1, display: 'flex', flexDirection: 'column' }}
          >
            <Link
              to={`/${postUser.username}/status/${post.publicId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <PostMeta user={postUser} createdAt={post.createdAt} />
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
        </PostComposerWrapper>
      </Grid>
    </>
  );
};

export default PostContent;
