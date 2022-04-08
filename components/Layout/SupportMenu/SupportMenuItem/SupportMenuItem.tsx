import { Box, Chip, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";

export type SupportMenuItemProps = {
  icon: React.FunctionComponent;
  title: string;
  subtitle: string;
  online?: boolean;
  onClick?: (...args: unknown[]) => void;
};

export const SupportMenuItem = ({
  icon: Icon,
  subtitle,
  title,
  onClick,
  online,
}: SupportMenuItemProps) => {
  return (
    <Box role="button" onClick={onClick} sx={styles.root}>
      <Box
        aria-labelledby="Descrição acessível"
        role="presentation"
        sx={styles.iconContainer}
      >
        <Box component={Icon} sx={styles.icon} />
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.subtitle}>{subtitle}</Typography>
        <Box sx={styles.tagContainer}>
          <Chip
            aria-label="Status do time de suporte"
            aria-labelledby="Status do time de suporte"
            color={online ? "success" : "error"}
            label={online ? "ONLINE" : "OFFLINE"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SupportMenuItem;

const styles = stylesheet.create({
  root: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.3fr) minmax(0, 0.7fr)",
  },

  iconContainer: {},
  icon: {},

  infoContainer: {},

  tagContainer: {},

  title: {},
  subtitle: {},
});
