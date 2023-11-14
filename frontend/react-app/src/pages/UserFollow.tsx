import TabBar from '../components/TabBar/TabBar';
import UserList from '../components/User/UserList';
import { useParams } from 'react-router-dom';
import { useFollowers } from '../hooks/follow/useFollowers';
import { useFollowing } from '../hooks/follow/useFollowing';
import { type User } from '../interfaces';

interface RouteParams {
  username: string;
  type: 'followers' | 'following' | 'followers_your_follow';
  [key: string]: string | undefined;
}

const UserFollow = () => {
  const { username, type } = useParams<RouteParams>();

  const { followers } = useFollowers(username ? username : '');
  const { following } = useFollowing(username ? username : '');

  let usersList: User[] | undefined;
  switch (type) {
    case 'followers':
      usersList = followers;
      break;
    case 'following':
      usersList = following;
      break;
    case 'followers_your_follow':
      usersList = followers?.filter((follower) => follower.followed);
      break;
    default:
      usersList = [];
  }
  console.log(type);
  if (!usersList) {
    return null;
  }
  return (
    <>
      <TabBar type={type} />
      <UserList users={usersList} />
    </>
  );
};

export default UserFollow;
