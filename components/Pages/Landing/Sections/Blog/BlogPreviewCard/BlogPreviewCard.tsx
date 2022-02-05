import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type BlogPreviewCardProps = {};

const BlogPreviewCard = (props: BlogPreviewCardProps) => {
  return <Box sx={styles.root}></Box>;
};

export default BlogPreviewCard;

const styles = stylesheet.create({
  root: {},
});
