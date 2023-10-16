import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePost } from './useCreatePost';
import { useCurrentUser } from '../currentUser/useCurrentUser';
import { type Post } from '../../interfaces';

import { usePost } from './usePost';

interface usePostComposerLogicProps {
  postType: 'original' | 'repost' | 'reply' | 'quote_repost';
  post?: Post;
  associatedId?: string;
}

export const usePostComposerLogic = ({
  postType,
  // post,
  associatedId,
}: usePostComposerLogicProps) => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  const { post } = usePost(associatedId as string);
  const { mutate } = useCreatePost().postMutation;
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [resetUploaderKey, setResetUploaderKey] = useState<number>(0);

  console.log('associatedId', associatedId);
  console.log('associatedIdType', typeof associatedId);

  const handlePost = () => {
    const formData = new FormData();
    selectedImages.forEach((image: File) => {
      formData.append('images[]', image);
    });
    formData.append('content', content);
    if (postType) {
      formData.append('postType', postType);
    }
    if (post) {
      const idName = postType === 'reply' ? 'parentId' : 'originalId';
      formData.append(idName, post.id.toString());
    }

    mutate(formData);
    setContent('');
    setSelectedImages([]);
    setResetUploaderKey((prev) => prev + 1);
    navigate('/');
  };

  return {
    currentUser,
    content,
    setContent,
    selectedImages,
    setSelectedImages,
    resetUploaderKey,
    setResetUploaderKey,
    handlePost,
  };
};
