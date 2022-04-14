import { Box, Chip, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";

export type SupportMenuItemProps = {
  icon: React.FunctionComponent;
  title: string;
  subtitle: string;
  online?: boolean;
  onClick?: (...args: unknown[]) => void;
  sx?: ThemeStyles;
  id?: string;
  label?: string;
};

export const SupportMenuItem = ({
  icon: Icon,
  subtitle,
  title,
  onClick,
  online,
  sx,
  id,
  label,
}: SupportMenuItemProps) => {
  return (
    <Box
      aria-labelledby={label}
      id={id}
      role="button"
      onClick={onClick}
      sx={{ ...styles.root, ...sx }}
    >
      <Box role="presentation" sx={styles.iconContainer}>
        <Box component={Icon} sx={styles.icon} />
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography variant="h6" component="h2" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={styles.subtitle}>
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
    userSelect: "none",
    cursor: "pointer",
    fontSize: "1rem",
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.3fr) minmax(0, 0.7fr)",
    width: "100%",
    columnGap: "1.75em",
    bgcolor: (theme) => theme.palette.grey[100],
    padding: { xs: "0.95em 1.25em" },
    borderRadius: "12px",
    "> *": {
      pointerEvents: "none",
    },
  },

  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.175em",
  },
  icon: {
    fontSize: "4em",
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
