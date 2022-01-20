import { ThemeOptions } from "@mui/material";
import { createResponsiveStyle } from "./createResponsiveProperty";
import breakpoints from "./breakpoints";
import * as CSS from "csstype";
import { Head } from "@workspace/types";

const themefulResponsiveStyles = createResponsiveStyle(breakpoints);

const responsiveFontSize = themefulResponsiveStyles("fontSize");

const titleStyles = (styles: CSS.Properties) => {
  return (args: Head<typeof responsiveFontSize>) => {
    const fontSizes = responsiveFontSize(args);

    return { ...fontSizes, ...styles };
  };
};

const headerStyle = titleStyles({
  fontFamily: "Inter, sans-serif",
  color: "#2F2F2F",
  textDecoration: "none",
});

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  htmlFontSize: 10,
  fontSize: 10,
  h1: headerStyle({ xs: "36px", lg: "62px" }),
  h5: headerStyle({ xs: "18px", lg: "22px" }),
};
export default typography;
