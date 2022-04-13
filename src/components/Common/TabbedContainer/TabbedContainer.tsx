import { Box } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import React from "react";
import StyledTabs, { StyledTabsProps } from "../StyledTabs/StyledTabs";
import TabPanel, { TabPanelProps } from "../TabPanel/TabPanel";

export type TabbedContainerProps = {
  items: React.ReactNode[];
  TabProps: StyledTabsProps;
  tabPanelStyles?: TabPanelProps["sx"];
};

export const TabbedContainer = ({
  items = [],
  TabProps,
  tabPanelStyles,
}: TabbedContainerProps) => {
  return (
    <Box sx={styles.root}>
      <StyledTabs
        sx={{ borderRadius: { xs: "0px", lg: "12px 12px 0px 0px" } }}
        centered
        {...TabProps}
      />
      {items.map((item, index) => {
        return (
          <TabPanel
            sx={tabPanelStyles}
            index={index}
            key={index}
            value={TabProps.activeIndex}
          >
            {item}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabbedContainer;

const styles = stylesheet.create({
  root: {
    bgcolor: (theme) => theme.palette.background.paper,
    boxShadow: "0px 2px 10px 1px #D9E7FD;",
    borderRadius: "0px 0px 15px 15px",
  },
});
