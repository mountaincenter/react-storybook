import UserHeader from '../components/Header/UserHeader';
import UserBox from '../components/User/UserBox';
import PostList from '../components/Post/PostList';

import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/user/useUser';

const Profile = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');

  console.log(username);
  console.log(user);
  return (
    <>
      {user && (
        <>
          <UserHeader />
          <UserBox />
          <PostList posts={user.posts} user={user} />
        </>
      )}
    </>
  );
};

export default Profile;
