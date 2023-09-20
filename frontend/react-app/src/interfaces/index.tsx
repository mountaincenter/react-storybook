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
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  followed: boolean;
  following: boolean;
  avatar: {
    url: string | null;
  };
  image: {
    url: string | null;
  };
  password: string;
  profile: string;
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
export interface ApiResponse<T> extends AxiosResponse {
  data: T;
}

export type CustomColor = 'like' | 'follow' | 'repost' | 'other';

export type MUIColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

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
  color: MUIColor | CustomColor;
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
