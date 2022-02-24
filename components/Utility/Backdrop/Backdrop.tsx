import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import { MotionBox } from "..";

export type BackdropProps = {
  children?: React.ReactNode;
  sx?: ThemeStyles;
  open?: boolean;
};

export const Backdrop = ({ children, sx, open }: BackdropProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={open ? { opacity: 1 } : { opacity: 0 }}
      sx={{ ...styles.root, ...sx }}
    >
      {children}
    </MotionBox>
  );
};

export default Backdrop;

const styles = stylesheet.create({
  root: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
