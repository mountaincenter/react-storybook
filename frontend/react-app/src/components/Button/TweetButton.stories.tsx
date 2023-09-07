import type { Meta, StoryObj } from '@storybook/react';
import TweetButton from './TweetButton';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { userEvent, within } from '@storybook/testing-library';

const meta: Meta = {
  component: TweetButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TweetButton>;

export const Default: Story = (args: any) => (
  <RecoilRoot>
    <BrowserRouter>
      <TweetButton {...args} />
    </BrowserRouter>
  </RecoilRoot>
);
Default.args = {
  text: 'Tweet',
};

Default.play = async ({ canvasElement, step }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const canvas = within(canvasElement);
  await step('Click button', async () => {
    await userEvent.click(canvas.getByRole('button', { name: 'Tweet' }));
  });
};
