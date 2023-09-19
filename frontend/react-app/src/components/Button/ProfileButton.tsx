import ProfileEditButton from './ProfileEditButton';
import FollowButton from './FollowButton';
import { useUser } from '../../hooks/user/useUser';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useParams } from 'react-router-dom';

const ProfileButton = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  const { currentUser } = useCurrentUser();
  console.log('user.followed', user?.followed);
  console.log('user.following', user?.following);

  if (user?.name === 'ゲストユーザー') {
    return null;
  }

  return user?.id === currentUser?.id ? (
    <ProfileEditButton />
  ) : (
    <>{user && <FollowButton user={user} />}</>
  );
};

export default ProfileButton;
