import { useClickAway } from "@workspace/hooks";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import { MotionBox } from "..";

export type BackdropProps = {
  children?: React.ReactNode;
  sx?: ThemeStyles;
  open?: boolean;
  onClickAway?: (...args: unknown[]) => void;
};

export const Backdrop = ({
  children,
  sx,
  open,
  onClickAway = () => {},
}: BackdropProps) => {
  const { ref } = useClickAway(onClickAway);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={open ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.65 }}
      sx={{ ...styles.root, ...sx }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(
          child as React.ReactElement<unknown>,
          { ref: ref } as React.DetailedHTMLProps<
            React.HTMLAttributes<unknown>,
            unknown
          >
        );
      })}
    </MotionBox>
  );
};

<div></div>;
export default Backdrop;

const styles = stylesheet.create({
  root: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 5000,
    "@supports (backdrop-filter: blur(12px))": {
      backdropFilter: "blur(15px)",
    },

    "@supports not (backdrop-filter: blur(12px))": {
      backgroundColor: "rgba(255, 255 ,255, 0.65)",
    },

    "& :first-child": {
      zIndex: 5001,
    },
  },
});
