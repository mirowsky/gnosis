import React from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const observer = new IntersectionObserver((entries, _observer) => {
        entries.forEach((entry, _index) => {
          setIsIntersecting(entry.isIntersecting);
        });
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return { ref: ref, isIntersecting: isIntersecting };
};
