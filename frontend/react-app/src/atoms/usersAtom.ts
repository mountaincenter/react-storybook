import { atom } from 'recoil';
import { type User } from '../interfaces';

export const usersAtom = atom<Record<string, User | undefined> | null>({
  key: 'usersAtom',
  default: null,
});
