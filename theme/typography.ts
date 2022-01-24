import { ThemeOptions } from "@mui/material";
import {
  createResponsiveStyle,
  themeResponsiveStyles,
} from "./createResponsiveProperty";
import breakpoints from "./breakpoints";
import * as CSS from "csstype";
import { Head } from "@workspace/types";

const responsiveFontSize = themeResponsiveStyles("fontSize");
const resposiveLineHeight = themeResponsiveStyles("lineHeight");

const titleStyles = (styles: CSS.Properties) => {
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
  display: fontStyles({ xs: "30px", lg: "50px" }),
  h1: fontStyles({ xs: "36px", lg: "62px" }),
  h5: fontStyles({ xs: "18px", lg: "22px" }),
  caption: fontStyles({ xs: "12px", lg: "14px" }),
};
export default typography;
