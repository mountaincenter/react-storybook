import CustomButton from './components/CustomButton';
import useModalRoute from './hooks/useModalRoute';

const handleGuestLogIn = () => {
  console.log('ゲストログインボタンが押されました');
};

const handleSignIn = () => {
  console.log('サインインボタンが押されました');
};

const AuthButton = () => {
  const { startModalPath } = useModalRoute();

  const handleLogIn = () => {
    console.log('ログインボタンが押されました');
    startModalPath('/login');
  };

  return (
    <>
      <CustomButton label="簡単ログイン" handleClick={handleGuestLogIn} />
      <CustomButton label="ログイン" handleClick={handleLogIn} />
      <CustomButton label="アカウント作成" handleClick={handleSignIn} />
    </>
  );
};

export default AuthButton;
