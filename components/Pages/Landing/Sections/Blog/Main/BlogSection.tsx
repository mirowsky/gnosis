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
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    width: "100%",
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
