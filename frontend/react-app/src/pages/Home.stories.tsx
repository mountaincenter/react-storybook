import Home from './Home';
import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { RecoilRoot } from 'recoil';

const meta: Meta = {
  component: Home,
  decorators: [
    withRouter,
    // (Story) => (
    //   <BrowserRouter>
    //     <Story />
    //   </BrowserRouter>
    // ),
  ],
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <RecoilRoot>
    <Home />
  </RecoilRoot>
);
