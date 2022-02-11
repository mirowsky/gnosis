import React from "react";

type HTMLComponentSize = {
  width: number;
  height: number;
};

export const useComponentSize = <TNode extends HTMLElement>() => {
  const ref = React.useRef<TNode>(null);

  const [size, setSize] = React.useState<HTMLComponentSize>({
    height: 0,
    width: 0,
  });

  React.useLayoutEffect(() => {
    if (ref.current) {
      setSize({
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });
    }
  }, []);

  return {
    ref: ref,
    width: size.width,
    height: size.height,
  };
};
