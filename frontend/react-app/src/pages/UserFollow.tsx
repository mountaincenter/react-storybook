import TabBar from '../components/TabBar/TabBar';
import FollowUserList from '../components/Follow/FollowUserList';
import { useParams } from 'react-router-dom';

interface RouteParams {
  type?: 'followers' | 'following' | 'followers_your_follow';
  [key: string]: string | undefined;
}

const UserFollow = () => {
  const { type } = useParams<RouteParams>();
  console.log(type);
  return (
    <>
      <TabBar type={type} />
      <FollowUserList />
    </>
  );
};

export default UserFollow;
