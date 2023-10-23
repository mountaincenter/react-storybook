import UserHeader from '../components/Header/UserHeader';
import UserBox from '../components/User/UserBox';
import PostList from '../components/Post/PostList';
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/user/useUser';
import { useRecoilValue } from 'recoil';
import { userByUsernameSelector } from '../selectors/userByUsenameSelector';

const Profile = () => {
  const { username = '' } = useParams();
  useUser(username);
  const user = useRecoilValue(userByUsernameSelector(username));

  console.log(username);
  console.log(user);
  if (!user) {
    return null;
  }

  return (
    <>
      <UserHeader />
      <UserBox />
      <PostList user={user} />
    </>
  );
};

export default Profile;
