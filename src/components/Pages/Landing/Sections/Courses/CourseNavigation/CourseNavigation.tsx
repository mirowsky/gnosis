import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import React from "react";
import { COURSE_SLIDER_TEST_ID } from "../CourseSlider/constants";

export type CourseNavigationButtonProps = {
  id: string;
  ariaLabel?: string;
  color?: "primary" | "secondary";
};

export type CourseNavigationProps = {
  forwardButton: CourseNavigationButtonProps;
  backwardButton: CourseNavigationButtonProps;
};

const CourseNavigation = ({
  backwardButton = {
    id: "next-item-id-replace-this",
    ariaLabel: "Previous item",
    color: "primary",
  },
  forwardButton = {
    id: "next-item-id-replace-this-too",
    ariaLabel: "Next item",
    color: "primary",
  },
}: CourseNavigationProps) => {
  return (
    <Box sx={styles.root}>
      <Fab
        role={"button"}
        aria-labelledby={backwardButton.ariaLabel}
        data-testid={COURSE_SLIDER_TEST_ID.PREV_BUTTON}
        sx={styles.prevButton}
        id={backwardButton.id}
        color={backwardButton.color}
        aria-label="Retroceder slider de cursos"
      >
        <KeyboardArrowRight />
      </Fab>

      <Fab
        role="button"
        aria-labelledby={forwardButton.ariaLabel}
        data-testid={COURSE_SLIDER_TEST_ID.NEXT_BUTTON}
        sx={styles.nextButton}
        id={forwardButton.id}
        color={forwardButton.color}
        aria-label="Avançar slider de cursos"
      >
        <KeyboardArrowRight />
      </Fab>
    </Box>
  );
};

export default CourseNavigation;

const styles = stylesheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "5rem",
  },
  prevButton: {
    "> svg": {
      fontSize: "2.5rem",
      transform: "rotateY(180deg)",
    },
  },
  nextButton: {
    "> svg": {
      fontSize: "2.5rem",
    },
  },
});
