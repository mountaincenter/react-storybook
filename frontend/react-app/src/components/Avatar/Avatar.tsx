import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  Skeleton,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export interface AvatarProps extends MuiAvatarProps {
  isLoading?: boolean;
  name: string;
  avatar?: {
    url: string | null;
  };
  sx?: SxProps<Theme>;
  onClick?: () => void;
  customComponent?: 'Link' | 'button';
  to?: string;
}

const Avatar = ({
  isLoading,
  name = 'Default Name',
  avatar = { url: null },
  sx,
  onClick,
  customComponent,
  to,
  ...rest
}: AvatarProps) => {
  if (isLoading) {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  const avatarElement = (
    <MuiAvatar
      alt={name}
      src={avatar.url || undefined}
      sx={sx}
      onClick={customComponent === 'button' ? onClick : undefined}
      {...rest}
    />
    //   {avatar.url ? null : name[0]}
    // </MuiAvatar>
  );

  if (customComponent === 'Link') {
    return (
      <Link to={to ? `/${to}` : ''} style={{ textDecoration: 'none' }}>
        {avatarElement}
      </Link>
    );
  }

  // ここでデフォルトの avatarElement を返すように変更
  return avatarElement;
};

export default Avatar;
