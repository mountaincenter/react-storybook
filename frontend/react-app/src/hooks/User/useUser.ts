import { useQuery } from 'react-query';
import { getUser } from '../../api/user';
import { type ApiResponse, type User } from 'interfaces';
import { useRecoilState } from 'recoil';
import { usersAtom } from '../../atoms/usersAtom';

export const useUser = (username: string) => {
  const [users, setUsers] = useRecoilState(usersAtom);
  const { isLoading, error } = useQuery<ApiResponse<User>, Error>({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    onSuccess: (response) => {
      const newUser = response.data;
      setUsers((prevUsers) => ({ ...prevUsers, [username]: newUser }));
    },
  });

  const user = users?.[username];
  console.log('useUser', user, 'isLoading:', isLoading, 'error:', error);

  return { user, isLoading, error };
};
