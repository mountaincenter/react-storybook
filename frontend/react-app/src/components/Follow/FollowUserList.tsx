import FollowUserItem from './FollowUserItem';
import { useFollowers } from '../../hooks/follow/useFollowers';
import { useFollowing } from '../../hooks/follow/useFollowing';

import { type User } from '../../interfaces';

import { useParams } from 'react-router-dom';

const FollowUserList = () => {
  const { username, type } = useParams();

  const { followers } = useFollowers(username ? username : '');
  const { following } = useFollowing(username ? username : '');

  const followersYourFollow = followers?.filter(
    (follower) => follower.followed
  );

  let usersList: User[] | undefined;
  switch (type) {
    case 'followers':
      usersList = followers;
      break;
    case 'following':
      usersList = following;
      break;
    case 'followers_your_follow':
      usersList = followersYourFollow;
      break;
    default:
      usersList = []; // または適切なデフォルト値
  }

  return (
    <>
      {usersList?.map((follow: User) => (
        <FollowUserItem key={follow.id} follow={follow} />
      ))}
    </>
  );
};

export default FollowUserList;
