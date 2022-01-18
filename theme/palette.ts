import { ThemeOptions, createTheme } from "@mui/material";

export const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#002946",
  },
  secondary: {
    main: "#FF9700",
  },
};

export default createTheme({ palette: palette });
