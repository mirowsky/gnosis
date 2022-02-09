import { AppBar, Box, Tab, Tabs } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type StyledTabsProps = {
  tabLabels: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  activeIndex: number;
};

export const StyledTabs = ({
  activeIndex,
  handleChange,
  tabLabels,
}: StyledTabsProps) => {
  return (
    <Box>
      <Box component={AppBar} sx={styles.root}>
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          value={activeIndex}
          onChange={handleChange}
          centered
        >
          {tabLabels.map((label, index) => {
            return <Tab sx={styles.tabItem} label={label} key={index} />;
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default StyledTabs;

const styles = stylesheet.create({
  root: {
    width: "100%",
    bgcolor: (theme) => theme.palette.primary.main,
    minHeight: "48px",
    color: (theme) => theme.palette.primary.contrastText,
    position: "relative",
    borderRadius: (theme) => ({ xs: 0, sm: theme.shape.borderRadius }),
  },

  tabItem: {
    fontSize: { xs: "0.6rem", sm: "0.75rem" },
  },
});
