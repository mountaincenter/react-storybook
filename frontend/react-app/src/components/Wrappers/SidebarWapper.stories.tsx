import type { Meta, StoryObj } from '@storybook/react';
import SidebarWrapper from './SidebarWrapper';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta = {
  component: SidebarWrapper,
  tags: ['autodocs'],
  args: {
    children: <div>children</div>,
    isMobile: false,
  },
};

export default meta;

type Story = StoryObj<typeof SidebarWrapper>;

export const Default: Story = (args: any) => (
  <RecoilRoot>
    <BrowserRouter>
      <SidebarWrapper {...args} />
    </BrowserRouter>
  </RecoilRoot>
);
