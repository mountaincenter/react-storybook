import { useState } from 'react';
import { useMutation } from 'react-query';
import { Grid, Card, CardHeader, CardContent, TextField } from '@mui/material';
import { type SignUpData } from '../../interfaces';
import { signUp } from '../../api/auth';
import Button from '../Button/Button';
import CloseableDialogTitle from './CloseableDialogTitle';
import Uploader from '../Uploader/Uploader';

import AlertMessage from '../AlertMessage/AlertMessage';

import { useNavigate } from 'react-router-dom';

const SignUpDialog = () => {
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
  const [form, setForm] = useState<SignUpData>({
    name: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    avatar: { url: '' },
  });

  const navigate = useNavigate();

  const signUpmutation = useMutation((data: FormData) => signUp(data), {
    onSuccess: () => {
      setAlertMessage(
        'アカウント作成しました。確認メールをチェックしてください。'
      );
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
      const errorMessage = 'アカウント作成に失敗しました。';
      setAlertMessage(errorMessage); // <-- Set the error message to the state
      setAlertMessageOpen(true);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('username', form.username ? form.username : '');
    formData.append('password', form.password);
    formData.append('passwordConfirmation', form.passwordConfirmation);
    if (selectedAvatar) {
      formData.append('avatar', selectedAvatar);
    }

    signUpmutation.mutate(formData);
  };

  return (
    <>
      <Grid item mobile={12} sx={{ mt: 3 }}>
        <CloseableDialogTitle />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Card sx={{ padding: 2, maxWidth: 400 }}>
            <CardHeader sx={{ textAlign: 'center' }} title="アカウント作成" />
            <CardContent>
              <TextField
                label="お名前"
                variant="outlined"
                required
                fullWidth
                margin="dense"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <TextField
                label="ユーザーネーム:空欄の場合ランダム8文字の文字列となります"
                variant="outlined"
                fullWidth
                margin="dense"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
              <TextField
                label="メールアドレス"
                variant="outlined"
                required
                fullWidth
                margin="dense"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <TextField
                label="パスワード"
                type="password"
                variant="outlined"
                required
                fullWidth
                margin="dense"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <TextField
                label="パスワード確認"
                type="password"
                variant="outlined"
                required
                fullWidth
                margin="dense"
                name="passwordConfirmation"
                value={form.passwordConfirmation}
                onChange={handleChange}
              />
              <Uploader
                onUpload={(files) => {
                  const file = files[0];
                  setSelectedAvatar(file);
                  setForm({ ...form, avatar: { url: file.name } });
                }}
                allowMultiple={false}
                label="アバターを選択"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                color="primary"
                label="アカウント作成"
                sx={{ marginTop: 2, flexGrow: 1, textTransform: 'none' }}
                disabled={
                  !form.name ||
                  !form.email ||
                  !form.password ||
                  !form.passwordConfirmation
                }
              />
            </CardContent>
          </Card>
        </form>
        <AlertMessage
          open={alertMessageOpen}
          setOpen={setAlertMessageOpen}
          severity="error"
          message={alertMessage}
        />
      </Grid>
    </>
  );
};

export default SignUpDialog;
