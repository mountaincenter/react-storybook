import type { Meta } from '@storybook/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);
