import { Box, Container } from "@mui/material";
import {
  ContactFormDialog,
  ContactFormDialogProps,
} from "src/components/Common";
import stylesheet from "src/theme/stylesheet";
import React from "react";
import CourseHeroAlt, {
  CourseHeroAltProps,
} from "../Sections/HeroAlt/CourseHeroAlt";
import SyllabusSection, {
  SyllabusSectionProps,
} from "../Sections/Syllabus/Main/SyllabusSection";
import { DEFAULT_CoursePageAlt_TESTING_PROPS } from "./CoursePageAlt.fixture";

export type CoursePageAltProps = {
  CourseHeroAltProps: CourseHeroAltProps;
  CourseSyllabusSectionProps: SyllabusSectionProps;
  ContactFormDialogProps: ContactFormDialogProps;
};

export const CoursePageAlt = ({
  CourseSyllabusSectionProps,
  CourseHeroAltProps,
  ContactFormDialogProps,
}: CoursePageAltProps = DEFAULT_CoursePageAlt_TESTING_PROPS) => {
  return (
    <Box sx={styles.root}>
      <ContactFormDialog {...ContactFormDialogProps} />
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
              textTransform: "capitalize",
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
