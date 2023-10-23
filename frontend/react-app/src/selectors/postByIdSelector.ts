import { selectorFamily } from 'recoil';
import { postsAtom } from '../atoms/postsAtom';
import { type Post } from '../interfaces';

export const postByIdSelector = selectorFamily<Post | null, string>({
  key: 'postByIdSelector',
  get:
    (publicId: string) =>
    ({ get }) => {
      const posts = get(postsAtom);
      return posts?.find((post) => post.publicId === publicId) || null;
    },
});
