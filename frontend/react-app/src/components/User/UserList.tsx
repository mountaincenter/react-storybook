import type { User } from '../../interfaces';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  console.log(users);
  return (
    <>{users?.map((user: User) => <UserItem key={user.id} user={user} />)}</>
  );
};

export default UserList;
