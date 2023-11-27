import { Grid, Card, CardContent } from '@mui/material';
import DialogPostComposer from '../Post/DialogPostComposer';
import CloseableDialogTitle from './CloseableDialogTitle';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { postByIdSelector } from '../../selectors/postByIdSelector';
import { type Post } from '../../interfaces';

const PostDialog = () => {
  const { type, associatedId } = useParams();

  const post = useRecoilValue(postByIdSelector(associatedId as string));

  const postType = type as 'original' | 'repost' | 'reply' | 'quote_repost';

  console.log(type);
  console.log(postType);
  console.log(associatedId);

  let text: string | undefined;

  switch (postType) {
    case 'reply':
      text = '返信をポスト';
      break;
    case 'quote_repost':
      text = '引用リポスト';
      break;
    default:
      break;
  }

  return (
    <>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <CloseableDialogTitle />
        <Card sx={{ padding: 2, maxWidth: '400px', boxShadow: 'none' }}>
          <CardContent>
            <DialogPostComposer
              postType={postType}
              associatedId={associatedId}
              post={post as Post}
              text={text}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default PostDialog;
