import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import { palette as palleteObject } from "./palette";
import typography from "./typography";

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  palette: palleteObject,
  shape: {
    borderRadius: 15,
  },
  typography: typography,
});

export default theme;
