import React from "react";
import stylesheet from "@workspace/stylesheet";
import { Box, Button, Typography, Link } from "@mui/material";
import { TEST_ID } from "./constants";

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
    onClick: () => {},
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
            <Box sx={styles.logoLabelContainer}>
              <Typography sx={styles.logoLabel} variant="h5">
                {logo.label}
              </Typography>
            </Box>
          )}
        </Box>

        <Box data-testid={TEST_ID.ITEM_CONTAINER} sx={styles.itemsContainer}>
          {items.map((value, index) => {
            return (
              <Button
                size="medium"
                onClick={value.onClick}
                key={index}
                variant="text"
                color="primary"
              >
                {value.label}
              </Button>
            );
          })}
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button
            data-testid={TEST_ID.CALL_TO_ACTION}
            onClick={cta.onClick}
            variant="contained"
            color="primary"
          >
            {cta.label}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const styles = stylesheet.create({
  root: {
    px: (theme) => ({ xs: theme.spacing(4) }),
    display: "flex",
    width: { xs: "100%" },
    height: (theme) => ({
      xs: theme.spacing(10),
      lg: theme.spacing(14),
    }),
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "center",
  },

  itemsContainer: {
    display: { xs: "none", lg: "flex" },
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: (theme) => ({ xs: theme.spacing(3) }),
  },

  grid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: {
      xs: "minmax(0, 0.5fr) minmax(0, 0.5fr)",
      lg: "minmax(0, 0.2fr) minmax(0, 0.6fr) minmax(0, 0.2fr)",
    },
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
  logoLabelContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    px: (theme) => {
      return {
        lg: theme.spacing(2),
      };
    },
  },
  logoLabel: {
    display: { xs: "none", lg: "block" },
  },
});
