import { rest } from 'msw';
import { users } from './userMock';

export const handlers = [
  rest.post('http://localhost/auth/sign_in', async (req, res, ctx) => {
    const { email, password } = await req.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return res(
        ctx.status(200),
        ctx.json({
          currentUser: user,
        })
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
];
