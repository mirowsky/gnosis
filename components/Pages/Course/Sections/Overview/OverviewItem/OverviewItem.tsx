import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { DEFAULT_OverviewItem_TESTING_PROPS } from "./OverviewItem.fixture";

export type OverviewItemProps<TType extends {} = {}> = {
  icon: React.ComponentType<TType>;
  caption: string;
  title: string;
};

export const OverviewItem = ({
  caption,
  icon: Icon,
  title,
}: OverviewItemProps = DEFAULT_OverviewItem_TESTING_PROPS) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconContainer}>
        <Box component={Icon} sx={styles.icon} />
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography variant="h5" component="p" sx={styles.caption}>
          {caption}
        </Typography>

        <Typography variant="h4" component="h3" sx={styles.title}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default OverviewItem;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: (theme) => theme.spacing(1.5),
    width: "fit-content",
  },
  iconContainer: {
    display: "flex",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: (theme) => theme.spacing(1.5),
    width: "min-content",
  },

  icon: {
    color: (theme) => theme.palette.secondary.main,
    fontSize: { xs: "3.25em" },
  },
  title: {
    maxWidth: "13ch",
    fontWeight: "bold",
  },
  caption: {
    color: (theme) => theme.palette.grey[600],
    fontWeight: 600,
  },
});
