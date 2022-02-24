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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 5000,

    "& :first-child": {
      zIndex: 5001,
    },
  },
});
