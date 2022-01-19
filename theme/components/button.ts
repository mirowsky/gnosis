import { Theme, Components } from "@mui/material";

export const buttonOverride = (theme: Theme): Components["MuiButton"] => {
  return {
    styleOverrides: {
      root: {
        textTransform: "inherit",
        boxShadow: "none",
        borderRadius: theme.spacing(1 * 3.125),
      },

      sizeSmall: {
        fontSize: theme.spacing(1 * 2),
      },

      sizeMedium: {
        fontSize: theme.spacing(1 * 2.75),
      },

      sizeLarge: {
        fontSize: theme.spacing(1 * 4),
      },

      contained: {
        fontWeight: 500,
        padding: "0.45em 3em",
      },

      text: {
        padding: "0.45em 2.25em",
        fontWeight: 600,
        fontSize: "1em",
      },

      textPrimary: {
        padding: "0.45em 2.25em",
        fontWeight: 600,
        fontSize: "1em",
        color: theme.palette.primary.dark,
      },

      outlinedPrimary: {
        border: `3px solid ${theme.palette.primary.main}`,
        fontWeight: 500,
        padding: "0.45em 3em",
        backgroundColor: "transparent",

        ":hover": {
          border: `3px solid ${theme.palette.primary.dark}`,
        },
      },
    },
  };
};

export const buttonBaseOverride = (
  theme: Theme
): Components["MuiButtonBase"] => {
  return {
    styleOverrides: {
      root: {
        fontSize: "1em",
      },
    },
  };
};
