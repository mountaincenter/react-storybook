import { type User } from '../interfaces';

export const users: User[] = [
  {
    id: 1,
    email: 'test1@example.com',
    name: 'テストユーザー1',
    username: 'testuser1',
    password: 'password',
    avatar: { url: 'https://source.unsplash.com/NE0XGVKTmcA' },
  },
  {
    id: 2,
    email: 'test2@example.com',
    name: 'テストユーザー2',
    username: 'testuser2',
    password: 'password',
    avatar: { url: null },
  },
];
