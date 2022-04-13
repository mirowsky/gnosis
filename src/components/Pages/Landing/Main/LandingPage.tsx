import { Box } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
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

      <DefenseSection
        {...DefenseSectionProps}
        sx={{
          bgcolor: (theme) => theme.palette.bg.primary,
          px: (theme) => theme.spacing(6),
          py: (theme) => theme.spacing(8),
        }}
      />

      <AboutSection
        {...AboutSectionProps}
        sx={{
          py: (theme) => theme.spacing(8),
          px: (theme) => ({ xs: theme.spacing(4) }),
        }}
      />

      <CourseSection
        {...CourseSectionProps}
        sx={{
          bgcolor: (theme) => theme.palette.bg.primary,
          py: (theme) => theme.spacing(8),
        }}
      />
      <DynamicSections {...DynamicSectionsProps} />
    </Box>
  );
};

export default LandingPage;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  defenseSectionBox: {},

  courseSectionBox: {},
});
