import React from "react";

export const useClickAway = (onClickAway: (...args: unknown[]) => void) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const callback = React.useRef(onClickAway);

  React.useEffect(() => {
    callback.current = onClickAway;
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handler = (event: Event) => {
        if (
          ref.current &&
          callback.current &&
          !ref.current.contains(event.target as Node)
        ) {
          callback.current(event);
        }
      };

      document.addEventListener("click", handler);

      return () => {
        document.removeEventListener("click", handler);
      };
    }
  }, []);

  return {
    ref: ref,
  };
};
