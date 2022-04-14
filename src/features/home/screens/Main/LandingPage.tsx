import { Box } from "@mui/material";
import {
  DynamicSections,
  DynamicSectionsProps,
} from "@workspace/components/shared";
import stylesheet from "@workspace/stylesheet";
import AboutSection, { AboutSectionProps } from "../About/AboutSection";
import CourseSection, { CourseSectionProps } from "../Courses/CoursesSection";
import DefenseSection, { DefenseSectionProps } from "../Defense/DefenseSection";
import Hero, { HeroProps } from "../Hero/Hero";

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
