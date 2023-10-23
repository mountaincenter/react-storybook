import { selectorFamily } from 'recoil';
import { usersAtom } from '../atoms/usersAtom';
import { type User } from '../interfaces';

export const userByUsernameSelector = selectorFamily<User | null, string>({
  key: 'userByUsernameSelector',
  get:
    (username: string) =>
    ({ get }) => {
      const users = get(usersAtom);
      console.log('selector', users);
      return users?.[username] || null;
    },
});
