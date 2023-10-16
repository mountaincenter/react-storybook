import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostBody from './PostBody';

import { posts } from '../../mocks/postMock';

import { Box } from '@mui/material';

const queryClient = new QueryClient();

const meta: Meta = {
  component: PostBody,
  tags: ['autodocs'],
  parameters: {
    styles: {
      width: '400px',
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Box sx={{ maxWidth: '400px' }}>
            <Story />
          </Box>
        </BrowserRouter>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PostBody>;

export const Default: Story = (args) => <PostBody {...args} />;
Default.args = {
  content: posts[0].content as string,
};

export const MaxCharacters: Story = (args) => <PostBody {...args} />;
MaxCharacters.args = {
  content: posts[3].content as string,
};
