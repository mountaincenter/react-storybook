import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
  CircularProgress,
} from '@mui/material';

type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'disabled' | 'children'
>;

interface ButtonProps extends ButtonBaseProps {
  id?: string;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  variant: 'contained' | 'outlined' | 'text';
  hoverColor?: 'primary' | 'secondary' | 'error';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}
const Button = ({
  label,
  isLoading = false,
  variant = 'contained',
  hoverColor,
  onMouseEnter,
  onMouseLeave,
  sx,
  onClick,
  ...rest
}: ButtonProps) => {
  const defaultStyles: SxProps<Theme> = {
    borderRadius: '9999px',
    '&:hover': {
      backgroundColor: hoverColor ? hoverColor : undefined,
      boxShadow: 'none',
    },
  };
  return (
    <MuiButton
      variant={variant}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{ ...defaultStyles, ...sx }}
      onClick={onClick}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? <CircularProgress size={24} /> : label || rest.children}
    </MuiButton>
  );
};

export default Button;
