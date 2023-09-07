import { Meta } from '@storybook/react';
import SidebarListItem from './SidebarListItem';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const meta: Meta = {
  component: SidebarListItem,
  parameters: { layout: 'fullscreen' },
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

// type Story = StoryObj<typeof SidebarListItem>;

export const Default: any = (args: any) => <SidebarListItem {...args} />;
