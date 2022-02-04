import { AppBar, Tab, Tabs, Box, BoxProps } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseTabsProps = {};

type CourseTabItemProps = {
  children: React.ReactNode;
  sx?: Pick<BoxProps, "sx">;
};

export default function CourseTabs() {
  //   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //     setValue(newValue);
  //   };

  return <Box sx={styles.root}></Box>;
}

const CourseTabItem = () => {};

const styles = stylesheet.create({
  root: {
    width: "100%",
    bgcolor: (theme) => theme.palette.primary.main,
    minHeight: "48px",
  },
});
