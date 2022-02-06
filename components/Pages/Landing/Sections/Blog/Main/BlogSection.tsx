import { Box, Button, ButtonProps, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import BlogPreviewCard, {
  BlogPreviewCardProps,
} from "../BlogPreviewCard/BlogPreviewCard";

export type BlogSectionProps = {
  ButtonProps?: ButtonProps;
  items: BlogPreviewCardProps[];
  sectionTitle: string;
};

const BlogSection = ({
  ButtonProps,
  items = [],
  sectionTitle = "Confira nossas últimas postagens",
}: BlogSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Typography color="primary" variant="h2" sx={styles.title}>
          {sectionTitle}
        </Typography>
      </Box>

      <Box sx={styles.grid}>
        {items.map((item, index) => {
          return <BlogPreviewCard {...item} key={index} />;
        })}
      </Box>

      <Box sx={styles.buttonContainer}>
        <Button {...ButtonProps} />
      </Box>
    </Box>
  );
};

export default BlogSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      sm: "minmax(0, 0.5fr) mimmax(0, 0.5fr)",
      lg: "minmax(0, 0.333fr) minmax(0, 0.333fr) minmax(0, 0.333fr)",
    },
    gridAutoFlow: "row",
  },

  titleContainer: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {},
  title: {
    fontWeight: 700,
  },
});
