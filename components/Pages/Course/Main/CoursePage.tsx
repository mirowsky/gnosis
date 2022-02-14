import { Box } from "@mui/material";
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

      <OverviewSection {...CourseOverviewSectionProps} />

      <SyllabusSection {...CourseSyllabusSectionProps} />
    </Box>
  );
};

export default CoursePage;

const styles = stylesheet.create({
  root: {},
});
