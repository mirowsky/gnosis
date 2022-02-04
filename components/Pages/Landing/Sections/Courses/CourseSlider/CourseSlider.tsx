import stylesheet from "@workspace/stylesheet";
import SwiperGenericWrapper from "../../../../../Utility/SwiperWrapper/SwiperWrapper";
import React from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";
import { Box, Fab } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Navigation, SwiperOptions } from "swiper";
import { COURSE_SLIDER_TEST_ID } from "./constants";

export type CourseSliderProps = {
  items: CourseCardProps[];
  navigation: SwiperOptions["navigation"];
};

const CourseSlider = ({ items = [], navigation = {} }: CourseSliderProps) => {
  return (
    <Box>
      <SwiperGenericWrapper
        component={CourseCard}
        sx={styles.root}
        list={items}
        data-testid={COURSE_SLIDER_TEST_ID.CONTAINER}
        modules={[Navigation]}
        SwiperProps={{
          navigation: navigation,
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
    </Box>
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
      paddingBottom: "5px",
    },

    "& .swiper-container": {
      height: "auto",
      overflowY: "visible",
    },
  },
});
