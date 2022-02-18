import React from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [observer, setObserver] = React.useState<IntersectionObserver>();
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const _observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, _index) => {
          setIsIntersecting(entry.isIntersecting);
        });
      });

      _observer.observe(ref.current);

      setObserver(_observer);

      return () => {
        _observer.disconnect();
      };
    }
  }, []);

  return { ref: ref, isIntersecting: isIntersecting };
};
