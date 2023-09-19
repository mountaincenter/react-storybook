import { useState } from 'react';
import Button from './Button';
import { User } from '../../interfaces';
import { useFollow } from '../../hooks/follow/useFollow';

interface FollowButtonProps {
  user: User;
}

const FollowButton = ({ user }: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(user.followed);
  const [isHover, setIsHover] = useState(false);
  const {
    followMutation,
    unfollowMutation,
    isFollowLoading,
    isUnfollowLoading,
  } = useFollow(
    user.id,
    user.username,
    () => setIsFollowing(true),
    () => setIsFollowing(false)
  );

  return (
    <>
      {isFollowing ? (
        <Button
          variant="outlined"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => unfollowMutation.mutate()}
          color={isHover ? 'error' : 'primary'}
          sx={{ whiteSpace: 'nowrap' }}
          label={isHover ? 'フォロー解除' : 'フォロー中'}
          disabled={isUnfollowLoading}
        />
      ) : (
        <Button
          label="フォロー"
          onClick={() => followMutation.mutate()}
          sx={{ whiteSpace: 'nowrap' }}
          disabled={isFollowLoading}
        />
      )}
    </>
  );
};

export default FollowButton;
