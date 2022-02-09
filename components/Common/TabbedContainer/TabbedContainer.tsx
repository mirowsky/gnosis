import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type TabbedContainerProps = {};

export const TabbedContainer = (props: TabbedContainerProps) => {
  return <Box sx={styles.root}></Box>;
};

export default TabbedContainer;

const styles = stylesheet.create({
  root: {},
});
