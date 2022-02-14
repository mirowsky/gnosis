import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import OverviewItem, { OverviewItemProps } from "../OverviewItem/OverviewItem";
import { DEFAULT_OverviewSection_TESTING_PROPS } from "./OverviewSection.fixture";

export type OverviewSectionProps = {
  items: OverviewItemProps[];
  sx?: ThemeStyles;
};

export const OverviewSection = ({
  items,
  sx,
}: OverviewSectionProps = DEFAULT_OverviewSection_TESTING_PROPS) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.grid}>
        {items.map((item, index) => {
          return <OverviewItem {...item} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default OverviewSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
  },
  grid: {
    display: "grid",
    placeItems: "center",
    gap: (theme) => ({ xs: theme.spacing(8) }),
    width: "100%",
    gridTemplateColumns: {
      xs: "repeat(1, minmax(0, 1fr))",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(4, minmax(0, 1fr))",
    },
  },
});
