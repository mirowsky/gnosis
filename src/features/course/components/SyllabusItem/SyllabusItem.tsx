import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { DEFAULT_SyllabusItem_TESTING_PROPS } from "./SyllabusItem.fixture";
import { AccessTime as AccessTimeIcon } from "@mui/icons-material";
import { ResponsiveFontSize } from "@workspace/types";

export type SyllabusItemProps = {
  hours: string;
  title: string;
  fontSize?: ResponsiveFontSize;
};

export const SyllabusItem = ({
  hours,
  title,
  fontSize = { xs: "1rem" },
}: SyllabusItemProps = DEFAULT_SyllabusItem_TESTING_PROPS) => {
  const styles = React.useMemo(() => _styles(fontSize), [fontSize]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.timeContainer}>
        <AccessTimeIcon sx={styles.icon} />
        <Typography sx={styles.timeLabel} variant="body1">
          {hours}
        </Typography>
      </Box>

      <Typography sx={styles.title} variant="body1">
        {title}
      </Typography>
    </Box>
  );
};

export default SyllabusItem;

const _styles = (fontSize: ResponsiveFontSize = { xs: "1rem" }) =>
  stylesheet.create({
    root: {
      fontSize: fontSize,
      bgcolor: "#F6F9FB",
      width: "100%",
      minHeight: "3.3125em",
      borderRadius: "55px",
      display: "grid",
      gridTemplateColumns: "minmax(0, 0.25fr) minmax(0, 0.75fr)",
      alignContent: "center",
      p: 0.5,
      py: 1.5,
    },

    timeContainer: {
      display: "flex",
      gap: (theme) => theme.spacing(1.5),
      justifyContent: "center",
      alignItems: "center",
    },

    icon: {
      color: (theme) => theme.palette.grey[700],
      fontSize: "1.5em",
    },
    timeLabel: {
      color: (theme) => theme.palette.grey[700],
      fontWeight: 500,
      fontSize: "1em",
    },

    title: {
      color: (theme) => theme.palette.grey[700],
      fontWeight: 500,
      fontSize: "1em",
      p: "0.5em",
    },
  });
