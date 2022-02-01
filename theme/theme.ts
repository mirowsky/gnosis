import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import { createFluidTypography } from "./createFluidTypography";
import { createResponsiveStyle } from "./createResponsiveProperty";
import { pallete } from "./palette";
import typography from "./typography";

const _theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
});

export const themeDefaults = createTheme({
  palette: pallete,

  breakpoints: _theme.breakpoints,

  fluidTypography: createFluidTypography(
    _theme.breakpoints.values.lg,
    _theme.breakpoints.values.xs
  ),

  responsiveProperty: createResponsiveStyle(_theme),
});

export const theme = createTheme({
  palette: {
    ...themeDefaults.palette,
    secondary: { ...themeDefaults.palette.secondary, contrastText: "#fff" },
  },
  fluidTypography: themeDefaults.fluidTypography,
  responsiveProperty: themeDefaults.responsiveProperty,
  breakpoints: themeDefaults.breakpoints,
  shape: {
    borderRadius: 4,
  },
  typography: typography(themeDefaults),
  components: components(themeDefaults),
});

export default theme;
