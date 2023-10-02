import { Box, Typography } from '@mui/material';
import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import { type User } from '../../interfaces';

export interface PostMetaProps {
  user: Pick<User, 'name' | 'username'>;
  createdAt: Date;
}

const PostMeta = ({ user, createdAt }: PostMetaProps) => {
  return (
    <Box display="flex" flexDirection="row" width="100%" flexWrap="nowrap">
      <Typography variant="body1" component="span">
        {user.name}
      </Typography>
      <Typography variant="body1">@{user.username}</Typography>
      <Typography
        color="textSecondary"
        variant="body2"
        component="span"
        sx={{ pl: 1 }}
      >
        {formatDistance(new Date(createdAt), new Date(), {
          addSuffix: true,
          locale: ja,
        })}
      </Typography>
    </Box>
  );
};

export default PostMeta;
