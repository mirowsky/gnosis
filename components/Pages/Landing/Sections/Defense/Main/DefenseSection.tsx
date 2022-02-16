import { Box, Container } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import DefenseCard, { DefenseCardProps } from "../DefenseCard/DefenseCard";
import { DEFENSE_SECTION_TEST_ID } from "./constants";

export type DefenseSectionProps = {
  items: DefenseCardProps[];
  sx?: ThemeStyles;
};

export const DefenseSection = ({ items = [], sx }: DefenseSectionProps) => {
  return (
    <Box
      data-testid={DEFENSE_SECTION_TEST_ID.GRID_CONTAINER}
      sx={{ ...styles.root, ...sx }}
    >
      {items.map((value, index) => {
        return (
          <DefenseCard key={index} {...value} fontSize={{ xs: "0.7rem" }} />
        );
      })}
    </Box>
  );
};

export default DefenseSection;

const styles = stylesheet.create({
  root: {
    height: "auto",
    width: "100%",
    display: "grid",
    placeContent: "center",
    placeItems: "center",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "repeat(3, minmax(0, 1fr))",
    },
    gridAutoFlow: "row",
    gap: (theme) => ({ xs: theme.spacing(6) }),
    rowGap: (theme) => ({ xs: theme.spacing(8), lg: theme.spacing(12) }),
  },

  item: {},
});
