import { Box, Container } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import CourseHeroSection, {
  CourseHeroSectionProps,
} from "../Sections/Hero/Main/CourseHeroSection";
import OverviewSection, {
  OverviewSectionProps,
} from "../Sections/Overview/Main/OverviewSection";
import SyllabusSection, {
  SyllabusSectionProps,
} from "../Sections/Syllabus/Main/SyllabusSection";

export type CoursePageProps = {
  CourseHeroSectionProps: CourseHeroSectionProps;
  CourseOverviewSectionProps: OverviewSectionProps;
  CourseSyllabusSectionProps: SyllabusSectionProps;
};

export const CoursePage = ({
  CourseHeroSectionProps,
  CourseOverviewSectionProps,
  CourseSyllabusSectionProps,
}: CoursePageProps) => {
  return (
    <Box sx={styles.root}>
      <CourseHeroSection {...CourseHeroSectionProps} />

      <Container maxWidth="xl">
        <OverviewSection
          {...CourseOverviewSectionProps}
          sx={{ py: (theme) => theme.spacing(10) }}
        />
      </Container>

      <Box sx={{ bgcolor: (theme) => theme.palette.bg.primary }}>
        <Container maxWidth="lg">
          <SyllabusSection
            {...CourseSyllabusSectionProps}
            sx={{
              py: (theme) => ({ xs: theme.spacing(10) }),
              pb: (theme) => ({ lg: theme.spacing(16) }),
            }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default CoursePage;

const styles = stylesheet.create({
  root: {},
});
