import { ThemeOptions } from "@mui/material";
import {
  createResponsiveStyle,
  themeResponsiveStyles,
} from "./createResponsiveProperty";
import breakpoints from "./breakpoints";
import { Properties } from "csstype";
import { Head } from "@workspace/types";

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
  htmlFontSize: 10,
  fontSize: 10,
  h1: fontStyles({ xs: "42px", lg: "64px" }),
  h5: fontStyles({ xs: "18px", lg: "22px" }),
  caption: fontStyles({ xs: "12px", lg: "14px" }),
};
export default typography;
