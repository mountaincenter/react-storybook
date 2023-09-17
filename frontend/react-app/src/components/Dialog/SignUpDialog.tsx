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
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
  const [form, setForm] = useState<SignUpData>({
    name: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    avatar: { url: '' },
  });

  const [alertConfig, setAlertConfig] = useState<{
    open: boolean;
    severity: 'error' | 'success' | 'info' | 'warning';
    message: string;
    redirectPath?: string;
  }>({
    open: false,
    severity: 'error',
    message: '',
    redirectPath: undefined,
  });

  const signUpMutation = useMutation((data: FormData) => signUp(data), {
    onSuccess: () => {
      setAlertConfig({
        open: true,
        severity: 'success',
        message: 'アカウント作成しました。確認メールをチェックしてください。',
      });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    },
    onError: (error: any) => {
      let errorMessage = 'アカウント作成に失敗しました。';
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }
      setAlertConfig({
        open: true,
        severity: 'error',
        message: errorMessage,
      });
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

    signUpMutation.mutate(formData);
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 3 }}>
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
                  const uniqueFilename = `${form.name}_${Date.now()}.${
                    file.type.split('/')[1]
                  }`;
                  const renamedFile = new File([file], uniqueFilename, {
                    type: file.type,
                  });
                  setSelectedAvatar(renamedFile);
                  setForm({ ...form, avatar: { url: renamedFile.name } });
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
          open={alertConfig.open}
          setOpen={(newOpen) =>
            setAlertConfig((prev) => ({ ...prev, open: newOpen }))
          }
          severity={alertConfig.severity}
          message={alertConfig.message}
          redirectPath={alertConfig.redirectPath}
        />
      </Grid>
    </>
  );
};

export default SignUpDialog;
