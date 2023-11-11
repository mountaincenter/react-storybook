import type { Meta, StoryObj } from '@storybook/react';
import Like from './Like';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { posts } from '../../mocks/postMock';
import { postsAtom } from '../../atoms/postsAtom';
import { withRecoil } from 'storybook-addon-recoil-flow';

const queryClient = new QueryClient();

const initializeRecoilState = ({ set }: MutableSnapshot) => {
  set(postsAtom, posts);
};

const meta: Meta = {
  component: Like,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [withRecoil],
};

export default meta;

export const LikeActive: StoryObj<typeof Like> = {
  render: (args) => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot
        initializeState={(snapshot) => initializeRecoilState(snapshot)}
      >
        <BrowserRouter>
          <Like {...args} />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  ),
  args: {
    publicId: 'testUser1',
  },
};
