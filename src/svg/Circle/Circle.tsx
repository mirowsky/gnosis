import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export interface CircleProps extends BoxProps<"svg"> {
  color?: "primary" | "secondary" | string;
}

export const Circle = ({ color = "primary", ...props }: CircleProps) => {
  const theme = useTheme();

  return (
    <Box
      fontSize={"3rem"}
      component="svg"
      viewBox="0 0 271 271"
      height={"1em"}
      width="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="25"
        y="25"
        width="220.78"
        height="217"
        rx="108.5"
        stroke={
          color === "primary" || color == "secondary"
            ? theme.palette[color].main
            : color
        }
        strokeWidth="50"
      />
    </Box>
  );
};

export default Circle;
