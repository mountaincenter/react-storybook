import React from 'react';
import { Grid, CardMedia, Box } from '@mui/material';
import { Post } from '../../interfaces';

interface PostImagesProps {
  images: Pick<Post, 'images'>['images'];
}

const PostImages: React.FC<PostImagesProps> = ({ images }: PostImagesProps) => {
  const displayImages = images.slice(0, 4);

  const getImageGridProps = (index: number, totalImages: number) => {
    if (totalImages === 1) {
      return { xs: 12 };
    } else if (totalImages === 2) {
      return { xs: 6 };
    } else if (totalImages === 3) {
      if (index === 0) {
        return { xs: 6 };
      } else {
        return { xs: 3, sm: 6 };
      }
    } else if (totalImages === 4) {
      return { xs: 6, sm: 3 };
    }
    return { xs: 12 };
  };

  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      border="1px solid #e6ecf0"
      maxWidth="572px"
      maxHeight="291px"
    >
      <Grid container>
        {displayImages.map((imgSrc, index) => (
          <Grid
            item
            {...getImageGridProps(index, displayImages.length)}
            key={index}
          >
            <CardMedia
              component="img"
              image={imgSrc.url}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostImages;
