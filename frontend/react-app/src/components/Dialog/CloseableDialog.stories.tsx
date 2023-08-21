import type { Meta } from '@storybook/react';
import CloseableDialogTitle from './CloseableDialogTitle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { userEvent, within } from '@storybook/testing-library';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const meta: Meta = {
  component: CloseableDialogTitle,
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

export const Default = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'close' }));
  },
};
