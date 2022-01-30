import {
  Box,
  Typography,
  IconProps,
  Icon as IconComponent,
} from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
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
        component={Icon as typeof IconComponent}
        sx={styles.icon}
      />
      <Typography sx={styles.label} variant="h5" component="caption">
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
    boxShadow: (theme) => theme.shadows[3],
    background: (theme) => theme.palette.background.paper,
    width: (theme) => ({ xs: theme.spacing(38), lg: theme.spacing(48) }),
    height: (theme) => ({ xs: theme.spacing(18), lg: theme.spacing(20) }),
    p: (theme) => ({ lg: theme.spacing(5), xs: theme.spacing(2) }),
    gap: (theme) => ({ lg: theme.spacing(3), xs: theme.spacing(1) }),
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
  },

  icon: {
    color: (theme) => theme.palette.primary.main,
    fontSize: (theme) => ({ xs: theme.spacing(6) }),
  },
  label: {
    fontWeight: "bold",
    color: (theme) => theme.palette.primary.main,
  },
});
