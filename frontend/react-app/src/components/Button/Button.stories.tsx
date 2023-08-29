import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { MUIColor } from '../../interfaces';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

type ButtonVariants = {
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: MUIColor;
  onClick?: () => void;
  isHover?: boolean;
  isLoading?: boolean;
};

const authButtonVariants: ButtonVariants[] = [
  {
    label: 'ログイン',
    variant: 'outlined',
    onClick: action('open loginDialog'),
  },
  {
    label: '簡単ログイン',
    variant: 'outlined',
    onClick: action('easy login'),
  },
  {
    label: 'ログイン(フォーム)',
    variant: 'contained',
    onClick: action('submit login form'),
  },
  {
    label: 'アカウント作成',
    variant: 'outlined',
    onClick: action('open signInDialog'),
  },
  {
    label: 'アカウント作成(フォーム)',
    variant: 'contained',
    onClick: action('submit signIn form'),
  },
  { label: 'ログアウト', onClick: action('logout') },
  { label: 'キャンセル', color: 'inherit', onClick: action('cancel') },
];

const followButtonVariants: ButtonVariants[] = [
  { label: 'フォロー', onClick: action('follow') },
  { label: 'フォロー中', variant: 'outlined', onClick: action('unfollow') },
  {
    label: 'フォロー解除',
    variant: 'outlined',
    color: 'error',
    onClick: action('unfollow'),
  },
  {
    label: 'プロフィール編集',
    variant: 'outlined',
    onClick: action('open editProfileDialog'),
  },
];

const PostButtonVariants: ButtonVariants[] = [
  { label: 'ツイートする', onClick: action('open postDialog') },
  {
    label: 'ツイートする',
    onClick: action('open Dialog'),
  },
];
const LoadingButtonVariants: ButtonVariants[] = [
  { label: 'Loading', isLoading: true },
  { label: 'Loading', variant: 'outlined', isLoading: true },
  { label: 'Loading', variant: 'text', isLoading: true },
];

const ButtonGroup = ({
  buttonVariants,
}: {
  buttonVariants: ButtonVariants[];
}) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    flexWrap="wrap"
    sx={{ maxWidth: '300px' }}
  >
    {buttonVariants.map((variant, index) => (
      <Box display="flex" alignItems="center" m={2} key={index}>
        <Typography variant="body1" mr={1}>
          {variant.label}
        </Typography>
        <Button
          variant={variant.variant || 'contained'}
          fullWidth
          onClick={variant.onClick || (() => {})}
          isLoading={variant.isLoading}
          {...variant}
        >
          {variant.label}
        </Button>
      </Box>
    ))}
  </Box>
);

export const AllButtons = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
  >
    <ButtonGroup buttonVariants={authButtonVariants} />
    <ButtonGroup buttonVariants={followButtonVariants} />
    <ButtonGroup buttonVariants={PostButtonVariants} />
    <ButtonGroup buttonVariants={LoadingButtonVariants} />
  </Box>
);

export const AuthButtonsStory = () => (
  <ButtonGroup buttonVariants={authButtonVariants} />
);
export const FollowButtonsStory = () => (
  <ButtonGroup buttonVariants={followButtonVariants} />
);
export const PostButtonsStory = () => (
  <ButtonGroup buttonVariants={PostButtonVariants} />
);
export const LoadingButtonsStory = () => (
  <ButtonGroup buttonVariants={LoadingButtonVariants} />
);

export const Login: Story = {
  args: {
    label: 'ログイン',
    variant: 'outlined',
  },
};
Login.play = async ({ canvasElement, step }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const canvas = within(canvasElement);
  await step('Click button', async () => {
    await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }));
  });
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    onClick: action('button-clicked'),
  },
};

export const FollowedHover: Story = {
  args: {
    label: 'フォロー中',
    variant: 'outlined',
    onClick: action('button-clicked'),
  },
};

export const LoadingButton: Story = {
  args: {
    label: 'Loading',
    isLoading: true,
  },
};
