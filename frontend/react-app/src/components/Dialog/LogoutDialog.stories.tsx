import type { Meta, StoryObj } from '@storybook/react';
import LogoutDialog from './LogoutDialog';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const meta: Meta = {
  component: LogoutDialog,
  parameters: { layout: 'centered' },
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

type Story = StoryObj<typeof LogoutDialog>;

export const Default: Story = () => {
  <LogoutDialog />;
};
