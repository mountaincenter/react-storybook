import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/post/usePost';
import PostContent from '../components/Post/PostContent';
import PostComposer from '../components/Post/PostComposer';
import CommonHeader from '../components/Header/CommonHeader';

const PostDetail = () => {
  const { publicId } = useParams<{ publicId: string }>();
  const { post } = usePost(publicId || '');

  const displayPost = publicId ? post : undefined;
  return (
    <>
      {displayPost && (
        <>
          <CommonHeader title={'ポストする'} />
          <PostContent post={displayPost}>
            <PostComposer
              text={'返信をポスト'}
              postType="reply"
              post={displayPost}
            />
          </PostContent>
        </>
      )}
    </>
  );
};

export default PostDetail;
