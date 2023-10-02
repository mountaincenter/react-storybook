import React from 'react';
import Avatar from '../Avatar/Avatar';
import PostMeta from './PostMeta';
import PostBody from './PostBody';
import { type Post } from '../../interfaces';

interface QuotePostProps {
  post: Post;
}

const QuotePost = ({ post }: QuotePostProps) => {
  return (
    <>
      <Avatar
        name={post.user.name}
        avatar={post.user.avatar}
        customComponent="Link"
        to={post.user.username}
      />
      <PostMeta user={post.user} createdAt={post.createdAt} />
      <PostBody content={post.content} />
    </>
  );
};

export default QuotePost;
