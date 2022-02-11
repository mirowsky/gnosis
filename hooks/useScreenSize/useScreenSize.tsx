import React from "react";

type UseScreenSizeOptions = {
  updateOnRezise?: boolean;
};

export const useScreenSize = (
  { updateOnRezise }: UseScreenSizeOptions = { updateOnRezise: false }
) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    if (typeof window !== undefined) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const updateSize = () => {
        setHeight(windowHeight);
        setWidth(windowWidth);
      };

      updateSize();

      if (updateOnRezise) {
        window.addEventListener("resize", updateSize);

        return () => {
          window.removeEventListener("resize", updateSize);
        };
      }
    }
  }, [updateOnRezise]);

  return { width, height };
};

export default useScreenSize;
