import Button from './Button';
import { useUser } from '../../hooks/User/useUser';
import { useParams } from 'react-router-dom';
import useModalRoute from '../../hooks/useModalRoute';

const ProfileEditButton = () => {
  const { startModalPath } = useModalRoute();
  const { username } = useParams();
  const { user } = useUser(username ? username : '');

  return (
    <Button
      label="プロフィールを編集"
      variant="outlined"
      onClick={() => startModalPath(`/${user?.username}/edit`)}
    />
  );
};

export default ProfileEditButton;
