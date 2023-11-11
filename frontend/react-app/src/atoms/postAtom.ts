import { atom } from 'recoil';
import { type Post } from '../interfaces';

export const postAtom = atom<Post | null>({
  key: 'postAtom',
  default: null,
});
