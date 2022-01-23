import {
  createTheme,
  Theme,
  ThemeOptions,
  PaletteOptions,
  Palette,
  TypographyPropsVariantOverrides,
  TypographyVariantsOptions,
} from "@mui/material";
import React from "react";
import breakpoints from "./breakpoints";
import components from "./components";
import { pallete } from "./palette";
import typography from "./typography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
  }
}
declare module "@mui/material/styles" {
  export interface Palette {
    special: {
      main: string;
      dark: string;
      light: string;
      contrastText: string;
    };
  }

  export interface TypographyVariants {
    display: React.CSSProperties;
  }

  export interface TypographyVariantsOptions {
    display?: React.CSSProperties;
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
