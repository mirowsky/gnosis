import { Box, Container } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import DefenseCard, { DefenseCardProps } from "../DefenseCard/DefenseCard";
import { DEFENSE_SECTION_TEST_ID } from "./constants";

export type DefenseSectionProps = {
  items: DefenseCardProps[];
};

const DefenseSection = ({ items = [] }: DefenseSectionProps) => {
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Box
        data-testid={DEFENSE_SECTION_TEST_ID.GRID_CONTAINER}
        sx={styles.grid}
      >
        {items.map((value, index) => {
          return <DefenseCard key={index} {...value} />;
        })}
      </Box>
    </Container>
  );
};

export default DefenseSection;

const styles = stylesheet.create({
  root: {
    height: "auto",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      sm: "minmax(0, 0.5fr) minmax(0, 0.5fr)",
      lg: "minmax(0, 0.333fr) minmax(0, 0.333fr) minmax(0, 0.333fr)",
    },
    gridAutoFlow: "row",
    width: "100%",
    height: "100%",
    gap: (theme) => ({ xs: theme.spacing(6) }),
  },

  item: {},
});
