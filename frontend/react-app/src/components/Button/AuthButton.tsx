import Button from '../Button/Button';

const commonButtonStyle = {
  border: '1px solid #e6ecf0',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#71c2f8',
    boxShadow: 'none',
  },
  fontWeight: 'bold',
  mx: 1,
};

const AuthButton: React.FC<{
  label: string;
  onClick: () => void;
  dataCy?: string;
}> = ({ label, onClick, dataCy }) => (
  <Button
    label={label}
    variant="contained"
    color="primary"
    sx={{
      ...commonButtonStyle,
    }}
    onClick={onClick}
    data-cy={dataCy}
  />
);

export default AuthButton;
