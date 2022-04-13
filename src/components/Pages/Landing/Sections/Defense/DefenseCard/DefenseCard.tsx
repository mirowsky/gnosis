import { Box, Typography, Icon as IconComponent } from "@mui/material";
import stylesheet from "src/theme/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import React from "react";
import { DEFENSE_CARD_TEST_ID } from "./constants";

export type DefenseCardProps = {
  icon: React.FunctionComponent;
  label: string;
  fontSize?: ResponsiveFontSize;
};

const DefenseCard = ({
  icon: Icon,
  label = "Placeholder label",
  fontSize = { xs: "1rem" },
}: DefenseCardProps) => {
  const styles = React.useMemo(() => _styles(fontSize), [fontSize]);

  return (
    <Box sx={styles.root}>
      <Box
        data-testid={DEFENSE_CARD_TEST_ID.ICON}
        component={Icon as typeof IconComponent}
        sx={styles.icon}
      />
      <Typography sx={styles.label} variant="h5" component="p">
        {label}
      </Typography>
    </Box>
  );
};

export default DefenseCard;

const _styles = (fontSize: ResponsiveFontSize = { xs: "1rem" }) =>
  stylesheet.create({
    root: {
      display: "grid",
      fontSize: fontSize,
      borderRadius: (theme) => theme.shape.borderRadius,
      boxShadow: (theme) => theme.shadows[2],
      background: (theme) => theme.palette.background.paper,
      height: "auto",
      width: { xs: "25em", lg: "30em" },
      minHeight: { xs: "9em", lg: "10em" },
      p: { xs: "2.5em", lg: "2em" },
      gap: { xs: "2em", lg: "2em" },
      overflow: "hidden",
      placeItems: "center center",
      gridTemplateColumns: "minmax(0, 0.2fr) minmax(0, 0.8fr)",
    },

    icon: {
      color: (theme) => theme.palette.primary.main,
      fontSize: { xs: "3em" },
    },
    label: {
      fontWeight: "bold",
      color: (theme) => theme.palette.primary.main,
      fontSize: { xs: "1rem" },
      maxWidth: { xs: "15ch" },
    },
  });
