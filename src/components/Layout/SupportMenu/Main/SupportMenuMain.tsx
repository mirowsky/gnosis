import { Box } from "@mui/material";
import { MotionBox } from "src/components/Utility";
import stylesheet from "src/theme/stylesheet";
import { ThemeStyles } from "@workspace/types";
import { AnimatePresence, Variants } from "framer-motion";
import React from "react";
import SupportMenu, { SupportMenuProps } from "../Container/SupportMenu";
import {
  ContactDialButton,
  ContactDialButtonProps,
} from "../../ContactDial/ContactDialButton/ContactDialButton";

export type SupportMenuMainProps = {
  open?: boolean;
  SupportMenuProps: SupportMenuProps;
  ContactDialButtonProps: ContactDialButtonProps;
  sx?: ThemeStyles;
};

export const SupportMenuMain = ({
  open = false,
  SupportMenuProps,
  sx,
  ContactDialButtonProps,
}: SupportMenuMainProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <MotionBox
        variants={VARIANTS}
        initial="closed"
        animate={open ? "open" : "closed"}
        transition={{
          staggerChildren: 0.1,
          type: "spring",
          mass: 1,
          stiffness: 300,
          damping: 20,
        }}
      >
        <AnimatePresence>
          {open && (
            <MotionBox variants={VARIANTS} exit={"closed"}>
              <SupportMenu {...SupportMenuProps} />
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>
      <ContactDialButton
        {...ContactDialButtonProps}
        fontSize={{ xs: "1rem" }}
      />
    </Box>
  );
};

export default SupportMenuMain;

const VARIANTS: Variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
};

const styles = stylesheet.create({
  root: {
    position: "relative",
    background: "transparent",
    border: "none",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1em",
  },
});
