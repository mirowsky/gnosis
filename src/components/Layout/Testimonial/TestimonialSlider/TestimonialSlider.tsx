import stylesheet from "src/theme/stylesheet";
import React from "react";
import { SwiperGenericWrapper } from "src/components/Utility";
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
            slidesPerView: items.length > 1 ? 1.5 : 1,
          },
          1400: {
            slidesPerView: items.length > 1 ? 1.75 : 1,
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
