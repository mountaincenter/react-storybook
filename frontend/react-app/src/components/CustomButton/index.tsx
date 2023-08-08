import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
  handleClick: () => void;
}

const CustomButton = ({
  label,
  handleClick,
  ...rest
}: CustomButtonProps): React.ReactElement => {
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{
        border: '1px solid #e6ecf0',
        borderRadius: '9999px',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#71c2f8',
          boxShadow: 'none',
        },
        fontWeight: 'bold',
        mx: 1,
      }}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
