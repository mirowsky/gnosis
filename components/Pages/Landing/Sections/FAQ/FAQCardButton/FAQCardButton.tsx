import { ChevronLeft } from "@mui/icons-material";
import { MotionBox } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { Variants } from "framer-motion";
import { Properties } from "csstype";
import { ResponsiveStyleValue } from "@workspace/types";

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
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
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
};

export const FAQCardButton = ({
  open,
  fontSize = { xs: "1rem" },
}: FAQCardButtonProps) => {
  const styles = React.useMemo(() => _styles(open, fontSize), [open, fontSize]);

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

const _styles = (
  open: boolean = false,
  fontSize: FAQCardButtonProps["fontSize"] = { xs: "1rem" }
) =>
  stylesheet.create({
    root: {
      cursor: "pointer",
      borderRadius: "6px",
      fontSize: fontSize,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: { xs: "3em" },
      width: { xs: "4em" },
      transition: "background-color 0.25s ease",
      bgcolor: (theme) =>
        (open && theme.palette.primary.main) ||
        theme.palette.primary.contrastText,

      ...(open && {
        "& > svg": {
          color: (theme) => theme.palette.primary.contrastText,
        },
      }),

      "&:hover": {
        bgcolor: (theme) => theme.palette.primary.main,

        "& > svg": {
          color: (theme) => theme.palette.primary.contrastText,
        },
      },
    },
    chevron: {
      fontSize: "2em",
      pointerEvents: "none",
    },
  });
