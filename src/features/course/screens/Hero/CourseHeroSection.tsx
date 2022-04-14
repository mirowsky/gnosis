import { Box, Button, ButtonProps, Chip, Typography } from "@mui/material";
import { ScrollIconAnimation } from "@workspace/components/shared";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import { DEFAULT_CourseHeroSection_TESTING_PROPS } from "./CourseHeroSection.fixture";

export type CourseHeroSectionProps = {
  title: string;
  subtitle: string;
  chipLabel: string;
  img: {
    src: string;
    alt: string;
  };
  PrimaryButtonProps?: ButtonProps;
  SecondaryButtonProps?: ButtonProps;
  sx?: ThemeStyles;
};

export const CourseHeroSection = ({
  chipLabel,
  subtitle,
  title,
  PrimaryButtonProps,
  SecondaryButtonProps,
  img,
  sx,
}: CourseHeroSectionProps = DEFAULT_CourseHeroSection_TESTING_PROPS) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box
        sx={styles.picture}
        component="img"
        role="img"
        src={img.src}
        alt={img.alt}
      />

      <Box sx={styles.overlay} role="presentation" />

      <Box sx={styles.container}>
        <Box sx={styles.infoContainer}>
          <Chip color="secondary" sx={styles.chip} label={chipLabel} />
          <Typography variant="h1" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="h3" component="h2" sx={styles.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        <Box sx={styles.scrollButtonContainer}>
          <ScrollIconAnimation fontSize={{ xs: "1.5rem" }} />
        </Box>

        <Box sx={styles.actionsContainer}>
          <Button
            sx={styles.primaryButton}
            variant="contained"
            color="primary"
            {...PrimaryButtonProps}
          />
          <Button
            variant="contained"
            color="primary"
            sx={styles.secondaryButton}
            {...SecondaryButtonProps}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseHeroSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    minHeight: { xs: "85vh" },
    position: "relative",
    alignItems: "center",
    display: "flex",
  },
  picture: {
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  container: {
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    width: "100%",
    p: (theme) => ({ xs: theme.spacing(4) }),
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(5),
    alignItems: "center",
  },
  scrollButtonContainer: {
    py: (theme) => ({ xs: theme.spacing(6) }),
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: (theme) => theme.spacing(5),
    flexDirection: { xs: "column", lg: "row" },
  },

  chip: {},
  title: {
    fontWeight: 700,
    color: (theme) => theme.palette.secondary.main,
  },
  subtitle: {
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 700,
    maxWidth: "70ch",
    fontSize: { xs: "1rem" },
    lineHeight: 1.7,
  },

  primaryButton: {},
  secondaryButton: {
    width: { xs: "100%", lg: "initial" },
  },
});
