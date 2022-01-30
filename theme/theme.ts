import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import { createFluidTypography } from "./createFluidTypography";
import { pallete } from "./palette";
import typography from "./typography";

const _theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
});

export const themeDefaults = createTheme({
  palette: pallete,

  fluidTypography: createFluidTypography(
    _theme.breakpoints.values.lg,
    _theme.breakpoints.values.xs
  ),
});

export const theme = createTheme({
  palette: {
    ...themeDefaults.palette,
    secondary: { ...themeDefaults.palette.secondary, contrastText: "#fff" },
  },
  fluidTypography: _theme.fluidTypography,
  breakpoints: _theme.breakpoints,
  shape: {
    borderRadius: 12,
  },
  typography: typography(themeDefaults),
  components: components(themeDefaults),
});

export default theme;
