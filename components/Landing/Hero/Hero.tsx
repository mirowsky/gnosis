import React from "react";
import stylesheet from "@workspace/stylesheet";
import { Box, Button, Typography } from "@mui/material";
import { noop } from "@workspace/utility";

export type HeroProps = {
  mainText: string;
  altText: string;
  ctaPrimary: {
    label: string;
    onClick: (...args: unknown[]) => void;
  };
  ctaSecondary: {
    label: string;
    onClick: (...args: unknown[]) => void;
  };
  img: {
    src: string;
    alt: string;
  };
};

const Hero = ({
  altText = "Lorem ipsum secondary",
  ctaPrimary = {
    label: "Primary button",
    onClick: noop,
  },
  ctaSecondary = {
    label: "Secondary button",
    onClick: noop,
  },
  img = {
    alt: "Alt text for hero image, change this",
    src: "https://via.placeholder.com/1500",
  },
  mainText = "Impact text that should invite your users to explore your products",
}: HeroProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        <Box sx={styles.textContainer}>
          <Box sx={styles.mainTextContainer}>
            <Typography variant="h1" fontWeight="bold" sx={styles.mainText}>
              {mainText}
            </Typography>
          </Box>
          <Box sx={styles.altTextContainer}>
            <Typography variant="h4" sx={styles.altText} fontWeight={600}>
              {altText}
            </Typography>
          </Box>
          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.primaryButton}
              onClick={ctaPrimary.onClick}
            >
              {ctaPrimary.label}
            </Button>

            <Button
              variant="outlined"
              color="primary"
              sx={styles.secondaryButton}
              onClick={ctaSecondary.onClick}
            >
              {ctaSecondary.label}
            </Button>
          </Box>
        </Box>

        <Box sx={styles.imageContainer}>
          <Box component="img" sx={styles.image} src={img.src} alt={img.alt} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

const styles = stylesheet.create({
  root: {
    display: "flex",
    width: "100%",
    height: "auto",
  },

  grid: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 0.5fr) minmax(0, 0.5fr)",
    },
  },
  //Outer Container
  textContainer: {},
  imageContainer: {},

  //Inner Container
  mainTextContainer: {},
  altTextContainer: {},
  buttonContainer: {},

  // Item
  mainText: {},
  altText: {},
  primaryButton: {},
  secondaryButton: {},
  image: {},
});
