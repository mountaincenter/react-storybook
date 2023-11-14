import type { Meta, StoryObj } from '@storybook/react';
import UserItem from './UserItem';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { users } from '../../mocks/userMock';
import { useCurrentUserMock } from '../../mocks/currentUserMock';

const queryClient = new QueryClient();

const meta: Meta = {
  component: UserItem,
  tags: ['autodocs'],
  parameters: {
    moduleMock: {
      // モックするモジュールパスとモックデータを指定
      '../../hooks/currentUser/useCurrentUser': useCurrentUserMock,
    },
  },
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

type Story = StoryObj<typeof UserItem>;

export const Default: Story = (args) => <UserItem {...args} />;
Default.args = {
  user: users[0],
};
