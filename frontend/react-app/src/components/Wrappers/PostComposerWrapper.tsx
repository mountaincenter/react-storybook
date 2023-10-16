import { Grid } from '@mui/material';
import Avatar from '../Avatar/Avatar';

interface PostComposerWrapperProps {
  children: React.ReactNode;
  avatar: {
    name: string;
    url: string | null;
  };
  to?: string;
}

const PostComposerWrapper = ({
  children,
  avatar,
  to,
}: PostComposerWrapperProps) => {
  return (
    <Grid container>
      <Grid item xs="auto">
        <Avatar
          name={avatar.name}
          avatar={{ url: avatar.url }}
          customComponent="Link"
          to={to || ''}
        />
      </Grid>
      {children}
    </Grid>
  );
};

export default PostComposerWrapper;
