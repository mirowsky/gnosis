import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import TestimonialSlider, {
  TestimonialSliderProps,
} from "../TestimonialSlider/TestimonialSlider";

export type TestimonialSectionProps = {
  sectionTitle: string;
  TestimonialSliderProps: TestimonialSliderProps;
  sx?: ThemeStyles;
};

export const TestimonialSection = ({
  TestimonialSliderProps = { items: [] },
  sectionTitle = "O que nossos alunos dizem sobre o Instituto Gnosis",
  sx,
}: TestimonialSectionProps) => {
  return TestimonialSliderProps.items.length > 0 ? (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h2" color="primary" sx={styles.title}>
          {sectionTitle}
        </Typography>
      </Box>

      <Box sx={styles.sliderContainer}>
        <TestimonialSlider {...TestimonialSliderProps} />
      </Box>
    </Box>
  ) : null;
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
    px: { xs: "1rem" },
  },
  sliderContainer: {
    width: "100%",
    pl: { xs: "0.75rem", sm: 0 },
  },
  title: {
    maxWidth: "24ch",
    fontWeight: "bold",
  },
});
