import { AppBar, Tab, Tabs, Theme } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type CourseTabsProps = {};

const CourseTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <AppBar position={"static"}>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
      >
        <Tab classes={tabItemStyles} label={"Data"} />
        <Tab classes={tabItemStyles} label={"Rule"} />
        <Tab classes={tabItemStyles} label={"Indexes"} />
        <Tab classes={tabItemStyles} label={"Usage"} />
      </Tabs>
    </AppBar>
  );
};

export default CourseTabs;

const styles = stylesheet.create({
  tabStyles: {},
  tabItemStyle: {},
});

export const tabsStyles = ({
  spacing,
  palette,
}: Pick<Theme, "spacing" | "palette">) => ({
  root: {
    marginLeft: spacing(1),
  },
  indicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: palette.common.white,
  },
});

export const tabItemStyles = ({
  breakpoints,
  spacing,
}: Pick<Theme, "breakpoints" | "spacing">) => ({
  root: {
    textTransform: "initial",
    margin: spacing(0, 2),
    minWidth: 0,
    [breakpoints.up("md")]: {
      minWidth: 0,
    },
  },
  wrapper: {
    fontWeight: "normal",
    letterSpacing: 0.5,
  },
});
