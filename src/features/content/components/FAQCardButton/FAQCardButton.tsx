import { ChevronLeft } from "@mui/icons-material";
import { MotionBox } from "@workspace/components/shared";
import React from "react";
import { Variants } from "framer-motion";
import { Properties } from "csstype";
import { ResponsiveStyleValue, ThemeStyles } from "@workspace/types";
import { FAQCardButtonStyles } from "./FAQCardButton.styles";
const CONTAINER_VARIANTS: Variants = {
  closed: {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.55)",
  },
  open: {
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
  },
  pressed: {
    scale: 0.9,
  },
  hover: {
    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
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
  onClick?: (...args: unknown[]) => void;
  sx?: ThemeStyles;
};

export const FAQCardButton = ({
  open,
  fontSize = { xs: "1rem" },
  color = "primary",
  inverted,
  onClick,
  sx,
}: FAQCardButtonProps) => {
  const styles = React.useMemo(
    () => FAQCardButtonStyles(open, fontSize, inverted, color),
    [open, fontSize, inverted, color]
  );

  return (
    <MotionBox
      onClick={(event) => {
        // will propagate to children otherwise and make it so we have to pass the click event to the children too
        event.stopPropagation();
        onClick!();
      }}
      variants={CONTAINER_VARIANTS}
      animate={open ? "open" : "closed"}
      whileHover="hover"
      whileTap="pressed"
      initial="closed"
      sx={{ ...styles.root, ...sx }}
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
