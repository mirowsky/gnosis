import { Box, Container } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import CourseHeroAlt, {
  CourseHeroAltProps,
} from "../Sections/HeroAlt/CourseHeroAlt";
import OverviewSection, {
  OverviewSectionProps,
} from "../Sections/Overview/Main/OverviewSection";
import SyllabusSection, {
  SyllabusSectionProps,
} from "../Sections/Syllabus/Main/SyllabusSection";
import { DEFAULT_CoursePageAlt_TESTING_PROPS } from "./CoursePageAlt.fixture";

export type CoursePageAltProps = {
  CourseHeroAltProps: CourseHeroAltProps;
  CourseOverviewSectionProps: OverviewSectionProps;
  CourseSyllabusSectionProps: SyllabusSectionProps;
};

export const CoursePageAlt = ({
  CourseOverviewSectionProps,
  CourseSyllabusSectionProps,
  CourseHeroAltProps,
}: CoursePageAltProps = DEFAULT_CoursePageAlt_TESTING_PROPS) => {
  return (
    <Box sx={styles.root}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          py: { xs: 6 },
          bgcolor: (theme) => theme.palette.bg.primary,
        }}
      >
        <Container maxWidth="lg" sx={{ zIndex: 10 }}>
          <CourseHeroAlt {...CourseHeroAltProps} />
        </Container>
      </Box>

      <Box>
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

export default CoursePageAlt;

const styles = stylesheet.create({
  root: {},
});
