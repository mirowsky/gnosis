import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import theme from "theme/theme";
import { DEFENSE_CARD_TEST_ID } from "./constants";

export type DefenseCardProps = {
  icon: React.FunctionComponent;
  label: string;
};

const DefenseCard = ({
  icon: Icon,
  label = "Placeholder label",
}: DefenseCardProps) => {
  return (
    <Box sx={styles.root}>
      <Box
        data-testid={DEFENSE_CARD_TEST_ID.ICON}
        component={Icon}
        sx={styles.icon}
      />
      <Typography variant="h2" component="caption">
        {label}
      </Typography>
    </Box>
  );
};

export default DefenseCard;

const styles = stylesheet.create({
  root: {
    display: "flex",
    borderRadius: (theme) => theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    background: theme.palette.background.paper,
    width: (theme) => ({ xs: theme.spacing(33), lg: theme.spacing(48) }),
    height: (theme) => ({ xs: theme.spacing(14), lg: theme.spacing(20) }),
    p: (theme) => theme.spacing(6),
    gap: (theme) => theme.spacing(5),
  },

  icon: {
    color: (theme) => theme.palette.primary.main,
  },
  label: {},
});
