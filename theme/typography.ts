import { ThemeOptions } from "@mui/material";
// import { themeFluidTypography } from "./createFluidTypography";

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  // h1: { fontSize: themeFluidTypography({ maxFontSize: 64, minFontSize: 32 }) },
  // h2: { fontSize: themeFluidTypography({ maxFontSize: 36, minFontSize: 24 }) },
  // h3: { fontSize: themeFluidTypography({ maxFontSize: 28, minFontSize: 22 }) },
  // h4: { fontSize: themeFluidTypography({ maxFontSize: 22, minFontSize: 20 }) },
  // h5: { fontSize: themeFluidTypography({ maxFontSize: 20, minFontSize: 18 }) },
  // h6: { fontSize: themeFluidTypography({ maxFontSize: 18, minFontSize: 16 }) },
  body1: { fontSize: "1rem" },
  body2: { fontSize: "0.875rem" },
  subtitle1: { fontSize: "1.125rem" },
  subtitle2: { fontSize: "0.875rem" },
  overline: { fontSize: "0.75rem" },
  caption: { fontSize: "0.75rem" },
};
export default typography;
