import { Box, Button, ButtonProps, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import AboutImages from "../AboutImages/AboutImages";
import { DEFAULT_AboutSection_TESTING_PROPS } from "./AboutSection.fixture";

export type AboutSectionProps = {
  sectionTitle: string;
  aboutText: string;
  ButtonProps?: ButtonProps;
  sx?: ThemeStyles;
};

export const AboutSection = ({
  aboutText,
  sectionTitle,
  ButtonProps,
  sx,
}: AboutSectionProps = DEFAULT_AboutSection_TESTING_PROPS) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.textContainer}>
        <Typography sx={styles.sectionTitle} variant="h1" component="h2">
          {sectionTitle}
        </Typography>
        <Typography variant="h4" component="p" sx={styles.aboutText}>
          {aboutText}
        </Typography>

        {ButtonProps && (
          <Button
            variant="contained"
            color="primary"
            sx={styles.button}
            {...ButtonProps}
          ></Button>
        )}
      </Box>

      <Box sx={styles.imageContainer}>
        <AboutImages />
      </Box>
    </Box>
  );
};

export default AboutSection;

const styles = stylesheet.create({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: { xs: "5em" },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: (theme) => ({ xs: theme.spacing(6) }),
  },
  imageContainer: {
    maxWidth: "45vw",
    margin: "auto",
    display: { xs: "none", lg: "block" },
  },

  sectionTitle: {
    fontWeight: 700,
    maxWidth: "20ch",
    color: (theme) => theme.palette.primary.main,
  },
  aboutText: {
    color: (theme) => theme.palette.grey[700],
    fontWeight: 700,
    maxWidth: "50ch",
    lineHeight: 1.6,
  },
  button: {},
});
