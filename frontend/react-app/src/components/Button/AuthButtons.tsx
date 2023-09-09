import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import useModalRoute from '../../hooks/useModalRoute';
import { guestSignIn } from '../../api/auth';
import { getCurrentUser } from '../../hooks/currentUser/getCurrentUser';
import { useQueryClient } from 'react-query';

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

const AuthButtons: React.FC = () => {
  const { startModalPath } = useModalRoute();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleEasyLogin = async () => {
    try {
      await guestSignIn();
      const currentUser = await getCurrentUser();
      queryClient.invalidateQueries('currentUser');
      navigate('/');
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthButton label="簡単ログイン" onClick={handleEasyLogin} />
      <AuthButton
        label="ログイン"
        onClick={() => startModalPath('/login')}
        dataCy="login"
      />
      <AuthButton
        label="新規登録"
        onClick={() => startModalPath('/signup')}
        dataCy="signup"
      />
    </>
  );
};

export default AuthButtons;
