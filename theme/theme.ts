import {
  createTheme,
  Theme,
  ThemeOptions,
  Typography,
  PaletteOptions,
  Palette,
} from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import { pallete } from "./palette";
import typography from "./typography";

declare module "@mui/material/styles" {
  export interface Palette {
    special: {
      main: string;
      dark: string;
      light: string;
      contrastText: string;
    };
  }

  export interface PaletteOptions {
    special: {
      main?: string;
      dark?: string;
      light?: string;
      contrastText?: string;
    };
  }
}

const _theme = createTheme({
  palette: pallete,
});

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  palette: {
    ..._theme.palette,
    secondary: { ..._theme.palette.secondary, contrastText: "#fff" },
  },
  shape: {
    borderRadius: 12,
  },
  typography: typography,
  components: components(_theme),
});

export default theme;
