import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import GlobalStyles from "./GlobalStyles";

export interface CustomThemeProps {
  children?: React.ReactNode;
}

const CustomTheme = ({ children }: CustomThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
