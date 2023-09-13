import React from 'react';
import { useNavigate } from 'react-router-dom';
import useModalRoute from '../../hooks/useModalRoute';
import { guestSignIn } from '../../api/auth';
import { getCurrentUser } from '../../hooks/currentUser/getCurrentUser';
import { useQueryClient } from 'react-query';
import AuthButton from './AuthButton';

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
