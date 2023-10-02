import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostBody from './PostBody';

const queryClient = new QueryClient();

const meta: Meta = {
  component: PostBody,
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

type Story = StoryObj<typeof PostBody>;

export const Default: Story = (args) => <PostBody {...args} />;
Default.args = {
  content: 'This is a post body',
};
