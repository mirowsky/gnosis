import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type DefenseSectionProps = {};

const DefenseSection = (props: DefenseSectionProps) => {
  return <Box sx={styles.root}></Box>;
};

export default DefenseSection;

const styles = stylesheet.create({
  root: {},
});
