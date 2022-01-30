import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import { pallete } from "./palette";
import typography from "./typography";

export const themeDefaults = createTheme({
  palette: pallete,
});

export const theme = createTheme({
  palette: {
    ...themeDefaults.palette,
    secondary: { ...themeDefaults.palette.secondary, contrastText: "#fff" },
  },
  breakpoints: {
    values: breakpoints,
  },
  shape: {
    borderRadius: 12,
  },
  typography: typography,
  components: components(themeDefaults),
});

export default theme;
