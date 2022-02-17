import React from "react";
import { stylesheet } from "@workspace/stylesheet";
import { Box, Button, Container, Typography } from "@mui/material";
import { noop } from "@workspace/utility";
import { Blob } from "@workspace/svg";

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
  id?: string;
};

export const Hero = ({
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
  id,
}: HeroProps) => {
  return (
    <Box sx={styles.root} id={id}>
      <Blob sx={styles.firstBlob} />
      <Blob sx={styles.secondBlob} />

      <Box sx={styles.pattern}></Box>

      <Container maxWidth={"lg"} disableGutters>
        <Box sx={styles.grid}>
          <Box sx={styles.textContainer}>
            <Box sx={styles.mainTextContainer}>
              <Typography
                color="primary"
                variant="h1"
                fontWeight={800}
                sx={styles.mainText}
              >
                {mainText}
              </Typography>
            </Box>
            <Box sx={styles.altTextContainer}>
              <Typography
                color="grey.600"
                variant="h4"
                component="h2"
                sx={styles.altText}
                fontWeight={500}
              >
                {altText}
              </Typography>
            </Box>
            <Box sx={styles.buttonContainer}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={styles.primaryButton}
                onClick={ctaPrimary.onClick}
              >
                {ctaPrimary.label}
              </Button>

              <Button
                size="small"
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
            <Box
              component="img"
              sx={styles.image}
              src={img.src}
              alt={img.alt}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

const styles = stylesheet.create({
  root: {
    display: "flex",
    width: "100%",
    height: "auto",
    maxHeight: "90vh",
    position: "relative",
    overflow: "hidden",
  },

  pattern: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F9FB",
    top: 0,
    left: 0,
    opacity: 0.05,
    zIndex: -1,
    backgroundImage:
      "linear-gradient(#002946 1.6px, transparent 1.6px), linear-gradient(90deg, #002946 1.6px, transparent 1.6px), linear-gradient(#002946 0.8px, transparent 0.8px), linear-gradient(90deg, #002946 0.8px, #F6F9FB 0.8px)",
    backgroundSize: "40px 40px, 40px 40px, 8px 8px, 8px 8px",
    backgroundPosition:
      "-1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px",
  },

  grid: {
    p: (theme) => ({ xs: theme.spacing(4), lg: theme.spacing(4) }),
    pb: (theme) => ({ xs: theme.spacing(4), lg: 0 }),
    display: "grid",
    width: "100%",
    height: "100%",
    alignContent: { xs: "center", lg: "initial" },
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 0.55fr) minmax(0, 0.45fr)",
    },
  },

  // Blobs
  firstBlob: {
    fontSize: { lg: "0.7rem", xl: "1rem" },
    position: "absolute",
    zIndex: -1,
    left: "-10%",
    top: { lg: "-15%", xl: "-35%" },
    filter: { lg: "blur(260px)", xl: "blur(260px)" },
    display: { xs: "none", lg: "block" },
  },
  secondBlob: {
    fontSize: { lg: "1rem", xl: "1.5rem" },
    position: "absolute",
    top: { lg: "-20%", xl: "-35%" },
    right: "-15%",
    zIndex: -1,
    filter: { lg: "blur(225px)", xl: "blur(275px)" },
    display: { xs: "none", lg: "block" },
  },

  //Outer Container
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => ({
      xs: theme.spacing(5),
      sm: theme.spacing(7),
      lg: theme.spacing(5),
    }),
    width: "100%",
    height: "100%",
    justifyContent: { lg: "center" },
    alignItems: { sm: "center", lg: "initial" },
    textAlign: { xs: "center", lg: "initial" },
  },
  imageContainer: {
    display: { xs: "none", lg: "flex" },
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: { xs: "650px" },
  },

  //Inner Container
  mainTextContainer: {},
  altTextContainer: {},
  buttonContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: (theme) => ({ xs: theme.spacing(3) }),
  },

  // Item
  mainText: {
    display: "block",
    maxWidth: { sm: "20ch", lg: "16ch" },
  },
  altText: {
    color: (theme) => theme.palette.grey[800],
    maxWidth: { sm: "27ch" },
    lineHeight: 1.5,
  },
  primaryButton: {},
  secondaryButton: {},
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
