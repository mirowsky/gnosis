import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseHeroSectionProps = {};

export const CourseHeroSection = (props: CourseHeroSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default CourseHeroSection;

const styles = stylesheet.create({
  root: {},
});
