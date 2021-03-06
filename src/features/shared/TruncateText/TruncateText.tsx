import { Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { Properties } from "csstype";
import {
  ResponsiveFontSize,
  ResponsiveStyleValue,
  ThemeStyles,
} from "@workspace/types";

export type TruncateTextProps = {
  children?: React.ReactNode;
  numberOfLines?: number | false;
  lineHeight?: Properties["lineHeight"];
  fontSize?: ResponsiveStyleValue<Properties["fontSize"]>;
  sx?: ThemeStyles;
};

export const TruncateText = ({
  numberOfLines,
  fontSize = { xs: "1rem" },
  lineHeight = 1.75,
  children,
  sx,
}: TruncateTextProps) => {
  const styles = React.useMemo(
    () => _styles(numberOfLines, fontSize, lineHeight),
    [numberOfLines, fontSize, lineHeight]
  );

  return (
    <Typography sx={{ ...styles.root, ...sx }} variant="body1">
      {children}
    </Typography>
  );
};

export default TruncateText;

const _styles = (
  lines: number | false = 100,
  fontSize: ResponsiveFontSize = {
    xs: "1rem",
    md: "1rem",
    sm: "1rem",
    lg: "1rem",
    xl: "1rem",
  },
  lineHeight: Properties["lineHeight"] = 1.75
) =>
  stylesheet.create({
    root: {
      fontSize: fontSize,
      overflow: "hidden",
      transition: "all 0.7s linear",
      display: "-webkit-box",
      WebkitLineClamp: typeof lines === "number" ? lines : "none",
      willChange: "max-height",
      WebkitBoxOrient: "vertical",
      position: "relative",

      ...(typeof lines === "number" && {
        maxHeight: {
          xs: `calc(${fontSize.xs as string} * ${lineHeight} * ${lines})`,
          sm: `calc(${fontSize.sm as string} * ${lineHeight} * ${lines})`,
          md: `calc(${fontSize.md as string} * ${lineHeight} * ${lines})`,
          lg: `calc(${fontSize.lg as string} * ${lineHeight} * ${lines})`,
          xl: `calc(${fontSize.xl as string} * ${lineHeight} * ${lines})`,
        },
      }),
    },
  });
