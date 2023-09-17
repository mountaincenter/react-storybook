import Button from './Button';
import FollowButton from './FolllowButton';
import { useUser } from '../../hooks/User/useUser';
import { useCurrentUser } from '../../hooks/currentUser/useCurrentUser';
import { useParams } from 'react-router-dom';

import useModalRoute from '../../hooks/useModalRoute';

const ProfileButton = () => {
  const { startModalPath } = useModalRoute();
  const { username } = useParams();
  const { user } = useUser(username ? username : '');
  const { currentUser } = useCurrentUser();
  console.log(user?.id);
  console.log(currentUser?.id);

  if (user?.name === 'ゲストユーザー') {
    return null;
  }

  return user?.id === currentUser?.id ? (
    <Button
      label="プロフィールを編集"
      variant="outlined"
      onClick={() => startModalPath(`/${user?.username}/edit`)}
    />
  ) : (
    <FollowButton />
  );
};

export default ProfileButton;
