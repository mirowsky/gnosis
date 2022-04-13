import { Box } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import React from "react";

export type AboutImagesCircleProps = {
  color?: "primary" | "secondary" | string;
  fontSize?: ResponsiveFontSize;
};

export const AboutImagesCircle = ({
  color = "primary",
  fontSize = { xs: "1rem" },
  ...rest
}: AboutImagesCircleProps) => {
  const circle_styles = React.useMemo(
    () => _styles({ color: color, fontSize: fontSize }),
    [color, fontSize]
  );

  return <Box sx={circle_styles.root}></Box>;
};

export default AboutImagesCircle;
const _styles = ({
  color = "primary",
  fontSize = { xs: "1rem" },
}: AboutImagesCircleProps) =>
  stylesheet.create({
    root: {
      fontSize: fontSize,
      width: { xs: "10em" },
      height: { xs: "10em" },
      borderRadius: "50%",
      backgroundColor: (theme) =>
        color == "primary" || color === "secondary"
          ? theme.palette[color].main
          : color,
    },
  });
