import { MotionBox } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import { Variants } from "framer-motion";
import React from "react";

export type SlideInProps = {
  children?: React.ReactNode;
  animate?: boolean;
  sx?: ThemeStyles;
  direction?: "left" | "right" | "up" | "down";
};

export const SlideIn = ({
  animate,
  children,
  sx,
  direction = "up",
}: SlideInProps) => {
  return <MotionBox sx={{ ...styles.root, ...sx }}>{children}</MotionBox>;
};

export default SlideIn;

const styles = stylesheet.create({
  root: {},
});

const ANIMATION_VARIANTS = (
  direction: SlideInProps["direction"] = "up"
): Variants => ({
  initial: {
    ...(direction === "up"
      ? {
          y: -250,
        }
      : direction === "down"
      ? { y: 250 }
      : direction === "left"
      ? { x: 250 }
      : { x: -250 }),
  },

  finished: {
    ...(direction === "up" || direction === "down" ? { y: 0 } : { x: 0 }),
  },
});
