import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type NewsLetterSectionProps = {
  img: {
    src: string;
    alt: string;
  };
};

const NewsLetterSection = ({
  img = {
    alt: "This is a placeholder, change me",
    src: "https://via.placeholder.com",
  },
}: NewsLetterSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default NewsLetterSection;

const styles = stylesheet.create({
  root: {},
});
