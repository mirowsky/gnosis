import { Theme, Components } from "@mui/material";

export const cssBaselineOverride = (
  theme: Theme
): Components["MuiCssBaseline"] => {
  return {
    styleOverrides: {
      scrollBehavior: "smooth",

      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
        borderRadius: "6px",
      },

      "&::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.light,
      },

      "&::-webkit-scrollbar-track": {
        opacity: 0,
      },

      "&::-webkit-scrollbar": {
        width: "8px",
      },
    },
  };
};

export default cssBaselineOverride;
