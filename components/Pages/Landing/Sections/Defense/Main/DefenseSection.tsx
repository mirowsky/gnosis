import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import { Variants } from "framer-motion";
import React from "react";
import DefenseCard, { DefenseCardProps } from "../DefenseCard/DefenseCard";
import { DEFENSE_SECTION_TEST_ID } from "./constants";

export type DefenseSectionProps = {
  items: DefenseCardProps[];
  sx?: ThemeStyles;
  id?: string;
};

export const DefenseSection = ({ items = [], sx, id }: DefenseSectionProps) => {
  return (
    <Box
      id={id}
      data-testid={DEFENSE_SECTION_TEST_ID.GRID_CONTAINER}
      sx={{ ...styles.root, ...sx }}
    >
      {items.map((value, index) => {
        return (
          <DefenseCard {...value} key={index} fontSize={{ xs: "0.7rem" }} />
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

const VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
