import type { Meta, StoryObj } from '@storybook/react';
import SidebarOption from '.';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const meta: Meta<typeof SidebarOption> = {
  component: SidebarOption,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarOption>;

export const Default: Story = {
  args: {
    text: 'Home',
    link: '/',
    Icon: HomeIcon,
    OutlinedIcon: HomeOutlinedIcon,
  },
};
