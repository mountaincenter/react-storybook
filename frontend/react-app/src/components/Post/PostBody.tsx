import { Typography } from '@mui/material';

interface PostBodyProps {
  content: string | null;
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <>
      {content &&
        content.split('\n').map((line, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            sx={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
          >
            {line}
          </Typography>
        ))}
    </>
  );
};

export default PostBody;
