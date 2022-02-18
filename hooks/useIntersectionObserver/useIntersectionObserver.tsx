import React from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [observer, setObserver] = React.useState<IntersectionObserver>();

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const parentNode = ref.current.parentElement;

      const _observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry, index) => {
            console.log(entry);
          });
        },
        { root: parentNode }
      );

      _observer.observe(ref.current);

      setObserver(_observer);

      return () => {
        _observer.disconnect();
      };
    }
  }, []);

  return { ref: ref, observer: observer };
};
