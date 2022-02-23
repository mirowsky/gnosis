import React, { RefObject } from "react";
import { useIsomorphicEffect } from "..";

export const useIntersectionObserver = <TElement extends never>(
  options?: IntersectionObserverInit & { once?: boolean }
) => {
  const ref = React.useRef<TElement>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useIsomorphicEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const observer = new IntersectionObserver(
        (entries, _observer) => {
          entries.forEach((entry, _index) => {
            setIsIntersecting(entry.isIntersecting);

            if (options?.once && entry.intersectionRatio > 0) {
              observer.unobserve(ref.current as unknown as HTMLElement);
            }
          });
        },
        {
          root: options?.root,
          rootMargin: options?.rootMargin,
          threshold: options?.threshold,
        }
      );

      observer.observe(ref.current as unknown as HTMLElement);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return { ref: ref, isIntersecting: isIntersecting };
};
