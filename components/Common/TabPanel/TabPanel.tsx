import { Box, BoxProps } from "@mui/material";
import { MotionBox } from "@workspace/components/utility";
import React from "react";

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: BoxProps<"div">;
};

export const TabPanel = ({
  index,
  value,
  children,
  sx,
  ...rest
}: TabPanelProps) => {
  return (
    <Box
      sx={sx}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <MotionBox
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          sx={{ p: 3 }}
        >
          {children}
        </MotionBox>
      )}
    </Box>
  );
};

export default TabPanel;
