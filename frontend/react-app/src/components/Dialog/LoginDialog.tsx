import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { signIn } from '../../api/auth';
import { type SignInData } from '../../interfaces';

import { Grid, Card, CardHeader, CardContent, TextField } from '@mui/material';
import Button from '../Button/Button';
import CloseableDialogTitle from './CloseableDialogTitle';

const LoginDialog = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signInmutations = useMutation((data: SignInData) => signIn(data), {
    onSuccess: (data) => {
      if (data.status === 200) {
        Cookies.set('_access_token', data.headers['access-token'] || '');
        Cookies.set('_client', data.headers['client'] || '');
        Cookies.set('_uid', data.headers['uid'] || '');
        queryClient.invalidateQueries('currentUser');
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInmutations.mutate({ email, password });
  };

  return (
    <Grid item mobile={12} sx={{ mt: 3 }}>
      {' '}
      {/* ← mobile を xs に変更 */}
      <CloseableDialogTitle />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Card sx={{ padding: 2, maxWidth: 400 }}>
          <CardHeader sx={{ textAlign: 'center' }} title="ログイン" />
          <CardContent>
            <TextField
              id="email-input"
              label="メールアドレス"
              variant="outlined"
              required
              fullWidth
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password-input"
              label="パスワード"
              type="password"
              variant="outlined"
              required
              fullWidth
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              id="login-button"
              label="ログイン"
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="primary"
              sx={{ marginTop: 2, flexGrow: 1, textTransform: 'none' }}
            />
          </CardContent>
        </Card>
      </form>
    </Grid>
  );
};

export default LoginDialog;
