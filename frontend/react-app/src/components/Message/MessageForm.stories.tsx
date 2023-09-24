import type { Meta, StoryObj } from '@storybook/react';
import MessageForm from './MessageForm';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof MessageForm> = {
  component: MessageForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageForm>;

export const Default: Story = (args) => (
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <BrowserRouter>
        <MessageForm {...args} />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

Default.args = {
  publicId: 'publicId',
};
