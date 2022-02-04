import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type NewsLetterSectionProps = {};

const NewsLetterSection = (props: NewsLetterSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default NewsLetterSection;

const styles = stylesheet.create({
  root: {},
});
