import { User } from '../interfaces';

export const users: User[] = [
  {
    id: 1,
    email: 'test1@example.com',
    name: 'テストユーザー1',
    username: 'testuser1',
    followed: false,
    following: false,
    avatar: { url: 'https://source.unsplash.com/NE0XGVKTmcA' },
    image: { url: null },
    password: 'password',
    profile: 'テストユーザー1のプロフィール',
    publicId: 'publicId1',
    uid: 'uid1',
    provider: 'provider1',
    allowPasswordChange: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    email: 'test2@example.com',
    name: 'テストユーザー2',
    username: 'testuser2',
    followed: false,
    following: false,
    avatar: { url: null },
    image: { url: null },
    password: 'password',
    profile: 'テストユーザー2のプロフィール',
    publicId: 'publicId2',
    uid: 'uid2',
    provider: 'provider2',
    allowPasswordChange: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    email: 'test3@example.com',
    name: 'テストユーザー3',
    username: 'testuser3',
    followed: false,
    following: false,
    avatar: { url: null },
    image: { url: null },
    password: 'password',
    profile: 'テストユーザー3のプロフィール',
    publicId: 'publicId3',
    uid: 'uid3',
    provider: 'provider3',
    allowPasswordChange: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
