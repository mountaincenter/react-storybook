import ProfileEditButton from './ProfileEditButton';
import FollowButton from './FolllowButton';
import { useUser } from '../../hooks/User/useUser';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useParams } from 'react-router-dom';

const ProfileButton = () => {
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  const { currentUser } = useCurrentUser();

  if (user?.name === 'ゲストユーザー') {
    return null;
  }

  return user?.id === currentUser?.id ? (
    <ProfileEditButton />
  ) : (
    <FollowButton />
  );
};

export default ProfileButton;
