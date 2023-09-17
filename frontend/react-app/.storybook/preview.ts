import type { Preview } from '@storybook/react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { lightTheme, darkTheme, customTheme } from '../src/Theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        sm: {
          name: 'Small',
          styles: {
            width: '600px',
            height: '600px',
          },
        },
        md: {
          name: 'Medium',
          styles: {
            width: '960px',
            height: '600px',
          },
        },
        lg: {
          name: 'Large',
          styles: {
            width: '1280px',
            height: '600px',
          },
        },
        xl: {
          name: 'Extra Large',
          styles: {
            width: '1920px',
            height: '600px',
          },
        },
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      // Uncomment for theme switching
      Provider: ThemeProvider,
      themes: {
        // Provide your custom themes here
        light: lightTheme,
        dark: darkTheme,
        custom: customTheme,
      },
      defaultTheme: 'light',
    }),
    mswDecorator,
  ],
};

export default preview;
