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
        <Typography variant="h4" component="h2" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={styles.subtitle}>
          {subtitle}
        </Typography>
        <Box sx={styles.tagContainer}>
          <Chip
            size="small"
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
    fontSize: "1rem",
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.3fr) minmax(0, 0.7fr)",
    width: "fit-content",
    columnGap: "2.5em",
    bgcolor: (theme) => theme.palette.grey[100],
    padding: { xs: "1.25em", lg: "1.5em" },
    borderRadius: "12px",
  },

  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.175em",
  },
  icon: {
    width: "100%",
    height: "100%",
    color: (theme) => theme.palette.primary.main,
  },

  infoContainer: {
    display: "flex",
    gap: "0.15em",
    flexDirection: "column",
  },

  tagContainer: {
    mt: "0.5em",
  },

  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: (theme) => theme.palette.grey[700],
  },
});
