import type { Meta } from '@storybook/react';
import LoginDialog from './LoginDialog';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { userEvent, within } from '@storybook/testing-library';
import { QueryClient, QueryClientProvider } from 'react-query';

import { handlers } from '../../mocks/handlers';

import { rest } from 'msw';
import { users } from '../../mocks/userMock';

import { client } from '../../api/client';

const queryClient = new QueryClient();

const meta: Meta = {
  component: LoginDialog,
  parameters: { layout: 'centered', msw: handlers },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

export const Default = {
  play: async ({ canvasElement, step }: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const canvas = within(canvasElement);

    // Email input
    await step('Enter email', async () => {
      const emailInput = canvas.getByLabelText(
        /メールアドレス/
      ) as HTMLInputElement;

      await userEvent.type(emailInput, 'test1@example.com');
    });

    // Password input
    await step('Enter password', async () => {
      const passwordInput = canvas.getByLabelText(
        /パスワード/
      ) as HTMLInputElement;
      await userEvent.type(passwordInput, 'password');
    });

    // Click login button
    await step('Click login button', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }));
    });
  },
};

export const LoginSuccess = {
  ...Default,
  parameters: {
    msw: [
      rest.post(`${client.defaults.baseURL}/auth/sign_in`, (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            currentUser: users[0],
          })
        );
      }),
    ],
  },
};

export const LoginFailure = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByLabelText(/メールアドレス/),
      'invalid@example.com'
    );
    await userEvent.type(
      canvas.getByLabelText(/パスワード/),
      'invalidpassword'
    );
    await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }));
  },
  parameters: {
    msw: [
      rest.post(`${client.defaults.baseURL}/auth/sign_in`, (_, res, ctx) => {
        return res(
          ctx.status(401),
          ctx.json({ message: 'メールアドレスかパスワードが間違っています' })
        );
      }),
    ],
  },
};
