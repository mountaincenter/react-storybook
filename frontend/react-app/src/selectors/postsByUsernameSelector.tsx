import { selectorFamily } from 'recoil';
import { postsAtom } from '../atoms/postsAtom';

export const postsByUsernameSelector = selectorFamily({
  key: 'postsByUsernameSelector',
  get:
    (username: string) =>
    ({ get }) => {
      if (!username) return [];
      const posts = get(postsAtom);
      console.log('postsByUsernameSelector', posts);
      return posts?.filter((post) => post.user.username === username);
    },
});
