import React from 'react';
import { Box, TextField, Typography, Grid, Divider, Card } from '@mui/material';
import Button from '../Button/Button';
import Uploader from '../Uploader/Uploader';

import { usePostComposerLogic } from '../../hooks/post/usePostComposerLogic';

import { type Post } from '../../interfaces';
import QuotePost from './QuotePost';

import PostComposerWrapper from '../Wrappers/PostComposerWrapper';
import PostMeta from './PostMeta';
import PostBody from './PostBody';

interface PostBoxProps {
  text?: string;
  postType?: 'original' | 'repost' | 'reply' | 'quote_repost';
  post?: Post;
  associatedId?: string;
}

const DialogPostComposer: React.FC<PostBoxProps> = ({
  text = 'いまどうしてる?',
  postType = 'original',
  post,
  associatedId,
}) => {
  const {
    currentUser,
    content,
    setContent,
    setSelectedImages,
    resetUploaderKey,
    handlePost,
  } = usePostComposerLogic({ postType, post, associatedId });

  console.log('postType', postType);
  console.log('associatedId', associatedId);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        mt: 2,
        ml: 2,
        mb: 2,
        width: '100%',
      }}
    >
      <Grid container>
        {post && postType === 'reply' && post.content && (
          <PostComposerWrapper
            avatar={{
              name: post?.user.name || '',
              url: post?.user.avatar.url || null,
            }}
            to={post?.user.username || ''}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: '100%',
                position: 'absolute',
                transform: 'translateX(-50%)',
              }}
            />
            <PostMeta user={post.user} createdAt={post.createdAt} />
            <PostBody content={post.content} />
            <Typography variant="body2" sx={{ pt: 2 }}>
              返信先: {post.user.name}さん
            </Typography>
          </PostComposerWrapper>
        )}
        <PostComposerWrapper
          avatar={{
            name: currentUser?.name || '',
            url: currentUser?.avatar.url || null,
          }}
          to={currentUser?.username || ''}
        >
          <Grid item xs={'auto'}>
            <TextField
              variant="standard"
              placeholder={text}
              fullWidth
              value={content}
              rows={4}
              onChange={(e) => setContent(e.target.value)}
              multiline
              sx={{
                '& .MuiInput-underline:before': {
                  borderBottom: 'none',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: 'none',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: 'none',
                },
                mt: 1,
              }}
            />
            <Uploader
              onUpload={(files: File[]) => {
                console.log('Uploading files', files);
                setSelectedImages((prev) => [...prev, ...files]);
              }}
              allowMultiple={true}
              resetKey={resetUploaderKey}
            />
            {post && postType === 'quote_repost' && (
              <Card>
                <QuotePost post={post} />
              </Card>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                label="ツイートする"
                onClick={handlePost}
                disabled={content === '' || content.length > 140}
              />
            </Box>
          </Grid>
        </PostComposerWrapper>
      </Grid>
    </Box>
  );
};

export default DialogPostComposer;
