import { selector } from 'recoil';
import { postsAtom } from '../atoms/postsAtom';

export const postsByBookmarkedSelector = selector({
  key: 'postsByBookmarkedSelector',
  get: ({ get }) => {
    const posts = get(postsAtom);
    return posts?.filter((post) => post.bookmarked === true);
  },
});
