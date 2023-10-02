import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReplyTo from './ReplyTo';

const queryClient = new QueryClient();

const meta: Meta = {
  component: ReplyTo,
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

type Story = StoryObj<typeof ReplyTo>;

export const Default: Story = (args) => <ReplyTo {...args} />;

Default.args = {
  parent: 'parentname',
};
