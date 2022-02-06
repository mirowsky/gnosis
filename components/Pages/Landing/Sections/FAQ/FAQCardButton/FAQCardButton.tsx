import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type FAQCardButtonProps = {};

export const FAQCardButton = (props: FAQCardButtonProps) => {
  return <Box sx={styles.root}></Box>;
};

export default FAQCardButton;

const styles = stylesheet.create({
  root: {},
});
