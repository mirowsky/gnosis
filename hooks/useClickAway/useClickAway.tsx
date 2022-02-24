import React from "react";

export const useClickAway = (onClickAway: (...args: unknown[]) => void) => {
  const ref = React.useRef<HTMLElement | null>(null);

  // Favoring this approach instead of just using a React.useCallback to prevent having to add a dependency to the second useEffect that attaches an event listener to the document, kaing it stable and preventing it from having to destruct and attach it again render
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
