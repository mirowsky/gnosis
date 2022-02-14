import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import CourseSection, {
  CourseSectionProps,
} from "../Sections/Courses/Main/CoursesSection";
import DefenseSection, {
  DefenseSectionProps,
} from "../Sections/Defense/Main/DefenseSection";
import { HeroProps, Hero } from "../Sections/Hero/Main/Hero";

export type LandingPageProps = {
  HeroSectionProps: HeroProps;
  DefenseSectionProps: DefenseSectionProps;
  CourseSectionProps: CourseSectionProps;
};

export const LandingPage = ({
  HeroSectionProps,
  DefenseSectionProps,
  CourseSectionProps,
}: LandingPageProps) => {
  return (
    <Box sx={styles.root}>
      <Hero {...HeroSectionProps} />
      <DefenseSection {...DefenseSectionProps} />
      <CourseSection {...CourseSectionProps} />
    </Box>
  );
};

export default LandingPage;

const styles = stylesheet.create({
  root: {},
});
