import stylesheet from "@workspace/stylesheet";
import SwiperGenericWrapper from "../../../../../Utility/SwiperWrapper/SwiperWrapper";
import React from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";
import { Box, Fab } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Navigation } from "swiper";

export type CourseSliderProps = {
  items: CourseCardProps[];
};

const CourseSlider = ({ items = [] }: CourseSliderProps) => {
  return (
    <Box>
      <SwiperGenericWrapper
        component={CourseCard}
        sx={styles.root}
        list={items}
        modules={[Navigation]}
        SwiperProps={{
          navigation: { prevEl: "#prev", nextEl: "#next" },
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

      <Box sx={styles.navigationContainer}>
        <Fab sx={styles.prevButton} id="prev" color="primary">
          <KeyboardArrowRight />
        </Fab>

        <Fab sx={styles.nextButton} id="next" color="primary">
          <KeyboardArrowRight />
        </Fab>
      </Box>
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
      paddingBottom: "30px",
    },

    "& .swiper-container": {
      height: "auto",
      overflowY: "visible",
    },
  },

  navigationContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "5rem",
  },
  prevButton: {
    "> svg": {
      fontSize: "2.5rem",
      transform: "rotateY(180deg)",
    },
  },
  nextButton: {
    "> svg": {
      fontSize: "2.5rem",
    },
  },
});
