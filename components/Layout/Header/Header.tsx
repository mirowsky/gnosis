import React from "react";
import stylesheet from "@workspace/stylesheet";
import { Box, Button, Typography } from "@mui/material";
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
          {logo?.label && <Typography variant="h5">{logo.label}</Typography>}
        </Box>

        <Box data-testid={TEST_ID.ITEM_CONTAINER} sx={styles.itemsContainer}>
          {items.map((value, index) => {
            return (
              <Typography
                onClick={value.onClick}
                key={index}
                variant="h5"
                color="primary"
              >
                {value.label}
              </Typography>
            );
          })}
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button
            data-testid={TEST_ID.CALL_TO_ACTION}
            onClick={cta.onClick}
            variant="contained"
            color="secondary"
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
    display: "flex",
    width: { xs: "100%" },
    height: (theme) => {
      return {
        xs: theme.spacing(10),
        lg: theme.spacing(14),
      };
    },
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  itemsContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },

  grid: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: { xs: "0.5fr 0.5fr", lg: "0.3fr 0.5fr 0.2fr" },
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
