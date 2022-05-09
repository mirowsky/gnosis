import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { ThemeStyles } from "@workspace/types";
import {
  SlideInV2,
  InputWithButton,
  InputWithButtonProps,
} from "@workspace/components/shared";
import { useIntersectionObserver } from "@workspace/hooks";

export type NewsLetterSectionProps = {
  img: {
    src: string;
    alt: string;
  };
  InputWithButtonProps: InputWithButtonProps;
  sectionTitle: string;
  sx?: ThemeStyles;
  id?: string;
};

export const NewsLetterSection = ({
  img = {
    alt: "This is a placeholder, change me",
    src: "https://via.placeholder.com",
  },
  InputWithButtonProps,
  sectionTitle = "Assine nossa Newsletter e fique por dentro das novidades.",
  sx,
  id,
}: NewsLetterSectionProps) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    rootMargin: "1000px 0px 0px 0px",
    once: true,
  });

  return (
    <Box ref={ref} id={id} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.container}>
        <Box sx={styles.pictureContainer}>
          {isIntersecting && (
            <Box
              sx={styles.picture}
              component="img"
              src={img.src}
              alt={img.alt}
            />
          )}
        </Box>

        <Box sx={styles.formContainer}>
          <SlideInV2
            animate="scroll"
            viewport={{ margin: "200px", once: true }}
          >
            <Typography variant="h3" sx={styles.formTitle}>
              {sectionTitle}
            </Typography>
          </SlideInV2>

          <SlideInV2
            animate="scroll"
            viewport={{ margin: "200px", once: true }}
          >
            <InputWithButton
              {...InputWithButtonProps}
              fontSize={{ xs: "0.75rem", lg: "1rem" }}
            />
          </SlideInV2>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetterSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    height: (theme) => ({ xs: theme.spacing(68.75), lg: theme.spacing(43) }),
    backgroundColor: (theme) => theme.palette.secondary.light,
    px: (theme) => ({ xs: theme.spacing(4) }),
  },
  container: {
    display: "grid",
    width: "100%",
    height: "100%",
    position: "relative",
    gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.5fr) minmax(0, 0.5fr)" },
    gridTemplateRows: { xs: "minmax(0, 0.5fr) minmax(0,  0.5fr)", lg: "1fr" },
  },

  pictureContainer: {
    height: { xs: "100%", lg: "125%" },
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    gridColumn: { lg: "1/2" },
    order: { xs: 1, lg: 0 },
    gridRow: { xs: "2/3", lg: "initial" },
  },

  picture: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
  },

  formContainer: {
    order: { xs: 0, lg: 1 },
    width: "100%",
    height: "100%",
    gridColumn: { lg: "2/3" },
    display: "flex",
    flexDirection: "column",
    maxWidth: { sm: "45ch" },
    textAlign: { sm: "center", lg: "left" },
    gap: (theme) => ({ xs: theme.spacing(5) }),
    justifyContent: { xs: "center" },
    justifySelf: { sm: "center", lg: "unset" },
  },

  formTitle: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },
});
