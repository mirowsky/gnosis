import { Theme, ThemeOptions } from "@mui/material";

const typography = (theme: Theme): ThemeOptions["typography"] => ({
  fontFamily: ["Inter", "sans-serif"].join(","),
  h1: {
    fontSize: theme.fluidTypography({ maxFontSize: 64, minFontSize: 36 }),
    lineHeight: 1.2,
  },
  h2: {
    fontSize: theme.fluidTypography({ maxFontSize: 36, minFontSize: 24 }),
    lineHeight: 1.35,
  },
  h3: {
    lineHeight: 1.5,
    fontSize: theme.fluidTypography({ maxFontSize: 28, minFontSize: 22 }),
  },
  h4: { fontSize: theme.fluidTypography({ maxFontSize: 22, minFontSize: 20 }) },
  h5: { fontSize: theme.fluidTypography({ maxFontSize: 20, minFontSize: 18 }) },
  h6: { fontSize: theme.fluidTypography({ maxFontSize: 18, minFontSize: 16 }) },
  body1: { fontSize: "1rem" },
  body2: { fontSize: "0.875rem" },
  subtitle1: { fontSize: "1.125rem" },
  subtitle2: { fontSize: "0.875rem" },
  overline: { fontSize: "0.75rem" },
  caption: { fontSize: "0.75rem" },
  button: { fontSize: "1rem" },
});
export default typography;
