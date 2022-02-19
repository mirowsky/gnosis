import { MotionBox } from "@workspace/components/utility";
import { ThemeStyles } from "@workspace/types";
import { Variants } from "framer-motion";
import React from "react";

export type SlideGroupInOnScrollProps = {
  animate?: boolean;
  children?: React.ReactNode;
  sx?: ThemeStyles;
};

export const SlideGroupInOnScroll = ({
  children,
  sx,
  animate,
}: SlideGroupInOnScrollProps) => {
  return (
    <MotionBox
      variants={ANIMATION_VARIANTS}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      transition={{
        staggerChildren: 0.25,
      }}
      sx={{ ...sx }}
    >
      {children &&
        React.Children.map(children, (child) => (
          <MotionBox variants={ANIMATION_VARIANTS}>
            {React.cloneElement(child as React.ReactElement<unknown>, {})}
          </MotionBox>
        ))}
    </MotionBox>
  );
};

export default SlideGroupInOnScroll;

const ANIMATION_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};
