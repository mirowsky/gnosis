import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type DefenseCardProps = {
  icon: React.FunctionComponent;
  label: string;
};

const DefenseCard = (props: DefenseCardProps) => {
  return <Box sx={styles.root}></Box>;
};

export default DefenseCard;

const styles = stylesheet.create({
  root: {},
});
