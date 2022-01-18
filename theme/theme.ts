import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import { palette as palleteObject } from "./palette";

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  palette: palleteObject,
  shape: {
    borderRadius: 15,
  },
});

export default theme;
