import stylesheet from "@workspace/stylesheet";
import SwiperGenericWrapper from "../../../../../Utility/SwiperWrapper/SwiperWrapper";
import React from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";

export type CourseSliderProps = {
  items: CourseCardProps[];
};

const CourseSlider = ({ items = [] }: CourseSliderProps) => {
  return (
    <SwiperGenericWrapper
      component={CourseCard}
      sx={styles.root}
      list={items}
      SwiperProps={{
        navigation: { prevEl: "#next", nextEl: "#prev" },
        slidesPerView: 1,
        initialSlide: 1,
        autoplay: false,
        watchOverflow: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            pagination: { clickable: true },
            spaceBetween: 0,
          },
        },
      }}
    />
  );
};

export default CourseSlider;

const styles = stylesheet.create({
  root: {
    position: "relative",
    ".swiper-slide": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      alignItems: "flex-start",
      paddingBottom: "30px",
    },

    "& .swiper-container": {
      height: "auto",
      overflowY: "visible",
    },
  },
});
