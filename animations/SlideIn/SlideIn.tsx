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
  const VARIANTS = React.useMemo(
    () => ANIMATION_VARIANTS(direction),
    [direction]
  );

  return (
    <MotionBox
      variants={VARIANTS}
      initial="initial"
      animate={animate ? "finished" : "initial"}
      sx={{ ...styles.root, ...sx }}
    >
      {children}
    </MotionBox>
  );
};

export default SlideIn;

const styles = stylesheet.create({
  root: {},
});

const ANIMATION_VARIANTS = (
  direction: SlideInProps["direction"] = "up"
): Variants => ({
  initial: {
    opacity: 0,

    ...(direction === "up"
      ? {
          y: 250,
        }
      : direction === "down"
      ? { y: -250 }
      : direction === "left"
      ? { x: 250 }
      : { x: -250 }),
  },

  finished: {
    opacity: 1,
    ...(direction === "up" || direction === "down" ? { y: 0 } : { x: 0 }),
  },
});
