import React from 'react';
import { Card, Box, Grid, Divider, TextField } from '@mui/material';
import Button from '../Button/Button';
import PostComposerWrapper from '../Wrappers/PostComposerWrapper';
import Uploader from '../Uploader/Uploader';

import { type Post } from '../../interfaces';

import { usePostComposerLogic } from '../../hooks/post/usePostComposerLogic';

interface PostBoxProps {
  text?: string;
  postType?: 'original' | 'repost' | 'reply' | 'quote_repost';
  post?: Post;
}

const PostComposer: React.FC<PostBoxProps> = ({
  text = 'いまどうしてる?',
  postType = 'original',
  post,
}) => {
  const {
    currentUser,
    content,
    setContent,
    setSelectedImages,
    resetUploaderKey,
    handlePost,
  } = usePostComposerLogic({ postType, post });

  return (
    <Box
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        mt: 2,
        ml: 2,
        mb: 2,
        width: '100%',
      }}
    >
      <Card sx={{ boxShadow: 'none' }}>
        <PostComposerWrapper
          avatar={{
            name: currentUser?.name || '',
            url: currentUser?.avatar.url || null,
          }}
          to={currentUser?.username || ''}
        >
          <Grid item xs={10} sx={{ pl: 1 }}>
            <TextField
              variant="standard"
              placeholder={text}
              InputProps={{
                disableUnderline: true,
              }}
              fullWidth
              sx={{ fontSize: '15px' }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              multiline
            />
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Uploader
                onUpload={(files: File[]) => {
                  console.log('Uploading files', files);
                  setSelectedImages((prev) => [...prev, ...files]);
                }}
                allowMultiple={true}
                resetKey={resetUploaderKey}
              />
              <Button
                label="ツイートする"
                onClick={handlePost}
                disabled={content === '' || content.length > 140}
              />
            </Grid>
          </Grid>
        </PostComposerWrapper>
      </Card>
      <Divider />
    </Box>
  );
};

export default PostComposer;
