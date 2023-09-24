import { Message } from '../interfaces';
import { users } from './userMock';

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

export const messages: Message[] = [
  {
    id: 1,
    body: 'こんにちは、テストユーザー1からテストユーザー2への最新のメッセージです',
    recipient: {
      id: users[1].id,
      name: users[1].name,
      username: users[1].username,
      avatar: users[1].avatar,
      publicId: users[1].publicId,
      profile: users[1].profile,
    },
    sender: {
      id: users[0].id,
      name: users[0].name,
      username: users[0].username,
      avatar: users[0].avatar,
      publicId: users[0].publicId,
      profile: users[0].profile,
    },
    createdAt: today,
  },
  {
    id: 2,
    body: 'こんにちは、テストユーザー2からテストユーザー1への一つ古いメッセージです',
    recipient: {
      id: users[0].id,
      name: users[0].name,
      username: users[0].username,
      avatar: users[0].avatar,
      publicId: users[0].publicId,
      profile: users[0].profile,
    },
    sender: {
      id: users[1].id,
      name: users[1].name,
      username: users[1].username,
      avatar: users[1].avatar,
      publicId: users[1].publicId,
      profile: users[1].profile,
    },
    createdAt: yesterday,
  },
];
