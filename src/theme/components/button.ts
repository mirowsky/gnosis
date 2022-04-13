import { Theme, Components } from "@mui/material";

export const buttonOverride = (theme: Theme): Components["MuiButton"] => {
  return {
    styleOverrides: {
      root: {
        textTransform: "inherit",
        boxShadow: "none",
        borderRadius: theme.spacing(1 * 3.125),
      },

      // sizeSmall: {
      //   fontSize: theme.spacing(1 * 2),
      // },

      // sizeMedium: {
      //   fontSize: theme.spacing(1 * 2.5),
      // },

      // sizeLarge: {
      //   fontSize: theme.spacing(1 * 4),
      // },

      outlined: {
        fontWeight: 500,
        padding: `${theme.spacing(1 * 1.15)} ${theme.spacing(1 * 5.5)}`,
      },

      contained: {
        fontWeight: 500,
        padding: `${theme.spacing(1 * 1.15)} ${theme.spacing(1 * 5.5)}`,
      },

      text: {
        padding: `${theme.spacing(1 * 0.45)} ${theme.spacing(1 * 4)}`,
        fontWeight: 600,
      },
    },
  };
};

export const buttonBaseOverride = (
  theme: Theme
): Components["MuiButtonBase"] => {
  return {
    styleOverrides: {},
  };
};
