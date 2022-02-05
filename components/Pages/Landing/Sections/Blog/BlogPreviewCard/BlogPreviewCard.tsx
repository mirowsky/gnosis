import { WatchLater } from "@mui/icons-material";
import { Box, Typography, Chip } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type BlogPreviewCardProps = {
  readingTime: string;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  tags: string[];
};

const BlogPreviewCard = ({
  img = {
    src: "https://via.placeholder.com/500",
    alt: "This is a placeholder, replace me",
  },
  readingTime = "10 min de leitura",
  tags = [],
  title = "Placeholder title",
}: BlogPreviewCardProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.timeContainer}>
        <Box component={WatchLater} sx={styles.timeIcon} />
        <Typography variant="subtitle2" sx={styles.timeLabel}>
          {readingTime}
        </Typography>
      </Box>

      <Box sx={styles.pictureContainer}>
        <Box component="img" sx={styles.picture} src={img.src} alt={img.alt} />
      </Box>

      <Box sx={styles.titleContainer}>
        <Typography variant="h5" sx={styles.title}>
          {title}
        </Typography>
      </Box>

      <Box sx={styles.tagsContainer}>
        {tags.map((tag, index) => {
          return <Chip clickable label={tag} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default BlogPreviewCard;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: (theme) =>
      theme.fluidTypography({ maxFontSize: 16, minFontSize: 16 * 0.75 }),
    gap: (theme) => theme.spacing(2),
  },

  // Container
  timeContainer: {
    display: "flex",
    alignItems: "center",
    gap: (theme) => theme.spacing(1),
  },
  pictureContainer: {
    width: "26.25em",
    height: "18.45em",
  },
  titleContainer: {},
  tagsContainer: {},

  // Item
  tag: {
    bgcolor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 700,
  },
  picture: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    borderRadius: (theme) => theme.shape.borderRadius,
  },
  title: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },
  timeIcon: {
    color: (theme) => theme.palette.secondary.main,
  },
  timeLabel: {
    color: (theme) => theme.palette.grey[700],
  },
});
