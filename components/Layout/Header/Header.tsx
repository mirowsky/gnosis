import React from "react";
import stylesheet from "theme-stylesheet";
import { Box, Typography } from "@mui/material";
import { noop } from "@workspace/utility";

type HeaderItem = {
  label: string;
  onClick: (...args: unknown[]) => void;
};

export interface HeaderProps {
  logo: {
    src: string;
    alt?: string;
    label?: string;
  };
  items: HeaderItem[];
  cta: HeaderItem;
}

export const Header = ({
  cta = {
    label: "CTA",
    onClick: noop,
  },
  items = [],
  logo = {
    src: "https://via.placeholder.com/1500",
    alt: "Placeholder alt text",
    label: undefined,
  },
}: HeaderProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        <Box sx={styles.logoContainer}>
          <Box component="img" src={logo.src} alt={logo.alt} />
          {logo?.label && (
            <Typography data-testid="test" variant="h5">
              {logo.label}
            </Typography>
          )}
        </Box>

        <Box sx={styles.itemsContainer}></Box>
      </Box>
    </Box>
  );
};

export default Header;

const styles = stylesheet.create({
  root: {
    display: "flex",
  },

  itemsContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  grid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: { xs: "0.5fr 0.5fr", lg: "0.3fr 0.5 0.2fr" },
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  logo: {
    objectFit: "contain",
    width: "auto",
    height: "height",
  },
  logoLabel: {},
});
