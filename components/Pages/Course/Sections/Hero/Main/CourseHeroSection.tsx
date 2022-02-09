import { Box, ButtonProps, Chip, Typography } from "@mui/material";
import { ScrollIconAnimation } from "@workspace/animations";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseHeroSectionProps = {
  title: string;
  subtitle: string;
  chipLabel: string;
  PrimaryButtonProps?: ButtonProps;
  SecondaryButtonProps?: ButtonProps;
};

export const CourseHeroSection = ({
  chipLabel,
  subtitle,
  title,
  PrimaryButtonProps,
  SecondaryButtonProps,
}: CourseHeroSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.infoContainer}>
          <Chip sx={styles.chip} label={chipLabel} />
          <Typography variant="h1" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="h3" component="h2" sx={styles.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        <Box sx={styles.scrollButtonContainer}>
          <ScrollIconAnimation />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseHeroSection;

const styles = stylesheet.create({
  root: {},
  picture: {},
  overlay: {},

  container: {},
  infoContainer: {},
  scrollButtonContainer: {},
  actionsContainer: {},

  chip: {},
  title: {},
  subtitle: {},

  primaryButton: {},
  secondaryButton: {},
});
