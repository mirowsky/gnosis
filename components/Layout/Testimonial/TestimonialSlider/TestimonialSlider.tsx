import stylesheet from "@workspace/stylesheet";
import React from "react";
import { SwiperGenericWrapper } from "@workspace/components/utility";
import TestimonialCard, {
  TestimonialCardProps,
} from "../TestimonialCard/TestimonialCard";

export type TestimonialSliderProps = {
  items: TestimonialCardProps[];
};

const TestimonialSlider = ({ items = [] }: TestimonialSliderProps) => {
  return (
    <SwiperGenericWrapper
      sx={styles.root}
      SwiperProps={{
        slidesPerView: 1.15,
        spaceBetween: 10,
        breakpoints: {
          1024: {
            slidesPerView: 1.5,
          },
          1400: {
            slidesPerView: 1.75,
          },
        },
      }}
      component={TestimonialCard}
      list={items}
    />
  );
};

export default TestimonialSlider;

const styles = stylesheet.create({
  root: {
    position: "relative",
    ".swiper-slide": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      alignItems: "flex-start",
      paddingBottom: "5px",
    },

    "& .swiper-container": {
      height: "auto",
      overflowY: "visible",
    },
  },
});
