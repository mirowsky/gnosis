import { ThemeOptions } from "@mui/material";
import {
  createResponsiveStyle,
  themeResponsiveStyles,
} from "./createResponsiveProperty";
import breakpoints from "./breakpoints";
import { Properties } from "csstype";
import { Head } from "@workspace/types";
import { themeFluidTypography } from "./createFluidTypography";

const responsiveFontSize = themeResponsiveStyles("fontSize");
const resposiveLineHeight = themeResponsiveStyles("lineHeight");

const titleStyles = (styles: Properties) => {
  return (args: Head<typeof responsiveFontSize>) => {
    const fontSizes = responsiveFontSize(args);

    return { ...fontSizes, ...styles };
  };
};

const displayStyle = titleStyles({
  fontWeight: "bold",
});

const fontStyles = titleStyles({
  textDecoration: "none",
});

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  h1: { fontSize: themeFluidTypography({ maxFontSize: 64, minFontSize: 32 }) },
  h5: fontStyles({ xs: "18px", lg: "22px" }),
  caption: fontStyles({ xs: "12px", lg: "14px" }),
};
export default typography;
