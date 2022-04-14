/* eslint-disable react/display-name */
import { MotionBox } from "@workspace/components/shared";
import { ThemeStyles } from "@workspace/types";
import { TransitionPreset, transitionPresetMap } from "../presets";
import { Variants } from "framer-motion";
import { ViewportOptions } from "framer-motion/types/motion/features/viewport/types";
import React from "react";

export type SlideInV2Props = {
  animate: "scroll" | boolean;
  viewport?: ViewportOptions;
  amount?: number;
  direction?: "left" | "right" | "up" | "down";
  sx?: ThemeStyles;
  preset?: TransitionPreset;
  children?: React.ReactNode;
};

export const SlideInV2 = React.forwardRef<HTMLDivElement, SlideInV2Props>(
  (
    {
      amount,
      children,
      direction,
      viewport,
      animate = true,
      sx,
      preset = "default",
    },
    ref
  ) => {
    const VARIANTS = React.useMemo(
      () => ANIMATION_VARIANTS(direction, amount),
      [direction, amount]
    );

    return animate === "scroll" ? (
      <MotionBox
        component="div"
        ref={ref}
        variants={VARIANTS}
        initial="initial"
        whileInView={"finished"}
        viewport={viewport}
        sx={{ ...sx }}
        transition={transitionPresetMap[preset]}
      >
        {children}
      </MotionBox>
    ) : (
      <MotionBox
        component="div"
        ref={ref}
        variants={VARIANTS}
        initial="initial"
        animate={animate ? "finished" : "initial"}
        viewport={viewport}
        sx={{ ...sx }}
        transition={transitionPresetMap[preset]}
      >
        {children}
      </MotionBox>
    );
  }
);

export default SlideInV2;

const ANIMATION_VARIANTS = (
  direction: SlideInV2Props["direction"] = "up",
  amount: number = 250
): Variants => ({
  initial: {
    opacity: 0,

    ...(direction === "up"
      ? {
          y: amount,
        }
      : direction === "down"
      ? { y: -amount }
      : direction === "left"
      ? { x: amount }
      : { x: -amount }),
  },

  finished: {
    opacity: 1,
    ...(direction === "up" || direction === "down" ? { y: 0 } : { x: 0 }),
  },
});
