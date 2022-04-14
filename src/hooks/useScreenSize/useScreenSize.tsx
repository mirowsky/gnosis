import React from "react";
import { useIsomorphicEffect } from "../useIsomorphicEffect/useIsomorphicEffect";

export const useScreenSize = (updateOnResize = false) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useIsomorphicEffect(() => {
    if (typeof window !== undefined) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const updateSize = () => {
        setHeight(windowHeight);
        setWidth(windowWidth);
      };

      updateSize();

      if (updateOnResize) {
        window.addEventListener("resize", updateSize);

        return () => {
          window.removeEventListener("resize", updateSize);
        };
      }
    }
  }, [updateOnResize]);

  return { width: width, height: height };
};

export default useScreenSize;
