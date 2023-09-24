import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
  CircularProgress,
  Typography,
} from '@mui/material';
import React from 'react';

type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'disabled' | 'children'
>;

interface ButtonProps extends ButtonBaseProps {
  id?: string;
  label: string | React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  hoverColor?: 'primary' | 'secondary' | 'error';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
  overrideDefaultStyles?: boolean;
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
  component = 'button',
  overrideDefaultStyles = false,
  ...rest
}: ButtonProps) => {
  const defaultStyles: SxProps<Theme> = overrideDefaultStyles
    ? {}
    : {
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
      component={component}
      overrideDefaultStyles={overrideDefaultStyles}
      {...rest}
    >
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <Typography variant="button">{label || rest.children}</Typography>
      )}
    </MuiButton>
  );
};

export default Button;
