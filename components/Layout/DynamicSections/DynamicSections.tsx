import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type DynamicSectionsProps = {};

export const DynamicSections = (props: DynamicSectionsProps) => {
  return <Box sx={styles.root}></Box>;
};

export default DynamicSections;

const styles = stylesheet.create({
  root: {},
});
