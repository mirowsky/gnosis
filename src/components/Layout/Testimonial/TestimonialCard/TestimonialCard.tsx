import { Box, Typography } from "@mui/material";
import { webkitVerticalTruncate } from "src/mixins";
import stylesheet from "src/theme/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";

export type TestimonialCardProps = {
  testimonial: string;
  testimonialPicture: {
    src: string;
    alt: string;
  };
  testimonialName: string;
  testimonialExtra: string;
  sx?: ThemeStyles;
};

const TestimonialCard = ({
  testimonial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non  enim praesent elementum facilisis leo.",
  testimonialExtra = "SP/São Paulo",
  testimonialName = "Paulo Lima",
  testimonialPicture = {
    src: "https://via.placeholder.com/500",
    alt: "placeholder alt text, change me",
  },
  sx,
}: TestimonialCardProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.textContainer}>
        <Typography variant="h6" component="q">
          {testimonial}
        </Typography>
      </Box>

      <Box sx={styles.infoContainer}>
        <Box sx={styles.infoPictureContainer}>
          <Box
            component="img"
            sx={styles.infoPicture}
            src={testimonialPicture.src}
            alt={testimonialPicture.alt}
          />
        </Box>

        <Box sx={styles.infoInnerContainer}>
          <Typography sx={styles.infoName} variant="h5" component="p">
            {testimonialName}
          </Typography>

          <Typography sx={styles.infoExtra} variant="body1" component="p">
            {testimonialExtra}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;

const styles = stylesheet.create({
  root: {
    fontSize: "1rem",
    width: { xs: "17.85em", lg: "41.5em" },
    height: "auto",
    minHeight: { xs: "24.125em", lg: "18.75em" },
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: (theme) => ({ xs: theme.spacing(4) }),
    borderRadius: (theme) => theme.shape.borderRadius,
    gap: (theme) => ({ xs: theme.spacing(3) }),
  },

  textContainer: {
    width: "100%",
  },

  text: {
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 700,
  },

  infoContainer: {
    width: "100%",
    display: "flex",
    gap: (theme) => theme.spacing(3),
    alignItems: "flex-end",
  },

  infoInnerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(1),
  },

  infoPictureContainer: {
    width: { xs: "4em", lg: "5.375em" },
    height: { xs: "4em", lg: "5.375em" },
    borderRadius: "50%",
  },

  infoPicture: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  infoName: {
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 600,
  },
  infoExtra: {
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 400,
  },
});
