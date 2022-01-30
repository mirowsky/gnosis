import { ThemeOptions } from "@mui/material";
import { themeFluidTypography } from "./createFluidTypography";
import { themeResponsiveStyles } from "./createResponsiveProperty";

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  h1: { fontSize: themeFluidTypography({ maxFontSize: 64, minFontSize: 32 }) },
  h2: { fontSize: themeFluidTypography({ maxFontSize: 36, minFontSize: 24 }) },
};
export default typography;
