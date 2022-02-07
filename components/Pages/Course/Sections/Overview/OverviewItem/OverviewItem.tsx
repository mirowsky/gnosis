import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type OverviewItemProps = {};

export const OverviewItem = (props: OverviewItemProps) => {
  return <Box sx={styles.root}></Box>;
};

export default OverviewItem;

const styles = stylesheet.create({
  root: {},
});
