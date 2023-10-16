import { Grid, Card, CardContent } from '@mui/material';
import DialogPostComposer from '../Post/DialogPostComposer';
import CloseableDialogTitle from './CloseableDialogTitle';
import { useParams } from 'react-router-dom';

const PostDialog = () => {
  const { type, associatedId } = useParams();

  const postType = type as 'original' | 'repost' | 'reply' | 'quote_repost';

  console.log(type);
  console.log(postType);
  console.log(associatedId);

  return (
    <>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <CloseableDialogTitle />
        <Card sx={{ padding: 2, maxWidth: '400px', boxShadow: 'none' }}>
          <CardContent>
            <DialogPostComposer
              postType={postType}
              associatedId={associatedId}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default PostDialog;
