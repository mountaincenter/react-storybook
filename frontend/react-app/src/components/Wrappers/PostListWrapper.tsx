import { Box, Card, Grid, Divider } from '@mui/material';

interface PostListWrapperProps {
  children: React.ReactElement;
}

const PostListWrapper = ({ children }: PostListWrapperProps) => {
  return (
    <>
      <Box
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          mt: 2,
          ml: 2,
        }}
      >
        <Card sx={{ boxShadow: 'none' }}>
          <Grid container>{children}</Grid>
        </Card>
      </Box>
      <Divider />
    </>
  );
};
export default PostListWrapper;
