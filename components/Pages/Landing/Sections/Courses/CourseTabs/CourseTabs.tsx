import { AppBar, Tab, Tabs, Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseTabsProps = {
  items: string[];
};

export default function CourseTabs({ items = [] }: CourseTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          return <Tab label={label} key={index} />;
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
  },

  hidden: {
    display: "none",
    visibility: "hidden",
  },
});
