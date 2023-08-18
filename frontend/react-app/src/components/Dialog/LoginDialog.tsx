import { useState } from 'react';
import {
  DialogActions,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';
import Button from '../Button/Button';
import useModalRoute from '../../hooks/useModalRoute';
import CloseableDialogTitle from './CloseableDialogTitle';

const LoginDialog = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { endModalPath } = useModalRoute();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`email:${email}`, `password:${password}`);
  };

  return (
    <Grid item mobile={12} sx={{ mt: 3 }}>
      <CloseableDialogTitle />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Card sx={{ padding: 2, maxWidth: 400 }}>
          <CardHeader sx={{ textAlign: 'center' }} title="ログイン" />
          <CardContent>
            <TextField
              label="メールアドレス"
              variant="outlined"
              required
              fullWidth
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
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
      <DialogActions>
        <Button
          onClick={() => endModalPath()}
          variant="outlined"
          label="閉じる"
        />
      </DialogActions>
    </Grid>
  );
};

export default LoginDialog;
