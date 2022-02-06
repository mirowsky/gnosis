import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type FAQCardProps = {};

export const FAQCard = (props: FAQCardProps) => {
  return <Box sx={styles.root}></Box>;
};

export default FAQCard;

const styles = stylesheet.create({
  root: {},
});
