import { type AxiosResponse } from 'axios';
import { client } from './client';
import { getAuth } from './auth';

export const getBookmarks = async (): Promise<AxiosResponse> => {
  return await client.get('/users/bookmarking', getAuth());
};

export const createBookmark = async (
  publicId: string
): Promise<AxiosResponse> => {
  return client.post(`posts/${publicId}/bookmarks`, {}, getAuth());
};

export const deleteBookmark = async (
  publicId: string
): Promise<AxiosResponse> => {
  return client.delete(`posts/${publicId}/bookmarks`, getAuth());
};
