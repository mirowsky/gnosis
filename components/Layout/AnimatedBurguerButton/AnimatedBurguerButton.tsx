import React from "react";
import { stylesheet } from "@workspace/stylesheet";
import { SxProps } from "@mui/system";
import { Box, Theme } from "@mui/material";
import { useAnimation } from "framer-motion";
import { MotionBox } from "@workspace/components/utility";

export interface AnimatedBurguerButtonProps {
  open: boolean;
}

export function AnimatedBurguerMenu({
  open = false,
}: AnimatedBurguerButtonProps) {
  const firstLineAnimation = useAnimation();
  const secondLineAnimation = useAnimation();
  const thirdLineAnimation = useAnimation();

  const openingSequenceSpring = React.useCallback(async () => {
    firstLineAnimation.start(
      {
        translateY: "2em",
        rotate: "45deg",
      },
      { mass: 4, damping: 70, stiffness: 1100, type: "spring" }
    );

    secondLineAnimation.start(
      {
        width: "100%",
        rotate: "-45deg",
      },
      { mass: 4, damping: 70, stiffness: 1100, type: "spring" }
    );

    thirdLineAnimation.start(
      {
        opacity: 0,
        translateY: "-2em",
      },
      {
        mass: 1,
        damping: 500,
        stiffness: 1500,
        restDelta: 10,
        type: "spring",
      }
    );
  }, [firstLineAnimation, secondLineAnimation, thirdLineAnimation]);

  const closingSequence = React.useCallback(async () => {
    firstLineAnimation.start({
      translateY: 0,
      rotate: 0,
    });

    secondLineAnimation.start({
      rotate: 0,
      width: "80%",
    });

    thirdLineAnimation.start({
      translateY: 0,
      opacity: 1,
    });
  }, [firstLineAnimation, secondLineAnimation, thirdLineAnimation]);

  React.useEffect(() => {
    open ? openingSequenceSpring() : closingSequence();
  }, [closingSequence, open, openingSequenceSpring]);

  return (
    <Box sx={styles.root}>
      <MotionBox
        data-testid="animated-burguer-container"
        sx={styles.lineContainer}
      >
        <MotionBox animate={firstLineAnimation} sx={styles.firstLine} />
        <MotionBox animate={secondLineAnimation} sx={styles.secondLine} />
        <MotionBox animate={thirdLineAnimation} sx={styles.thirdLine} />
      </MotionBox>
    </Box>
  );
}

const lineBaseStyles: SxProps<Theme> = {
  height: { xs: "1em" },
  borderRadius: { xs: "12px" },
  bgcolor: (theme) => theme.palette.grey[700],
  fontSize: "inherit",
} as const;

const styles = stylesheet.create({
  root: {
    fontSize: "0.35rem",
  },

  lineContainer: {
    width: { xs: "8em" },
    height: { xs: "auto" },
    display: { xs: "flex" },
    position: "relative",
    cursor: "pointer",
    flexDirection: { xs: "column" },
    gap: { xs: "1em" },
    alignItems: { xs: "flex-end" },
  },

  firstLine: {
    ...lineBaseStyles,
    width: { xs: "100%" },
  },

  secondLine: {
    ...lineBaseStyles,
    width: { xs: "80%" },
  },

  thirdLine: {
    ...lineBaseStyles,
    width: { xs: "60%" },
  },
});
