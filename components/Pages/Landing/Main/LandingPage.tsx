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
import AboutSection, {
  AboutSectionProps,
} from "../Sections/About/Main/AboutSection";

export type LandingPageProps = {
  HeroSectionProps: HeroProps;
  DefenseSectionProps: DefenseSectionProps;
  CourseSectionProps: CourseSectionProps;
  AboutSectionProps: AboutSectionProps;
  DynamicSectionsProps: DynamicSectionsProps;
};

export const LandingPage = ({
  HeroSectionProps,
  DefenseSectionProps,
  CourseSectionProps,
  AboutSectionProps,
  DynamicSectionsProps,
}: LandingPageProps) => {
  return (
    <Box sx={styles.root}>
      <Hero {...HeroSectionProps} />

      <Box sx={styles.defenseSectionBox}>
        <DefenseSection {...DefenseSectionProps} />
      </Box>

      <Box sx={styles.aboutUsBox}>
        <AboutSection {...AboutSectionProps} />
      </Box>

      <Box sx={styles.courseSectionBox}>
        <CourseSection {...CourseSectionProps} />
      </Box>
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

  aboutUsBox: {
    py: { xs: "4rem" },
  },

  defenseSectionBox: {},

  courseSectionBox: {},
});
