import { blue, blueGrey, common, grey, pink } from '@mui/material/colors';

interface colorScheme {
  accent: string;
  background: string;
  card: string;
  link: string;
  primary: string;
  secondary: string;
}

export const DarkMode: colorScheme = {
  accent: common.white,
  background: blueGrey[900],
  card: grey.A700,
  link: blue.A400,
  primary: grey[100],
  secondary: blueGrey[100],
};

export const LightMode: colorScheme = {
  accent: grey.A400,
  background: blue[50],
  card: grey.A700,
  link: pink.A400,
  primary: grey[700],
  secondary: common.black,
};
