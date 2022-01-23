import { Box } from "@mui/material";
import React from "react";
import { stylesheet } from "../../../theme/stylesheet";

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  return <Box sx={styles.root}></Box>;
};

export default MainLayout;

const styles = stylesheet.create({
  root: {
    display: "flex",
  },
});
