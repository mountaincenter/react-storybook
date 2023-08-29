import { rest } from 'msw';
import { users } from './userMock';
import { v4 as uuidv4 } from 'uuid';

export const handlers = [
  rest.post('http://localhost/auth/sign_in', async (req, res, ctx) => {
    const { email, password } = await req.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      const accessToken = uuidv4();
      const client = uuidv4();
      return res(
        ctx.status(200),
        ctx.json({
          currentUser: user,
        }),
        ctx.set('access-token', accessToken),
        ctx.set('client', client),
        ctx.set('uid', user.email)
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          message: 'メールアドレスかパスワードが間違っています',
        })
      );
    }
  }),
  rest.get('http://localhost/auth/sessions', async (req, res, ctx) => {
    const accessToken = req.headers.get('access-token');
    const client = req.headers.get('client');
    const uid = req.headers.get('uid');
    const user = users.find(
      (user) => user.email === uid && accessToken && client
    );
    if (user) {
      return res(
        ctx.status(200),
        ctx.json({
          currentUser: user,
        }),
        ctx.set('access-token', accessToken || ''),
        ctx.set('client', client || ''),
        ctx.set('uid', uid || '')
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          message: 'ログインしてください',
        })
      );
    }
  }),
];
