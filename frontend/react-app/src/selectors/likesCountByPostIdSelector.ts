import { selectorFamily } from 'recoil';
import { postsAtom } from '../atoms/postsAtom';

export const likesCountByPostIdSelector = selectorFamily<number, string>({
  key: 'likesCountByPostIdSelector',
  get:
    (publicId) =>
    ({ get }) => {
      const posts = get(postsAtom);
      if (!posts) return 0;
      const post = posts.find((p) => p.publicId === publicId);
      return post?.likesCount ?? 0;
    },
  set:
    (publicId) =>
    ({ set }, newValue) => {
      if (newValue) return;
      set(postsAtom, (prev) => {
        if (prev === null) {
          return [];
        }
        return prev.map((post) => {
          if (post.publicId === publicId) {
            return { ...post, likesCount: newValue as number };
          }
          return post;
        });
      });
    },
});
