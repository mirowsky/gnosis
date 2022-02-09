import { AppBar, Box, Tab, Tabs } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { DEFAULT_SyllabusTabs_TESTING_PROPS } from "./SyllabusTabs.fixture";

type TabItem = {
  content: React.ReactNode;
  label: string;
};

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ index, value, children, ...rest }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export type SyllabusTabsProps = {
  items: TabItem[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  activeIndex: number;
};

export const SyllabusTabs = ({
  items,
  activeIndex,
  handleChange,
}: SyllabusTabsProps = DEFAULT_SyllabusTabs_TESTING_PROPS) => {
  return (
    <Box component={AppBar} sx={styles.root}>
      <Tabs
        indicatorColor="secondary"
        textColor="inherit"
        value={activeIndex}
        onChange={handleChange}
        centered
      >
        {items.map((label, index) => {
          return <Tab sx={styles.tabItem} label={label} key={index} />;
        })}
      </Tabs>
    </Box>
  );
};

export default SyllabusTabs;

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
