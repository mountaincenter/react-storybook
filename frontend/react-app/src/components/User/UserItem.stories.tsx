import type { Meta, StoryObj } from '@storybook/react';
import UserItem from './UserItem';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { users } from '../../mocks/userMock';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        if (queryKey[0] === 'currentUser') {
          return { currentUser: users[0] };
        }
        throw new Error('Unknown query key');
      },
    },
  },
});

const meta: Meta = {
  component: UserItem,
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

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  args: {
    user: users[1],
  },
  play: async ({ args, canvasElement }) => {
    const { user } = args;
    // `canvasElement`を使用して、ストーリー内のDOM要素にアクセスし、
    // `FollowButton`が存在するかどうかを確認できます
    const followButton = canvasElement.querySelector(
      '[data-testid="follow-button"]'
    );
    if (user.id !== users[0].id && followButton) {
      console.log('FollowButton is displayed for a different user');
    } else {
      console.error('FollowButton is not displayed correctly');
    }
  },
};
