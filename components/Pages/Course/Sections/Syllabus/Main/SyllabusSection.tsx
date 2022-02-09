import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type SyllabusSectionProps = {};

export const SyllabusSection = (props: SyllabusSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default SyllabusSection;

const styles = stylesheet.create({
  root: {},
});
