import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { Scroll } from "@workspace/svg";
import { ResponsiveStyleValue } from "@workspace/types";
import { Properties } from "csstype";
import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { MotionBox } from "@workspace/components/utility";

export type ScrollIconAnimationProps = {
  fontSize?: ResponsiveStyleValue<Properties["fontSize"]>;
  color?: "primary" | "secondary";
  onClick?: (...args: unknown[]) => void;
};

export const ScrollIconAnimation = ({
  color = "secondary",
  fontSize = { xs: "1rem" },
  onClick = () => {},
}: ScrollIconAnimationProps) => {
  const styles = React.useMemo(
    () => _styles(fontSize, color),
    [fontSize, color]
  );

  return (
    <Box onClick={onClick} component="button" role="button" sx={styles.root}>
      <Scroll fontSize="inherit" color="inherit" />
      <Box sx={styles.arrowBox}>
        <MotionBox
          transition={{
            repeat: Infinity,
            repeatType: "loop",
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          component={KeyboardArrowDown}
          color="inherit"
          fontSize="inherit"
        />
        <MotionBox
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.25,
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          component={KeyboardArrowDown}
          color="inherit"
          fontSize="inherit"
        />
        <MotionBox
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          component={KeyboardArrowDown}
          color="inherit"
          fontSize="inherit"
        />
      </Box>
    </Box>
  );
};

export default ScrollIconAnimation;

const _styles = (
  fontSize: ResponsiveStyleValue<Properties["fontSize"]> = { xs: "1rem" },
  color: "primary" | "secondary" = "primary"
) =>
  stylesheet.create({
    root: {
      cursor: "pointer",
      fontSize: fontSize,
      color: (theme) => theme.palette[color].main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    },

    arrowBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      "& svg:first-of-type": {
        mt: "-15%",
      },

      "& svg:not(:first-of-type)": {
        mt: "-47.5%",
      },
    },
  });
