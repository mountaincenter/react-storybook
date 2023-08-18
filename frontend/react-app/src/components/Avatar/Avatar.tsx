import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  Skeleton,
} from '@mui/material';

interface AvatarProps extends MuiAvatarProps {
  isLoading?: boolean;
}

const Avatar = ({ isLoading, ...rest }: AvatarProps) => {
  if (isLoading) {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  return <MuiAvatar {...rest} />;
};

export default Avatar;
