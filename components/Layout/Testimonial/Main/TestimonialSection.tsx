import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import TestimonialSlider, {
  TestimonialSliderProps,
} from "../TestimonialSlider/TestimonialSlider";

export type TestimonialSectionProps = {
  sectionTitle: string;
  TestimonialSliderProps: TestimonialSliderProps;
};

export const TestimonialSection = ({
  TestimonialSliderProps = { items: [] },
  sectionTitle = "O que nossos alunos dizem sobre o Instituto Gnosis",
}: TestimonialSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h2" color="primary" sx={styles.title}>
          {sectionTitle}
        </Typography>
      </Box>

      <Box sx={styles.sliderContainer}>
        <TestimonialSlider {...TestimonialSliderProps} />
      </Box>
    </Box>
  );
};

export default TestimonialSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (theme) => ({ xs: theme.spacing(8) }),
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  sliderContainer: {
    width: "100%",
  },
  title: {
    maxWidth: "24ch",
    fontWeight: "bold",
  },
});
