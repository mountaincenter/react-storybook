import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { rest } from 'msw';
import { users } from '../../mocks/userMock';

const queryClient = new QueryClient();

const meta: Meta = {
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = () => {
  <Sidebar
    open={() => console.log('open')}
    onClose={() => console.log('close')}
  />;
};

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
