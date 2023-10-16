import { type Meta, StoryObj } from '@storybook/react';
import DialogPostComposer from './DialogPostComposer';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { posts } from '../../mocks/postMock';

import { Box } from '@mui/material';

const queryClient = new QueryClient();

const meta: Meta = {
  component: DialogPostComposer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Box sx={{ maxWidth: '400px' }}>
              <Story />
            </Box>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DialogPostComposer>;

export const Default: Story = (args) => {
  return <DialogPostComposer {...args} />;
};

Default.args = {
  postType: 'original',
  post: posts[0],
};

export const Reply: Story = (args) => {
  return <DialogPostComposer {...args} />;
};

Reply.args = {
  text: '返信を表示',
  postType: 'reply',
  post: posts[0],
};

export const MaxCharacters: Story = (args) => {
  return <DialogPostComposer {...args} />;
};

MaxCharacters.args = {
  text: '返信を表示',
  postType: 'reply',
  post: posts[3],
};

export const QuoteRepost: Story = (args) => {
  return <DialogPostComposer {...args} />;
};

QuoteRepost.args = {
  text: 'コメントを追加',
  postType: 'quote_repost',
  post: posts[0],
};

export const QuoteRepostMaxCharacters: Story = (args) => {
  return <DialogPostComposer {...args} />;
};

QuoteRepostMaxCharacters.args = {
  text: 'コメントを追加',
  postType: 'quote_repost',
  post: posts[3],
};
