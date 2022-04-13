import { Box, Skeleton } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import React from "react";

export type CourseCardSkeletonProps = {};

export const CourseCardSkeleton = (props: CourseCardSkeletonProps) => {
  return (
    <Box sx={styles.root}>
      <Skeleton animation="wave" sx={styles.imageSkeleton} />

      <Box sx={styles.infoContainer}>
        <Skeleton animation="wave" variant="text" sx={styles.titleSkeleton} />

        <Box sx={styles.tagsContainer}>
          <Box sx={styles.tag}>
            <Skeleton animation="wave" variant="circular" sx={styles.tagIcon} />
            <Skeleton animation="wave" variant="text" sx={styles.tagLabel} />
          </Box>
          <Box sx={styles.tag}>
            <Skeleton animation="wave" variant="circular" sx={styles.tagIcon} />
            <Skeleton animation="wave" variant="text" sx={styles.tagLabel} />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.actionsContainer}>
        <Skeleton animation="wave" variant="rectangular" sx={styles.button} />
        <Skeleton animation="wave" variant="rectangular" sx={styles.button} />
      </Box>
    </Box>
  );
};

export default CourseCardSkeleton;

const styles = stylesheet.create({
  root: {
    width: { xs: "20rem", lg: "22rem" },
    minHeight: { xs: "30.875rem" },
    height: { xs: "auto" },
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[4],
    borderRadius: (theme) => theme.shape.borderRadius,
    display: "grid",
    gridTemplateRows: {
      xs: "minmax(0, 0.44fr) minmax(0, 0.4fr) minmax(0, 0.16fr)",
    },
    gridTemplateColumns: "100%",
  },

  button: {
    width: "100%",
    height: "2.25rem",
    borderRadius: (theme) => theme.shape.borderRadius,
  },

  actionsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    px: 4,
    alignItems: "center",
    height: "100%",
  },

  tagLabel: {
    width: "40%",
    height: "1rem",
    transform: "none",
  },

  tagIcon: {
    height: "1.5rem",
    width: "1.5rem",
  },
  tag: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "1.5rem",
  },

  tagsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
  },

  infoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    px: (theme) => ({ xs: theme.spacing(4) }),
    pt: 4,
  },

  titleSkeleton: {
    width: "80%",
    height: "1rem",
    transform: "none",
  },

  imageSkeleton: {
    width: "100%",
    height: "100%",
    transform: "none",
    borderRadius: (theme) =>
      `${(theme.shape.borderRadius as number) * 4}px ${
        (theme.shape.borderRadius as number) * 4
      }px 0 0`,
  },

  infoSkeleton: {},
});
