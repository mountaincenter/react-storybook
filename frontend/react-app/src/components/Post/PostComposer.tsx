import React, { useState } from 'react';
import {
  Card,
  Box,
  Grid,
  Divider,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';

import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

import Uploader from '../Uploader/Uploader';

import { useCreatePost } from '../../hooks/post/useCreatePost';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';

import BaseIcon from '../Icon/BaseIcon/BaseIcon';
import CancelIcon from '@mui/icons-material/Cancel';

interface PostBoxProps {
  text?: string;
  parentId?: number;
  parentUsername?: string;
}

const PostComposer: React.FC<PostBoxProps> = ({
  text = 'いまどうしてる?',
  parentId,
  parentUsername,
}) => {
  const { currentUser } = useCurrentUser();
  const { mutate } = useCreatePost().postMutation;
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handlePost = () => {
    const formData = new FormData();
    selectedImages.forEach((image: string) => {
      formData.append('images[]', image);
    });
    formData.append('content', content);
    if (parentId) {
      formData.append('parentId', parentId.toString());
    }
    mutate(formData);
    setContent('');
    setSelectedImages([]);
  };

  const handleOnRemoveImage = (index: number): void => {
    setSelectedImages((prev: string[]) =>
      prev.filter((_, i: number) => i !== index)
    );
  };

  return (
    <Box
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        mt: 2,
        ml: 2,
        mb: 2,
      }}
      width="100%"
    >
      <Card sx={{ boxShadow: 'none' }}>
        <Grid container>
          <Grid item>
            <Avatar
              name={currentUser?.name || ''}
              avatar={{ url: currentUser?.avatar.url || null }}
              customComponent="Link"
              to={currentUser?.username || ''}
            />
          </Grid>
          <Grid item xs={8} sx={{ pl: 1 }}>
            {parentUsername && (
              <Typography>返信先:@{parentUsername}さん</Typography>
            )}
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
            {selectedImages.map((image, i) => (
              <div key={i} style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <IconButton onClick={() => handleOnRemoveImage(i)}>
                  <BaseIcon Icon={CancelIcon} />
                </IconButton>
                <img
                  src={image}
                  alt="preview img"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            ))}
            <Uploader
              onUpload={(files: File[]) => {
                const fileUrls = files.map((file) => URL.createObjectURL(file));
                setSelectedImages((prev) => [...prev, ...fileUrls]);
              }}
              allowMultiple={true}
            />
            <Button
              label="ツイートする"
              onClick={handlePost}
              disabled={content === '' || content.length > 140}
            />
          </Grid>
        </Grid>
      </Card>
      <Divider />
    </Box>
  );
};

export default PostComposer;
