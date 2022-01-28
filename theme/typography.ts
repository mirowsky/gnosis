import { ThemeOptions } from "@mui/material";
import { themeFluidTypography } from "./createFluidTypography";

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  h1: { fontSize: themeFluidTypography({ maxFontSize: 64, minFontSize: 32 }) },
  h5: { fontSize: themeFluidTypography({ maxFontSize: 22, minFontSize: 18 }) },
  caption: {
    fontSize: themeFluidTypography({ maxFontSize: 14, minFontSize: 12 }),
  },
};
export default typography;
