import { ThemeOptions } from "@mui/material";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { Property } from "csstype";
import {
  createResponsiveCSSProperty,
  createResponsiveStyle,
  ResponsiveStyleValue,
} from "./createResponsiveProperty";
import breakpoints from "./breakpoints";

const responsiveTitleStyle = (
  styleValue: ResponsiveStyleValue<Property.FontSize<string | number>>
): TypographyStyleOptions => {
  return Object.assign(
    createResponsiveCSSProperty(breakpoints, {
      property: "fontSize",
      value: {},
    }),
    {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      color: "#2F2F2F",
      textDecoration: "none",
    } as TypographyStyleOptions
  );
};

const responsiveHeadings = createResponsiveStyle(breakpoints)("fontSize")({
  lg: "contain",
});

const ok = responsiveTitleStyle({ xs: "24px", lg: "38px" });

// @TODO - Refactor this to be dynamic

const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "sans-serif"].join(","),
  htmlFontSize: 10,
  fontSize: 10,
  h1: responsiveTitleStyle({ xs: "24px", lg: "38px" }),
  button: responsiveTitleStyle({ xs: "12px", lg: "18px" }),
  body1: responsiveTitleStyle({ xs: "12px", lg: "16px" }),
  h5: responsiveTitleStyle({ xs: "16px", lg: "22px" }),
};
export default typography;
