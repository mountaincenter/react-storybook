import { Post } from 'interfaces';
import { useMemo } from 'react';

const useRepostCounts = (post: Post | null) => {
  const repostCounts = useMemo(
    () =>
      post?.reposts.filter((repost) => repost.postType === 'repost').length ||
      0,
    [post]
  );
  const quoteRepostCounts = useMemo(
    () =>
      post?.reposts.filter((repost) => repost.postType === 'quote_repost')
        .length || 0,
    [post]
  );

  return { repostCounts, quoteRepostCounts };
};

export default useRepostCounts;
