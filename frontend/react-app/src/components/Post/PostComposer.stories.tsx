import { type Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import PostComposer from './PostComposer';

const queryClient = new QueryClient();

const meta: Meta = {
  component: PostComposer,
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

type Story = StoryObj<typeof PostComposer>;

export const Default: Story = (args) => <PostComposer {...args} />;
Default.args = {
  text: 'いまどうしてる?',
  postType: 'original',
};
