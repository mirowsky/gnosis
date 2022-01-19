import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import components from "./components";
import { pallete } from "./palette";
import typography from "./typography";

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
