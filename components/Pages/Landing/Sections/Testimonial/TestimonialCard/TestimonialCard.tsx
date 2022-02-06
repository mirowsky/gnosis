import { Box, Typography } from "@mui/material";
import { webkitVerticalTruncate } from "@workspace/jss-mixins";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type TestimonialCardProps = {
  testimonial: string;
  testimonialPicture: {
    src: string;
    alt: string;
  };
  testimonialName: string;
  testimonialExtra: string;
};

const TestimonialCard = ({
  testimonial,
  testimonialExtra,
  testimonialName,
  testimonialPicture,
}: TestimonialCardProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.textContainer}>
        <Typography variant="h5" component="q">
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
      </Box>

      <Box sx={styles.infoInnerContainer}>
        <Typography sx={styles.infoName} variant="h4" component="p">
          {testimonialName}
        </Typography>

        <Typography sx={styles.infoExtra} variant="body1" component="p">
          {testimonialExtra}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;

const styles = stylesheet.create({
  root: {
    fontSize: "1rem",
    width: { xs: "17.85em", lg: "41.5em" },
    height: { xs: "20.125em", lg: "18.75em" },
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: (theme) => ({ xs: theme.spacing(3) }),
  },

  textContainer: {
    width: "100%",
  },

  text: {
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 700,
    ...(webkitVerticalTruncate(4) as {}),
  },

  infoContainer: {
    width: "100%",
    display: "flex",
    gap: (theme) => theme.spacing(2),
  },

  infoInnerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(2),
  },

  infoPictureContainer: {
    width: { xs: "5.375em" },
    height: { xs: "5.375em" },
    borderRadius: "50%",
  },

  infoPicture: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
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
