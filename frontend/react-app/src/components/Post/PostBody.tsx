import { Typography } from '@mui/material';

interface PostBodyProps {
  content: string;
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <Typography variant="body2" color="textSecondary" component="span">
      {content &&
        content.split('\n').map((content: string, index: number) => {
          return <p key={index}>{content}</p>;
        })}
    </Typography>
  );
};

export default PostBody;
