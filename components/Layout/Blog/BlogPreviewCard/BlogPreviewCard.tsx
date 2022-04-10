import { WatchLater } from "@mui/icons-material";
import { Box, Typography, Chip } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { webkitVerticalTruncate } from "../../../../mixins/webkitVerticalTruncate";
import React from "react";

export type BlogPreviewCardProps = {
  readingTime: string;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  tags: string[];
  onClick?: (...args: unknown[]) => void;
};

const BlogPreviewCard = ({
  img = {
    src: "https://via.placeholder.com/500",
    alt: "This is a placeholder, replace me",
  },
  readingTime = "10 min de leitura",
  tags = [],
  title = "Placeholder title",
  onClick,
}: BlogPreviewCardProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.timeContainer}>
        <Box component={WatchLater} sx={styles.timeIcon} />
        <Typography variant="subtitle2" sx={styles.timeLabel}>
          {readingTime}
        </Typography>
      </Box>

      <Box
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        sx={styles.pictureContainer}
      >
        <Box component="img" sx={styles.picture} src={img.src} alt={img.alt} />
      </Box>

      <Box sx={styles.titleContainer}>
        <Typography onClick={onClick} variant="h5" sx={styles.title}>
          {title}
        </Typography>
      </Box>

      <Box sx={styles.tagsContainer}>
        {tags.map((tag, index) => {
          return (
            <Chip
              sx={styles.tag}
              color="primary"
              clickable
              label={tag}
              key={index}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default BlogPreviewCard;

const styles = (function () {
  const HEIGHT = "18.45em";

  return stylesheet.create({
    root: {
      display: "flex",
      flexDirection: "column",
      fontSize: (theme) =>
        theme.fluidTypography({ maxFontSize: 16, minFontSize: 16 * 0.75 }),
      gap: (theme) => theme.spacing(2),
      width: "26.25em",
      height: "auto",
    },

    // Container
    timeContainer: {
      display: "flex",
      alignItems: "center",
      gap: (theme) => theme.spacing(1),
    },
    pictureContainer: {
      width: "100%",
      height: HEIGHT,
      cursor: "pointer",
    },
    titleContainer: {},
    tagsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 0.333fr))",
      gap: (theme) => theme.spacing(1),
    },

    // Item
    tag: {
      fontWeight: 700,
      fontSize: "0.75em",
    },
    picture: {
      objectFit: "cover",
      objectPosition: "center",
      width: "100%",
      height: "100%",
      borderRadius: (theme) => theme.shape.borderRadius,
    },
    title: {
      cursor: "pointer",
      color: (theme) => theme.palette.primary.main,
      fontWeight: 700,
      ...(webkitVerticalTruncate(3) as {}),
    },
    timeIcon: {
      color: (theme) => theme.palette.secondary.main,
    },
    timeLabel: {
      color: (theme) => theme.palette.grey[700],
    },
  });
})();
