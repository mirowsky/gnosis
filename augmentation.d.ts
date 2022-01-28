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
import * as CSS from "csstype";

type FluidTypographyParameters = {
  minFontSize: number;
  maxFontSize: number;
  minBreakpoint: number;
  maxBreakpoint: number;
  options?: {
    htmlFontSize: number;
  };
};

// Typescript module augmentation

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

  export interface Theme {
    fluidTypography: (parameters: FluidTypographyParameters) => string;
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
