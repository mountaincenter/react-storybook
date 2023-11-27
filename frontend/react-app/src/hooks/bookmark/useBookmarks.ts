import { useQuery } from 'react-query';
import { getBookmarks } from '../../api/bookmark';
import { type ApiResponse, type Post } from '../../interfaces';

export const useBookmarks = (): {
  bookmarks: Post[] | undefined;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isLoading, error } = useQuery<ApiResponse<Post[]>, Error>({
    queryKey: ['bookmarks'],
    queryFn: () => getBookmarks(),
  });
  const bookmarks = data?.data;
  return { bookmarks, isLoading, error };
};
