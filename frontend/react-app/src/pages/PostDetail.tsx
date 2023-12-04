import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/post/usePost';
import PostContent from '../components/Post/PostContent';
import PostComposer from '../components/Post/PostComposer';
import CommonHeader from '../components/Header/CommonHeader';
import LoadingComponent from '../components/Loading/LoadingComponent';
import { Typography } from '@mui/material';

const PostDetail = () => {
  const { publicId } = useParams<{ publicId: string }>();
  const { post, isLoading } = usePost(publicId as string);

  const displayPost = publicId ? post : undefined;

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!post) {
    return <Typography>投稿がありません</Typography>;
  }
  return (
    <>
      {displayPost && (
        <>
          <CommonHeader title={'ポストする'} />
          <PostContent publicId={displayPost.publicId}>
            <>
              <PostComposer
                text={'返信をポスト'}
                postType="reply"
                post={displayPost}
              />
              {displayPost.replies &&
                displayPost.replies.length > 0 &&
                displayPost.replies.map((reply) => (
                  <PostContent
                    key={reply.publicId}
                    publicId={reply.publicId}
                    user={reply.user}
                  />
                ))}
            </>
          </PostContent>
        </>
      )}
    </>
  );
};

export default PostDetail;
