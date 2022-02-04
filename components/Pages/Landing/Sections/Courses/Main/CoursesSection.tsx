import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import CourseNavigation, {
  CourseNavigationProps,
} from "../CourseNavigation/CourseNavigation";
import CourseSlider, { CourseSliderProps } from "../CourseSlider/CourseSlider";
import CourseTabs, { CourseTabsProps } from "../CourseTabs/CourseTabs";

export type CourseSectionProps = {
  CourseTabsProps: CourseTabsProps;
  CourseSliderProps: CourseSliderProps;
  CourseNavigationProps: CourseNavigationProps;
};

const CourseSection = ({
  CourseSliderProps,
  CourseTabsProps,
  CourseNavigationProps,
}: CourseSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.tabsOuterContainer}>
        <Box sx={styles.tabsContainer}>
          <CourseTabs {...CourseTabsProps} />
        </Box>
      </Box>

      <CourseSlider {...CourseSliderProps} />

      <Box sx={styles.navigationContainer}>
        <CourseNavigation {...CourseNavigationProps} />
      </Box>
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
    minWidth: { xs: "100%", sm: "40%" },
    width: "auto",
    px: (theme) => ({ xs: theme.spacing(2), sm: 0 }),
  },

  navigationContainer: {
    py: (theme) => theme.spacing(5),
  },
});
