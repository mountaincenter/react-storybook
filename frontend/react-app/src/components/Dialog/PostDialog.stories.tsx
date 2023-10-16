import { type Meta, StoryObj } from '@storybook/react';
import PostDialog from './PostDialog';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const meta: Meta = {
  component: PostDialog,
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

type Story = StoryObj<typeof PostDialog>;

export const Default: Story = () => {
  return <PostDialog />;
};
