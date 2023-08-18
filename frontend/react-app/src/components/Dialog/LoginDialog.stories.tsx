import type { Meta } from '@storybook/react';
import LoginDialog from './LoginDialog';
import { withRouter } from 'storybook-addon-react-router-v6';
import { RecoilRoot } from 'recoil';

import { handlers } from '../../mocks/handlers';

const meta: Meta = {
  component: LoginDialog,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  decorators: [
    withRouter,
    // (Story) => (
    //   <BrowserRouter>
    //     <Story />
    //   </BrowserRouter>
    // ),
  ],
};

export default meta;

export const Default = () => (
  <RecoilRoot>
    <LoginDialog />
  </RecoilRoot>
);
Default.parameters = {
  msw: handlers,
};
