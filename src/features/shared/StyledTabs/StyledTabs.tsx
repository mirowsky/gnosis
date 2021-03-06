import { AppBar, Box, BoxProps, Tab, Tabs } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type StyledTabsProps = {
  tabLabels: string[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  activeIndex: number;
  sx?: Pick<BoxProps, "sx">["sx"];
  centered?: boolean;
};

export const StyledTabs = ({
  activeIndex,
  handleChange,
  tabLabels,
  sx,
  centered,
}: StyledTabsProps) => {
  return (
    <Box>
      <Box component={AppBar} sx={{ ...styles.root, ...sx }}>
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          value={activeIndex}
          onChange={handleChange}
          centered={centered}
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
    fontSize: "1rem",
    width: "100%",
    bgcolor: (theme) => theme.palette.primary.main,
    minHeight: "48px",
    color: (theme) => theme.palette.primary.contrastText,
    position: "relative",
    borderRadius: (theme) => ({ xs: 0, sm: theme.shape.borderRadius }),
  },

  tabItem: {
    fontSize: { xs: "0.6em", sm: "0.75em" },
  },
});
