import { Box } from "@mui/material";
import React from "react";

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export const TabPanel = ({
  index,
  value,
  children,
  ...rest
}: TabPanelProps) => {
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

export default TabPanel;
