import React from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const _observer = new IntersectionObserver((entries, __observer) => {
        entries.forEach((entry, _index) => {
          setIsIntersecting(entry.isIntersecting);
        });
      });

      _observer.observe(ref.current);

      return () => {
        _observer.disconnect();
      };
    }
  }, []);

  return { ref: ref, isIntersecting: isIntersecting };
};
