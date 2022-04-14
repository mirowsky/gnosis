import { Box, Container } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import SyllabusSection, {
  SyllabusSectionProps,
} from "../../components/Syllabus/SyllabusSection";
import CourseHeroSection, {
  CourseHeroSectionProps,
} from "../Hero/CourseHeroSection";
import OverviewSection, {
  OverviewSectionProps,
} from "../Overview/OverviewSection";

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
