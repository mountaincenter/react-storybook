import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import MessageProfile from './MessageProfile';

import { users } from '../../mocks/userMock';
import { messages } from '../../mocks/messageMock';

const meta: Meta<typeof MessageProfile> = {
  component: MessageProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageProfile>;

export const Default: Story = ({ args }) => (
  <QueryClientProvider client={new QueryClient()}>
    <RecoilRoot>
      <BrowserRouter>
        <MessageProfile {...args} />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

Default.args = {
  currentUser: users[0],
  messages: messages,
};
