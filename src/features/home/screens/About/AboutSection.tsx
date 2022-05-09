import { Box, Button, ButtonProps, Typography } from "@mui/material";
import { MotionBox } from "@workspace/components/shared";
import { useIntersectionObserver } from "@workspace/hooks";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import { DEFAULT_AboutSection_TESTING_PROPS } from "./AboutSection.fixture";
import AboutImages from "../../components/AboutImages/AboutImages";

export type AboutSectionProps = {
  sectionTitle: string;
  aboutText: string;
  ButtonProps?: ButtonProps;
  sx?: ThemeStyles;
  id?: string;
};

export const AboutSection = ({
  aboutText,
  sectionTitle,
  ButtonProps,
  sx,
  id,
}: AboutSectionProps = DEFAULT_AboutSection_TESTING_PROPS) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    once: true,
    rootMargin: "-200px 0px",
  });

  return (
    <Box ref={ref} id={id} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.pattern} />
      <Box sx={styles.textContainer}>
        <MotionBox
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 280,
            damping: 60,
          }}
          viewport={{
            once: true,
            amount: "all",
          }}
        >
          <Typography sx={styles.sectionTitle} variant="h2">
            {sectionTitle}
          </Typography>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 280,
            damping: 60,
          }}
          viewport={{
            once: true,
            amount: "some",
          }}
        >
          <Typography variant="h6" component="p" sx={styles.aboutText}>
            {aboutText}
          </Typography>
        </MotionBox>

        {ButtonProps && (
          <Button
            variant="contained"
            color="primary"
            sx={styles.button}
            {...ButtonProps}
          ></Button>
        )}
      </Box>

      <Box sx={styles.imageContainer}>{isIntersecting && <AboutImages />}</Box>
    </Box>
  );
};

export default AboutSection;

const styles = stylesheet.create({
  root: {
    position: "relative",
    flexDirection: "column",
    overflow: "hidden",
    display: "grid",
    gap: (theme) => ({ lg: "20px", xl: "0px" }),
    gridTemplateRows: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 1fr) minmax(0, 1fr)",
    },
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

  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: (theme) => ({ xs: theme.spacing(4) }),
  },
  imageContainer: {
    maxWidth: "35vw",
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
    lineHeight: 2.2,
  },
  button: {},
});
