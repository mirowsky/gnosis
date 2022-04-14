import { useIntersectionObserver } from "src/hooks";
import React from "react";
import { SlideIn, SlideInProps } from "..";

export interface SlideInOnScrollProps extends Omit<SlideInProps, "animate"> {
  options?: Parameters<typeof useIntersectionObserver>;
}

export const SlideInOnScroll = ({
  options,
  children,
  ...rest
}: SlideInOnScrollProps) => {
  const { isIntersecting, ref } = useIntersectionObserver();

  return (
    <SlideIn ref={ref} animate={isIntersecting} {...rest}>
      {children}
    </SlideIn>
  );
};

export default SlideInOnScroll;
