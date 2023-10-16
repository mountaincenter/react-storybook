import { atom } from 'recoil';
import { type Post } from '../interfaces';

export const postsAtom = atom<Post[] | null>({
  key: 'postsAtom',
  default: [],
});
