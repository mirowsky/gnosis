import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseSectionProps = {};

const CourseSection = (props: CourseSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default CourseSection;

const styles = stylesheet.create({
  root: {},
});
