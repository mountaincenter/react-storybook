import type { Meta, StoryObj } from '@storybook/react';
import Like from './Like';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { posts } from '../../mocks/postMock';
import { RecoilRoot } from 'recoil';
// import { postByIdSelector } from '../../selectors/postByIdSelector';
import { postsAtom } from '../../atoms/postsAtom';

const queryClient = new QueryClient();

const meta: Meta = {
  component: Like,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot
            initializeState={({ set }) => {
              set(postsAtom, posts);
            }}
          >
            <Story />
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Like>;

const getPostDataForStory = (publicId: string) => {
  const post = posts.find((p) => p.publicId === publicId);
  console.log('Post data for story', post);
  if (!post) return null;
  return {
    isLiked: post.liked,
    count: post.likesCount,
  };
};

// デフォルトのストーリー
export const Default: Story = {
  args: {
    ...getPostDataForStory('testuser1'),
    publicId: 'testuser1',
  },
};
export const onlyCount: Story = {
  args: {
    ...getPostDataForStory('testuser1'),
    publicId: 'testuser1',
    showCountType: 'onlyCount',
  },
};
export const onlyIcon: Story = {
  args: {
    ...getPostDataForStory('testuser1'),
    publicId: 'testuser1',
    showCountType: 'onlyIcon',
  },
};
export const DefaultWithFalseZero: Story = {
  args: {
    ...getPostDataForStory('testuser2'),
    publicId: 'testuser2',
  },
};
export const onlyCountWithFalseZero: Story = {
  args: {
    ...getPostDataForStory('testuser2'),
    publicId: 'testuser2',
    showCountType: 'onlyCount',
  },
  play: () => {
    console.log(onlyCountWithFalseZero.args);
  },
};
export const onlyIconWithFalseZero: Story = {
  args: {
    ...getPostDataForStory('testuser2'),
    publicId: 'testuser2',
    showCountType: 'onlyIcon',
  },
};
export const DefaultWithFalse: Story = {
  args: {
    ...getPostDataForStory('testuser3'),
    publicId: 'testuser3',
  },
};
export const onlyCountWithFalse: Story = {
  args: {
    ...getPostDataForStory('testuser3'),
    publicId: 'testuser3',
    showCountType: 'onlyCount',
  },
  play: () => {
    console.log(onlyCountWithFalseZero.args);
  },
};
export const onlyIconWithFalse: Story = {
  args: {
    ...getPostDataForStory('testuser3'),
    publicId: 'testuser3',
    showCountType: 'onlyIcon',
  },
};
