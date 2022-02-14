import { ThemeOptions, darken, lighten } from "@mui/material";

export const pallete: ThemeOptions["palette"] = {
  primary: {
    main: "#002946",
  },
  secondary: {
    main: "#FF9700",
  },
  special: {
    main: "#E1ECFE",
    dark: darken("#E1ECFE", 0.15),
    light: lighten("#E1ECFE", 0.15),
  },

  bg: {
    primary: "#F6F9FB",
    secondary: "#FFFFFF",
  },
};

export default pallete;
