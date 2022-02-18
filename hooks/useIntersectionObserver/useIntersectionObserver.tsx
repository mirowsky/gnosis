import React from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = () => {
  const ref = React.useRef<HTMLElement>(null);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const parentNode = ref.current.parentElement;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry, index) => {
            console.log(entry);
          });
        },
        { root: parentNode }
      );

      observer.observe(ref.current);
    }
  }, []);
};
