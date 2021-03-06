/* eslint-disable @next/next/no-img-element */
import React from "react";
import stylesheet from "@workspace/stylesheet";
import { Box, Button, Typography } from "@mui/material";
import { TEST_ID } from "./constants";
import { AnimatedBurguerMenu } from "../../../shared/AnimatedBurguerButton/AnimatedBurguerButton";

export type HeaderItem = {
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
  burguerOpen: boolean;
  onBurguerButtonClick?: (...args: unknown[]) => void;
  onLogoClick?: (...args: unknown[]) => void;
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
  burguerOpen = false,
  onLogoClick = () => {},
  onBurguerButtonClick = () => {},
}: HeaderProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        <Box component="button" onClick={onLogoClick} sx={styles.logoContainer}>
          <img width={30} height={40} src={logo.src} alt={logo.alt} />
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
          <Box onClick={onBurguerButtonClick} sx={styles.burguerButton}>
            <AnimatedBurguerMenu open={burguerOpen} />
          </Box>

          <Button
            sx={styles.ctaButton}
            data-testid={TEST_ID.CALL_TO_ACTION}
            onClick={cta.onClick}
            variant="contained"
            color="primary"
            size="small"
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
    px: (theme) => ({ xs: theme.spacing(3), lg: theme.spacing(4) }),
    py: (theme) => ({ xs: theme.spacing(1.9) }),
    display: "flex",
    width: { xs: "100%" },
    boxShadow: (theme) => theme.shadows[3],
    bgcolor: (theme) => theme.palette.background.paper,
  },

  burguerButton: {
    display: { xs: "block", lg: "none" },
  },
  ctaButton: {
    display: { xs: "none", lg: "flex" },
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "flex-end", lg: "center" },
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
    bgcolor: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",

    "& > img": {
      objectFit: "contain",
      width: "auto",
      height: "2.5rem",
    },
  },
  logo: {
    objectFit: "contain",
    width: "auto",
    height: "2.5rem",
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
    fontWeight: 700,
    color: (theme) => theme.palette.primary.main,
  },
});
