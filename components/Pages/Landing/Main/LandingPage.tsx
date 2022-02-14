import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import DynamicSections, {
  DynamicSectionsProps,
} from "../../../Layout/DynamicSections/DynamicSections";
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
  DynamicSectionsProps: DynamicSectionsProps;
};

export const LandingPage = ({
  HeroSectionProps,
  DefenseSectionProps,
  CourseSectionProps,
  DynamicSectionsProps,
}: LandingPageProps) => {
  return (
    <Box sx={styles.root}>
      <Hero {...HeroSectionProps} />
      <DefenseSection {...DefenseSectionProps} />
      <CourseSection {...CourseSectionProps} />
      <DynamicSections {...DynamicSectionsProps} />
    </Box>
  );
};

export default LandingPage;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "6rem" },
  },
});
