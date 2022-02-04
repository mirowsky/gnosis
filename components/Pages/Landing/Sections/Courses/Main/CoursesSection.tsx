import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import CourseSlider, { CourseSliderProps } from "../CourseSlider/CourseSlider";
import CourseTabs, { CourseTabsProps } from "../CourseTabs/CourseTabs";

export type CourseSectionProps = {
  CourseTabsProps: CourseTabsProps;
  CourseSliderProps: CourseSliderProps;
};

const CourseSection = ({
  CourseSliderProps,
  CourseTabsProps,
}: CourseSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.tabsOuterContainer}>
        <Box sx={styles.tabsContainer}>
          <CourseTabs {...CourseTabsProps} />
        </Box>
      </Box>

      <CourseSlider {...CourseSliderProps} />
    </Box>
  );
};

export default CourseSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    overflow: "hidden",
  },

  tabsOuterContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    py: (theme) => theme.spacing(7),
  },

  tabsContainer: {
    width: "50%",
  },
});
