import { createTheme, Theme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
  interface Palette {
    like?: Palette['primary'];
    follow?: Palette['primary'];
    repost?: Palette['primary'];
    other?: Palette['primary'];
  }
  interface PaletteOptions {
    like?: PaletteOptions['primary'];
    follow?: PaletteOptions['primary'];
    repost?: PaletteOptions['primary'];
    other?: PaletteOptions['primary'];
  }
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    like: {
      main: '#f9187f',
    },
    follow: {
      main: '#1f9bef',
    },
    repost: {
      main: '#04b97c',
    },
    other: {
      main: '#1d9bf0',
    },
  },
});

const customTheme: Theme = createTheme(baseTheme, {
  typography: {
    button: {
      [baseTheme.breakpoints.down('tablet')]: {
        fontSize: '0.25rem',
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { customTheme, lightTheme, darkTheme };
