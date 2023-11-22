import { Post } from '../interfaces';

import { users } from './userMock';

export const posts: Post[] = [
  {
    id: 1,
    content: 'テストユーザー1の投稿',
    images: [],
    user: users[0],
    likes: [],
    liked: true,
    likesCount: 3,
    postType: 'original',
    reposted: false,
    bookmarked: false,
    bookmarksCount: 0,
    publicId: 'testuser1',
    parent: null,
    original: null,
    replies: [],
    repliesCount: 0,
    reposts: [],
    repostsCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    content: 'テストユーザー2の投稿で1への返信です',
    images: [],
    user: users[1],
    likes: [],
    liked: false,
    likesCount: 0,
    postType: 'reply',
    reposted: false,
    bookmarked: false,
    bookmarksCount: 0,
    publicId: 'testuser2',
    parent: null,
    original: null,
    replies: [],
    repliesCount: 1,
    reposts: [],
    repostsCount: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    content: 'テストユーザー3の投稿で1引用リポストです',
    images: [],
    user: users[3],
    likes: [],
    liked: false,
    likesCount: 1,
    postType: 'quote_repost',
    reposted: false,
    bookmarked: false,
    bookmarksCount: 0,
    publicId: 'testuser3',
    parent: null,
    original: null,
    replies: [],
    repliesCount: 0,
    reposts: [],
    repostsCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.AAAAAAAAAAAAAAAAAAAAAA',
    images: [],
    user: users[0],
    likes: [],
    liked: false,
    likesCount: 1,
    postType: 'original',
    reposted: false,
    bookmarked: false,
    bookmarksCount: 0,
    publicId: 'testuser4',
    parent: null,
    original: null,
    replies: [],
    repliesCount: 10,
    reposts: [],
    repostsCount: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
