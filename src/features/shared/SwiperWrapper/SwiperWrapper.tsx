import { Box, BoxProps } from "@mui/material";
import React from "react";
import { Pagination, SwiperOptions, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/lazy";

type SwiperModule = {};

export type SwiperSlideData = {
  isActive: boolean;
  isVisible: boolean;
  isDuplicate: boolean;
  isPrev: boolean;
  isNext: boolean;
  index: number;
};

export type SwiperGenericWrapperProps<C> = {
  component: React.FC<C>;
  list?: C[];
  SwiperProps?: Omit<SwiperOptions, "width" | "height">;
  sx?: Omit<BoxProps["sx"], "width">;
  modules?: SwiperModule[];
};
/**
 *
 * @param component  - A React functional component reference, list type will be inferred based on this parameter component props
 * @param SwiperProps SwiperProps - SwiperJS React wrapper props https://swiperjs.com/react
 * @param list[]  - A list of items that match type of React.FC props
 * @param sx  - Material UI system's box wrapper sx prop made available at v5 https://next.material-ui.com/components/box/#the-sx-prop
 * @returns JSX.Element
 *
 */

export const SwiperGenericWrapper = <T extends {}>({
  component: Component,
  SwiperProps,
  list = [],
  modules = [Pagination, Lazy],
  sx,
  ...rest
}: SwiperGenericWrapperProps<T>) => {
  return (
    <Box
      sx={sx}
      component={Swiper}
      {...rest}
      modules={modules}
      {...SwiperProps}
    >
      {list.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            {(swiperSlide) => {
              return <Component {...value} {...swiperSlide} index={index} />;
            }}
          </SwiperSlide>
        );
      })}
    </Box>
  );
};

export default SwiperGenericWrapper;
