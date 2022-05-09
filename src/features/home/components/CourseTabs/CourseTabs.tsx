import { AppBar, Tab, Tabs, Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { noop } from "@workspace/utility";

export type CourseTabsProps = {
  items: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
};

export default function CourseTabs({
  items = [],
  handleChange = noop,
  value = 0,
}: CourseTabsProps) {
  return items.length > 0 ? (
    <Box component={AppBar} sx={styles.root}>
      <Tabs
        indicatorColor="secondary"
        textColor="inherit"
        value={value}
        onChange={handleChange}
        centered
      >
        {items.map((label, index) => {
          return <Tab sx={styles.tabItem} label={label} key={index} />;
        })}
      </Tabs>
    </Box>
  ) : (
    <Box sx={styles.hidden}></Box>
  );
}

const styles = stylesheet.create({
  root: {
    width: "100%",
    bgcolor: (theme) => theme.palette.primary.main,
    minHeight: "48px",
    color: (theme) => theme.palette.primary.contrastText,
    position: "relative",
    borderRadius: (theme) => ({ xs: 0, sm: theme.shape.borderRadius }),
  },

  hidden: {
    display: "none",
    visibility: "hidden",
  },

  tabItem: {
    fontSize: { xs: "0.6rem", sm: "0.75rem" },
  },
});
