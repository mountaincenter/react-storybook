import { users } from './userMock';

export const useCurrentUserMock = () => {
  const currentUser = users[0];
  return { currentUser };
};
