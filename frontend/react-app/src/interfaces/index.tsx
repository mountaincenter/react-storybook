import React from 'react';
import { AxiosResponse } from 'axios';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  username?: string;
  password: string;
  passwordConfirmation: string;
  avatar?: {
    url: string;
  };
}

export interface UserUpdateData {
  name?: string;
  username?: string;
  email?: string;
  avatar?: {
    url: string;
  };
  profile?: string;
}

export interface CurrentUserApiResponse extends AxiosResponse {
  currentUser: User;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  followed: boolean;
  followersCount: number;
  following: boolean;
  followingCount: number;
  avatar: {
    url: string | null;
  };
  image: {
    url: string | null;
  };
  password: string;
  profile: string;
  publicId: string;
  uid: string;
  provider: string;
  allowPasswordChange: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Notification {
  id: number;
  userId: number;
  message: {
    avatar: {
      url: string;
    };
    title: string;
    body?: string;
  };
  notificationType: string;
  notificationId: number;
  notifiableType: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: number;
  body: string;
  recipient: {
    id: number;
    name: string;
    username: string;
    avatar: {
      url: string | null;
    };
    publicId: string;
    profile: string;
  };
  sender: {
    id: number;
    name: string;
    username: string;
    avatar: {
      url: string | null;
    };
    publicId: string;
    profile: string;
  };
  createdAt: Date;
}

type PostType = 'original' | 'repost' | 'reply' | 'quote_repost';
export interface Post {
  id: number;
  content: string | null;
  images: Image[];
  user: User;
  likes: likesProps[];
  likesCount: number;
  liked: boolean;
  postType: PostType;
  reposts: Post[];
  repostsCount: number;
  quoteRepostsCount: number;
  totalRepostsCount: number;
  reposted: boolean;
  quoteReposted: boolean;
  currentUserRepostPublicId: string;
  bookmarked: boolean;
  bookmarksCount: number;
  replies: Post[];
  repliesCount: number;
  replied: boolean;
  publicId: string;
  parent: Post | null;
  original: Post | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostData {
  content: string;
  images: File[];
  parentId?: number;
  originalId?: number;
  postType?: PostType;
}
export interface PostFormData extends FormData {
  append: (
    name: keyof PostData,
    value: string | number | Blob,
    fileName?: string
  ) => void;
}

export interface likesProps {
  id: number;
  user: User;
  post: Post;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  url: string;
}

export interface ApiResponse<T> extends AxiosResponse {
  data: T;
}

export type CustomColor = 'default' | 'like' | 'repost';

export type MUIColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type Title = '返信' | 'リツイート' | 'いいね' | 'ブックマーク';

export type ShowCountType = 'onlyIcon' | 'onlyCount' | 'both';
export interface BaseIconType {
  Icon: React.ElementType;
}

export interface SidebarIconType {
  Icon: React.ElementType;
  OutlinedIcon: React.ElementType;
  badgeContent?: number;
  label: string;
  isCurrentUser?: boolean;
  onClick?: () => void;
}

export interface InteractionIconType {
  Icon: React.ElementType;
  OutlinedIcon: React.ElementType;
  isActive: boolean;
  count: number;
  onInteractionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: Title;
  interactionColorType?: CustomColor;
  showCountType?: ShowCountType;
}

export interface NotificationIconType {
  Icon: React.ElementType;
  color: MUIColor | CustomColor;
}

// BaseIconTypeのマッピングを定義
export type BaseIconsMappingType = {
  [key: string]: React.ElementType;
};

// SidebarIconTypeのマッピングを定義
export type SidebarIconsMappingType = {
  [key: string]: SidebarIconType;
};

// InteractionIconTypeのマッピングを定義
export type InteractionIconsMappingType = {
  [key: string]: InteractionIconType;
};

export type NotificationIconsMappingType = {
  [key: string]: NotificationIconType;
};
