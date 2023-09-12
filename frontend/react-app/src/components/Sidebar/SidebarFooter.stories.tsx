import type { Meta, StoryObj } from '@storybook/react';
import SidebarFooter from './SidebarFooter';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { rest } from 'msw';
import { users } from '../../mocks/userMock';

const queryClient = new QueryClient();

const meta: Meta<typeof SidebarFooter> = {
  component: SidebarFooter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SidebarFooter>;

export const Default: Story = (args: any) => <SidebarFooter {...args} />;

Default.parameters = {
  msw: [
    rest.get('http://localhost/auth/sessions', (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ currentUser: users[0] }),
        ctx.set('access-token', '123456'),
        ctx.set('client', '123456'),
        ctx.set('uid', users[0].email)
      );
    }),
  ],
};

export const WithoutAvatar: Story = (args: any) => <SidebarFooter {...args} />;

WithoutAvatar.parameters = {
  msw: [
    rest.get('http://localhost/auth/sessions', (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ currentUser: users[1] }),
        ctx.set('access-token', '123456'),
        ctx.set('client', '123456'),
        ctx.set('uid', users[1].email)
      );
    }),
  ],
};

export const IsLoading: Story = (args: any) => {
  return <SidebarFooter {...args} />;
};
IsLoading.args = {
  isLoading: true,
};
