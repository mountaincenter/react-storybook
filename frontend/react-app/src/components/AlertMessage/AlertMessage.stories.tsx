import { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import AlertMessage from './AlertMessage';
import { alertState } from '../../atoms/alertAtom';

const meta: Meta<typeof AlertMessage> = {
  component: AlertMessage,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => (
      <RecoilRoot
        initializeState={({ set }) => {
          set(alertState, {
            open: true,
            message: context.args.message,
            type: context.args.type,
          });
        }}
      >
        <Story />
      </RecoilRoot>
    ),
  ],
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info'],
      control: { type: 'select' },
    },
  },
};

export default meta;

// 各種アラートタイプのStoryを定義
export const Success: StoryObj<typeof AlertMessage> = {
  args: {
    message: 'これは成功メッセージです',
    type: 'success',
  },
};

export const Error: StoryObj<typeof AlertMessage> = {
  args: {
    message: 'これはエラーメッセージです',
    type: 'error',
  },
};

export const Warning: StoryObj<typeof AlertMessage> = {
  args: {
    message: 'これは警告メッセージです',
    type: 'warning',
  },
};

export const Info: StoryObj<typeof AlertMessage> = {
  args: {
    message: 'これは情報メッセージです',
    type: 'info',
  },
};
