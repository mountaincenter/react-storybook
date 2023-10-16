import { type Meta, StoryObj } from '@storybook/react';
import PostComposerWrapper from './PostComposerWrapper';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { posts } from '../../mocks/postMock';

import DialogPostComposer from '../Post/DialogPostComposer';

const queryClient = new QueryClient();

const meta: Meta = {
  component: PostComposerWrapper,
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

type Story = StoryObj<typeof PostComposerWrapper>;

export const Default: Story = () => {
  return (
    <PostComposerWrapper avatar={{ name: 'testuser', url: null }}>
      <DialogPostComposer postType="original" post={posts[0]} />
    </PostComposerWrapper>
  );
};
