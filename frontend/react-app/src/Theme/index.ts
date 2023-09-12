import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
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

const customTheme = createTheme({
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
