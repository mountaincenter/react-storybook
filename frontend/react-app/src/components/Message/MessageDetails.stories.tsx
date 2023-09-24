import type { Meta, StoryObj } from '@storybook/react';
import MessageDetails from './MessageDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { users } from '../../mocks/userMock';
import { messages } from '../../mocks/messageMock';

const meta: Meta<typeof MessageDetails> = {
  component: MessageDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageDetails>;

export const Default: Story = ({ args }) => (
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <BrowserRouter>
        <MessageDetails {...args} />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

Default.args = {
  currentUser: users[0],
  messages: messages,
  publicId: users[0].publicId,
};
