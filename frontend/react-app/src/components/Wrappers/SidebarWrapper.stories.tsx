import type { Meta } from '@storybook/react';
import SidebarWrapper from './SidebarWrapper';
import Sidebar from '../Sidebar/Sidebar';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const meta: Meta = {
  component: SidebarWrapper,
  tags: ['autodocs'],
  args: {
    children: <Sidebar />,
    isMobile: false,
  },
};

export default meta;

// type Story = StoryObj<typeof SidebarWrapper>;

export const Default: any = (args: any) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <SidebarWrapper {...args} />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);
