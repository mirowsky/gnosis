import { ChevronLeft } from "@mui/icons-material";
import { MotionBox } from "@workspace/components/utility";
import React from "react";
import { Variants } from "framer-motion";
import { Properties } from "csstype";
import { ResponsiveStyleValue } from "@workspace/types";
import { FAQCardButtonStyles } from "./FAQCardButton.styles";
const CONTAINER_VARIANTS: Variants = {
  closed: {
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.55)",
  },
  open: {
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
  },
  pressed: {
    scale: 0.9,
  },
  hover: {
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
  },
};
const CHEVRON_VARIANTS: Variants = {
  closed: {
    transform: "rotate(-90deg)",
  },
  open: {
    transform: "rotate(90deg)",
  },
};

export type FAQCardButtonProps = {
  open?: boolean;
  fontSize?: ResponsiveStyleValue<Properties["fontSize"]>;
  inverted?: boolean;
  color?: "primary" | "secondary";
};

export const FAQCardButton = ({
  open,
  fontSize = { xs: "1rem" },
  color = "primary",
  inverted,
}: FAQCardButtonProps) => {
  const styles = React.useMemo(
    () => FAQCardButtonStyles(open, fontSize, inverted, color),
    [open, fontSize, inverted, color]
  );

  return (
    <MotionBox
      variants={CONTAINER_VARIANTS}
      animate={open ? "open" : "closed"}
      whileHover="hover"
      whileTap="pressed"
      initial="closed"
      sx={styles.root}
      role="button"
      aria-labelledby="Toggle button"
    >
      <MotionBox
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={CHEVRON_VARIANTS}
        component={ChevronLeft}
        sx={styles.chevron}
      />
    </MotionBox>
  );
};

export default FAQCardButton;
