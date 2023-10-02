import type { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import PostMeta, { PostMetaProps } from './PostMeta';

const queryClient = new QueryClient();

const meta: Meta = {
  component: PostMeta,
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

type StoryObj<T> = (args: T) => JSX.Element;
type Story = StoryObj<PostMetaProps>;

export const Default: Story = (args) => <PostMeta {...args} />;

Default.args = {
  user: {
    name: 'Test User',
    username: 'testuser',
  },
  createdAt: new Date(),
};
