import { MotionBox } from "@workspace/components/utility";
import { ThemeStyles } from "@workspace/types";
import React from "react";

export type SlideGroupInOnScrollProps = {
  children?: React.ReactNode;
  sx?: ThemeStyles;
};

export const SlideGroupInOnScroll = ({
  children,
  sx,
}: SlideGroupInOnScrollProps) => {
  return (
    <MotionBox sx={{ ...sx }}>
      {children &&
        React.Children.map(children, (child) => (
          <MotionBox>
            {React.cloneElement(
              child as React.ReactElement<unknown>,
              {} as typeof MotionBox["defaultProps"]
            )}
          </MotionBox>
        ))}
    </MotionBox>
  );
};

export default SlideGroupInOnScroll;
