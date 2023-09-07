import type { Meta, StoryObj } from '@storybook/react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const meta: Meta<typeof SidebarOption> = {
  component: SidebarOption,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarOption>;

export const Default: Story = (args: any) => (
  <RecoilRoot>
    <BrowserRouter>
      <SidebarOption {...args} />
    </BrowserRouter>
  </RecoilRoot>
);
Default.args = {
  text: 'Home',
  link: '/',
  Icon: HomeIcon,
  OutlinedIcon: HomeOutlinedIcon,
};
