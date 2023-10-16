import { selector } from 'recoil';
import { postsAtom } from '../atoms/postsAtom';

export const postByIdSelector = selector({
  key: 'postByIdSelector',
  get: ({ get }) => {
    const posts = get(postsAtom);
    return (id: number) => posts.find((post) => post.id === id);
  },
});
