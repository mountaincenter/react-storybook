import { atom } from 'recoil';

export interface AlertStateProps {
  open: boolean;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export const alertState = atom<AlertStateProps>({
  key: 'alertState',
  default: {
    open: false,
    message: '',
    type: 'success',
  },
});
