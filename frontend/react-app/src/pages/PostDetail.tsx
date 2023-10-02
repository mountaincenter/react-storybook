import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/post/usePost';
import PostContent from '../components/Post/PostContent';
import PostComposer from '../components/Post/PostComposer';
import CommonHeader from '../components/Header/CommonHeader';

const PostDetail = () => {
  const { publicId } = useParams<{ publicId: string }>();
  const { post } = usePost(publicId ? publicId : '');
  return (
    <>
      {post && (
        <>
          <CommonHeader title={'ポストする'} />
          <PostContent post={post}>
            <PostComposer text={'返信をポスト'} />
          </PostContent>
        </>
      )}
    </>
  );
};

export default PostDetail;
