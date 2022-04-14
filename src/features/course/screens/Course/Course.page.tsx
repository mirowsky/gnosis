import React from "react";
import { Box, Container } from "@mui/material";
import { CourseCollectionType } from "@workspace/types";
import { CourseHeroProxy } from "./CourseHero.proxy";
import { CourseSyllabusProxy } from "./CourseSyllabus.proxy";
import { ContactFormDialogProxy } from "./ContactFormDialog.proxy";

export type CoursePageProps = {
  course: CourseCollectionType;
};

export const Course = ({ course }: CoursePageProps) => {
  const [dialogFormOpen, setDialogFormOpen] = React.useState(false);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          py: { xs: 6 },
          bgcolor: (theme) => theme.palette.bg.primary,
        }}
      >
        <Container maxWidth="lg" sx={{ zIndex: 10 }}>
          <CourseHeroProxy
            primaryAction={() => setDialogFormOpen(true)}
            course={course}
          />
        </Container>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <CourseSyllabusProxy
            course={course}
            sx={{
              py: (theme) => ({ xs: theme.spacing(10) }),
              pb: (theme) => ({ lg: theme.spacing(16) }),
              textTransform: "capitalize",
            }}
          />
        </Container>
      </Box>

      <ContactFormDialogProxy
        open={dialogFormOpen}
        setOpen={setDialogFormOpen}
        course={course}
      />
    </Box>
  );
};
