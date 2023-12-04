import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    default?: CustomColor;
    like?: CustomColor;
    repost?: CustomColor;
  }
  interface PaletteOptions {
    default?: CustomColorOptions;
    like?: CustomColorOptions;
    repost?: CustomColorOptions;
  }
}

interface CustomColor {
  main: string;
  background: string;
}
interface CustomColorOptions {
  main: string;
  background: string;
}

const customTheme = createTheme({
  palette: {
    default: {
      main: 'rgb(29, 155, 240)',
      background: 'rgb(29, 155, 240, 0.1)',
    },
    like: {
      main: 'rgb(249, 24, 128)',
      background: 'rgb(249, 24, 128, 0.1)',
    },
    repost: {
      main: 'rgb(23, 191, 99)',
      background: 'rgb(23, 191, 99, 0.1)',
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
