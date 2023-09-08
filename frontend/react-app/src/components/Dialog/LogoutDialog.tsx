import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../api/auth';
import { Grid, Card, CardHeader, CardActions } from '@mui/material';

import CloseableDialogTitle from './CloseableDialogTitle';
import Button from '../Button/Button';

import useModalRoute from '../../hooks/useModalRoute';

import Cookies from 'js-cookie';

const LogoutDialog = () => {
  const { endModalPath } = useModalRoute();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const signOutMutation = useMutation(() => signOut(), {
    onSuccess: (data) => {
      if (data.status === 200) {
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');
        queryClient.invalidateQueries('currentUser');
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSignOut = () => {
    signOutMutation.mutate();
  };
  return (
    <>
      <Grid item mobile={12} sx={{ mt: 3 }}>
        <CloseableDialogTitle />
        <Card sx={{ padding: 2, maxWidth: '400px', boxSadow: 'none' }}>
          <CardHeader
            sx={{ textAlign: 'center' }}
            title="ログアウトしますか？"
          />
          <CardActions
            sx={{
              justifyContent: 'center',
              '& > :not(style) + :not(style)': { marginLeft: 2 },
            }}
          >
            <Button label="ログアウト" onClick={() => handleSignOut()} />
            <Button
              label="キャンセル"
              color="inherit"
              onClick={() => endModalPath()}
            />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default LogoutDialog;
